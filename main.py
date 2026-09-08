"""
AC MART Web Application & Store - Local Development & Test Server
=================================================================
Run this script to launch and test the AC MART web application locally:
    python main.py

Features:
- Zero external dependencies (Pure Python 3 standard library).
- Auto-detects an open port starting from 3000.
- Displays both Localhost and Local Network (LAN/Wi-Fi) URLs for mobile testing.
- Auto-opens the default browser to test immediately.
- Disables aggressive browser caching for instantaneous code refresh during testing.
- Clean shutdown on Ctrl+C.
"""

import sys
import os
import socket
import argparse
import webbrowser
import threading
from pathlib import Path
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

# Directory containing this script (project root)
APP_DIR = Path(__file__).resolve().parent

# Custom MIME types to ensure proper content delivery
MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".mjs": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".zip": "application/zip",
}


class ACMartHTTPRequestHandler(SimpleHTTPRequestHandler):
    """Custom request handler with cache-busting headers and MIME type mapping."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(APP_DIR), **kwargs)

    def guess_type(self, path):
        ext = Path(path).suffix.lower()
        if ext in MIME_TYPES:
            return MIME_TYPES[ext]
        return super().guess_type(path)

    def end_headers(self):
        # Prevent aggressive browser caching during testing
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def do_GET(self):
        # Clean path from query params/hash
        req_path = self.path.split("?")[0].split("#")[0].lstrip("/")
        target = APP_DIR / req_path if req_path else APP_DIR / "index.html"

        # Fallback to index.html for Single Page App routing if file does not exist
        if not target.exists() and not Path(self.path).suffix:
            self.path = "/index.html"

        return super().do_GET()

    def log_message(self, format, *args):
        # Pretty request logging: GET /styles.css -> 200 OK
        status_code = args[1] if len(args) > 1 else "-"
        msg = f"  [{self.log_date_time_string()}] {args[0]} -> Status {status_code}"
        print(msg)


def get_local_ip() -> str:
    """Detect LAN IP address so user can test on phone/tablet over local Wi-Fi."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"


def find_available_port(start_port: int = 3000, max_attempts: int = 20) -> int:
    """Find an available TCP port starting from start_port."""
    for port in range(start_port, start_port + max_attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(0.5)
            try:
                s.bind(("", port))
                return port
            except OSError:
                continue
    return start_port


def main():
    parser = argparse.ArgumentParser(description="AC MART Local Test Server")
    parser.add_argument(
        "--port",
        type=int,
        default=3000,
        help="Port to bind server (default: 3000, automatically scans if busy)"
    )
    parser.add_argument(
        "--no-browser",
        action="store_true",
        help="Do not automatically open the web browser"
    )
    parser.add_argument(
        "--host",
        type=str,
        default="0.0.0.0",
        help="Host address to bind (default: 0.0.0.0 for LAN and localhost access)"
    )
    args = parser.parse_args()

    port = find_available_port(args.port)
    local_ip = get_local_ip()

    server_address = (args.host, port)
    httpd = ThreadingHTTPServer(server_address, ACMartHTTPRequestHandler)

    local_url = f"http://localhost:{port}"
    lan_url = f"http://{local_ip}:{port}"

    print("=" * 68)
    print("  🚀 AC MART - LOCAL DEVELOPMENT & TEST SERVER")
    print("=" * 68)
    print(f"  📁 Serving Directory : {APP_DIR}")
    print(f"  💻 Local Test URL    : \033[1;36m{local_url}\033[0m")
    if local_ip != "127.0.0.1":
        print(f"  📱 Mobile / LAN URL  : \033[1;32m{lan_url}\033[0m (Same Wi-Fi)")
    print("=" * 68)
    print("  Press [Ctrl + C] in this terminal to stop the server at any time.")
    print("=" * 68)
    print("  Live Activity Log:")

    if not args.no_browser:
        def open_browser():
            import time
            time.sleep(0.5)
            try:
                webbrowser.open(local_url)
            except Exception as e:
                print(f"  [Notice] Could not auto-launch browser: {e}")

        threading.Thread(target=open_browser, daemon=True).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n  🛑 Stopping AC MART server gracefully...")
    finally:
        httpd.server_close()
        print("  ✓ Server stopped successfully. Goodbye!\n")


if __name__ == "__main__":
    main()
