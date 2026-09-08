/**
 * GoShope & AC MART - Comprehensive Platform Logic
 * Handles Marketplace, Interactive Demo, Pricing, Checkout (ABA KHQR),
 * and Store Owner Panel (Dashboard, Products, Categories, Orders, Customers, Coupons, Settings, Billing)
 */

// --- BILINGUAL TRANSLATION DICTIONARY ---
const translations = {
  en: {
    badge_apps: "AC MART",
    nav_marketplace: "Browse Applications",
    nav_features: "Features",
    nav_how_it_works: "How to Buy",
    nav_demo: "Screenshots",
    nav_pricing: "App Licenses",
    nav_tutorial: "Tutorial",
    nav_sign_in: "Owner PIN",
    nav_seller_panel: "Store Owner Panel",
    cta_owner_panel: "🛍️ Browse Apps",
    announcement_text: "🚀 AC MART Official: Ready-Made Apps • Turnkey Rental • Custom Development!",
    marquee_promo: "Special Offer Available",
    marquee_sale: "Ready-Made Software & Web Apps For Sale",
    marquee_rent: "Cloud Systems & POS Monthly Rental",
    marquee_custom: "Custom Websites, POS & Mobile Apps Development",
    marquee_code: "100% Clean Commercial Source Code",
    marquee_support: "Direct Telegram Consultation: @Acmart6666",
    marquee_call: "Call Us: 016 905 354",
    hero_title_1: "Software For Sale, Rental &",
    hero_title_2: "Custom Apps & POS Development",
    hero_subtitle: "AC MART is your complete technology partner: Purchase commercial source code, rent turnkey cloud software, or order custom-tailored websites, POS systems, ERP management, and mobile apps for desktop and phones with instant ABA KHQR payment.",
    service_badge_sale: "🏷️ Ready-Made Software For Sale",
    service_badge_rent: "🔄 Cloud Systems & Software Rental",
    service_badge_custom: "🛠️ Custom Web, POS & Mobile App Development",
    btn_get_started_free: "Browse App Catalog",
    btn_explore_demo: "View Screenshots",
    trust_khqr: "Instant ABA KHQR & Card",
    trust_source: "100% Clean Source Code",
    trust_setup: "Direct Telegram Support",
    trust_updates: "Desktop, Web & Mobile Apps",
    
    title_marketplace: "AC MART Official Web Applications",
    subtitle_marketplace: "Browse top-rated e-commerce platforms, POS systems, SaaS software, and web apps with instant digital delivery.",
    cat_all: "All Applications",
    cat_ecommerce: "E-Commerce & Stores",
    cat_saas: "SaaS & Boilerplates",
    cat_pos: "POS & Retail",
    cat_management: "Management & CRM",
    cat_delivery: "Food & Delivery",
    
    badge_why_goshope: "Why Choose AC MART Apps",
    title_features: "Built For High Performance & Easy Deployment",
    subtitle_features: "Every web app is crafted with clean modern code, integrated with local Cambodian payment systems, and ready to deploy.",
    feat1_title: "Instant ABA KHQR & Bakong",
    feat1_desc: "Pre-integrated dynamic QR codes so your customers can scan and pay with any Cambodian banking app in seconds.",
    feat2_title: "Telegram Order Alerts",
    feat2_desc: "Pre-configured Telegram bot dispatching instant sound notifications for every new customer sale.",
    feat3_title: "Delivery & Logistics Ready",
    feat3_desc: "Built-in support for J&T Express, Virak Buntham (VET), and local branch pickup tracking.",
    feat4_title: "1-Minute Setup & Deployment",
    feat4_desc: "Clean setup instructions and environment variables to launch your application on Vercel, VPS, or cloud hosting immediately.",
    feat5_title: "Automated PDF Receipts",
    feat5_desc: "Professional digital tax invoices and receipt generation for all completed customer orders.",
    feat6_title: "Live Analytics Dashboard",
    feat6_desc: "Built-in administrative metrics tracking revenue, customer orders, and product sales in real-time.",
    
    badge_how_it_works: "Simple 3-Step Process",
    title_how_it_works: "How to Buy & Launch in 3 Steps",
    subtitle_how_it_works: "Choose your favorite app, test it live in your browser, and receive the verified source code instantly.",
    step1_guide_title: "1. Choose an App & Test Live Sandbox",
    step1_guide_desc: "Browse our catalog and launch the interactive device simulator to test all buyer features.",
    step2_guide_title: "2. Scan ABA KHQR to Checkout",
    step2_guide_desc: "Scan the dynamic KHQR code with ABA Mobile, Bakong, or any bank app with instant payment verification.",
    step3_guide_title: "3. Receive Source Code & License Key",
    step3_guide_desc: "Get instant digital delivery with your GitHub repository invite, full documentation, and license key.",
    
    badge_live_sandbox: "Live Simulator",
    title_live_demo: "Test Drive Our Interactive Web Apps",
    subtitle_live_demo: "Experience how customers browse, add to cart, and checkout with ABA KHQR in real-time.",
    
    badge_pricing: "Simple Transparent Pricing",
    title_pricing: "Choose Your Application License",
    subtitle_pricing: "Purchase single app licenses, commercial agency rights, or full clean developer source code.",
    plan_free_badge: "STANDARD LICENSE",
    plan_free_name: "Single App License",
    plan_free_desc: "Full ready-to-deploy web application for your personal or business store.",
    ribbon_popular: "MOST POPULAR",
    plan_pro_name: "Commercial License",
    plan_pro_desc: "Ideal for agency developers deploying stores for their retail clients.",
    plan_source_name: "Full Source Code",
    plan_source_desc: "For developers and companies wanting full source ownership and resell rights.",
    
    badge_tutorial: "Video & Guide",
    title_tutorial: "Learn How to Connect ABA KHQR & Launch",
    subtitle_tutorial: "Watch our quick step-by-step tutorial to connect your payment method and configure delivery.",
    
    sidebar_dashboard: "Dashboard",
    sidebar_products: "Products / Apps",
    sidebar_categories: "Categories",
    sidebar_orders: "Orders",
    sidebar_customers: "Customers",
    sidebar_coupons: "Discount Coupons",
    sidebar_settings: "Store Settings",
    sidebar_billing: "Billing",
    badge_tier: "FREE TIER ACCOUNT",
    panel_title: "Store Owner Panel",
    btn_view_marketplace: "View Marketplace",
    dash_title: "Store Dashboard",
    dash_subtitle: "Overview metrics for AC STORE",
    metric_revenue: "Total Revenue",
    metric_orders: "Total Orders",
    metric_active_apps: "Active Products",
    metric_khqr_payments: "KHQR Transactions",
    checklist_title: "Store Setup & Launch Checklist",
    checklist_desc: "Complete these essential setup steps before launching your store",
    step1_title: "Add your first product",
    step1_desc: "Add products with images and prices so customers can order",
    step2_title: "Set up payment method",
    step2_desc: "Enable Cash on Delivery (COD) or connect ABA KHQR",
    step3_title: "Set up delivery",
    step3_desc: "Offer local delivery, pickup, J&T Express, or VET options",
    step4_title: "Preview App Screenshots",
    step4_desc: "Inspect detailed high-definition screen captures for each software product",
    btn_add: "Add",
    btn_configure: "Configure",
    btn_setup: "Set up",
    btn_test_store: "View Screenshots",
    table_recent_orders: "Recent App Sales & Orders",
    table_recent_orders_desc: "Real-time buyer purchases, license keys and KHQR settlements",
    btn_new_app: "Add New App",
    th_order_id: "Order ID",
    th_customer: "Customer",
    th_app: "Purchased App",
    th_license: "License Tier",
    th_amount: "Amount",
    th_payment: "Payment",
    th_status: "Status",
    th_action: "Actions",
    modal_checkout_title: "Instant App Checkout",
    label_customer_name: "Your Name / Company",
    label_customer_email: "Delivery Email (For License Key & GitHub Repo Access)",
    btn_cancel: "Cancel",
    btn_simulate_paid: "Simulate KHQR Payment Success",
    modal_add_app_title: "Add New Web Application",
    label_app_name: "Application Title",
    label_app_category: "Category",
    label_app_price: "Price (USD)",
    label_app_orig_price: "Original / Strikethrough Price",
    label_app_desc: "Short Description",
    label_app_tech: "Tech Stack (comma separated)",
    label_app_preview: "Preview Image URL / SVG Template",
    btn_save_app: "Save & Publish App",
    modal_settings_title: "Payment & Store Settings",
    label_store_name: "Store Display Name",
    btn_save_changes: "Save Changes",
    btn_live_demo: "View Details & Screens",
    btn_buy_now: "Buy Now (ABA KHQR)",
    nav_telegram_support: "💬 Telegram Support",
    nav_telegram: "Telegram",
    nav_owner_pin: "Owner",
    mob_nav_menu: "Navigation Menu",
    mob_store_mgmt: "Store Management",
    floating_telegram: "Chat Telegram",
    chat_telegram: "Chat on Telegram",
    footer_desc: "Official web applications and SaaS software store by AC MART. Tested production apps with instant ABA KHQR checkout and direct Telegram developer support.",
    footer_marketplace: "Marketplace",
    footer_browse_all: "Browse All Applications",
    footer_direct_payment: "Direct Payment",
    footer_aba_acc: "ABA Account: 000 138 112",
    footer_aba_name: "Account Name: BOREY KEM",
    footer_bakong: "NBC Bakong Supported",
    footer_store_admin: "Store Administration",
    footer_owner_portal: "Store Owner Portal (PIN)",
    footer_all_rights: "All rights reserved.",
    footer_made_in_kh: "🇰🇭 Proudly Made for Cambodia",
    footer_instant_delivery: "⚡ Instant Digital Delivery",
    dash_products_title: "Products & Applications Catalog",
    dash_products_sub: "Manage, edit prices, update inventory and publish new items to your storefront",
    btn_add_product: "+ Add New Product",
    th_product: "Product",
    th_category: "Category",
    th_price: "Price",
    th_tech_stack: "Tech Stack",
    th_sales: "Sales",
    dash_categories_title: "Store Categories",
    dash_categories_sub: "Organize your store into easy-to-browse product collections",
    btn_create_category: "+ Create Category",
    dash_orders_title: "Customer Orders Management",
    dash_orders_sub: "Track all customer orders, filter by status, and print receipts",
    filter_all_orders: "All Orders",
    filter_paid: "Paid",
    filter_pending: "Pending",
    th_date_time: "Date & Time",
    th_item_purchased: "Item Purchased",
    th_total: "Total",
    th_payment_method: "Payment Method",
    dash_customers_title: "Customer Directory",
    dash_customers_sub: "View customer purchase history, total lifetime spent, and contact details",
    th_cust_name: "Customer Name",
    th_cust_contact: "Email / Phone",
    th_cust_orders: "Total Orders",
    th_cust_spent: "Lifetime Spent",
    th_cust_latest: "Latest Purchase",
    th_cust_status: "Status",
    dash_settings_title: "Store & Payment Settings",
    dash_settings_sub: "Configure your store branding, ABA KHQR account, and delivery options",
    btn_save_all_settings: "Save Settings",
    settings_logo_title: "🖼️ Store Brand Logo",
    settings_logo_sub: "Upload your custom store logo image (.PNG, .JPG, .SVG, .WEBP). It will replace the text and appear in your website navbar, mobile drawer, and receipts.",
    btn_upload_logo: "Upload Logo Image",
    btn_reset_logo: "Reset to Default (AC MART)",
    settings_logo_hint: "Recommended: Transparent PNG or SVG (height approx. 40px–80px). Saved in browser.",
    settings_profile_title: "🏪 Store Profile",
    label_store_url: "Live Store Website URL",
    btn_copy: "📋 Copy",
    label_contact_phone: "Contact Phone & Telegram",
    label_pin_hint: "Required to unlock owner panel",
    btn_change_pw: "Change Password",
    settings_payment_title: "🇰🇭 Payment & Notification Settings",
    label_aba_account: "ABA / Bank Account or Phone Number",
    label_bakong_id: "Bakong Account ID",
    label_optional: "(Optional - Can leave empty)",
    label_telegram_token: "Telegram Order Alert Bot Token",
    settings_delivery_title: "⚡ Automated Digital Delivery & License Dispatch",
    deliv_gh_title: "✓ Instant GitHub Repo Invitation",
    deliv_gh_desc: "Automated collaborator access",
    deliv_zip_title: "✓ Source Code .ZIP Direct Download",
    deliv_zip_desc: "Instant download link on checkout",
    deliv_key_title: "✓ Automated License Key Delivery",
    deliv_key_desc: "Unique cryptographic license key",
    deliv_tax_title: "✓ Digital PDF Tax Receipt to Email",
    deliv_tax_desc: "Official customer receipt sent",
    deliv_aba_verif: "✓ ABA KHQR & Bakong Instant Verification",
    deliv_key_pdf: "✓ Automated License Key & PDF Tax Receipt Delivery",
    admin_auth_title: "Store Owner Access Only",
    admin_auth_desc: "This dashboard is restricted exclusively to the store owner to publish apps, manage prices, and track ABA KHQR revenue.",
    label_admin_pin: "Owner Secret PIN / Password",
    admin_pin_error: "❌ Incorrect PIN. Access denied!",
    btn_unlock_panel: "Unlock Owner Panel",
    btn_lock_panel: "Lock / Exit"
  },
  kh: {
    badge_apps: "AC MART",
    nav_marketplace: "កាតាឡុកកម្មវិធីទាំងអស់",
    nav_features: "លក្ខណៈពិសេស",
    nav_how_it_works: "របៀបដំណើរការ",
    nav_demo: "រូបភាពលម្អិត",
    nav_pricing: "កញ្ចប់តម្លៃ",
    nav_tutorial: "វីដេអូបង្រៀន",
    nav_sign_in: "Owner PIN",
    nav_seller_panel: "ផ្ទាំងគ្រប់គ្រងម្ចាស់ហាង",
    cta_owner_panel: "🛍️ មើលបញ្ជីកម្មវិធី",
    announcement_text: "🚀 ហាងផ្លូវការ AC MART៖ មានលក់ • មានជួល • ទទួលកុម្ម៉ង់ធ្វើគេហទំព័រ, POS & App!",
    marquee_promo: "ប្រូម៉ូសិនពិសេសប្រចាំខែ",
    marquee_sale: "មានលក់កម្មវិធីគេហទំព័រ & ប្រព័ន្ធគ្រប់គ្រងរួចជាស្រេច",
    marquee_rent: "មានជួលប្រព័ន្ធ Cloud & POS ប្រើប្រាស់ប្រចាំខែ",
    marquee_custom: "ទទួលកុម្ម៉ង់បង្កើតគេហទំព័រ POS & App ទូរស័ព្ទ",
    marquee_code: "កូដដើមស្អាត 100% Clean Source Code",
    marquee_support: "ប្រឹក្សាយោបល់ផ្ទាល់តាម Telegram: @Acmart6666",
    marquee_call: "ទំនាក់ទំនង៖ 016 905 354",
    hero_title_1: "មានលក់ • មានជួល & ទទួលកុម្ម៉ង់ធ្វើ",
    hero_title_2: "គេហទំព័រ, ប្រព័ន្ធ POS & កម្មវិធីទូរស័ព្ទដៃ",
    hero_subtitle: "AC MART ផ្តល់ជូនដំណោះស្រាយបច្ចេកវិទ្យាពេញលេញ៖ ទិញកូដកម្មវិធីដើមរួចជាស្រេច (Source Code), ជួលប្រព័ន្ធប្រើប្រាស់ប្រចាំខែ/ឆ្នាំ ឬកុម្ម៉ង់បង្កើតគេហទំព័រ ប្រព័ន្ធ POS ប្រព័ន្ធគ្រប់គ្រង និងកម្មវិធីកុំព្យូទ័រ/ទូរស័ព្ទដៃតាមតម្រូវការជាក់ស្តែង ជាមួយការទូទាត់រហ័សតាម ABA KHQR!",
    service_badge_sale: "🏷️ មានលក់កម្មវិធីរួចជាស្រេច",
    service_badge_rent: "🔄 មានជួលប្រព័ន្ធប្រើប្រាស់",
    service_badge_custom: "🛠️ ទទួលកុម្ម៉ង់ធ្វើតាមតម្រូវការ",
    btn_get_started_free: "មើលកាតាឡុកកម្មវិធី",
    btn_explore_demo: "មើលរូបភាពលម្អិត",
    trust_khqr: "ទូទាត់រហ័សតាម ABA KHQR",
    trust_source: "កូដកម្មវិធីដើម (Source Code) ស្អាត",
    trust_setup: "ជំនួយបច្ចេកទេសផ្ទាល់តាម Telegram",
    trust_updates: "សម្រាប់កុំព្យូទ័រ & ទូរស័ព្ទដៃ",
    
    title_marketplace: "កម្មវិធីគេហទំព័រ & ហាងអនឡាញរួចជាស្រេច",
    subtitle_marketplace: "ស្វែងរកហាងទំនិញ ប្រព័ន្ធ POS និងកម្មវិធី SaaS ដែលពេញនិយមបំផុត ជាមួយការតម្លើងភ្លាមៗ។",
    cat_all: "កម្មវិធីទាំងអស់",
    cat_ecommerce: "ហាងទំនិញ & E-Commerce",
    cat_saas: "ប្រព័ន្ធ SaaS",
    cat_pos: "ប្រព័ន្ធ POS & លក់រាយ",
    cat_management: "គ្រប់គ្រងទូទៅ & CRM",
    cat_delivery: "ដឹកជញ្ជូន & អាហារ",
    
    badge_why_goshope: "ហេតុអ្វីជ្រើសរើស GoShope & AC MART",
    title_features: "អ្វីៗទាំងអស់ដែលអ្នកត្រូវការដើម្បីលក់ និងពង្រីកអាជីវកម្ម",
    subtitle_features: "បង្កើតឡើងជាពិសេសសម្រាប់ម្ចាស់អាជីវកម្ម និងអ្នកបង្កើតកម្មវិធី ជាមួយការតភ្ជាប់ធនាគារក្នុងស្រុក។",
    feat1_title: "ទូទាត់ប្រាក់ ABA KHQR & Bakong ភ្លាមៗ",
    feat1_desc: "អតិថិជនអាចស្កេនទូទាត់ប្រាក់ជាមួយ App ធនាគារណាមួយនៅកម្ពុជា (ABA, Wing, ACLEDA, Bakong) យ៉ាងរហ័ស។",
    feat2_title: "ការជូនដំណឹងតាម Telegram",
    feat2_desc: "ទទួលបានសំឡេងរោទ៍ជូនដំណឹងភ្លាមៗលើ Telegram ពេលមានអតិថិជនបញ្ជាទិញ ឬទូទាត់ប្រាក់។",
    feat3_title: "ទាញយកកូដ & អាជ្ញាប័ណ្ណភ្លាមៗ",
    feat3_desc: "អតិថិជនទទួលបានកូដ ZIP កូនសោអាជ្ញាប័ណ្ណ និងសិទ្ធិចូល GitHub Repository ភ្លាមៗក្រោយទូទាត់។",
    feat4_title: "ការដំឡើងងាយស្រួលក្នុង ១ នាទី",
    feat4_desc: "មានឯកសារណែនាំច្បាស់លាស់ និង Environment ត្រៀមជាស្រេចសម្រាប់ដាក់ដំណើរការលើ Vercel ឬ Cloud Server។",
    feat5_title: "បង្កើតវិក្កយបត្រ PDF ស្វ័យប្រវត្តិ",
    feat5_desc: "បង្កើតវិក្កយបត្រពន្ធ និងបង្កាន់ដៃឌីជីថលស្អាតៗ និងផ្ញើទៅអ៊ីមែលអតិថិជនដោយស្វ័យប្រវត្តិ។",
    feat6_title: "ស្ថិតិការលក់ផ្ទាល់ (Live Analytics)",
    feat6_desc: "តាមដានចំនួនអ្នកចូលមើលហាង ទំនិញលក់ដាច់បំផុត និងកំណើនចំណូលលើផ្ទាំងគ្រប់គ្រងរបស់អ្នក។",
    
    badge_how_it_works: "ដំណើរការ ៣ ជំហានងាយៗ",
    title_how_it_works: "របៀបទិញកម្មវិធី & ទទួលកូដក្នុង ៣ ជំហាន",
    subtitle_how_it_works: "ជ្រើសរើសកម្មវិធីដែលអ្នកពេញចិត្ត សាកល្បង Demo លើ Browser និងទទួលកូដផ្លូវការភ្លាមៗ។",
    step1_guide_title: "១. ជ្រើសរើសកម្មវិធី & សាកល្បង Live Demo",
    step1_guide_desc: "រកមើលកាតាឡុក និងបើកប្រព័ន្ធ Simulator ដើម្បីសាកល្បងមុខងារទាំងអស់របស់កម្មវិធី។",
    step2_guide_title: "២. ស្កេនទូទាត់ ABA KHQR ភ្លាមៗ",
    step2_guide_desc: "ស្កេន QR Code ជាមួយ App ធនាគារ ABA Mobile, Bakong ឬធនាគារផ្សេងទៀត ជាមួយការផ្ទៀងផ្ទាត់ស្វ័យប្រវត្តិ។",
    step3_guide_title: "៣. ទទួល Source Code & កូនសោអាជ្ញាប័ណ្ណ",
    step3_guide_desc: "ទទួលបានតំណទាញយកកូដ សិទ្ធិចូល Private GitHub Repository និងកូនសោអាជ្ញាប័ណ្ណភ្លាមៗ។",
    
    badge_live_sandbox: "ប្រព័ន្ធសាកល្បងផ្ទាល់",
    title_live_demo: "សាកល្បងដំណើរការកម្មវិធីជាក់ស្តែង",
    subtitle_live_demo: "ពិសោធន៍ផ្ទាល់ពីរបៀបដែលអតិថិជនចូលទិញទំនិញ ដាក់ក្នុងកន្ត្រក និងទូទាត់ ABA KHQR។",
    
    badge_pricing: "តម្លៃច្បាស់លាស់ & សមរម្យ",
    title_pricing: "ជ្រើសរើសកញ្ចប់អាជ្ញាប័ណ្ណកម្មវិធី",
    subtitle_pricing: "ទិញអាជ្ញាប័ណ្ណកម្មវិធីទោល សិទ្ធិពាណិជ្ជកម្មសម្រាប់អតិថិជន ឬកូដកម្មវិធីដើមទាំងមូល (Source Code)។",
    plan_free_badge: "អាជ្ញាប័ណ្ណទោល",
    plan_free_name: "Single App License",
    plan_free_desc: "កម្មវិធីពេញលេញត្រៀមដាក់ដំណើរការសម្រាប់អាជីវកម្មផ្ទាល់ខ្លួនរបស់អ្នក។",
    ribbon_popular: "ពេញនិយមបំផុត",
    plan_pro_name: "Commercial License",
    plan_pro_desc: "ល្អឥតខ្ចោះសម្រាប់ Developer ឬ Agency ដែលចង់តម្លើងឱ្យអតិថិជនច្រើននាក់។",
    plan_source_name: "Source Code ពេញលេញ",
    plan_source_desc: "សម្រាប់ Developer និងក្រុមហ៊ុនដែលចង់បានកូដកម្មវិធីទាំងមូល។",
    
    badge_tutorial: "វីដេអូ & មេរៀន",
    title_tutorial: "របៀបភ្ជាប់ ABA KHQR & បើកហាង",
    subtitle_tutorial: "ទស្សនាវីដេអូខ្លីៗដើម្បីភ្ជាប់ការទូទាត់ប្រាក់ និងរៀបចំការដឹកជញ្ជូន។",
    
    sidebar_dashboard: "ផ្ទាំងគ្រប់គ្រង",
    sidebar_products: "ផលិតផល / កម្មវិធី",
    sidebar_categories: "ប្រភេទ",
    sidebar_orders: "ការបញ្ជាទិញ",
    sidebar_customers: "អតិថិជន",
    sidebar_coupons: "ប័ណ្ណបញ្ចុះតម្លៃ",
    sidebar_settings: "ការកំណត់ហាង",
    sidebar_billing: "ការទូទាត់",
    badge_tier: "គណនីឥតគិតថ្លៃ",
    panel_title: "ផ្ទាំងគ្រប់គ្រងម្ចាស់ហាង",
    btn_view_marketplace: "ហាងអតិថិជន",
    dash_title: "ផ្ទាំងគ្រប់គ្រងហាង",
    dash_subtitle: "ទិដ្ឋភាពទូទៅនៃស្ថិតិសម្រាប់ AC STORE",
    metric_revenue: "ចំណូលសរុប",
    metric_orders: "ការបញ្ជាទិញសរុប",
    metric_active_apps: "ផលិតផលសកម្ម",
    metric_khqr_payments: "ប្រតិបត្តិការ KHQR",
    checklist_title: "បញ្ជីផ្ទៀងផ្ទាត់ការរៀបចំ & បើកដំណើរការហាង",
    checklist_desc: "បំពេញជំហានរៀបចំចាំបាច់ទាំងនេះមុនពេលបើកដំណើរការហាងរបស់អ្នក",
    step1_title: "បន្ថែមផលិតផលដំបូងរបស់អ្នក",
    step1_desc: "បន្ថែមផលិតផលជាមួយរូបភាព និងតម្លៃដើម្បីឱ្យអតិថិជនអាចបញ្ជាទិញបាន",
    step2_title: "ភ្ជាប់ ABA KHQR & Bakong",
    step2_desc: "ភ្ជាប់គណនីធនាគារ ABA របស់អ្នកដើម្បីទទួលប្រាក់ទាន់ចិត្ត",
    step3_title: "ការផ្ញើកូដ & អាជ្ញាប័ណ្ណស្វ័យប្រវត្តិ",
    step3_desc: "ប្រព័ន្ធផ្ញើកូដកម្មវិធី និងកូនសោអាជ្ញាប័ណ្ណទៅអ៊ីមែលអតិថិជនភ្លាមៗ",
    step4_title: "ពិនិត្យរូបភាពលម្អិតនៃកម្មវិធី",
    step4_desc: "ពិនិត្យមើលរូបភាពអេក្រង់ជាក់ស្តែងនៃកម្មវិធីនិមួយៗទៅតាមប្រភេទផលិតផលមុនអតិថិជនទិញ",
    btn_add: "បន្ថែម",
    btn_configure: "កំណត់",
    btn_setup: "រៀបចំ",
    btn_test_store: "មើលរូបភាពលម្អិត",
    table_recent_orders: "ការលក់ & បញ្ជាទិញថ្មីៗ",
    table_recent_orders_desc: "ការបញ្ជាទិញផ្ទាល់ អាជ្ញាប័ណ្ណ និងការទូទាត់តាម KHQR ជាក់ស្តែង",
    btn_new_app: "បន្ថែមកម្មវិធីថ្មី",
    th_order_id: "លេខបញ្ជាទិញ",
    th_customer: "អតិថិជន",
    th_app: "កម្មវិធីដែលបានទិញ",
    th_license: "ប្រភេទអាជ្ញាប័ណ្ណ",
    th_amount: "តម្លៃ",
    th_payment: "ការទូទាត់",
    th_status: "ស្ថានភាព",
    th_action: "សកម្មភាព",
    modal_checkout_title: "ទូទាត់ទិញកម្មវិធីភ្លាមៗ",
    label_customer_name: "ឈ្មោះ / ក្រុមហ៊ុនរបស់អ្នក",
    label_customer_email: "អ៊ីមែលសម្រាប់ទទួលកូដ & License Key",
    btn_cancel: "បោះបង់",
    btn_simulate_paid: "ក្លែងធ្វើការទូទាត់ KHQR ជោគជ័យ",
    modal_add_app_title: "បន្ថែមកម្មវិធីគេហទំព័រថ្មី",
    label_app_name: "ឈ្មោះកម្មវិធី",
    label_app_category: "ប្រភេទ",
    label_app_price: "តម្លៃ (USD)",
    label_app_orig_price: "តម្លៃដើម (បញ្ចុះតម្លៃ)",
    label_app_desc: "ពិពណ៌នាសង្ខេប",
    label_app_tech: "បច្ចេកវិទ្យាប្រើប្រាស់ (Tech Stack)",
    label_app_preview: "តំណភ្ជាប់រូបភាព Preview",
    btn_save_app: "រក្សាទុក & បង្ហោះកម្មវិធី",
    modal_settings_title: "ការកំណត់ការទូទាត់ & ហាង",
    label_store_name: "ឈ្មោះហាង",
    btn_save_changes: "រក្សាទុកការផ្លាស់ប្តូរ",
    btn_live_demo: "មើលព័ត៌មាន & រូប Demo",
    btn_buy_now: "ទិញឥឡូវនេះ (ABA KHQR)",
    nav_telegram_support: "💬 ជំនួយ Telegram",
    nav_telegram: "Telegram",
    nav_owner_pin: "ម្ចាស់ហាង",
    mob_nav_menu: "ម៉ឺនុយរុករក",
    mob_store_mgmt: "ការគ្រប់គ្រងហាង",
    floating_telegram: "ឆាត Telegram",
    chat_telegram: "ឆាតលើ Telegram",
    footer_desc: "ហាងលក់កម្មវិធីគេហទំព័រ និងប្រព័ន្ធ SaaS ផ្លូវការរបស់ AC MART។ កម្មវិធីស្តង់ដារគុណភាពខ្ពស់ ជាមួយការទូទាត់រហ័សតាម ABA KHQR និងជំនួយផ្ទាល់លើ Telegram។",
    footer_marketplace: "ទីផ្សារកម្មវិធី",
    footer_browse_all: "កាតាឡុកកម្មវិធីទាំងអស់",
    footer_direct_payment: "ការទូទាត់ផ្ទាល់",
    footer_aba_acc: "គណនី ABA៖ 000 138 112",
    footer_aba_name: "ឈ្មោះគណនី៖ BOREY KEM",
    footer_bakong: "គាំទ្រប្រព័ន្ធបាគង (NBC Bakong)",
    footer_store_admin: "ការគ្រប់គ្រងហាង",
    footer_owner_portal: "ផ្ទាំងម្ចាស់ហាង (PIN)",
    footer_all_rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    footer_made_in_kh: "🇰🇭 បង្កើតឡើងយ៉ាងសម្រិតសម្រាំងសម្រាប់កម្ពុជា",
    footer_instant_delivery: "⚡ ផ្ញើជូនកូដឌីជីថលភ្លាមៗ",
    dash_products_title: "កាតាឡុកផលិតផល & កម្មវិធី",
    dash_products_sub: "គ្រប់គ្រង កែប្រែតម្លៃ ពិនិត្យស្តុក និងបង្ហោះផលិតផលថ្មីៗទៅកាន់ហាងរបស់អ្នក",
    btn_add_product: "+ បន្ថែមផលិតផលថ្មី",
    th_product: "ផលិតផល",
    th_category: "ប្រភេទ",
    th_price: "តម្លៃ",
    th_tech_stack: "បច្ចេកវិទ្យា",
    th_sales: "ការលក់",
    dash_categories_title: "ប្រភេទមុខទំនិញក្នុងហាង",
    dash_categories_sub: "រៀបចំប្រភេទទំនិញឱ្យមានរបៀបរៀបរយងាយស្រួលរក",
    btn_create_category: "+ បង្កើតប្រភេទថ្មី",
    dash_orders_title: "គ្រប់គ្រងការបញ្ជាទិញរបស់អតិថិជន",
    dash_orders_sub: "តាមដានរាល់ការបញ្ជាទិញ ត្រួតពិនិត្យ និងបោះពុម្ពបង្កាន់ដៃ",
    filter_all_orders: "ការបញ្ជាទិញទាំងអស់",
    filter_paid: "បានបង់ប្រាក់",
    filter_pending: "រង់ចាំការទូទាត់",
    th_date_time: "កាលបរិច្ឆេទ & ម៉ោង",
    th_item_purchased: "ទំនិញដែលបានទិញ",
    th_total: "សរុប",
    th_payment_method: "វិធីសាស្ត្រទូទាត់",
    dash_customers_title: "បញ្ជីឈ្មោះអតិថិជន",
    dash_customers_sub: "មើលប្រវត្តិទិញទំនិញ ចំណូលដែលបានចំណាយ និងទំនាក់ទំនង",
    th_cust_name: "ឈ្មោះអតិថិជន",
    th_cust_contact: "អ៊ីមែល / លេខទូរស័ព្ទ",
    th_cust_orders: "ចំនួនកុម្ម៉ង់",
    th_cust_spent: "ចំណាយសរុប",
    th_cust_latest: "ទិញចុងក្រោយ",
    th_cust_status: "ស្ថានភាព",
    dash_settings_title: "ការកំណត់ហាង & ប្រព័ន្ធទូទាត់",
    dash_settings_sub: "រៀបចំម៉ាកយីហោ គណនី ABA KHQR និងជម្រើសដឹកជញ្ជូន",
    btn_save_all_settings: "រក្សាទុកការកំណត់",
    settings_logo_title: "🖼️ ឡូហ្គោម៉ាកយីហោហាង",
    settings_logo_sub: "បង្ហោះរូបភាពឡូហ្គោហាងរបស់អ្នក (.PNG, .JPG, .SVG, .WEBP)។ វានឹងបង្ហាញនៅលើ Navbar ទូរស័ព្ទ និងវិក្កយបត្រ។",
    btn_upload_logo: "បង្ហោះរូបភាពឡូហ្គោ",
    btn_reset_logo: "កំណត់ដូចដើម (AC MART)",
    settings_logo_hint: "ណែនាំ៖ រូបភាព PNG ឬ SVG គ្មានផ្ទៃខាងក្រោយ។ រក្សាទុកក្នុង Browser។",
    settings_profile_title: "🏪 ព័ត៌មានហាង",
    label_store_url: "តំណភ្ជាប់គេហទំព័រហាងផ្ទាល់",
    btn_copy: "📋 ចម្លង",
    label_contact_phone: "លេខទូរស័ព្ទ & Telegram ទំនាក់ទំនង",
    label_pin_hint: "ចាំបាច់សម្រាប់ដោះសោផ្ទាំងគ្រប់គ្រង",
    btn_change_pw: "ប្តូរលេខសម្ងាត់",
    settings_payment_title: "🇰🇭 ការកំណត់ការទូទាត់ & ការជូនដំណឹង",
    label_aba_account: "លេខគណនីធនាគារ ABA ឬលេខទូរស័ព្ទ",
    label_bakong_id: "គណនីបាគង (Bakong ID)",
    label_optional: "(ស្រេចចិត្ត - អាចទុកនៅទំនេរបាន)",
    label_telegram_token: "Telegram Bot Token ជូនដំណឹង",
    settings_delivery_title: "⚡ ការផ្ញើកូដឌីជីថល & អាជ្ញាប័ណ្ណស្វ័យប្រវត្តិ",
    deliv_gh_title: "✓ ការអញ្ជើញចូល GitHub Repo ភ្លាមៗ",
    deliv_gh_desc: "ផ្តល់សិទ្ធិចូលកូដកម្មវិធីស្វ័យប្រវត្តិ",
    deliv_zip_title: "✓ ទាញយក Source Code .ZIP ផ្ទាល់",
    deliv_zip_desc: "តំណទាញយកភ្លាមៗក្រោយទូទាត់",
    deliv_key_title: "✓ ផ្ញើកូនសោអាជ្ញាប័ណ្ណស្វ័យប្រវត្តិ",
    deliv_key_desc: "លេខកូដអាជ្ញាប័ណ្ណជាក់លាក់សម្រាប់អ្នក",
    deliv_tax_title: "✓ ផ្ញើវិក្កយបត្រពន្ធ PDF ទៅអ៊ីមែល",
    deliv_tax_desc: "បង្កាន់ដៃទូទាត់ផ្លូវការផ្ញើជូនអតិថិជន",
    deliv_aba_verif: "✓ ផ្ទៀងផ្ទាត់ការទូទាត់ ABA KHQR & Bakong ភ្លាមៗ",
    deliv_key_pdf: "✓ ផ្ញើកូនសោអាជ្ញាប័ណ្ណ & វិក្កយបត្រ PDF ស្វ័យប្រវត្តិ",
    admin_auth_title: "សម្រាប់តែម្ចាស់ហាងប៉ុណ្ណោះ",
    admin_auth_desc: "ផ្ទាំងគ្រប់គ្រងនេះសម្រាប់តែម្ចាស់ហាងក្នុងការបង្ហោះកម្មវិធី កែប្រែតម្លៃ និងតាមដានចំណូល ABA KHQR។",
    label_admin_pin: "លេខកូដសម្ងាត់ PIN របស់ម្ចាស់ហាង",
    admin_pin_error: "❌ លេខកូដ PIN មិនត្រឹមត្រូវទេ។ មិនអាចចូលបានទេ!",
    btn_unlock_panel: "ដោះសោផ្ទាំងម្ចាស់ហាង",
    btn_lock_panel: "ចាកចេញ / ចាក់សោ"
  }
};

let currentLang = localStorage.getItem('acmart_lang') || 'en';
let currentTheme = localStorage.getItem('acmart_theme') || 'dark';

// --- INITIAL APP CATALOG DATA ---
const initialApps = [
  {
    id: "app-1",
    name: "GoShope Storefront & SaaS Builder",
    khName: "GoShope - ប្រព័ន្ធបង្កើតហាងទំនិញអនឡាញ",
    category: "Ecommerce",
    price: 129,
    originalPrice: 249,
    rating: 4.9,
    salesCount: 42,
    techStack: ["Next.js", "TailwindCSS", "ABA KHQR", "Telegram Bot", "PostgreSQL"],
    desc: "Complete turn-key e-commerce platform with automated Telegram notifications, customer receipts, and instant ABA KHQR scanning.",
    khDesc: "ប្រព័ន្ធហាងទំនិញអនឡាញពេញលេញ ជាមួយការជូនដំណឹងតាម Telegram បង្កើតបង្កាន់ដៃស្វ័យប្រវត្តិ និងទូទាត់ ABA KHQR ភ្លាមៗ។",
    features: [
      "Integrated ABA KHQR / Bakong payment simulator",
      "Automated Telegram order dispatch bot",
      "Instant customer PDF receipt generator",
      "Mobile responsive storefront + Admin Panel"
    ],
    demoType: "ecommerce",
    previewImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=640&auto=format&fit=crop&q=80&fm=webp",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&auto=format&fit=crop&q=80&fm=webp"
    ]
  },
  {
    id: "app-2",
    name: "AC MART Cloud POS & Inventory",
    khName: "AC MART - ប្រព័ន្ធ POS & គ្រប់គ្រងស្តុកលើ Cloud",
    category: "POS",
    price: 99,
    originalPrice: 199,
    rating: 4.8,
    salesCount: 28,
    techStack: ["React 18", "Express", "SQLite", "Barcode API", "Thermal Print"],
    desc: "Fast barcode cashier POS with real-time stock deductions, cash drawer triggers, and thermal receipt print layouts.",
    khDesc: "ប្រព័ន្ធគិតលុយល្បឿនលឿន POS ស្កេនបារកូដ កាត់ស្តុកស្វ័យប្រវត្តិ និងបោះពុម្ពវិក្កយបត្រកម្ដៅបានរហ័ស។",
    features: [
      "Offline-first IndexedDB sync mode",
      "80mm & 58mm thermal receipt printer support",
      "Multi-cashier shifting and cash reconciliation",
      "Stock alerts and supplier purchase orders"
    ],
    demoType: "pos",
    previewImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=640&auto=format&fit=crop&q=80&fm=webp",
    screenshots: [
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1080&auto=format&fit=crop&q=80&fm=webp"
    ]
  },
  {
    id: "app-3",
    name: "ApexCare Clinic & Doctor Appointment Hub",
    khName: "ApexCare - ប្រព័ន្ធគ្រប់គ្រងគ្លីនិក & កាលវិភាគវេជ្ជបណ្ឌិត",
    category: "Management",
    price: 149,
    originalPrice: 299,
    rating: 5.0,
    salesCount: 19,
    techStack: ["Vue 3", "Node.js", "FullCalendar", "PDFMake", "Tailwind"],
    desc: "Medical clinic management system with digital patient history, prescription writing, and doctor schedule booking.",
    khDesc: "ប្រព័ន្ធគ្រប់គ្រងគ្លីនិក និងមន្ទីរពេទ្យ កត់ត្រាប្រវត្តិអ្នកជំងឺចេញវេជ្ជបញ្ជាឌីជីថល និងកក់ម៉ោងជួបគ្រូពេទ្យ។",
    features: [
      "Patient electronic medical record (EMR)",
      "Digital prescription generator with clinic stamp",
      "Interactive calendar for doctor appointments",
      "Laboratory results and imaging uploads"
    ],
    demoType: "clinic",
    previewImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&auto=format&fit=crop&q=80&fm=webp",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1080&auto=format&fit=crop&q=80&fm=webp"
    ]
  },
  {
    id: "app-4",
    name: "FoodExpress Delivery & Multi-Kitchen Platform",
    khName: "FoodExpress - ប្រព័ន្ធកម្មវិធីកុម្ម៉ង់អាហារ & ដឹកជញ្ជូន",
    category: "Delivery",
    price: 169,
    originalPrice: 320,
    rating: 4.9,
    salesCount: 35,
    techStack: ["React Native Web", "Node.js", "Mapbox", "WebSocket", "KHQR"],
    desc: "End-to-end food ordering platform featuring live driver GPS tracking, kitchen display system (KDS), and customizable food options.",
    khDesc: "ប្រព័ន្ធកុម្ម៉ង់ម្ហូបអាហារតាមអនឡាញ តាមដានអ្នកដឹកជញ្ជូនលើផែនទី និងផ្ទាំងអេក្រង់ចុងភៅក្នុងផ្ទះបាយ។",
    features: [
      "Real-time driver location simulator on map",
      "Kitchen Display System (KDS) live ticket audio",
      "Add-ons, modifier groups & custom toppings",
      "ABA KHQR & Cash on Delivery checkout"
    ],
    demoType: "delivery",
    previewImage: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=640&auto=format&fit=crop&q=80&fm=webp",
    screenshots: [
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1080&auto=format&fit=crop&q=80&fm=webp"
    ]
  },
  {
    id: "app-5",
    name: "EstatePro Cambodia Real Estate Hub",
    khName: "EstatePro - វេទិកាផ្សព្វផ្សាយ និងលក់អចលនទ្រព្យ",
    category: "Management",
    price: 119,
    originalPrice: 220,
    rating: 4.7,
    salesCount: 22,
    techStack: ["HTML5", "Modern CSS", "Leaflet Maps", "WhatsApp CRM", "Vite"],
    desc: "Luxury property showcase, mortgage calculation tool, direct Telegram/WhatsApp agent lead routing, and virtual 360 tour ready.",
    khDesc: "គេហទំព័រផ្សព្វផ្សាយផ្ទះ ដី និងខុនដូ ជាមួយម៉ាស៊ីនគណនាប្រាក់កម្ចី និងផ្ញើសារទាក់ទងភ្នាក់ងារផ្ទាល់។",
    features: [
      "Interactive map search with radius filters",
      "Mortgage & monthly installment calculator",
      "1-Click WhatsApp & Telegram lead generator",
      "High-res gallery and floor plan viewer"
    ],
    demoType: "realestate",
    previewImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&auto=format&fit=crop&q=80&fm=webp",
    screenshots: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1080&auto=format&fit=crop&q=80&fm=webp"
    ]
  },
  {
    id: "app-6",
    name: "SaaS Launchpad Multi-Tenant Boilerplate",
    khName: "SaaS Launchpad - កូដគ្រោងបង្កើតកម្មវិធី SaaS សកល",
    category: "SaaS",
    price: 189,
    originalPrice: 350,
    rating: 5.0,
    salesCount: 56,
    techStack: ["Next.js 14", "TypeScript", "Prisma", "Stripe & KHQR", "Docker"],
    desc: "Production-ready SaaS boilerplate with authentication, team workspaces, subscription billing, API rate limiting, and admin analytics.",
    khDesc: "កូដគ្រោង SaaS ពេញលេញជាមួយប្រព័ន្ធ Login បែងចែក Workspace គិតលុយប្រចាំខែ និង Dashboard គ្រប់គ្រង។",
    features: [
      "Multi-tenant organization & role permissions",
      "Integrated Stripe + ABA KHQR recurring webhooks",
      "Automated SEO metadata & sitemap generation",
      "Dark & light theme support out of the box"
    ],
    demoType: "saas",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&auto=format&fit=crop&q=80&fm=webp",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&auto=format&fit=crop&q=80&fm=webp",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1080&auto=format&fit=crop&q=80&fm=webp"
    ]
  }
];

// --- INITIAL CATEGORIES DATA ---
const initialCategories = [
  { id: "cat-1", name: "E-Commerce & Stores", icon: "🛍️", count: 12 },
  { id: "cat-2", name: "SaaS & Boilerplates", icon: "🚀", count: 8 },
  { id: "cat-3", name: "POS & Retail", icon: "💳", count: 6 },
  { id: "cat-4", name: "Management & CRM", icon: "📊", count: 9 },
  { id: "cat-5", name: "Food & Delivery", icon: "🛵", count: 5 }
];

// --- INITIAL COUPONS DATA ---
const initialCoupons = [
  { code: "GOSHOPE20", discount: "20% OFF", uses: 45, expires: "2026-12-31", status: "Active" },
  { code: "LAUNCHFREE", discount: "100% Starter", uses: 120, expires: "2026-10-15", status: "Active" },
  { code: "ABAKHQR5", discount: "$5.00 OFF", uses: 28, expires: "2026-11-01", status: "Active" }
];

// --- INITIAL CUSTOMERS DATA ---
const initialCustomers = [
  { name: "Channary Sok", contact: "channary.sok@business.kh", orders: 3, spent: "$387.00", latest: "GoShope Storefront", status: "VIP Customer" },
  { name: "Vannak Meas", contact: "vannak@phnompenh-mart.com", orders: 2, spent: "$198.00", latest: "AC MART Cloud POS", status: "Active" },
  { name: "Dr. Kalyan Som", contact: "kalyan.som@apexclinic.kh", orders: 1, spent: "$149.00", latest: "ApexCare Clinic Hub", status: "Active" },
  { name: "Bunly Heng", contact: "bunly.heng@foodexp.me", orders: 4, spent: "$450.00", latest: "FoodExpress Delivery", status: "VIP Customer" }
];

// --- INITIAL ORDERS DATA ---
const initialOrders = [
  {
    id: "ORD-9482",
    customerName: "Channary Sok",
    customerEmail: "channary.sok@business.kh",
    appId: "app-1",
    appName: "GoShope Storefront & SaaS Builder",
    tier: "Commercial License",
    amount: "$129.00",
    paymentMethod: "ABA KHQR",
    status: "Paid",
    date: "2026-08-22 14:15"
  },
  {
    id: "ORD-9481",
    customerName: "Vannak Meas",
    customerEmail: "vannak@phnompenh-mart.com",
    appId: "app-2",
    appName: "AC MART Cloud POS & Inventory",
    tier: "Extended Source Code",
    amount: "$99.00",
    paymentMethod: "ABA KHQR",
    status: "Paid",
    date: "2026-08-22 11:30"
  },
  {
    id: "ORD-9480",
    customerName: "Dr. Kalyan Som",
    customerEmail: "kalyan.som@apexclinic.kh",
    appId: "app-3",
    appName: "ApexCare Clinic Hub",
    tier: "Commercial License",
    amount: "$149.00",
    paymentMethod: "ABA KHQR",
    status: "Paid",
    date: "2026-08-21 16:45"
  },
  {
    id: "ORD-9479",
    customerName: "Bunly Heng",
    customerEmail: "bunly.heng@foodexp.me",
    appId: "app-4",
    appName: "FoodExpress Delivery Platform",
    tier: "White-Label Source",
    amount: "$169.00",
    paymentMethod: "Card / COD",
    status: "Paid",
    date: "2026-08-20 09:20"
  }
];

// Load state
let appsList = JSON.parse(localStorage.getItem('acmart_apps')) || initialApps;
let categoriesList = JSON.parse(localStorage.getItem('acmart_categories')) || initialCategories;
let couponsList = JSON.parse(localStorage.getItem('acmart_coupons')) || initialCoupons;
let customersList = JSON.parse(localStorage.getItem('acmart_customers')) || initialCustomers;
let ordersList = JSON.parse(localStorage.getItem('acmart_orders')) || initialOrders;
const DEFAULT_STORE_SETTINGS = {
  name: "AC STORE",
  merchantId: "000138112 (BOREY KEM)",
  contactPhone: "+855 16905354 (@Acmart6666)",
  bakongId: "",
  telegramToken: "8884699311:AAFuShbd_PRcGrPZWH9Ntc-zFA34",
  adminPin: "1234"
};

let storeSettings = JSON.parse(localStorage.getItem('acmart_store_settings')) || { ...DEFAULT_STORE_SETTINGS };

// Cleanse old placeholder / mock data from previous sessions and migrate to user's real defaults
if (!storeSettings.name || storeSettings.name === "AC MART" || storeSettings.name.includes("បូវ")) {
  storeSettings.name = DEFAULT_STORE_SETTINGS.name;
}
if (!storeSettings.merchantId || storeSettings.merchantId === "088 6666 584" || storeSettings.merchantId.includes("SOVANN TECH") || storeSettings.merchantId.includes("001 889 231")) {
  storeSettings.merchantId = DEFAULT_STORE_SETTINGS.merchantId;
}
if (!storeSettings.contactPhone || storeSettings.contactPhone.includes("88 6666 584") || storeSettings.contactPhone.includes("12 889 231") || storeSettings.contactPhone.includes("kemborey")) {
  storeSettings.contactPhone = DEFAULT_STORE_SETTINGS.contactPhone;
}
if (!storeSettings.telegramToken || storeSettings.telegramToken.includes("mock_token") || storeSettings.telegramToken.includes("bot691823910")) {
  storeSettings.telegramToken = DEFAULT_STORE_SETTINGS.telegramToken;
}
if (!storeSettings.adminPin) {
  storeSettings.adminPin = DEFAULT_STORE_SETTINGS.adminPin;
}

localStorage.setItem('acmart_store_settings', JSON.stringify(storeSettings));

let isAdminAuthenticated = sessionStorage.getItem('acmart_admin_auth') === 'true';
let currentView = 'marketplace';
let activeDashboardTab = 'dashboard';
let activeFilter = 'all';
let currentPurchasingApp = null;

// --- DOM ELEMENTS ---
const publicMarketplaceView = document.getElementById('publicMarketplaceView');
const storeOwnerDashboardView = document.getElementById('storeOwnerDashboardView');
const brandLogoBtn = document.getElementById('brandLogoBtn');
const headerCtaBtn = document.getElementById('headerCtaBtn');
const headerSignInBtn = document.getElementById('headerSignInBtn');
const headerCtaText = document.getElementById('headerCtaText');
const navMarketplace = document.getElementById('navMarketplace');
const returnToMarketplaceBtn = document.getElementById('returnToMarketplaceBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeMoonIcon = document.getElementById('themeMoonIcon');
const themeSunIcon = document.getElementById('themeSunIcon');
const langEN = document.getElementById('langEN');
const langKH = document.getElementById('langKH');

const appsContainer = document.getElementById('appsContainer');
const filterCategoriesList = document.getElementById('filterCategoriesList');
const appSearchInput = document.getElementById('appSearchInput');
const heroGetStartedBtn = document.getElementById('heroGetStartedBtn');
const openFeaturedDemoBtn = document.getElementById('openFeaturedDemoBtn');

// Dashboard Elements
const sidebarStoreName = document.getElementById('sidebarStoreName');
const dashStoreSubtitle = document.getElementById('dashStoreSubtitle');
const dashOrdersTableBody = document.getElementById('dashOrdersTableBody');
const dashTotalRevenue = document.getElementById('dashTotalRevenue');
const dashTotalOrders = document.getElementById('dashTotalOrders');
const dashActiveApps = document.getElementById('dashActiveApps');
const dashKhqrCount = document.getElementById('dashKhqrCount');

// Manager Tables
const productsManagerTableBody = document.getElementById('productsManagerTableBody');
const categoriesCardsContainer = document.getElementById('categoriesCardsContainer');
const fullOrdersTableBody = document.getElementById('fullOrdersTableBody');
const customersTableBody = document.getElementById('customersTableBody');
const couponsTableBody = document.getElementById('couponsTableBody');

// Checklist Elements
const btnChecklistAddProduct = document.getElementById('btnChecklistAddProduct');
const btnChecklistPayment = document.getElementById('btnChecklistPayment');
const btnChecklistDelivery = document.getElementById('btnChecklistDelivery');
const btnChecklistTestStore = document.getElementById('btnChecklistTestStore');

// Modals
const demoSandboxModal = document.getElementById('demoSandboxModal');
const closeDemoModalBtn = document.getElementById('closeDemoModalBtn');
const demoSandboxIframe = document.getElementById('demoSandboxIframe');
const demoDeviceFrame = document.getElementById('demoDeviceFrame');
const demoModalAppTitle = document.getElementById('demoModalAppTitle');
const demoModalCategory = document.getElementById('demoModalCategory');
const demoModalBuyBtn = document.getElementById('demoModalBuyBtn');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModalBtn = document.getElementById('closeCheckoutModalBtn');
const cancelCheckoutBtn = document.getElementById('cancelCheckoutBtn');
const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
const checkoutAppName = document.getElementById('checkoutAppName');
const checkoutAppPrice = document.getElementById('checkoutAppPrice');
const khqrDisplayAmount = document.getElementById('khqrDisplayAmount');
const buyerNameInput = document.getElementById('buyerNameInput');
const buyerEmailInput = document.getElementById('buyerEmailInput');

const appFormModal = document.getElementById('appFormModal');
const closeAppFormModalBtn = document.getElementById('closeAppFormModalBtn');
const cancelAppFormBtn = document.getElementById('cancelAppFormBtn');
const saveAppFormBtn = document.getElementById('saveAppFormBtn');
const addNewAppTableBtn = document.getElementById('addNewAppTableBtn');

const settingsModal = document.getElementById('settingsModal');
const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const settingStoreName = document.getElementById('settingStoreName');
const storeSwitcherBtn = document.getElementById('storeSwitcherBtn');
const toastContainer = document.getElementById('toastContainer');

let customLogo = localStorage.getItem('acmart_custom_logo') || null;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  applyCustomLogo(customLogo);
  const footerYearEl = document.getElementById('footerYear');
  if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();
  renderAllSections();
  setupEventListeners();
  optimizeStoredImagesInBackground();
});

function applyCustomLogo(logoUrl) {
  customLogo = logoUrl;
  const headerImg = document.getElementById('headerBrandLogoImg');
  const headerDefaultIcon = document.getElementById('headerDefaultLogoIcon');

  const mobImg = document.getElementById('mobBrandLogoImg');
  const mobDefaultIcon = document.getElementById('mobDefaultLogoIcon');

  const footerImg = document.getElementById('footerBrandLogoImg');
  const footerDefaultIcon = document.getElementById('footerDefaultLogoIcon');

  const previewBoxImg = document.getElementById('logoPreviewImg');
  const previewPlaceholder = document.getElementById('logoPreviewPlaceholder');

  if (logoUrl) {
    if (headerImg) {
      headerImg.src = logoUrl;
      headerImg.style.display = 'block';
    }
    if (headerDefaultIcon) headerDefaultIcon.style.display = 'none';

    if (mobImg) {
      mobImg.src = logoUrl;
      mobImg.style.display = 'block';
    }
    if (mobDefaultIcon) mobDefaultIcon.style.display = 'none';

    if (footerImg) {
      footerImg.src = logoUrl;
      footerImg.style.display = 'block';
    }
    if (footerDefaultIcon) footerDefaultIcon.style.display = 'none';

    if (previewBoxImg) {
      previewBoxImg.src = logoUrl;
      previewBoxImg.style.display = 'block';
    }
    if (previewPlaceholder) previewPlaceholder.style.display = 'none';
  } else {
    if (headerImg) headerImg.style.display = 'none';
    if (headerDefaultIcon) headerDefaultIcon.style.display = 'inline-flex';

    if (mobImg) mobImg.style.display = 'none';
    if (mobDefaultIcon) mobDefaultIcon.style.display = 'inline-flex';

    if (footerImg) footerImg.style.display = 'none';
    if (footerDefaultIcon) footerDefaultIcon.style.display = 'inline-flex';

    if (previewBoxImg) previewBoxImg.style.display = 'none';
    if (previewPlaceholder) previewPlaceholder.style.display = 'block';
  }
}

function renderAllSections() {
  renderMarketplaceCategoryFilters();
  renderApps();
  renderOrdersTable();
  renderProductsManager();
  renderCategoriesGrid();
  renderFullOrdersTable();
  renderCustomersTable();
  renderCouponsTable();
  updateDashboardMetrics();
  populateSettingsTab();
  populateCategoryDropdown();
}

// --- THEME MANAGEMENT ---
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('acmart_theme', theme);
  if (theme === 'dark') {
    themeMoonIcon.style.display = 'block';
    themeSunIcon.style.display = 'none';
  } else {
    themeMoonIcon.style.display = 'none';
    themeSunIcon.style.display = 'block';
  }
}

// --- LANGUAGE TRANSLATION SYSTEM ---
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('acmart_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  if (lang === 'en') {
    if (langEN) langEN.classList.add('active');
    if (langKH) langKH.classList.remove('active');
  } else {
    if (langKH) langKH.classList.add('active');
    if (langEN) langEN.classList.remove('active');
  }

  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const searchInput = document.getElementById('appSearchInput');
  if (searchInput) {
    searchInput.placeholder = (lang === 'kh')
      ? 'ស្វែងរកកម្មវិធីតាមឈ្មោះ បច្ចេកវិទ្យា (ឧ. React, Node, Tailwind, POS)...'
      : 'Search apps by name, tech stack (e.g. React, Node, Tailwind, Vue, POS)...';
  }

  renderAllSections();
}

// --- VIEW SWITCHING ---
function switchView(view) {
  currentView = view;
  if (view === 'dashboard') {
    publicMarketplaceView.style.display = 'none';
    storeOwnerDashboardView.style.display = 'flex';
    headerCtaText.textContent = translations[currentLang].cta_marketplace;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    storeOwnerDashboardView.style.display = 'none';
    publicMarketplaceView.style.display = 'block';
    headerCtaText.textContent = translations[currentLang].cta_owner_panel;
  }
}

// --- DASHBOARD TAB SWITCHING ---
function populateSettingsTab() {
  const nameInput = document.getElementById('settingStoreNameTab');
  const urlInput = document.getElementById('settingStoreUrl');
  const phoneInput = document.getElementById('settingContactPhone');
  const abaInput = document.getElementById('settingAbaAccount');
  const bakongInput = document.getElementById('settingBakongId');
  const telegramInput = document.getElementById('settingTelegramToken');
  const pinInput = document.getElementById('settingAdminPin');

  if (nameInput) nameInput.value = storeSettings.name || DEFAULT_STORE_SETTINGS.name;
  if (urlInput) {
    const origin = window.location.origin;
    urlInput.value = (origin && !origin.includes('file://') && !origin.includes('localhost')) 
      ? origin 
      : 'https://ac-mart-offical.vercel.app';
  }
  if (phoneInput) phoneInput.value = storeSettings.contactPhone || DEFAULT_STORE_SETTINGS.contactPhone;
  if (abaInput) abaInput.value = storeSettings.merchantId || DEFAULT_STORE_SETTINGS.merchantId;
  if (bakongInput) bakongInput.value = storeSettings.bakongId || '';
  if (telegramInput) telegramInput.value = storeSettings.telegramToken || DEFAULT_STORE_SETTINGS.telegramToken;
  if (pinInput) pinInput.value = storeSettings.adminPin || DEFAULT_STORE_SETTINGS.adminPin;
}

function populateSettingsModal() {
  const nameEl = document.getElementById('settingStoreName');
  const merchantEl = document.getElementById('settingMerchantId');
  const tokenEl = document.getElementById('settingTelegramModalToken');

  if (nameEl) nameEl.value = storeSettings.name || DEFAULT_STORE_SETTINGS.name;
  if (merchantEl) merchantEl.value = storeSettings.merchantId || DEFAULT_STORE_SETTINGS.merchantId;
  if (tokenEl) tokenEl.value = storeSettings.telegramToken || DEFAULT_STORE_SETTINGS.telegramToken;
}

function switchDashboardTab(tabName) {
  activeDashboardTab = tabName;
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-tab') === tabName);
  });

  document.querySelectorAll('.dashboard-tab-content').forEach(content => {
    content.style.display = 'none';
    content.classList.remove('active');
  });

  const activeContent = document.getElementById(`tabContent_${tabName}`);
  if (activeContent) {
    activeContent.style.display = 'block';
    activeContent.classList.add('active');
  }

  if (tabName === 'settings') {
    populateSettingsTab();
  }
}

// --- RENDER APPS IN MARKETPLACE ---
function renderApps() {
  const query = (appSearchInput.value || '').toLowerCase();
  const filtered = appsList.filter(app => {
    const matchesCategory = activeFilter === 'all' || app.category === activeFilter;
    const matchesSearch = app.name.toLowerCase().includes(query) ||
                          (app.khName && app.khName.toLowerCase().includes(query)) ||
                          app.techStack.some(t => t.toLowerCase().includes(query)) ||
                          app.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    appsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border-radius: 16px; border: 1px dashed var(--border-color);">
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No applications found</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">Try searching for another keyword like "POS", "SaaS", or "React".</p>
        <button class="btn btn-secondary btn-sm" onclick="clearSearchFilter()">Reset Filters</button>
      </div>
    `;
    return;
  }

  const isKh = currentLang === 'kh';
  appsContainer.innerHTML = filtered.map(app => {
    const title = isKh && app.khName ? app.khName : app.name;
    const description = isKh && app.khDesc ? app.khDesc : app.desc;
    const featuresList = app.features.map(f => `
      <li>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');

    const techBadges = app.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');

    return `
      <div class="app-card" data-id="${app.id}">
        <div class="app-card-preview" onclick="openLiveDemo('${app.id}')" title="Click to view screenshots & details">
          <span class="app-badge-featured">★ Verified App</span>
          <span class="app-badge-category">${app.category}</span>
          <img src="${app.previewImage}" alt="${title}" loading="lazy" decoding="async" onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&auto=format&fit=crop&q=80&fm=webp'">
        </div>
        <div class="app-card-body">
          <div class="app-card-header" onclick="openLiveDemo('${app.id}')" title="Click to view screenshots & details">
            <h3 class="app-title">${title}</h3>
            <div class="app-price-tag">
              <div class="app-price">$${app.price}</div>
              ${app.originalPrice ? `<div class="app-price-original">$${app.originalPrice}</div>` : ''}
            </div>
          </div>
          
          <p class="app-description" onclick="openLiveDemo('${app.id}')">${description}</p>
          
          <div class="app-tech-tags">
            ${techBadges}
          </div>

          <ul class="app-card-features">
            ${featuresList}
          </ul>

          <div class="app-card-footer">
            <button class="btn btn-secondary btn-sm btn-demo" onclick="openLiveDemo('${app.id}')" title="View multi-screenshots and app details">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>${translations[currentLang].btn_live_demo}</span>
            </button>
            <button class="btn btn-primary btn-sm btn-buy" onclick="openCheckout('${app.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>${translations[currentLang].btn_buy_now}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.clearSearchFilter = function() {
  appSearchInput.value = '';
  activeFilter = 'all';
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === 'all');
  });
  renderApps();
};

// --- PRODUCTS MANAGER TABLE (Dashboard) ---
function renderProductsManager() {
  if (!productsManagerTableBody) return;
  const isKh = currentLang === 'kh';
  productsManagerTableBody.innerHTML = appsList.map(app => {
    const title = (isKh && app.khName) ? app.khName : app.name;
    const statusText = isKh ? '● កំពុងដាក់លក់' : '● Active In Store';
    const unitsText = isKh ? 'ចំនួន' : 'units';
    const editBtn = isKh ? 'កែប្រែ' : 'Edit';
    const deleteBtn = isKh ? 'លុប' : 'Delete';
    return `
    <tr>
      <td>
        <div style="font-weight: 700; color: #fff;">${title}</div>
        <div style="font-size: 0.78rem; color: #94a3b8;">${app.id}</div>
      </td>
      <td><span class="tech-tag">${app.category}</span></td>
      <td style="font-weight: 800; color: var(--brand-primary);">$${app.price}.00</td>
      <td>${app.techStack.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join(' ')}</td>
      <td style="font-weight: 700;">${app.salesCount || 0} ${unitsText}</td>
      <td><span class="status-badge status-paid">${statusText}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="editProductPrice('${app.id}')" style="padding: 4px 8px; font-size: 0.78rem;">${editBtn}</button>
        <button class="btn btn-secondary btn-sm" onclick="deleteProduct('${app.id}')" style="padding: 4px 8px; font-size: 0.78rem; color: #f87171;">${deleteBtn}</button>
      </td>
    </tr>
    `;
  }).join('');
}

window.editProductPrice = function(appId) {
  const app = appsList.find(a => a.id === appId);
  const newPrice = prompt(`Enter new price for "${app.name}" (USD):`, app.price);
  if (newPrice && !isNaN(newPrice)) {
    app.price = parseFloat(newPrice);
    localStorage.setItem('acmart_apps', JSON.stringify(appsList));
    renderAllSections();
    showToast(`✓ Updated price of ${app.name} to $${newPrice}`);
  }
};

window.deleteProduct = function(appId) {
  if (confirm("Are you sure you want to remove this product from your store?")) {
    appsList = appsList.filter(a => a.id !== appId);
    localStorage.setItem('acmart_apps', JSON.stringify(appsList));
    renderAllSections();
    showToast("✓ Product removed from store catalog.");
  }
};

// --- DYNAMIC CATEGORY DROPDOWN & MARKETPLACE FILTERS ---
function populateCategoryDropdown(selectedVal = '') {
  const select = document.getElementById('formAppCategory');
  if (!select) return;
  select.innerHTML = categoriesList.map(cat => {
    const isSelected = (cat.name === selectedVal || cat.id === selectedVal) ? 'selected' : '';
    return `<option value="${cat.name}" ${isSelected}>${cat.icon || '📁'} ${cat.name}</option>`;
  }).join('') + `<option value="__NEW_CATEGORY__">➕ + Add New Custom Category...</option>`;
}

function renderMarketplaceCategoryFilters() {
  const container = document.getElementById('filterCategoriesList');
  if (!container) return;
  const isKh = currentLang === 'kh';
  const allText = isKh ? 'កម្មវិធីទាំងអស់' : 'All Applications';
  let html = `<button class="cat-btn ${activeFilter === 'all' ? 'active' : ''}" data-category="all" data-i18n="cat_all">${allText}</button>`;
  categoriesList.forEach(cat => {
    const isActive = activeFilter === cat.name ? 'active' : '';
    html += `<button class="cat-btn ${isActive}" data-category="${cat.name}">${cat.icon || '📁'} ${cat.name}</button>`;
  });
  container.innerHTML = html;
}

// --- CATEGORIES GRID (Dashboard) ---
function renderCategoriesGrid() {
  if (!categoriesCardsContainer) return;
  const isKh = currentLang === 'kh';
  const activeLabel = isKh ? 'ផលិតផលសកម្ម' : 'Active Products';
  const renameBtn = isKh ? '✏️ ប្តូរឈ្មោះ' : '✏️ Rename';
  const deleteBtn = isKh ? '🗑️ លុប' : '🗑️ Delete';
  categoriesCardsContainer.innerHTML = categoriesList.map((cat, index) => {
    const count = appsList.filter(a => a.category === cat.name || a.category === cat.id).length;
    return `
      <div class="category-card" style="display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 18px 20px; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 14px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <span style="font-size: 2rem; background: var(--bg-card); padding: 8px 12px; border-radius: 10px; border: 1px solid var(--border-color); cursor: pointer;" onclick="changeCategoryIcon(${index})" title="Click to change Emoji Icon">${cat.icon || '📁'}</span>
          <div>
            <h4 style="font-weight: 700; font-size: 1.05rem; color: var(--text-primary); margin-bottom: 4px;">${cat.name}</h4>
            <span style="font-size: 0.82rem; color: var(--text-muted);">${count} ${activeLabel}</span>
          </div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm" onclick="editCategoryName(${index})" style="padding: 6px 12px; font-size: 0.82rem;">${renameBtn}</button>
          <button class="btn btn-danger btn-sm" onclick="deleteCategory(${index})" style="padding: 6px 12px; font-size: 0.82rem; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);">${deleteBtn}</button>
        </div>
      </div>
    `;
  }).join('');
}

// Global Category Action Handlers
window.editCategoryName = function(index) {
  const cat = categoriesList[index];
  if (!cat) return;
  const newName = prompt(`Rename category "${cat.name}" to:`, cat.name);
  if (newName && newName.trim() && newName.trim() !== cat.name) {
    const oldName = cat.name;
    cat.name = newName.trim();
    appsList.forEach(app => {
      if (app.category === oldName || app.category === cat.id) {
        app.category = cat.name;
      }
    });
    localStorage.setItem('acmart_apps', JSON.stringify(appsList));
    localStorage.setItem('acmart_categories', JSON.stringify(categoriesList));
    renderAllSections();
    showToast(`✓ Category renamed to "${cat.name}"`);
  }
};

window.changeCategoryIcon = function(index) {
  const cat = categoriesList[index];
  if (!cat) return;
  const newIcon = prompt(`Enter new Emoji or Icon for "${cat.name}":`, cat.icon || '📁');
  if (newIcon && newIcon.trim()) {
    cat.icon = newIcon.trim();
    localStorage.setItem('acmart_categories', JSON.stringify(categoriesList));
    renderAllSections();
    showToast(`✓ Icon updated for "${cat.name}"`);
  }
};

window.deleteCategory = function(index) {
  const cat = categoriesList[index];
  if (!cat) return;
  if (confirm(`Are you sure you want to delete category "${cat.name}"?`)) {
    categoriesList.splice(index, 1);
    localStorage.setItem('acmart_categories', JSON.stringify(categoriesList));
    renderAllSections();
    showToast(`🗑️ Category "${cat.name}" deleted.`);
  }
};

// --- FULL ORDERS TABLE (Dashboard Orders Tab) ---
function renderFullOrdersTable(filteredOrders = null) {
  if (!fullOrdersTableBody) return;
  const isKh = currentLang === 'kh';
  const list = filteredOrders || ordersList;
  const receiptBtnText = isKh ? 'វិក្កយបត្រ & កូដ' : 'Receipt & Key';
  fullOrdersTableBody.innerHTML = list.map(order => {
    const statusText = isKh ? (order.status === 'Paid' ? '● បានបង់ប្រាក់' : `● ${order.status}`) : `● ${order.status}`;
    return `
    <tr>
      <td style="font-weight: 700; color: #38bdf8;">${order.id}</td>
      <td style="font-size: 0.85rem; color: #94a3b8;">${order.date}</td>
      <td>
        <div style="font-weight: 600;">${order.customerName}</div>
        <div style="font-size: 0.78rem; color: #94a3b8;">${order.customerEmail}</div>
      </td>
      <td style="font-weight: 600;">${order.appName}</td>
      <td style="font-weight: 800; color: var(--brand-primary);">${order.amount}</td>
      <td><span class="status-badge" style="background: rgba(220, 38, 38, 0.15); color: #f87171;">🇰🇭 ${order.paymentMethod}</span></td>
      <td><span class="status-badge status-paid">${statusText}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="viewLicenseKey('${order.id}')" style="padding: 4px 10px; font-size: 0.78rem;">
          ${receiptBtnText}
        </button>
      </td>
    </tr>
    `;
  }).join('');
}

window.filterOrdersByStatus = function(status) {
  if (status === 'all') {
    renderFullOrdersTable(ordersList);
  } else {
    const filtered = ordersList.filter(o => o.status === status);
    renderFullOrdersTable(filtered);
  }
};

// --- CUSTOMERS DIRECTORY (Dashboard) ---
function renderCustomersTable() {
  if (!customersTableBody) return;
  const isKh = currentLang === 'kh';
  const ordersLabel = isKh ? 'កុម្ម៉ង់' : 'orders';
  customersTableBody.innerHTML = customersList.map(c => {
    const statusText = isKh ? (c.status === 'Active Buyer' ? '● អតិថិជនសកម្ម' : `● ${c.status}`) : `● ${c.status}`;
    return `
    <tr>
      <td style="font-weight: 700; color: #fff;">${c.name}</td>
      <td style="color: #94a3b8;">${c.contact}</td>
      <td style="font-weight: 700;">${c.orders} ${ordersLabel}</td>
      <td style="font-weight: 800; color: var(--brand-primary);">${c.spent}</td>
      <td><span class="tech-tag">${c.latest}</span></td>
      <td><span class="status-badge status-paid">${statusText}</span></td>
    </tr>
    `;
  }).join('');
}

// --- DISCOUNT COUPONS (Dashboard) ---
function renderCouponsTable() {
  if (!couponsTableBody) return;
  const isKh = currentLang === 'kh';
  const usesLabel = isKh ? 'ដង' : 'times';
  const copyBtnText = isKh ? 'ចម្លងកូដ' : 'Copy Code';
  couponsTableBody.innerHTML = couponsList.map(cp => `
    <tr>
      <td style="font-weight: 800; color: #38bdf8; font-family: monospace; font-size: 1rem;">${cp.code}</td>
      <td style="font-weight: 700; color: #10b981;">${cp.discount}</td>
      <td>${cp.uses} ${usesLabel}</td>
      <td style="color: #94a3b8;">${cp.expires}</td>
      <td><span class="status-badge status-paid">● ${cp.status}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="copyCoupon('${cp.code}')" style="padding: 4px 8px; font-size: 0.78rem;">${copyBtnText}</button>
      </td>
    </tr>
  `).join('');
}

window.copyCoupon = function(code) {
  navigator.clipboard.writeText(code);
  showToast(`📋 Copied coupon code "${code}" to clipboard!`);
};

// --- LIVE DEMO SHOWCASE (Screenshots Gallery & Simulator) ---
let currentDemoApp = null;
let currentGalleryIndex = 0;
let currentDemoScreenshots = [];

window.openLiveDemo = function(appId) {
  const app = (appsList && appsList.find(a => a.id === appId)) || (appsList && appsList[0]) || initialApps[0];
  if (!app) return;
  currentDemoApp = app;

  const isKh = currentLang === 'kh';
  const title = isKh && app.khName ? app.khName : app.name;
  const description = isKh && app.khDesc ? app.khDesc : app.desc;

  if (demoModalAppTitle) demoModalAppTitle.textContent = title;
  if (demoModalCategory) demoModalCategory.textContent = app.category;

  const priceEl = document.getElementById('demoModalPrice');
  if (priceEl) {
    priceEl.innerHTML = `$${app.price}.00 ${app.originalPrice ? `<span style="text-decoration: line-through; font-size: 0.85rem; color: var(--text-muted); margin-left: 6px; font-weight: normal;">$${app.originalPrice}</span>` : ''}`;
  }

  // Description & Titles
  const descTitleEl = document.getElementById('detailDescTitle');
  if (descTitleEl) descTitleEl.textContent = isKh ? "អំពីកម្មវិធី (About Application)" : "About This Application";

  const fullDescEl = document.getElementById('demoModalFullDesc');
  if (fullDescEl) fullDescEl.textContent = description;

  const howTitleEl = document.getElementById('detailHowItWorksTitle');
  if (howTitleEl) howTitleEl.textContent = isKh ? "របៀបដំណើរការរបស់កម្មវិធី (How It Works)" : "How It Works & Setup";

  // How It Works Steps
  const howItWorksEl = document.getElementById('demoModalHowItWorks');
  if (howItWorksEl) {
    if (isKh) {
      howItWorksEl.innerHTML = `
        <div style="background: var(--bg-card); padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="font-weight: 700; color: var(--brand-primary); margin-bottom: 2px;">១. ពិនិត្យរូបភាព Demo</div>
          <div style="color: var(--text-secondary); font-size: 0.82rem;">មើលរូបភាពអេក្រង់ជាក់ស្តែង និងមុខងារមុនសម្រេចចិត្តទិញ</div>
        </div>
        <div style="background: var(--bg-card); padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="font-weight: 700; color: var(--brand-primary); margin-bottom: 2px;">២. ស្កេនទូទាត់ ABA KHQR</div>
          <div style="color: var(--text-secondary); font-size: 0.82rem;">ទូទាត់រហ័សទាន់ចិត្តជាមួយ ABA Mobile ឬ Bakong</div>
        </div>
        <div style="background: var(--bg-card); padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="font-weight: 700; color: var(--brand-primary); margin-bottom: 2px;">៣. ទទួល Source Code ភ្លាមៗ</div>
          <div style="color: var(--text-secondary); font-size: 0.82rem;">ទទួលបានកូដដើមពេញលេញ ជាមួយជំនួយការដំឡើងតាម Telegram</div>
        </div>
      `;
    } else {
      howItWorksEl.innerHTML = `
        <div style="background: var(--bg-card); padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="font-weight: 700; color: var(--brand-primary); margin-bottom: 2px;">1. Review Screenshots</div>
          <div style="color: var(--text-secondary); font-size: 0.82rem;">Inspect high-res UI screenshots, catalog & dashboard</div>
        </div>
        <div style="background: var(--bg-card); padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="font-weight: 700; color: var(--brand-primary); margin-bottom: 2px;">2. Scan ABA KHQR</div>
          <div style="color: var(--text-secondary); font-size: 0.82rem;">Instant checkout with ABA Mobile, Bakong, or Card</div>
        </div>
        <div style="background: var(--bg-card); padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="font-weight: 700; color: var(--brand-primary); margin-bottom: 2px;">3. Instant Code Delivery</div>
          <div style="color: var(--text-secondary); font-size: 0.82rem;">Receive clean unminified source code + Telegram support</div>
        </div>
      `;
    }
  }

  // Features list
  const featTitleEl = document.getElementById('detailFeaturesTitle');
  if (featTitleEl) featTitleEl.textContent = isKh ? "មុខងារសំខាន់ៗដែលរួមបញ្ចូល (Included Features)" : "Key Features Included";

  const featuresListEl = document.getElementById('demoModalFeaturesList');
  if (featuresListEl && Array.isArray(app.features)) {
    featuresListEl.innerHTML = app.features.map(f => `
      <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.88rem; color: var(--text-secondary);">
        <svg style="color: #10b981; flex-shrink: 0; margin-top: 2px;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Tech stack
  const techTitleEl = document.getElementById('detailTechTitle');
  if (techTitleEl) techTitleEl.textContent = isKh ? "បច្ចេកវិទ្យាប្រើប្រាស់ (Technology Stack)" : "Technology Stack";

  const techTagsEl = document.getElementById('demoModalTechTags');
  if (techTagsEl && Array.isArray(app.techStack)) {
    techTagsEl.innerHTML = app.techStack.map(t => `<span class="tech-tag">${t}</span>`).join(' ');
  }

  // Telegram direct link with app title and price
  const tgBtn = document.getElementById('demoTelegramChatBtn');
  const tgTextEl = document.getElementById('demoTelegramBtnText');
  if (tgBtn) {
    const tgMsg = isKh 
      ? `សួស្តីបង ខ្ញុំចាប់អារម្មណ៍ចង់ទិញកម្មវិធី "${app.name}" (តម្លៃ $${app.price}) នៅលើ AC MART សូមជួយប្រឹក្សាផងបង។`
      : `Hello AC MART, I am interested in purchasing "${app.name}" ($${app.price}). Please assist me.`;
    tgBtn.href = `https://t.me/Acmart6666?text=${encodeURIComponent(tgMsg)}`;
  }
  if (tgTextEl) {
    tgTextEl.textContent = isKh ? "ឆាតសួរព័ត៌មាន (Telegram)" : "Chat on Telegram";
  }

  const buyBtnText = document.getElementById('demoModalBuyBtnText');
  if (buyBtnText) {
    buyBtnText.textContent = isKh ? `ទិញឥឡូវនេះ ($${app.price})` : `Buy Now ($${app.price})`;
  }

  // Extract screenshots for image demo
  if (Array.isArray(app.screenshots) && app.screenshots.length > 0) {
    currentDemoScreenshots = app.screenshots;
  } else if (app.previewImage) {
    currentDemoScreenshots = [app.previewImage];
  } else {
    currentDemoScreenshots = ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&auto=format&fit=crop&q=80&fm=webp"];
  }

  currentGalleryIndex = 0;
  renderGalleryView();

  if (demoModalBuyBtn) {
    demoModalBuyBtn.onclick = () => {
      closeModal(demoSandboxModal);
      openCheckout(app.id);
    };
  }

  openModal(demoSandboxModal);
};

window.switchDemoMode = function(mode) {
  const galleryView = document.getElementById('demoGalleryView');
  const simWrapper = document.getElementById('demoSimulatorWrapper');
  const btnGallery = document.getElementById('btnDemoModeGallery');
  const btnSim = document.getElementById('btnDemoModeSimulator');
  const deviceBtns = document.getElementById('demoDeviceViewportBtns');

  if (mode === 'gallery') {
    if (galleryView) galleryView.style.display = 'flex';
    if (simWrapper) simWrapper.style.display = 'none';
    if (btnGallery) btnGallery.classList.add('active');
    if (btnSim) btnSim.classList.remove('active');
    if (deviceBtns) deviceBtns.style.display = 'none';
  } else {
    if (galleryView) galleryView.style.display = 'none';
    if (simWrapper) simWrapper.style.display = 'flex';
    if (btnGallery) btnGallery.classList.remove('active');
    if (btnSim) btnSim.classList.add('active');
    if (deviceBtns) deviceBtns.style.display = 'flex';
  }
};

window.renderGalleryView = function() {
  const mainImg = document.getElementById('demoGalleryMainImg');
  const counter = document.getElementById('demoGalleryCounter');
  const caption = document.getElementById('demoGalleryCaption');
  const thumbsContainer = document.getElementById('demoGalleryThumbnails');

  if (!currentDemoScreenshots || currentDemoScreenshots.length === 0) return;

  const currentUrl = currentDemoScreenshots[currentGalleryIndex];
  if (mainImg) {
    mainImg.style.opacity = '0.3';
    mainImg.src = currentUrl;
    setTimeout(() => { mainImg.style.opacity = '1'; }, 80);
  }

  if (counter) {
    counter.textContent = `📸 Screenshot ${currentGalleryIndex + 1} of ${currentDemoScreenshots.length}`;
  }

  if (caption && currentDemoApp) {
    caption.textContent = `${currentDemoApp.name} • Screen View #${currentGalleryIndex + 1}`;
  }

  if (thumbsContainer) {
    thumbsContainer.innerHTML = currentDemoScreenshots.map((url, idx) => `
      <img src="${url}" class="demo-gallery-thumb ${idx === currentGalleryIndex ? 'active' : ''}" onclick="setGalleryImage(${idx})" alt="Thumb ${idx + 1}">
    `).join('');
  }
};

window.setGalleryImage = function(idx) {
  if (idx >= 0 && idx < currentDemoScreenshots.length) {
    currentGalleryIndex = idx;
    renderGalleryView();
  }
};


// =========================================================================
// CATEGORY-SPECIFIC LIVE DEMO ENGINES
// Replaces generic demo shop with working interactive application simulators
// tailored to each software product category before customers purchase.
// =========================================================================

function generateDemoFrameHtml(app) {
  const type = (app.demoType || '').toLowerCase();
  const cat = (app.category || '').toLowerCase();
  const name = (app.name || '').toLowerCase();

  if (type === 'pos' || cat.includes('pos') || cat.includes('retail') || name.includes('pos') || name.includes('inventory')) {
    return generatePosDemoHtml(app);
  }
  if (type === 'delivery' || type === 'food' || cat.includes('food') || cat.includes('delivery') || name.includes('food') || name.includes('kitchen') || name.includes('restaurant')) {
    return generateFoodDeliveryDemoHtml(app);
  }
  if (type === 'clinic' || cat.includes('clinic') || cat.includes('medical') || cat.includes('health') || name.includes('clinic') || name.includes('doctor')) {
    return generateClinicDemoHtml(app);
  }
  if (type === 'realestate' || cat.includes('estate') || cat.includes('property') || name.includes('estate')) {
    return generateRealEstateDemoHtml(app);
  }
  if (type === 'saas' || cat.includes('saas') || cat.includes('boilerplate') || name.includes('saas') || name.includes('launchpad')) {
    return generateSaasDemoHtml(app);
  }
  if (type === 'ecommerce' || cat.includes('commerce') || cat.includes('store') || cat.includes('shop')) {
    return generateEcommerceDemoHtml(app);
  }
  return generateGenericAppDemoHtml(app);
}

// Common Shared Styles
function getDemoBaseCss() {
  return `
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
    body { background: #0b0f19; color: #f8fafc; overflow-x: hidden; min-height: 100vh; display: flex; flex-direction: column; }
    
    /* Top Bar */
    .demo-topbar { background: #111827; border-bottom: 1px solid #1f2937; padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
    .demo-brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 1.1rem; color: #fff; }
    .demo-badge-cat { background: rgba(249, 115, 22, 0.15); color: #f97316; padding: 4px 10px; border-radius: 99px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(249, 115, 22, 0.3); }
    .demo-status-pill { background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 99px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 6px; }
    .status-dot { width: 7px; height: 7px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    
    /* Layout */
    .demo-body { flex: 1; padding: 20px; max-width: 1100px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 18px; }
    
    /* Tabs Header */
    .demo-tabs { display: flex; gap: 8px; background: #111827; padding: 6px; border-radius: 10px; border: 1px solid #1f2937; width: fit-content; }
    .demo-tab-btn { background: transparent; color: #94a3b8; border: none; padding: 8px 16px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: 0.2s; display: flex; align-items: center; gap: 6px; }
    .demo-tab-btn.active { background: #f97316; color: #fff; }
    
    /* Cards */
    .demo-card { background: #111827; border: 1px solid #1f2937; border-radius: 14px; padding: 20px; }
    
    /* Buttons */
    .btn-act { background: #f97316; color: #fff; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: 0.2s; display: inline-flex; align-items: center; gap: 6px; }
    .btn-act:hover { background: #ea580c; transform: translateY(-1px); }
    .btn-outline { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; padding: 8px 16px; border-radius: 8px; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: 0.2s; }
    .btn-outline:hover { background: #334155; }
    
    /* KHQR Overlay */
    .khqr-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(5px); z-index: 200; display: none; align-items: center; justify-content: center; padding: 20px; }
    .khqr-overlay.active { display: flex; }
    .khqr-box { background: #dc2626; border-radius: 18px; width: 100%; max-width: 320px; color: white; padding: 24px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.7); }
    .khqr-qr-wrap { background: white; border-radius: 14px; padding: 16px; margin: 16px auto; width: 180px; height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .btn-pay-sim { background: #10b981; color: white; border: none; width: 100%; padding: 12px; border-radius: 8px; font-weight: 800; font-size: 0.95rem; cursor: pointer; margin-top: 12px; }
    .btn-pay-close { background: rgba(255,255,255,0.2); color: white; border: none; width: 100%; padding: 8px; border-radius: 6px; font-size: 0.8rem; cursor: pointer; margin-top: 8px; }
    
    /* Toast */
    .demo-toast { position: fixed; bottom: 20px; right: 20px; background: #10b981; color: white; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 0.88rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5); z-index: 300; display: none; }
  `;
}

// 1. POS TERMINAL DEMO ENGINE
function generatePosDemoHtml(app) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${app.name} - POS Terminal Simulator</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    ${getDemoBaseCss()}
    .pos-grid { display: grid; grid-template-columns: 1fr 340px; gap: 20px; flex: 1; }
    @media (max-width: 820px) { .pos-grid { grid-template-columns: 1fr; } }
    .pos-categories { display: flex; gap: 8px; margin-bottom: 14px; overflow-x: auto; }
    .pos-cat-btn { background: #1e293b; color: #94a3b8; border: 1px solid #334155; padding: 8px 16px; border-radius: 8px; font-size: 0.82rem; font-weight: 700; cursor: pointer; white-space: nowrap; }
    .pos-cat-btn.active { background: #f97316; color: white; border-color: #f97316; }
    .pos-items-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; }
    .pos-item-card { background: #111827; border: 1px solid #1f2937; border-radius: 12px; padding: 14px; text-align: center; cursor: pointer; transition: 0.2s; user-select: none; }
    .pos-item-card:hover { border-color: #f97316; transform: translateY(-2px); background: #162032; }
    .pos-item-icon { font-size: 2.2rem; margin-bottom: 8px; }
    .pos-item-name { font-weight: 700; font-size: 0.88rem; margin-bottom: 4px; color: #f8fafc; }
    .pos-item-price { font-weight: 800; color: #10b981; font-size: 0.95rem; }
    
    /* Register Slip */
    .register-panel { background: #111827; border: 1px solid #1f2937; border-radius: 14px; display: flex; flex-direction: column; overflow: hidden; }
    .register-header { padding: 14px; border-bottom: 1px solid #1f2937; display: flex; justify-content: space-between; align-items: center; background: #0f172a; }
    .register-items { flex: 1; max-height: 320px; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 8px; }
    .register-row { display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 8px 10px; border-radius: 8px; font-size: 0.82rem; }
    .qty-controls { display: flex; align-items: center; gap: 6px; }
    .qty-btn { background: #334155; color: white; border: none; width: 22px; height: 22px; border-radius: 4px; cursor: pointer; font-weight: bold; }
    .register-summary { padding: 14px; border-top: 1px solid #1f2937; background: #0f172a; font-size: 0.85rem; }
    .summary-line { display: flex; justify-content: space-between; margin-bottom: 6px; color: #94a3b8; }
    .summary-total { display: flex; justify-content: space-between; font-weight: 800; font-size: 1.15rem; color: #fff; margin-top: 8px; padding-top: 8px; border-top: 1px dashed #334155; }
    .tender-actions { padding: 12px; display: flex; flex-direction: column; gap: 8px; background: #111827; border-top: 1px solid #1f2937; }
    
    /* Thermal Slip Modal */
    .receipt-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: none; align-items: center; justify-content: center; z-index: 250; padding: 20px; }
    .receipt-modal.active { display: flex; }
    .thermal-paper { background: #fff; color: #111; font-family: 'JetBrains Mono', monospace; width: 100%; max-width: 300px; padding: 20px; border-radius: 8px; box-shadow: 0 20px 40px rgba(0,0,0,0.6); font-size: 0.78rem; line-height: 1.4; }
  </style>
</head>
<body>
  <div class="demo-topbar">
    <div class="demo-brand">
      <span>💳</span>
      <span>${app.name}</span>
      <span class="demo-badge-cat">POS & Cashier Simulator</span>
    </div>
    <div class="demo-status-pill">
      <span class="status-dot"></span>
      <span>Terminal #01 (Cashier: Dara) • Online</span>
    </div>
  </div>

  <div class="demo-body">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 800;">Cashier POS Register Terminal</h2>
        <p style="color: #94a3b8; font-size: 0.85rem;">Click menu items to ring up an order, test tax calculations, and simulate instant KHQR checkout or thermal receipt printing.</p>
      </div>
      <button class="btn-outline" onclick="resetRegister()">Clear Register</button>
    </div>

    <div class="pos-grid">
      <!-- Left: Item Menu -->
      <div>
        <div class="pos-categories">
          <button class="pos-cat-btn active" onclick="filterCat('all')">All Items</button>
          <button class="pos-cat-btn" onclick="filterCat('drinks')">☕ Beverages</button>
          <button class="pos-cat-btn" onclick="filterCat('bakery')">🥐 Bakery</button>
          <button class="pos-cat-btn" onclick="filterCat('meals')">🥪 Fast Meals</button>
        </div>

        <div class="pos-items-grid" id="posGrid">
          <div class="pos-item-card" data-cat="drinks" onclick="addItem('Iced Americano', 2.50)">
            <div class="pos-item-icon">☕</div>
            <div class="pos-item-name">Iced Americano</div>
            <div class="pos-item-price">$2.50</div>
          </div>
          <div class="pos-item-card" data-cat="drinks" onclick="addItem('Caramel Macchiato', 3.50)">
            <div class="pos-item-icon">🥤</div>
            <div class="pos-item-name">Caramel Macchiato</div>
            <div class="pos-item-price">$3.50</div>
          </div>
          <div class="pos-item-card" data-cat="bakery" onclick="addItem('Butter Croissant', 2.00)">
            <div class="pos-item-icon">🥐</div>
            <div class="pos-item-name">Butter Croissant</div>
            <div class="pos-item-price">$2.00</div>
          </div>
          <div class="pos-item-card" data-cat="meals" onclick="addItem('Club Sandwich', 4.50)">
            <div class="pos-item-icon">🥪</div>
            <div class="pos-item-name">Club Sandwich</div>
            <div class="pos-item-price">$4.50</div>
          </div>
          <div class="pos-item-card" data-cat="drinks" onclick="addItem('Matcha Green Tea', 3.00)">
            <div class="pos-item-icon">🍵</div>
            <div class="pos-item-name">Matcha Green Tea</div>
            <div class="pos-item-price">$3.00</div>
          </div>
          <div class="pos-item-card" data-cat="bakery" onclick="addItem('Chocolate Muffin', 2.20)">
            <div class="pos-item-icon">🧁</div>
            <div class="pos-item-name">Chocolate Muffin</div>
            <div class="pos-item-price">$2.20</div>
          </div>
        </div>
      </div>

      <!-- Right: Register Ticket -->
      <div class="register-panel">
        <div class="register-header">
          <span style="font-weight: 800; font-size: 0.9rem;">Receipt Ticket #T-104</span>
          <span style="font-size: 0.75rem; color: #10b981; background: rgba(16,185,129,0.1); padding: 2px 6px; border-radius: 4px;">Active Shift</span>
        </div>

        <div class="register-items" id="ticketItems">
          <div style="text-align: center; color: #64748b; padding: 40px 10px; font-size: 0.85rem;">Tap any item to ring up</div>
        </div>

        <div class="register-summary">
          <div class="summary-line"><span>Subtotal:</span><span id="posSubtotal">$0.00</span></div>
          <div class="summary-line"><span>VAT (10%):</span><span id="posTax">$0.00</span></div>
          <div class="summary-total"><span>Total USD:</span><span id="posTotal">$0.00</span></div>
          <div class="summary-line" style="font-size: 0.78rem; margin-top: 4px;"><span>Total KHR:</span><span id="posTotalKhr">0 ៛</span></div>
        </div>

        <div class="tender-actions">
          <button class="btn-act" style="background: #dc2626; justify-content: center;" onclick="openKhqr()">🇰🇭 Scan ABA KHQR Pay</button>
          <button class="btn-outline" style="justify-content: center;" onclick="showThermalReceipt()">🧾 Print Thermal Receipt (80mm)</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Thermal Receipt Modal -->
  <div class="receipt-modal" id="receiptModal">
    <div class="thermal-paper">
      <div style="text-align: center; margin-bottom: 10px;">
        <h3 style="font-size: 1.05rem; font-weight: bold;">${app.name}</h3>
        <p>Phnom Penh, Cambodia</p>
        <p>Tel: +855 16 905 354</p>
        <p>--------------------------------</p>
      </div>
      <div id="receiptContent"></div>
      <div style="text-align: center; margin-top: 10px;">
        <p>--------------------------------</p>
        <p style="font-weight: bold;">THANK YOU FOR YOUR BUSINESS!</p>
        <p style="margin-top: 4px; font-size: 0.7rem; color: #666;">Powered by ${app.name}</p>
        <button onclick="closeReceipt()" style="margin-top: 14px; background: #111; color: #fff; border: none; padding: 6px 14px; border-radius: 4px; cursor: pointer; width: 100%;">Close Receipt</button>
      </div>
    </div>
  </div>

  <!-- KHQR Modal -->
  <div class="khqr-overlay" id="khqrOverlay">
    <div class="khqr-box">
      <h3>🇰🇭 ABA KHQR</h3>
      <p style="font-size: 0.78rem; opacity: 0.9;">National Bank of Cambodia</p>
      <div class="khqr-qr-wrap">
        <svg width="140" height="140" viewBox="0 0 100 100" fill="#000">
          <path d="M0 0h30v30H0zM10 10h10v10H10zM70 0h30v30H70zM80 10h10v10H80zM0 70h30v30H0zM10 80h10v10H10zM40 10h10v10H40zM50 20h10v10H50zM10 40h10v10H10zM20 50h10v10H20zM40 40h20v20H40zM70 40h10v10H70zM80 50h20v10H80zM40 70h10v20H40zM60 70h20v10H60zM70 80h10v20H70zM90 70h10v30H90z"/>
        </svg>
      </div>
      <div style="font-size: 1.4rem; font-weight: 800;" id="khqrPosTotal">$0.00</div>
      <button class="btn-pay-sim" onclick="finishPayment()">✓ Simulate KHQR Scan & Pay</button>
      <button class="btn-pay-close" onclick="closeKhqr()">Cancel</button>
    </div>
  </div>

  <div class="demo-toast" id="toastMsg">✓ Action Executed</div>

  <script>
    let ticket = [];
    function addItem(name, price) {
      const exist = ticket.find(i => i.name === name);
      if (exist) { exist.qty += 1; } else { ticket.push({ name, price, qty: 1 }); }
      updateTicket();
      showToast("Added " + name);
    }
    function updateQty(idx, delta) {
      ticket[idx].qty += delta;
      if (ticket[idx].qty <= 0) ticket.splice(idx, 1);
      updateTicket();
    }
    function updateTicket() {
      const container = document.getElementById('ticketItems');
      if (ticket.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: #64748b; padding: 40px 10px; font-size: 0.85rem;">Tap any item to ring up</div>';
        document.getElementById('posSubtotal').textContent = '$0.00';
        document.getElementById('posTax').textContent = '$0.00';
        document.getElementById('posTotal').textContent = '$0.00';
        document.getElementById('posTotalKhr').textContent = '0 ៛';
        return;
      }
      let sub = 0;
      container.innerHTML = ticket.map((item, idx) => {
        const itemTotal = item.price * item.qty;
        sub += itemTotal;
        return '<div class="register-row"><div><b>' + item.name + '</b><br><small>$' + item.price.toFixed(2) + ' each</small></div><div class="qty-controls"><button class="qty-btn" onclick="updateQty(' + idx + ', -1)">-</button><span>' + item.qty + '</span><button class="qty-btn" onclick="updateQty(' + idx + ', 1)">+</button><span style="margin-left:8px; font-weight:bold; color:#10b981;">$' + itemTotal.toFixed(2) + '</span></div></div>';
      }).join('');
      const tax = sub * 0.10;
      const total = sub + tax;
      const khr = Math.round(total * 4100);
      document.getElementById('posSubtotal').textContent = '$' + sub.toFixed(2);
      document.getElementById('posTax').textContent = '$' + tax.toFixed(2);
      document.getElementById('posTotal').textContent = '$' + total.toFixed(2);
      document.getElementById('posTotalKhr').textContent = khr.toLocaleString() + ' ៛';
    }
    function resetRegister() { ticket = []; updateTicket(); showToast("Register cleared"); }
    function openKhqr() {
      if (ticket.length === 0) { alert("Please ring up at least one item first!"); return; }
      document.getElementById('khqrPosTotal').textContent = document.getElementById('posTotal').textContent;
      document.getElementById('khqrOverlay').classList.add('active');
    }
    function closeKhqr() { document.getElementById('khqrOverlay').classList.remove('active'); }
    function finishPayment() {
      closeKhqr();
      showToast("🎉 KHQR Paid! Order Settled.");
      showThermalReceipt();
      ticket = [];
      updateTicket();
    }
    function showThermalReceipt() {
      const now = new Date();
      let total = document.getElementById('posTotal').textContent;
      let html = '<p>Date: ' + now.toLocaleDateString() + ' ' + now.toLocaleTimeString() + '</p><p>Cashier: Dara | Reg: #01</p><p>--------------------------------</p>';
      if (ticket.length > 0) {
        ticket.forEach(i => { html += '<p>' + i.qty + 'x ' + i.name + ' - $' + (i.price * i.qty).toFixed(2) + '</p>'; });
      } else {
        html += '<p>1x Sample Transaction - ' + total + '</p>';
      }
      html += '<p>--------------------------------</p><p>TOTAL USD: ' + total + '</p><p>PAYMENT: ABA KHQR (SETTLED)</p>';
      document.getElementById('receiptContent').innerHTML = html;
      document.getElementById('receiptModal').classList.add('active');
    }
    function closeReceipt() { document.getElementById('receiptModal').classList.remove('active'); }
    function filterCat(cat) {
      document.querySelectorAll('.pos-cat-btn').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');
      document.querySelectorAll('.pos-item-card').forEach(c => {
        c.style.display = (cat === 'all' || c.dataset.cat === cat) ? 'block' : 'none';
      });
    }
    function showToast(msg) {
      const t = document.getElementById('toastMsg');
      t.textContent = msg;
      t.style.display = 'block';
      setTimeout(() => { t.style.display = 'none'; }, 2000);
    }
  </script>
</body>
</html>`;
}

// 2. FOOD DELIVERY & MULTI-KITCHEN DEMO ENGINE
function generateFoodDeliveryDemoHtml(app) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${app.name} - Food & Delivery Multi-Kitchen Simulator</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    ${getDemoBaseCss()}
    .food-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; margin-top: 14px; }
    .food-card { background: #111827; border: 1px solid #1f2937; border-radius: 14px; overflow: hidden; display: flex; flex-direction: column; transition: 0.2s; }
    .food-card:hover { border-color: #f97316; transform: translateY(-2px); }
    .food-img { height: 130px; background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 3rem; }
    .food-body { padding: 14px; flex: 1; display: flex; flex-direction: column; }
    .food-title { font-weight: 800; font-size: 0.95rem; margin-bottom: 4px; }
    .food-sub { font-size: 0.78rem; color: #94a3b8; margin-bottom: 12px; }
    .food-price-row { margin-top: auto; display: flex; justify-content: space-between; align-items: center; }
    
    /* KDS Grid */
    .kds-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; margin-top: 14px; }
    .kds-card { background: #111827; border-radius: 12px; padding: 14px; border-left: 4px solid #f97316; }
    .kds-card.ready { border-left-color: #10b981; }
    
    /* Driver Timeline */
    .timeline { display: flex; flex-direction: column; gap: 16px; margin-top: 20px; }
    .timeline-step { display: flex; gap: 14px; align-items: flex-start; }
    .step-dot { width: 32px; height: 32px; border-radius: 50%; background: #1e293b; border: 2px solid #334155; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0; }
    .step-dot.done { background: #10b981; border-color: #10b981; color: white; }
    .step-dot.active { background: #f97316; border-color: #f97316; color: white; }
  </style>
</head>
<body>
  <div class="demo-topbar">
    <div class="demo-brand">
      <span>🛵</span>
      <span>${app.name}</span>
      <span class="demo-badge-cat">Multi-Kitchen & Dispatch</span>
    </div>
    <div class="demo-status-pill">
      <span class="status-dot"></span>
      <span>Kitchen Live • Dispatch Active</span>
    </div>
  </div>

  <div class="demo-body">
    <div class="demo-tabs">
      <button class="demo-tab-btn active" id="tabMenu" onclick="showTab('menu')">🍔 Customer Menu</button>
      <button class="demo-tab-btn" id="tabKds" onclick="showTab('kds')">👨‍🍳 Kitchen Display (KDS)</button>
      <button class="demo-tab-btn" id="tabDriver" onclick="showTab('driver')">📍 Live Delivery Tracker</button>
    </div>

    <!-- VIEW 1: CUSTOMER MENU -->
    <div id="viewMenu">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
        <h3 style="font-size: 1.15rem; font-weight: 800;">Popular Chef Specialties</h3>
        <span style="font-size: 0.85rem; color: #10b981;">🛵 Free Delivery to Toul Kork</span>
      </div>

      <div class="food-grid">
        <div class="food-card">
          <div class="food-img">🍔</div>
          <div class="food-body">
            <div class="food-title">Double Truffle Cheeseburger</div>
            <div class="food-sub">Angus beef patty, caramelized onions & truffle cheddar</div>
            <div class="food-price-row">
              <span style="font-weight: 800; color: #10b981; font-size: 1.1rem;">$5.50</span>
              <button class="btn-act" onclick="orderFood('Double Truffle Cheeseburger', 5.50)">+ Order</button>
            </div>
          </div>
        </div>

        <div class="food-card">
          <div class="food-img">🍕</div>
          <div class="food-body">
            <div class="food-title">Artisan Pepperoni 12"</div>
            <div class="food-sub">Hand-stretched sourdough crust, marinara & fresh mozzarella</div>
            <div class="food-price-row">
              <span style="font-weight: 800; color: #10b981; font-size: 1.1rem;">$8.90</span>
              <button class="btn-act" onclick="orderFood('Artisan Pepperoni 12\"', 8.90)">+ Order</button>
            </div>
          </div>
        </div>

        <div class="food-card">
          <div class="food-img">🍗</div>
          <div class="food-body">
            <div class="food-title">Crispy Korean Glazed Wings</div>
            <div class="food-sub">6pcs double fried wings with sweet garlic soy glaze</div>
            <div class="food-price-row">
              <span style="font-weight: 800; color: #10b981; font-size: 1.1rem;">$4.20</span>
              <button class="btn-act" onclick="orderFood('Crispy Korean Wings', 4.20)">+ Order</button>
            </div>
          </div>
        </div>

        <div class="food-card">
          <div class="food-img">🧋</div>
          <div class="food-body">
            <div class="food-title">Brown Sugar Pearl Milk Tea</div>
            <div class="food-sub">Slow-cooked tapioca boba, organic fresh milk & roasted tea</div>
            <div class="food-price-row">
              <span style="font-weight: 800; color: #10b981; font-size: 1.1rem;">$2.80</span>
              <button class="btn-act" onclick="orderFood('Brown Sugar Pearl Boba', 2.80)">+ Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VIEW 2: KITCHEN DISPLAY -->
    <div id="viewKds" style="display: none;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
        <h3 style="font-size: 1.15rem; font-weight: 800;">Real-Time Kitchen Order Tickets</h3>
        <span style="background: rgba(249,115,22,0.15); color: #f97316; padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: bold;">3 Orders Active</span>
      </div>

      <div class="kds-grid" id="kdsContainer">
        <div class="kds-card">
          <div style="display: flex; justify-content: space-between; font-weight: 800; margin-bottom: 6px;">
            <span>Ticket #402</span>
            <span style="color: #f97316;">Cooking (3 min)</span>
          </div>
          <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 8px;">• 1x Double Truffle Cheeseburger<br>• Extra Cheddar Melt</p>
          <button class="btn-act" style="width: 100%; justify-content: center; font-size: 0.78rem;" onclick="markReady(this)">Mark Ready for Driver</button>
        </div>

        <div class="kds-card ready">
          <div style="display: flex; justify-content: space-between; font-weight: 800; margin-bottom: 6px;">
            <span>Ticket #401</span>
            <span style="color: #10b981;">Ready for Pickup</span>
          </div>
          <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 8px;">• 1x Artisan Pepperoni 12"<br>• Spicy Marinara</p>
          <button class="btn-outline" style="width: 100%; font-size: 0.78rem; text-align: center;">Driver Assigned: Kosal</button>
        </div>
      </div>
    </div>

    <!-- VIEW 3: LIVE TRACKER -->
    <div id="viewDriver" style="display: none;">
      <div class="demo-card">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1f2937; padding-bottom: 14px;">
          <div>
            <h4 style="font-weight: 800; font-size: 1.1rem;">Live Order Delivery #DEL-882</h4>
            <p style="font-size: 0.85rem; color: #94a3b8;">Driver: Kosal Chhorn (Honda Dream 125 • 1A-4821)</p>
          </div>
          <span style="background: rgba(16,185,129,0.15); color: #10b981; padding: 6px 12px; border-radius: 99px; font-size: 0.8rem; font-weight: 800;">Estimated Arrival: 12 Mins</span>
        </div>

        <div class="timeline">
          <div class="timeline-step">
            <div class="step-dot done">✓</div>
            <div>
              <b style="color: #fff; font-size: 0.9rem;">Order Confirmed & Settled via KHQR</b>
              <p style="font-size: 0.8rem; color: #94a3b8;">12:30 PM - Payment verified</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="step-dot done">✓</div>
            <div>
              <b style="color: #fff; font-size: 0.9rem;">Kitchen Freshly Prepared Order</b>
              <p style="font-size: 0.8rem; color: #94a3b8;">12:42 PM - Bagged and thermal sealed</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="step-dot active">🛵</div>
            <div>
              <b style="color: #f97316; font-size: 0.9rem;">Driver En Route to Delivery Address</b>
              <p style="font-size: 0.8rem; color: #94a3b8;">Passing Toul Kork Market • 0.8 km away</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="step-dot">📍</div>
            <div>
              <b style="color: #64748b; font-size: 0.9rem;">Delivered & Handed to Customer</b>
              <p style="font-size: 0.8rem; color: #64748b;">Pending driver drop-off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="demo-toast" id="foodToast">✓ Order Dispatched</div>

  <script>
    function showTab(t) {
      document.getElementById('viewMenu').style.display = (t === 'menu' ? 'block' : 'none');
      document.getElementById('viewKds').style.display = (t === 'kds' ? 'block' : 'none');
      document.getElementById('viewDriver').style.display = (t === 'driver' ? 'block' : 'none');
      document.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('tab' + t.charAt(0).toUpperCase() + t.slice(1)).classList.add('active');
    }
    function orderFood(item, price) {
      showToast("✓ Ordered: " + item + " ($" + price.toFixed(2) + ")");
      const container = document.getElementById('kdsContainer');
      const card = document.createElement('div');
      card.className = 'kds-card';
      const tid = Math.floor(403 + Math.random() * 50);
      card.innerHTML = '<div style="display:flex; justify-content:space-between; font-weight:800; margin-bottom:6px;"><span>Ticket #' + tid + '</span><span style="color:#f97316;">Cooking (Fresh)</span></div><p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:8px;">• 1x ' + item + '</p><button class="btn-act" style="width:100%; justify-content:center; font-size:0.78rem;" onclick="markReady(this)">Mark Ready for Driver</button>';
      container.prepend(card);
    }
    function markReady(btn) {
      const card = btn.closest('.kds-card');
      card.classList.add('ready');
      btn.outerHTML = '<button class="btn-outline" style="width:100%; font-size:0.78rem; text-align:center;">✓ Ready • Driver Notified</button>';
      showToast("Order ready for pickup!");
    }
    function showToast(msg) {
      const t = document.getElementById('foodToast');
      t.textContent = msg;
      t.style.display = 'block';
      setTimeout(() => { t.style.display = 'none'; }, 2000);
    }
  </script>
</body>
</html>`;
}

// 3. CLINIC & DOCTOR APPOINTMENT DEMO ENGINE
function generateClinicDemoHtml(app) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${app.name} - Smart Clinic & Doctor EMR</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    ${getDemoBaseCss()}
    .clinic-grid { display: grid; grid-template-columns: 1fr 320px; gap: 20px; }
    @media (max-width: 840px) { .clinic-grid { grid-template-columns: 1fr; } }
    .vitals-bar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px; }
    .vital-box { background: #1e293b; padding: 10px; border-radius: 8px; text-align: center; }
    .vital-val { font-size: 1.15rem; font-weight: 800; color: #10b981; }
    .symptom-tag { display: inline-block; background: #1e293b; border: 1px solid #334155; padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; margin: 4px; cursor: pointer; user-select: none; }
    .symptom-tag.selected { background: #f97316; border-color: #f97316; color: white; }
    .rx-item { display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 8px 12px; border-radius: 6px; margin-bottom: 6px; font-size: 0.82rem; }
  </style>
</head>
<body>
  <div class="demo-topbar">
    <div class="demo-brand">
      <span>🏥</span>
      <span>${app.name}</span>
      <span class="demo-badge-cat">Clinical EMR & Appointment Hub</span>
    </div>
    <div class="demo-status-pill">
      <span class="status-dot"></span>
      <span>Dr. Kalyan Som, MD • On Duty</span>
    </div>
  </div>

  <div class="demo-body">
    <div class="clinic-grid">
      <!-- Left: Consultation & Prescription Pad -->
      <div class="demo-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid #1f2937; padding-bottom: 10px;">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 800;">Electronic Medical Record (EMR)</h3>
            <p style="font-size: 0.8rem; color: #94a3b8;">Patient: <b>Sokha Meas</b> (Age: 28 • Male • Blood: O+)</p>
          </div>
          <span style="background: rgba(16,185,129,0.15); color: #10b981; padding: 4px 10px; border-radius: 99px; font-size: 0.78rem; font-weight: 700;">Active Consultation</span>
        </div>

        <div class="vitals-bar">
          <div class="vital-box">
            <div style="font-size: 0.75rem; color: #94a3b8;">Blood Pressure</div>
            <div class="vital-val">120/80</div>
          </div>
          <div class="vital-box">
            <div style="font-size: 0.75rem; color: #94a3b8;">Temperature</div>
            <div class="vital-val" style="color: #f97316;">38.2 °C</div>
          </div>
          <div class="vital-box">
            <div style="font-size: 0.75rem; color: #94a3b8;">Pulse Rate</div>
            <div class="vital-val">78 bpm</div>
          </div>
        </div>

        <div style="margin-bottom: 16px;">
          <h4 style="font-size: 0.85rem; font-weight: 700; margin-bottom: 6px; color: #cbd5e1;">Reported Symptoms (Click to toggle)</h4>
          <div>
            <span class="symptom-tag selected" onclick="toggleTag(this)">Fever (High)</span>
            <span class="symptom-tag selected" onclick="toggleTag(this)">Dry Cough</span>
            <span class="symptom-tag" onclick="toggleTag(this)">Headache</span>
            <span class="symptom-tag" onclick="toggleTag(this)">Sore Throat</span>
            <span class="symptom-tag" onclick="toggleTag(this)">Fatigue</span>
          </div>
        </div>

        <div style="margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <h4 style="font-size: 0.85rem; font-weight: 700; color: #cbd5e1;">Prescribed Medications (Rx)</h4>
            <span style="font-size: 0.75rem; color: #10b981;">+ Quick Prescribe</span>
          </div>
          <div id="rxList">
            <div class="rx-item"><span><b>Paracetamol 500mg</b> - 1 tab TID after meals</span><span style="color:#10b981;">3 Days</span></div>
            <div class="rx-item"><span><b>Amoxicillin 500mg</b> - 1 cap BID</span><span style="color:#10b981;">5 Days</span></div>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <button class="btn-outline" style="font-size: 0.75rem; padding: 4px 10px;" onclick="addMed('Vitamin C 1000mg', '1 tab daily')">+ Vitamin C</button>
            <button class="btn-outline" style="font-size: 0.75rem; padding: 4px 10px;" onclick="addMed('Cough Syrup Dextro', '10ml TID')">+ Cough Syrup</button>
          </div>
        </div>

        <button class="btn-act" style="width: 100%; justify-content: center;" onclick="printRx()">🖨️ Generate & Print Medical Prescription (Rx)</button>
      </div>

      <!-- Right: Patient Waiting Queue -->
      <div class="demo-card">
        <h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 12px;">Waiting Room Queue</h4>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="background: #1e293b; padding: 10px; border-radius: 8px; border-left: 3px solid #10b981;">
            <b style="font-size: 0.85rem;">#01 Sokha Meas</b>
            <div style="font-size: 0.75rem; color: #10b981;">In Consultation Room 1</div>
          </div>
          <div style="background: #1e293b; padding: 10px; border-radius: 8px; border-left: 3px solid #f97316;">
            <b style="font-size: 0.85rem;">#02 Bopha Lim</b>
            <div style="font-size: 0.75rem; color: #94a3b8;">Waiting (Fever & Cough)</div>
          </div>
          <div style="background: #1e293b; padding: 10px; border-radius: 8px; border-left: 3px solid #64748b;">
            <b style="font-size: 0.85rem;">#03 Piseth Keo</b>
            <div style="font-size: 0.75rem; color: #94a3b8;">Waiting (Blood Check)</div>
          </div>
        </div>
        <button class="btn-outline" style="width: 100%; justify-content: center; margin-top: 14px; font-size: 0.8rem;" onclick="callNext()">🔔 Call Next Patient</button>
      </div>
    </div>
  </div>

  <div class="demo-toast" id="clinicToast">✓ Prescription Generated</div>

  <script>
    function toggleTag(el) { el.classList.toggle('selected'); }
    function addMed(name, dosage) {
      const list = document.getElementById('rxList');
      const item = document.createElement('div');
      item.className = 'rx-item';
      item.innerHTML = '<span><b>' + name + '</b> - ' + dosage + '</span><span style="color:#10b981;">Active</span>';
      list.appendChild(item);
      showToast("Added " + name);
    }
    function printRx() {
      alert("📋 Official Medical Prescription Generated!\\nClinic: ${app.name}\\nDoctor: Dr. Kalyan Som, MD\\nPatient: Sokha Meas\\nRx: Paracetamol + Amoxicillin\\nStatus: Signed & Stamped");
    }
    function callNext() { showToast("Calling next patient into consultation room"); }
    function showToast(msg) {
      const t = document.getElementById('clinicToast');
      t.textContent = msg;
      t.style.display = 'block';
      setTimeout(() => { t.style.display = 'none'; }, 2000);
    }
  </script>
</body>
</html>`;
}

// 4. REAL ESTATE & MORTGAGE HUB DEMO ENGINE
function generateRealEstateDemoHtml(app) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${app.name} - Real Estate Showcase & Mortgage</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    ${getDemoBaseCss()}
    .re-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
    .re-card { background: #111827; border: 1px solid #1f2937; border-radius: 14px; overflow: hidden; }
    .re-img { height: 140px; background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 3rem; }
    .re-body { padding: 14px; }
    .calc-box { background: #111827; border: 1px solid #1f2937; border-radius: 14px; padding: 20px; margin-top: 20px; }
    .calc-slider { width: 100%; margin: 8px 0; accent-color: #f97316; }
  </style>
</head>
<body>
  <div class="demo-topbar">
    <div class="demo-brand">
      <span>🏡</span>
      <span>${app.name}</span>
      <span class="demo-badge-cat">Property Showcase & Mortgage</span>
    </div>
    <div class="demo-status-pill">
      <span class="status-dot"></span>
      <span>Phnom Penh Verified Listings</span>
    </div>
  </div>

  <div class="demo-body">
    <div class="re-grid">
      <div class="re-card">
        <div class="re-img">🏰</div>
        <div class="re-body">
          <div style="font-weight: 800; font-size: 1rem; margin-bottom: 4px;">Luxury Sky Villa Riverside</div>
          <p style="color: #94a3b8; font-size: 0.8rem; margin-bottom: 8px;">📍 Chroy Changvar • 4 Bed • 5 Bath • 380 sqm</p>
          <div style="font-weight: 800; color: #10b981; font-size: 1.15rem;">$385,000</div>
          <button class="btn-act" style="width: 100%; margin-top: 10px; justify-content: center;" onclick="calcProp(385000)">Calculate Loan</button>
        </div>
      </div>

      <div class="re-card">
        <div class="re-img">🏢</div>
        <div class="re-body">
          <div style="font-weight: 800; font-size: 1rem; margin-bottom: 4px;">Modern Sky Condo Residence</div>
          <p style="color: #94a3b8; font-size: 0.8rem; margin-bottom: 8px;">📍 Sen Sok Central • 2 Bed • 2 Bath • 75 sqm</p>
          <div style="font-weight: 800; color: #10b981; font-size: 1.15rem;">$88,000</div>
          <button class="btn-act" style="width: 100%; margin-top: 10px; justify-content: center;" onclick="calcProp(88000)">Calculate Loan</button>
        </div>
      </div>

      <div class="re-card">
        <div class="re-img">🏪</div>
        <div class="re-body">
          <div style="font-weight: 800; font-size: 1rem; margin-bottom: 4px;">Commercial Prime Shophouse</div>
          <p style="color: #94a3b8; font-size: 0.8rem; margin-bottom: 8px;">📍 Toul Kork Main St • 5 Bed • 6 Bath • 240 sqm</p>
          <div style="font-weight: 800; color: #10b981; font-size: 1.15rem;">$260,000</div>
          <button class="btn-act" style="width: 100%; margin-top: 10px; justify-content: center;" onclick="calcProp(260000)">Calculate Loan</button>
        </div>
      </div>
    </div>

    <!-- Interactive Mortgage Calculator -->
    <div class="calc-box">
      <h3 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 12px;">🧮 Interactive Bank Mortgage Calculator</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 16px;">
        <div>
          <label style="font-size: 0.8rem; color: #94a3b8;">Property Price ($)</label>
          <input type="number" id="propPrice" class="calc-slider" value="88000" oninput="updateMortgage()">
        </div>
        <div>
          <label style="font-size: 0.8rem; color: #94a3b8;">Down Payment: <span id="downPctDisplay">20%</span></label>
          <input type="range" id="downSlider" class="calc-slider" min="10" max="50" value="20" oninput="updateMortgage()">
        </div>
        <div>
          <label style="font-size: 0.8rem; color: #94a3b8;">Loan Term: <span id="termDisplay">15 Years</span></label>
          <input type="range" id="termSlider" class="calc-slider" min="5" max="25" value="15" oninput="updateMortgage()">
        </div>
      </div>

      <div style="background: #1e293b; padding: 16px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 0.85rem; color: #94a3b8;">Estimated Monthly Installment (Bank Rate: 7.5%)</div>
          <div style="font-size: 1.5rem; font-weight: 800; color: #10b981;" id="monthlyPay">$652.80 / mo</div>
        </div>
        <button class="btn-act" onclick="bookTour()">📲 Book Private Tour on Telegram</button>
      </div>
    </div>
  </div>

  <script>
    function calcProp(val) {
      document.getElementById('propPrice').value = val;
      updateMortgage();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    function updateMortgage() {
      const price = parseFloat(document.getElementById('propPrice').value) || 88000;
      const downPct = parseInt(document.getElementById('downSlider').value) || 20;
      const years = parseInt(document.getElementById('termSlider').value) || 15;
      document.getElementById('downPctDisplay').textContent = downPct + '%';
      document.getElementById('termDisplay').textContent = years + ' Years';
      const principal = price * (1 - (downPct / 100));
      const monthlyRate = 0.075 / 12;
      const n = years * 12;
      const monthly = (principal * (monthlyRate * Math.pow(1 + monthlyRate, n))) / (Math.pow(1 + monthlyRate, n) - 1);
      document.getElementById('monthlyPay').textContent = '$' + monthly.toFixed(2) + ' / mo';
    }
    function bookTour() {
      alert("✓ Telegram Lead Bot Dispatched!\\nAgent: AC Realty Advisor\\nListing: Inquired\\nClient notified instantly.");
    }
    updateMortgage();
  </script>
</body>
</html>`;
}

// 5. SAAS LAUNCHPAD & MULTI-TENANT DEMO ENGINE
function generateSaasDemoHtml(app) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${app.name} - SaaS Developer Workspace</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    ${getDemoBaseCss()}
    .code-box { background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 12px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #38bdf8; overflow-x: auto; margin-top: 8px; }
    .member-row { display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #1f2937; }
  </style>
</head>
<body>
  <div class="demo-topbar">
    <div class="demo-brand">
      <span>🚀</span>
      <span>${app.name}</span>
      <span class="demo-badge-cat">SaaS Multi-Tenant Workspace</span>
    </div>
    <div class="demo-status-pill">
      <span class="status-dot"></span>
      <span>Acme Corp (Pro Plan)</span>
    </div>
  </div>

  <div class="demo-body">
    <div class="demo-tabs">
      <button class="demo-tab-btn active" id="tabApi" onclick="showSaas('api')">🔑 API Keys & Webhooks</button>
      <button class="demo-tab-btn" id="tabTeam" onclick="showSaas('team')">👥 Team Permissions</button>
      <button class="demo-tab-btn" id="tabBilling" onclick="showSaas('billing')">💳 Subscription Tiers</button>
    </div>

    <!-- API Keys Tab -->
    <div id="saasApi" class="demo-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
        <div>
          <h3 style="font-size: 1.05rem; font-weight: 800;">Production API Credentials</h3>
          <p style="font-size: 0.8rem; color: #94a3b8;">Use these secret keys to authenticate automated requests</p>
        </div>
        <button class="btn-act" onclick="genApiKey()">+ Generate New Secret Key</button>
      </div>

      <div class="code-box" id="apiKeyDisplay">ak_live_8f94a2b97c014e82b7d34</div>

      <div style="margin-top: 20px;">
        <h4 style="font-size: 0.9rem; font-weight: 800; margin-bottom: 8px;">Simulate Real-Time Webhook Dispatch</h4>
        <div style="display: flex; gap: 10px;">
          <button class="btn-outline" onclick="fireWebhook('order.settled_khqr')">⚡ Trigger order.settled_khqr</button>
          <button class="btn-outline" onclick="fireWebhook('user.subscribed')">⚡ Trigger user.subscribed</button>
        </div>
        <div class="code-box" id="webhookLog" style="color: #10b981; display: none;">// Webhook response payload ready</div>
      </div>
    </div>

    <!-- Team Tab -->
    <div id="saasTeam" class="demo-card" style="display: none;">
      <h3 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 12px;">Organization Members</h3>
      <div class="member-row">
        <div><b>Borey Kem (Owner)</b><br><small style="color: #94a3b8;">borey@acmart.store</small></div>
        <span style="background: rgba(249,115,22,0.15); color: #f97316; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold;">Super Admin</span>
      </div>
      <div class="member-row">
        <div><b>Dara Lead Developer</b><br><small style="color: #94a3b8;">dara.dev@acmart.store</small></div>
        <span style="background: rgba(56,189,248,0.15); color: #38bdf8; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold;">Developer</span>
      </div>
    </div>

    <!-- Billing Tab -->
    <div id="saasBilling" class="demo-card" style="display: none;">
      <h3 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 12px;">Active Subscription Plan</h3>
      <div style="background: #1e293b; padding: 16px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="color: #10b981; font-weight: bold;">PRO TIER PLAN ($29.00 / month)</span>
          <p style="font-size: 0.8rem; color: #94a3b8;">Unlimited API requests, automated ABA KHQR webhooks, and 10 seats</p>
        </div>
        <button class="btn-act" onclick="alert('✓ Subscription verified & active!')">Manage Invoices</button>
      </div>
    </div>
  </div>

  <script>
    function showSaas(t) {
      document.getElementById('saasApi').style.display = (t === 'api' ? 'block' : 'none');
      document.getElementById('saasTeam').style.display = (t === 'team' ? 'block' : 'none');
      document.getElementById('saasBilling').style.display = (t === 'billing' ? 'block' : 'none');
      document.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('tab' + t.charAt(0).toUpperCase() + t.slice(1)).classList.add('active');
    }
    function genApiKey() {
      const rand = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      document.getElementById('apiKeyDisplay').textContent = 'ak_live_' + rand;
      alert("New API Key generated successfully!");
    }
    function fireWebhook(ev) {
      const log = document.getElementById('webhookLog');
      log.style.display = 'block';
      log.textContent = JSON.stringify({
        event: ev,
        timestamp: new Date().toISOString(),
        status: "200_OK",
        latency: "34ms",
        data: { customer: "Bopha Chan", amount: 45.00, currency: "USD", provider: "ABA_KHQR" }
      }, null, 2);
    }
  </script>
</body>
</html>`;
}

// 6. E-COMMERCE DEMO ENGINE
function generateEcommerceDemoHtml(app) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${app.name} - Storefront & Checkout</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    ${getDemoBaseCss()}
    .ec-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 16px; }
    .ec-card { background: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
    .ec-img { height: 130px; background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; }
    .ec-body { padding: 12px; flex: 1; display: flex; flex-direction: column; }
  </style>
</head>
<body>
  <div class="demo-topbar">
    <div class="demo-brand">
      <span>🛍️</span>
      <span>${app.name}</span>
      <span class="demo-badge-cat">E-Commerce Storefront</span>
    </div>
    <div class="demo-status-pill">
      <span class="status-dot"></span>
      <span id="cartCountBadge">Cart: 0 items</span>
    </div>
  </div>

  <div class="demo-body">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <h3 style="font-size: 1.15rem; font-weight: 800;">Modern Online Storefront</h3>
      <button class="btn-act" onclick="checkoutStore()">🛒 Checkout with KHQR</button>
    </div>

    <div class="ec-grid">
      <div class="ec-card">
        <div class="ec-img">💻</div>
        <div class="ec-body">
          <b>Pro Developer Laptop Stand</b>
          <div style="color: #10b981; font-weight: 800; margin: 8px 0;">$35.00</div>
          <button class="btn-outline" onclick="addEc('Laptop Stand', 35)">+ Add to Cart</button>
        </div>
      </div>
      <div class="ec-card">
        <div class="ec-img">🎧</div>
        <div class="ec-body">
          <b>Wireless Studio ANC Headphones</b>
          <div style="color: #10b981; font-weight: 800; margin: 8px 0;">$59.00</div>
          <button class="btn-outline" onclick="addEc('Studio Headphones', 59)">+ Add to Cart</button>
        </div>
      </div>
      <div class="ec-card">
        <div class="ec-img">⌨️</div>
        <div class="ec-body">
          <b>Custom Mechanical RGB Keyboard</b>
          <div style="color: #10b981; font-weight: 800; margin: 8px 0;">$75.00</div>
          <button class="btn-outline" onclick="addEc('Mechanical Keyboard', 75)">+ Add to Cart</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    let ecCart = 0;
    let ecTotal = 0;
    function addEc(name, price) {
      ecCart += 1;
      ecTotal += price;
      document.getElementById('cartCountBadge').textContent = 'Cart: ' + ecCart + ' ($' + ecTotal.toFixed(2) + ')';
      alert("✓ Added " + name + " to cart!");
    }
    function checkoutStore() {
      if (ecCart === 0) { alert("Please add an item to cart first!"); return; }
      alert("🇰🇭 Instant ABA KHQR Checkout: $" + ecTotal.toFixed(2) + "\\nPayment verified and order confirmed!");
      ecCart = 0; ecTotal = 0;
      document.getElementById('cartCountBadge').textContent = 'Cart: 0 items';
    }
  </script>
</body>
</html>`;
}

// 7. DYNAMIC GENERIC SOFTWARE DEMO ENGINE (FOR USER-ADDED APPS)
function generateGenericAppDemoHtml(app) {
  const feats = (app.features || ["Fast performance", "Cloud database", "Instant notifications"]).map(f => `
    <div style="background: #1e293b; padding: 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <b style="font-size: 0.88rem; color: #fff;">• ${f}</b>
        <div style="font-size: 0.75rem; color: #94a3b8;">Production-ready module</div>
      </div>
      <button class="btn-act" style="font-size: 0.75rem; padding: 4px 10px;" onclick="testModule('${f}')">▶ Run Test</button>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${app.name} - Interactive Test-Drive</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    ${getDemoBaseCss()}
    .term-box { background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 14px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #10b981; min-height: 120px; max-height: 200px; overflow-y: auto; }
  </style>
</head>
<body>
  <div class="demo-topbar">
    <div class="demo-brand">
      <span>⚡</span>
      <span>${app.name}</span>
      <span class="demo-badge-cat">${app.category || 'Software'}</span>
    </div>
    <div class="demo-status-pill">
      <span class="status-dot"></span>
      <span>Interactive Playground</span>
    </div>
  </div>

  <div class="demo-body">
    <div class="demo-card">
      <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 4px;">${app.name} Test-Drive Console</h3>
      <p style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 14px;">${app.desc || 'Explore interactive features and test backend workflows directly.'}</p>
      
      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
        ${feats}
      </div>

      <h4 style="font-size: 0.85rem; font-weight: 800; margin-bottom: 6px;">Live System Execution Log</h4>
      <div class="term-box" id="termLog">
        > System initialized for ${app.name}...\\n> All microservices status: HEALTHY (200 OK)\\n> Ready for user interaction test.
      </div>
    </div>
  </div>

  <script>
    function testModule(name) {
      const log = document.getElementById('termLog');
      log.innerHTML += '<br>> [EXEC] Running ' + name + '...<br>> [SUCCESS] Verification passed (0 errors, 42ms)';
      log.scrollTop = log.scrollHeight;
    }
  </script>
</body>
</html>`;
}

// --- CHECKOUT & ABA KHQR SYSTEM ---
window.openCheckout = function(appId) {
  const app = appsList.find(a => a.id === appId) || appsList[0];
  currentPurchasingApp = app;

  checkoutAppName.textContent = app.name;
  checkoutAppPrice.textContent = `$${app.price}.00`;
  khqrDisplayAmount.textContent = `$${app.price}.00`;
  const khqrMerchantEl = document.getElementById('khqrMerchantDisplay');
  if (khqrMerchantEl) khqrMerchantEl.textContent = storeSettings.merchantId || DEFAULT_STORE_SETTINGS.merchantId;

  const checkoutTgBtn = document.getElementById('checkoutTelegramBtn');
  if (checkoutTgBtn) {
    const isKh = currentLang === 'kh';
    const msg = isKh
      ? `សួស្តីបង ខ្ញុំបានកុម្ម៉ង់ទិញកម្មវិធី "${app.name}" ($${app.price}) លើ AC MART។ នេះជាបង្កាន់ដៃទូទាត់ប្រាក់ ABA KHQR របស់ខ្ញុំបង។`
      : `Hello AC MART, I placed an order for "${app.name}" ($${app.price}). Here is my ABA KHQR payment confirmation.`;
    checkoutTgBtn.href = `https://t.me/Acmart6666?text=${encodeURIComponent(msg)}`;
  }

  openModal(checkoutModal);
};

window.selectPlan = function(planName) {
  if (planName === 'Free Tier') {
    switchView('dashboard');
    showToast("🎉 Welcome to GoShope! Your free store dashboard is ready.");
  } else {
    currentPurchasingApp = {
      id: "plan-pro",
      name: `GoShope - ${planName} Subscription`,
      price: 9.00
    };
    checkoutAppName.textContent = `GoShope - ${planName} Plan`;
    checkoutAppPrice.textContent = `$9.00/mo`;
    khqrDisplayAmount.textContent = `$9.00`;
    openModal(checkoutModal);
  }
};

function completePurchase() {
  if (!currentPurchasingApp) return;

  const buyerName = buyerNameInput.value.trim() || "Guest Developer";
  const buyerEmail = buyerEmailInput.value.trim() || "developer@example.com";
  const newOrderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;

  const newOrder = {
    id: newOrderId,
    customerName: buyerName,
    customerEmail: buyerEmail,
    appId: currentPurchasingApp.id,
    appName: currentPurchasingApp.name,
    tier: "Commercial License",
    amount: `$${currentPurchasingApp.price}.00`,
    paymentMethod: "ABA KHQR",
    status: "Paid",
    date: new Date().toISOString().slice(0, 16).replace('T', ' ')
  };

  ordersList.unshift(newOrder);
  localStorage.setItem('acmart_orders', JSON.stringify(ordersList));

  closeModal(checkoutModal);
  renderAllSections();

  showToast(`🎉 Payment Success! License key & access link sent to ${buyerEmail}`);
}

// --- RECENT ORDERS TABLE (Dashboard Overview) ---
function renderOrdersTable() {
  if (!dashOrdersTableBody) return;
  const isKh = currentLang === 'kh';
  const keyBtnText = isKh ? 'កូនសោអាជ្ញាប័ណ្ណ' : 'License Key';
  dashOrdersTableBody.innerHTML = ordersList.slice(0, 4).map(order => {
    const statusText = isKh ? (order.status === 'Paid' ? '● បានបង់ប្រាក់' : `● ${order.status}`) : `● ${order.status}`;
    return `
    <tr>
      <td style="font-weight: 700; color: #38bdf8;">${order.id}</td>
      <td>
        <div style="font-weight: 600;">${order.customerName}</div>
        <div style="font-size: 0.78rem; color: #94a3b8;">${order.customerEmail}</div>
      </td>
      <td style="font-weight: 600;">${order.appName}</td>
      <td><span class="tech-tag">${order.tier}</span></td>
      <td style="font-weight: 800; color: var(--brand-primary);">${order.amount}</td>
      <td><span class="status-badge" style="background: rgba(220, 38, 38, 0.15); color: #f87171;">🇰🇭 ${order.paymentMethod}</span></td>
      <td><span class="status-badge status-paid">${statusText}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="viewLicenseKey('${order.id}')" style="padding: 4px 10px; font-size: 0.78rem;">
          ${keyBtnText}
        </button>
      </td>
    </tr>
    `;
  }).join('');
}

window.viewLicenseKey = function(orderId) {
  const order = ordersList.find(o => o.id === orderId);
  const fakeKey = `ACMART-${orderId}-${Math.random().toString(36).substring(2, 10).toUpperCase()}-PRO`;
  alert(`🔑 License & Order Receipt\n\nOrder: ${order.id}\nCustomer: ${order.customerName}\nItem: ${order.appName}\nLicense Key: ${fakeKey}\nGitHub Repository: https://github.com/ac-mart-cambodia/${order.appId}\nStatus: Verified Active via ABA KHQR`);
};

function updateDashboardMetrics() {
  const totalRevenueNum = ordersList.reduce((sum, ord) => {
    const val = parseFloat(ord.amount.replace('$', '')) || 0;
    return sum + val;
  }, 0);

  if (dashTotalRevenue) dashTotalRevenue.textContent = `$${totalRevenueNum.toFixed(2)}`;
  if (dashTotalOrders) dashTotalOrders.textContent = ordersList.length;
  if (dashActiveApps) dashActiveApps.textContent = appsList.length;
  if (dashKhqrCount) {
    const khqrOrders = ordersList.filter(o => o.paymentMethod.includes('KHQR')).length;
    const pct = ordersList.length ? Math.round((khqrOrders / ordersList.length) * 100) : 0;
    dashKhqrCount.textContent = `${khqrOrders} (${pct}%)`;
  }
}

// --- MODAL UTILITIES ---
function openModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (modal === appFormModal) {
    populateCategoryDropdown();
  }
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, isSuccess = true) {
  const toast = document.createElement('div');
  toast.className = `toast ${isSuccess ? 'toast-success' : ''}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --- CLIENT-SIDE HIGH-EFFICIENCY IMAGE OPTIMIZATION (VERCEL STORAGE & SPEED) ---
/**
 * Automatically compresses and optimizes uploaded images using HTML5 Canvas.
 * Shrinks 3MB-10MB photos down to ~30KB-70KB while preserving razor-sharp HD visual clarity.
 * Converts to modern WebP format with JPEG fallback.
 * @param {File} file - Uploaded image file from user's computer
 * @param {Object} options - { maxWidth, maxHeight, quality, format }
 * @returns {Promise<{dataUrl: string, originalSize: number, compressedSize: number, reduction: number, width: number, height: number}>}
 */
function compressImageFile(file, options = {}) {
  const maxWidth = options.maxWidth || 960;
  const maxHeight = options.maxHeight || 720;
  const quality = options.quality !== undefined ? options.quality : 0.82;
  const format = options.format || 'image/webp';

  return new Promise((resolve, reject) => {
    // If user uploads an SVG vector, maintain resolution-independent vector format
    if (file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve({
          dataUrl: e.target.result,
          originalSize: file.size,
          compressedSize: file.size,
          reduction: 0,
          width: 400,
          height: 200
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read image file"));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error("Failed to load image preview"));
      img.onload = () => {
        let { width, height } = img;

        // Proportional scale down for fast web delivery without quality loss
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        // High-fidelity image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        let resultDataUrl;
        try {
          resultDataUrl = canvas.toDataURL(format, quality);
          // If browser lacks WebP canvas export support, fallback to JPEG
          if (!resultDataUrl.startsWith('data:' + format)) {
            resultDataUrl = canvas.toDataURL('image/jpeg', quality);
          }
        } catch (err) {
          resultDataUrl = canvas.toDataURL('image/jpeg', quality);
        }

        const origSize = file.size;
        const compSize = Math.round((resultDataUrl.length * 3) / 4);
        const reduction = Math.max(0, Math.round(((origSize - compSize) / origSize) * 100));

        resolve({
          dataUrl: resultDataUrl,
          originalSize: origSize,
          compressedSize: compSize,
          reduction: reduction,
          width: width,
          height: height
        });
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Background storage optimizer: Shrinks any existing heavy uncompressed base64 images
 * previously saved in browser localStorage to lightweight WebP, freeing storage space.
 */
function optimizeStoredImagesInBackground() {
  setTimeout(async () => {
    try {
      let updated = false;
      if (Array.isArray(appsList)) {
        for (const app of appsList) {
          if (app.previewImage && app.previewImage.startsWith('data:image/') && app.previewImage.length > 150000) {
            try {
              const img = new Image();
              img.src = app.previewImage;
              await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
              const canvas = document.createElement('canvas');
              let { width, height } = img;
              const ratio = Math.min(960 / width, 720 / height, 1);
              canvas.width = Math.round(width * ratio);
              canvas.height = Math.round(height * ratio);
              const ctx = canvas.getContext('2d');
              ctx.imageSmoothingEnabled = true;
              ctx.imageSmoothingQuality = 'high';
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              app.previewImage = canvas.toDataURL('image/webp', 0.82);
              updated = true;
            } catch (err) {
              console.warn("Could not compress legacy app image:", err);
            }
          }
        }
        if (updated) {
          localStorage.setItem('acmart_apps', JSON.stringify(appsList));
          renderApps();
        }
      }

      const legacyLogo = localStorage.getItem('acmart_custom_logo');
      if (legacyLogo && legacyLogo.startsWith('data:image/') && legacyLogo.length > 80000) {
        try {
          const img = new Image();
          img.src = legacyLogo;
          await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
          const canvas = document.createElement('canvas');
          let { width, height } = img;
          const ratio = Math.min(400 / width, 200 / height, 1);
          canvas.width = Math.round(width * ratio);
          canvas.height = Math.round(height * ratio);
          const ctx = canvas.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compLogo = canvas.toDataURL('image/webp', 0.85);
          localStorage.setItem('acmart_custom_logo', compLogo);
          applyCustomLogo(compLogo);
        } catch (err) {
          console.warn("Could not compress legacy logo:", err);
        }
      }
    } catch (globalErr) {
      console.warn("Background optimizer error:", globalErr);
    }
  }, 1200);
}

// --- EVENT LISTENERS & SMOOTH NAVIGATION FLOW ---
function setupEventListeners() {
  // Brand Logo & View Switching
  brandLogoBtn.addEventListener('click', () => {
    switchView('marketplace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (headerSignInBtn) {
    headerSignInBtn.addEventListener('click', () => switchView('dashboard'));
  }
  
  headerCtaBtn.addEventListener('click', () => {
    switchView(currentView === 'marketplace' ? 'dashboard' : 'marketplace');
  });
  
  returnToMarketplaceBtn.addEventListener('click', () => {
    switchView('marketplace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Universal Navigation Link Smooth Scroll & Flow
  document.querySelectorAll('.nav-link').forEach(link => {
    const handleNavAction = (e) => {
      if (e) e.preventDefault();
      const targetId = link.getAttribute('href');
      
      // Update active nav styling
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      if (targetId === '#dashboard' || targetId === '#sellerPanel') {
        switchView('dashboard');
        return;
      }

      // If in dashboard view, switch back to marketplace first
      if (currentView === 'dashboard') {
        switchView('marketplace');
      }

      // Smooth scroll to target section with guaranteed layout rendering
      requestAnimationFrame(() => {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (targetId === '#marketplace') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    };

    link.addEventListener('click', handleNavAction);
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleNavAction(e);
      }
    });
  });

  // Real-time ScrollSpy: Highlights navigation link as user scrolls
  window.addEventListener('scroll', () => {
    if (currentView !== 'marketplace') return;
    
    const sections = ['marketplace', 'marketplaceCatalog', 'features', 'howItWorks', 'interactiveDemo', 'pricing', 'tutorial'];
    const scrollPosition = window.scrollY + 120;

    for (const sectionId of sections) {
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        const top = sectionEl.offsetTop;
        const height = sectionEl.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          document.querySelectorAll('.nav-link').forEach(l => {
            const href = l.getAttribute('href');
            if (href === `#${sectionId}` || (sectionId === 'marketplaceCatalog' && href === '#marketplace')) {
              l.classList.add('active');
            } else if (href !== `#${sectionId}`) {
              l.classList.remove('active');
            }
          });
          break;
        }
      }
    }
  });

  // Sidebar Tab Switching (Dashboard)
  document.querySelectorAll('.sidebar-item').forEach(item => {
    const handleTabSwitch = () => {
      const tab = item.getAttribute('data-tab');
      if (tab) switchDashboardTab(tab);
    };

    item.addEventListener('click', handleTabSwitch);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleTabSwitch();
      }
    });
  });

  // Theme & Language Switches
  themeToggleBtn.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
  langEN.addEventListener('click', () => applyLanguage('en'));
  langKH.addEventListener('click', () => applyLanguage('kh'));

  // Hero Actions with smooth scroll & switch
  if (heroGetStartedBtn) {
    heroGetStartedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const catalogEl = document.getElementById('marketplaceCatalog');
      if (catalogEl) {
        const offsetPosition = catalogEl.getBoundingClientRect().top + window.pageYOffset - 76;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  }

  if (openFeaturedDemoBtn) {
    openFeaturedDemoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = (appsList && appsList.length) ? appsList[0].id : 'app-1';
      openLiveDemo(targetId);
    });
  }

  // Search & Filter with Enter key support
  appSearchInput.addEventListener('input', renderApps);
  appSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const catalogEl = document.getElementById('marketplaceCatalog');
      if (catalogEl) {
        const offsetPosition = catalogEl.getBoundingClientRect().top + window.pageYOffset - 76;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  });

  filterCategoriesList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cat-btn')) {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.getAttribute('data-category');
      renderApps();
    }
  });

  // Device Viewport Toggles in Demo Modal
  document.querySelectorAll('.viewport-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.viewport-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const vp = btn.getAttribute('data-viewport');
      demoDeviceFrame.className = 'demo-device-frame ' + (vp === 'desktop' ? '' : vp);
    });
  });

  // Checklist Actions (Matching Screenshot 1)
  btnChecklistAddProduct.addEventListener('click', () => openModal(appFormModal));
  addNewAppTableBtn.addEventListener('click', () => openModal(appFormModal));
  btnChecklistPayment.addEventListener('click', () => {
    populateSettingsModal();
    openModal(settingsModal);
  });
  btnChecklistDelivery.addEventListener('click', () => {
    populateSettingsModal();
    openModal(settingsModal);
  });
  btnChecklistTestStore.addEventListener('click', () => {
    switchView('marketplace');
    const firstApp = (appsList && appsList[0]) || initialApps[0];
    if (firstApp) {
      openLiveDemo(firstApp.id);
      showToast(`👁️ Launching category simulator for "${firstApp.name}"`);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast("👁️ Previewing customer app catalog!");
    }
  });

  // Categories & Coupons Add Buttons
  const btnAddNewCategory = document.getElementById('btnAddNewCategory');
  if (btnAddNewCategory) {
    btnAddNewCategory.addEventListener('click', () => {
      const catName = prompt("Enter new category name (e.g. Windows Apps, Mobile Apps, Themes):");
      if (catName && catName.trim()) {
        const icon = prompt("Enter an emoji/icon for this category:", "💻") || "💻";
        categoriesList.push({ id: `cat-${Date.now()}`, name: catName.trim(), icon: icon.trim(), count: 0 });
        localStorage.setItem('acmart_categories', JSON.stringify(categoriesList));
        renderAllSections();
        showToast(`✓ Category "${catName.trim()}" created!`);
      }
    });
  }

  // Handle + Add New Category option in product category dropdown
  const formAppCategory = document.getElementById('formAppCategory');
  if (formAppCategory) {
    formAppCategory.addEventListener('change', (e) => {
      if (e.target.value === '__NEW_CATEGORY__') {
        const newName = prompt("Enter new category name:");
        if (newName && newName.trim()) {
          const icon = prompt("Enter an emoji/icon for this category:", "📁") || "📁";
          const newCat = { id: `cat-${Date.now()}`, name: newName.trim(), icon: icon.trim(), count: 0 };
          categoriesList.push(newCat);
          localStorage.setItem('acmart_categories', JSON.stringify(categoriesList));
          renderAllSections();
          populateCategoryDropdown(newCat.name);
          showToast(`✓ New category "${newCat.name}" created!`);
        } else {
          populateCategoryDropdown();
        }
      }
    });
  }

  const btnAddCoupon = document.getElementById('btnAddCoupon');
  if (btnAddCoupon) {
    btnAddCoupon.addEventListener('click', () => {
      const code = prompt("Enter promo coupon code (e.g. SUMMER25):");
      if (code) {
        couponsList.unshift({ code: code.toUpperCase(), discount: "25% OFF", uses: 0, expires: "2026-12-31", status: "Active" });
        localStorage.setItem('acmart_coupons', JSON.stringify(couponsList));
        renderCouponsTable();
        showToast(`✓ Coupon "${code.toUpperCase()}" created!`);
      }
    });
  }

  const btnSaveAllSettings = document.getElementById('btnSaveAllSettings');
  if (btnSaveAllSettings) {
    btnSaveAllSettings.addEventListener('click', () => {
      const name = document.getElementById('settingStoreNameTab')?.value.trim();
      const phone = document.getElementById('settingContactPhone')?.value.trim();
      const aba = document.getElementById('settingAbaAccount')?.value.trim();
      const bakong = document.getElementById('settingBakongId')?.value.trim();
      const telegram = document.getElementById('settingTelegramToken')?.value.trim();
      const pinEl = document.getElementById('settingAdminPin');

      if (name) {
        storeSettings.name = name;
        if (sidebarStoreName) sidebarStoreName.textContent = name;
        if (dashStoreSubtitle) dashStoreSubtitle.textContent = `Overview metrics for ${name}`;
      }
      if (phone) storeSettings.contactPhone = phone;
      if (aba) storeSettings.merchantId = aba;
      storeSettings.bakongId = bakong || '';
      storeSettings.telegramToken = telegram || '';
      if (pinEl && pinEl.value.trim()) {
        storeSettings.adminPin = pinEl.value.trim();
      }
      localStorage.setItem('acmart_store_settings', JSON.stringify(storeSettings));
      populateSettingsModal();
      showToast("✓ All store settings & contact information saved!");
    });
  }

  const btnCopyStoreUrl = document.getElementById('btnCopyStoreUrl');
  if (btnCopyStoreUrl) {
    btnCopyStoreUrl.addEventListener('click', () => {
      const urlEl = document.getElementById('settingStoreUrl');
      if (urlEl) {
        navigator.clipboard.writeText(urlEl.value);
        showToast("📋 Live store website URL copied to clipboard!");
      }
    });
  }

  // Dedicated Change Password / PIN Button & Eye Toggle
  const btnUpdatePinOnly = document.getElementById('btnUpdatePinOnly');
  const togglePinVisibilityBtn = document.getElementById('togglePinVisibilityBtn');
  const settingAdminPin = document.getElementById('settingAdminPin');

  if (togglePinVisibilityBtn && settingAdminPin) {
    togglePinVisibilityBtn.addEventListener('click', () => {
      const isPass = settingAdminPin.type === 'password';
      settingAdminPin.type = isPass ? 'text' : 'password';
      togglePinVisibilityBtn.textContent = isPass ? '🔒' : '👁️';
    });
  }

  if (btnUpdatePinOnly && settingAdminPin) {
    btnUpdatePinOnly.addEventListener('click', () => {
      const newPin = settingAdminPin.value.trim();
      if (!newPin) {
        alert("Please enter a valid PIN / password.");
        return;
      }
      storeSettings.adminPin = newPin;
      localStorage.setItem('acmart_store_settings', JSON.stringify(storeSettings));
      showToast(`✓ Owner password changed to "${newPin}" successfully!`);
    });
  }

  // --- Custom Store Logo Upload Handlers ---
  const btnTriggerLogoUpload = document.getElementById('btnTriggerLogoUpload');
  const storeLogoFileInput = document.getElementById('storeLogoFileInput');
  const btnRemoveCustomLogo = document.getElementById('btnRemoveCustomLogo');

  if (btnTriggerLogoUpload && storeLogoFileInput) {
    btnTriggerLogoUpload.addEventListener('click', () => storeLogoFileInput.click());
  }

  if (storeLogoFileInput) {
    storeLogoFileInput.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        try {
          showToast("⏳ Optimizing and compressing store logo...");
          const result = await compressImageFile(file, { maxWidth: 400, maxHeight: 200, quality: 0.85, format: 'image/webp' });
          localStorage.setItem('acmart_custom_logo', result.dataUrl);
          applyCustomLogo(result.dataUrl);
          showToast(`✓ Store logo optimized (${(result.compressedSize / 1024).toFixed(0)} KB)! Saved space for Vercel.`);
        } catch (err) {
          console.error("Logo optimization error:", err);
          const reader = new FileReader();
          reader.onload = (loadEvt) => {
            const dataUrl = loadEvt.target.result;
            localStorage.setItem('acmart_custom_logo', dataUrl);
            applyCustomLogo(dataUrl);
            showToast("✓ Store logo applied!");
          };
          reader.readAsDataURL(file);
        }
      }
    });
  }

  // --- Product Preview Image File Upload Handler with Auto-Compression ---
  const btnUploadProductImg = document.getElementById('btnUploadProductImg');
  const formAppImgFile = document.getElementById('formAppImgFile');
  const formAppImg = document.getElementById('formAppImg');

  if (btnUploadProductImg && formAppImgFile) {
    btnUploadProductImg.addEventListener('click', () => formAppImgFile.click());
  }

  if (formAppImgFile && formAppImg) {
    formAppImgFile.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        try {
          showToast("⏳ Compressing photo to small size (HD quality preserved)...");
          const result = await compressImageFile(file, { maxWidth: 960, maxHeight: 720, quality: 0.82, format: 'image/webp' });
          formAppImg.value = result.dataUrl;

          const previewWrap = document.getElementById('formAppImgPreviewWrap');
          const previewImg = document.getElementById('formAppImgPreview');
          const sizeBadge = document.getElementById('formAppImgSizeBadge');
          if (previewWrap && previewImg && sizeBadge) {
            previewImg.src = result.dataUrl;
            sizeBadge.textContent = `⚡ Optimized: ${(result.compressedSize / 1024).toFixed(0)} KB (Saved ${result.reduction}% space)`;
            previewWrap.style.display = 'flex';
          }
          showToast(`✓ Photo compressed to ${(result.compressedSize / 1024).toFixed(0)} KB! Saved ${result.reduction}% space for Vercel.`);
        } catch (err) {
          console.error("Image compression error:", err);
          const reader = new FileReader();
          reader.onload = (loadEvt) => {
            formAppImg.value = loadEvt.target.result;
            showToast("✓ Product image attached!");
          };
          reader.readAsDataURL(file);
        }
      }
    });

    formAppImg.addEventListener('input', () => {
      const val = formAppImg.value.trim();
      const previewWrap = document.getElementById('formAppImgPreviewWrap');
      const previewImg = document.getElementById('formAppImgPreview');
      const sizeBadge = document.getElementById('formAppImgSizeBadge');
      if (val && previewWrap && previewImg && sizeBadge) {
        previewImg.src = val;
        sizeBadge.textContent = `🌐 External Web Link (Zero Vercel Storage)`;
        previewWrap.style.display = 'flex';
      } else if (!val && previewWrap) {
        previewWrap.style.display = 'none';
      }
    });
  }

  // --- Multiple App Screenshots Uploader with Auto-Compression ---
  let formUploadedScreenshots = [];
  const btnUploadMultipleScreenshots = document.getElementById('btnUploadMultipleScreenshots');
  const formAppMultiScreenshots = document.getElementById('formAppMultiScreenshots');
  const btnAddScreenshotUrl = document.getElementById('btnAddScreenshotUrl');
  const formScreenshotsStrip = document.getElementById('formScreenshotsStrip');

  function renderFormScreenshotsStrip() {
    if (!formScreenshotsStrip) return;
    if (formUploadedScreenshots.length === 0) {
      formScreenshotsStrip.innerHTML = '<span id="formScreenshotsEmptyText" style="color: var(--text-muted); font-size: 0.78rem;">No screenshots added yet. Click "Upload Multiple Photos" to add screenshots.</span>';
      return;
    }
    formScreenshotsStrip.innerHTML = formUploadedScreenshots.map((url, idx) => `
      <div class="form-screenshot-chip">
        <img src="${url}" alt="Screenshot ${idx + 1}">
        <button type="button" class="form-screenshot-del-btn" onclick="removeFormScreenshot(${idx})" title="Remove picture">&times;</button>
      </div>
    `).join('');
  }

  window.removeFormScreenshot = function(idx) {
    formUploadedScreenshots.splice(idx, 1);
    renderFormScreenshotsStrip();
  };

  if (btnUploadMultipleScreenshots && formAppMultiScreenshots) {
    btnUploadMultipleScreenshots.addEventListener('click', () => formAppMultiScreenshots.click());
    formAppMultiScreenshots.addEventListener('change', async (e) => {
      const files = Array.from(e.target.files || []);
      if (files.length === 0) return;
      showToast(`⏳ Compressing ${files.length} screenshots to HD WebP format...`);
      for (const file of files) {
        try {
          const result = await compressImageFile(file, { maxWidth: 1200, maxHeight: 800, quality: 0.82, format: 'image/webp' });
          formUploadedScreenshots.push(result.dataUrl);
        } catch (err) {
          console.error("Multi-image compression error:", err);
        }
      }
      renderFormScreenshotsStrip();
      showToast(`✓ Added ${files.length} screenshots! Optimized for zero Vercel storage cost.`);
      formAppMultiScreenshots.value = '';
    });
  }

  if (btnAddScreenshotUrl) {
    btnAddScreenshotUrl.addEventListener('click', () => {
      const url = prompt("Enter online screenshot image URL (e.g. https://...):");
      if (url && url.trim()) {
        formUploadedScreenshots.push(url.trim());
        renderFormScreenshotsStrip();
        showToast("✓ Screenshot link added!");
      }
    });
  }

  // Gallery Navigation Controls
  const btnGalleryPrev = document.getElementById('btnGalleryPrev');
  const btnGalleryNext = document.getElementById('btnGalleryNext');
  const btnDemoModeGallery = document.getElementById('btnDemoModeGallery');
  const btnDemoModeSimulator = document.getElementById('btnDemoModeSimulator');

  if (btnGalleryPrev) {
    btnGalleryPrev.addEventListener('click', () => {
      if (!currentDemoScreenshots || currentDemoScreenshots.length === 0) return;
      currentGalleryIndex = (currentGalleryIndex - 1 + currentDemoScreenshots.length) % currentDemoScreenshots.length;
      renderGalleryView();
    });
  }

  if (btnGalleryNext) {
    btnGalleryNext.addEventListener('click', () => {
      if (!currentDemoScreenshots || currentDemoScreenshots.length === 0) return;
      currentGalleryIndex = (currentGalleryIndex + 1) % currentDemoScreenshots.length;
      renderGalleryView();
    });
  }

  if (btnDemoModeGallery) {
    btnDemoModeGallery.addEventListener('click', () => switchDemoMode('gallery'));
  }

  if (btnDemoModeSimulator) {
    btnDemoModeSimulator.addEventListener('click', () => switchDemoMode('simulator'));
  }

  window.addEventListener('keydown', (e) => {
    if (demoSandboxModal && demoSandboxModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft' && btnGalleryPrev) {
        btnGalleryPrev.click();
      } else if (e.key === 'ArrowRight' && btnGalleryNext) {
        btnGalleryNext.click();
      }
    }
  });

  if (btnRemoveCustomLogo) {
    btnRemoveCustomLogo.addEventListener('click', () => {
      localStorage.removeItem('acmart_custom_logo');
      applyCustomLogo(null);
      showToast("✓ Logo reset to default AC MART typography.");
    });
  }

  // Settings & Store Switcher
  storeSwitcherBtn.addEventListener('click', () => {
    populateSettingsModal();
    openModal(settingsModal);
  });
  saveSettingsBtn.addEventListener('click', () => {
    const newName = settingStoreName.value.trim() || DEFAULT_STORE_SETTINGS.name;
    const newMerchant = document.getElementById('settingMerchantId')?.value.trim() || DEFAULT_STORE_SETTINGS.merchantId;
    const newToken = document.getElementById('settingTelegramModalToken')?.value.trim() || DEFAULT_STORE_SETTINGS.telegramToken;

    storeSettings.name = newName;
    storeSettings.merchantId = newMerchant;
    storeSettings.telegramToken = newToken;

    sidebarStoreName.textContent = newName;
    dashStoreSubtitle.textContent = `Overview metrics for ${newName}`;
    localStorage.setItem('acmart_store_settings', JSON.stringify(storeSettings));
    populateSettingsTab();
    closeModal(settingsModal);
    showToast("✓ Store settings updated successfully!");
  });

  // Add App Form Save
  saveAppFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('formAppName').value.trim();
    const cat = document.getElementById('formAppCategory').value;
    const price = parseFloat(document.getElementById('formAppPrice').value) || 79;
    const origPrice = parseFloat(document.getElementById('formAppOrigPrice').value) || 149;
    const desc = document.getElementById('formAppDesc').value.trim() || "Full-featured web application ready to deploy.";
    const tech = document.getElementById('formAppTech').value.split(',').map(s => s.trim()).filter(Boolean);
    const demoUrl = document.getElementById('formAppDemoUrl')?.value.trim() || "";
    const rawImg = document.getElementById('formAppImg').value.trim();
    const defaultImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&auto=format&fit=crop&q=80&fm=webp";
    
    const finalCoverImg = rawImg || (formUploadedScreenshots.length ? formUploadedScreenshots[0] : defaultImg);
    const finalScreenshots = formUploadedScreenshots.length ? [...formUploadedScreenshots] : [finalCoverImg];

    if (!name) {
      alert("Please enter an application title.");
      return;
    }

    const newApp = {
      id: `app-${Date.now()}`,
      name: name,
      khName: name,
      category: cat,
      price: price,
      originalPrice: origPrice,
      rating: 5.0,
      salesCount: 0,
      techStack: tech.length ? tech : ["React", "Tailwind", "KHQR"],
      desc: desc,
      khDesc: desc,
      features: [
        "100% clean verified source code",
        "Instant ABA KHQR checkout integration",
        "Full commercial & distribution license",
        "Lifetime bug fix updates"
      ],
      demoType: "saas",
      demoUrl: demoUrl,
      previewImage: finalCoverImg,
      screenshots: finalScreenshots
    };

    appsList.unshift(newApp);
    localStorage.setItem('acmart_apps', JSON.stringify(appsList));

    const checkCircle1 = document.getElementById('checkCircle1');
    if (checkCircle1) checkCircle1.classList.add('completed');

    const previewWrap = document.getElementById('formAppImgPreviewWrap');
    if (previewWrap) previewWrap.style.display = 'none';
    document.getElementById('formAppName').value = '';
    document.getElementById('formAppPrice').value = '';
    document.getElementById('formAppOrigPrice').value = '';
    document.getElementById('formAppDesc').value = '';
    document.getElementById('formAppTech').value = '';
    const demoUrlField = document.getElementById('formAppDemoUrl');
    if (demoUrlField) demoUrlField.value = '';
    document.getElementById('formAppImg').value = '';

    formUploadedScreenshots = [];
    renderFormScreenshotsStrip();

    closeModal(appFormModal);
    renderAllSections();
    showToast(`✓ "${name}" has been published with ${finalScreenshots.length} screenshots!`);
  });

  // --- Mobile Left-Side Drawer Controller ---
  const mobileMenuToggleBtn = document.getElementById('mobileMenuToggleBtn');
  const closeMobileDrawerBtn = document.getElementById('closeMobileDrawerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const mobNavDashboardBtn = document.getElementById('mobNavDashboardBtn');
  const mobDrawerSignInBtn = document.getElementById('mobDrawerSignInBtn');
  const mobDrawerCtaBtn = document.getElementById('mobDrawerCtaBtn');
  const mobDashSidebarToggleBtn = document.getElementById('mobDashSidebarToggleBtn');
  const dashboardSidebar = document.getElementById('dashboardSidebar');

  const openMobileDrawer = () => {
    if (mobileNavDrawer) mobileNavDrawer.classList.add('active');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.add('active');
  };

  const closeMobileDrawer = () => {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('active');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('active');
    if (dashboardSidebar) dashboardSidebar.classList.remove('active');
  };

  if (mobileMenuToggleBtn) mobileMenuToggleBtn.addEventListener('click', openMobileDrawer);
  if (closeMobileDrawerBtn) closeMobileDrawerBtn.addEventListener('click', closeMobileDrawer);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileDrawer);

  if (mobDashSidebarToggleBtn && dashboardSidebar) {
    mobDashSidebarToggleBtn.addEventListener('click', () => {
      dashboardSidebar.classList.toggle('active');
      if (mobileNavBackdrop) mobileNavBackdrop.classList.toggle('active');
    });
  }

  // Mobile drawer links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        closeMobileDrawer();
        if (currentView === 'dashboard') {
          switchView('marketplace');
        }
        requestAnimationFrame(() => {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else if (targetId === '#marketplace') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      }
    });
  });

  // Admin Authentication & Access Request
  function requestAdminAccess() {
    if (isAdminAuthenticated) {
      switchView('dashboard');
    } else {
      const adminAuthModal = document.getElementById('adminAuthModal');
      openModal(adminAuthModal);
      const pinInput = document.getElementById('adminPinInput');
      if (pinInput) {
        pinInput.value = '';
        setTimeout(() => pinInput.focus(), 150);
      }
      const err = document.getElementById('adminPinError');
      if (err) err.style.display = 'none';
    }
  }

  const adminAuthForm = document.getElementById('adminAuthForm');
  if (adminAuthForm) {
    adminAuthForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPin = document.getElementById('adminPinInput').value.trim();
      const correctPin = storeSettings.adminPin || '1234';

      if (enteredPin === correctPin) {
        isAdminAuthenticated = true;
        sessionStorage.setItem('acmart_admin_auth', 'true');
        closeModal(document.getElementById('adminAuthModal'));
        switchView('dashboard');
        showToast("🔓 Welcome back, Store Owner! Dashboard unlocked.");
      } else {
        const err = document.getElementById('adminPinError');
        if (err) err.style.display = 'block';
        const modalContainer = document.querySelector('#adminAuthModal .modal-container');
        if (modalContainer) {
          modalContainer.classList.add('shake');
          setTimeout(() => modalContainer.classList.remove('shake'), 400);
        }
      }
    });
  }

  const btnAdminLogout = document.getElementById('btnAdminLogout');
  if (btnAdminLogout) {
    btnAdminLogout.addEventListener('click', () => {
      isAdminAuthenticated = false;
      sessionStorage.removeItem('acmart_admin_auth');
      switchView('marketplace');
      showToast("🔒 Store Owner Panel has been locked.");
    });
  }

  const closeAdminAuthModalBtn = document.getElementById('closeAdminAuthModalBtn');
  if (closeAdminAuthModalBtn) {
    closeAdminAuthModalBtn.addEventListener('click', () => closeModal(document.getElementById('adminAuthModal')));
  }

  // Navigation Links & Buttons to Owner Panel
  if (headerSignInBtn) headerSignInBtn.addEventListener('click', requestAdminAccess);
  const footerOwnerLoginBtn = document.getElementById('footerOwnerLoginBtn');
  if (footerOwnerLoginBtn) footerOwnerLoginBtn.addEventListener('click', requestAdminAccess);
  headerCtaBtn.addEventListener('click', () => {
    if (currentView === 'dashboard') {
      switchView('marketplace');
    } else {
      const catalogEl = document.getElementById('marketplaceCatalog');
      if (catalogEl) {
        const offsetPosition = catalogEl.getBoundingClientRect().top + window.pageYOffset - 76;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  });

  if (mobNavDashboardBtn) {
    mobNavDashboardBtn.addEventListener('click', () => {
      closeMobileDrawer();
      requestAdminAccess();
    });
  }

  if (mobDrawerSignInBtn) {
    mobDrawerSignInBtn.addEventListener('click', () => {
      closeMobileDrawer();
      requestAdminAccess();
    });
  }

  if (mobDrawerCtaBtn) {
    mobDrawerCtaBtn.addEventListener('click', () => {
      closeMobileDrawer();
      if (currentView === 'marketplace') {
        requestAdminAccess();
      } else {
        switchView('marketplace');
      }
    });
  }

  // Modal Closers
  closeDemoModalBtn.addEventListener('click', () => closeModal(demoSandboxModal));
  closeCheckoutModalBtn.addEventListener('click', () => closeModal(checkoutModal));
  cancelCheckoutBtn.addEventListener('click', () => closeModal(checkoutModal));
  confirmPaymentBtn.addEventListener('click', completePurchase);
  const resetAppForm = () => {
    const wrap = document.getElementById('formAppImgPreviewWrap');
    if (wrap) wrap.style.display = 'none';
  };
  closeAppFormModalBtn.addEventListener('click', () => {
    resetAppForm();
    closeModal(appFormModal);
  });
  cancelAppFormBtn.addEventListener('click', () => {
    resetAppForm();
    closeModal(appFormModal);
  });
  closeSettingsModalBtn.addEventListener('click', () => closeModal(settingsModal));

  // Close modals on background click
  const adminAuthModal = document.getElementById('adminAuthModal');
  [demoSandboxModal, checkoutModal, appFormModal, settingsModal, adminAuthModal].forEach(m => {
    if (m) {
      m.addEventListener('click', (e) => {
        if (e.target === m) closeModal(m);
      });
    }
  });

  // Wire up the 3 live running engines in section 5
  setupInteractiveDemoEngines();
}

/**
 * Connects the 3 interactive demo engines (Smart Catalog, ABA KHQR, and Telegram Dispatch)
 * making them fully running, reactive, and testable live directly on the page.
 */
function setupInteractiveDemoEngines() {
  const btnTierStandard = document.getElementById('btnTierStandard');
  const btnTierExtended = document.getElementById('btnTierExtended');
  const btnDemoAddToCart = document.getElementById('btnDemoAddToCart');
  const demoCartCountDisplay = document.getElementById('demoCartCountDisplay');
  const demoLiveStockBadge = document.getElementById('demoLiveStockBadge');

  const demoKhqrAmountDisplay = document.getElementById('demoKhqrAmountDisplay');
  const demoKhqrMerchantNameDisplay = document.getElementById('demoKhqrMerchantNameDisplay');
  const demoKhqrStatusTag = document.getElementById('demoKhqrStatusTag');
  const btnDemoSimulateKhqrPay = document.getElementById('btnDemoSimulateKhqrPay');
  const demoQrBox = document.getElementById('demoQrBox');

  const demoTelegramBubble = document.getElementById('demoTelegramBubble');
  const demoTelegramAmountDisplay = document.getElementById('demoTelegramAmountDisplay');
  const demoTelegramTimestamp = document.getElementById('demoTelegramTimestamp');
  const btnDemoSendTelegramAlert = document.getElementById('btnDemoSendTelegramAlert');
  const btnRunAllDemoEngines = document.getElementById('btnRunAllDemoEngines');

  if (!btnDemoAddToCart) return;

  let currentPrice = 79;
  let cartCount = 0;
  let stockCount = 14;

  if (demoKhqrMerchantNameDisplay) {
    demoKhqrMerchantNameDisplay.textContent = storeSettings.merchantId || DEFAULT_STORE_SETTINGS.merchantId;
  }

  // Audio tone helper
  const playChime = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {}
  };

  function resetKhqrStatus() {
    if (demoKhqrStatusTag) {
      demoKhqrStatusTag.textContent = '● Ready to Scan';
      demoKhqrStatusTag.style.background = 'rgba(234, 179, 8, 0.2)';
      demoKhqrStatusTag.style.color = '#eab308';
    }
    if (demoQrBox) {
      demoQrBox.style.boxShadow = '';
    }
  }

  // Tier switches
  if (btnTierStandard && btnTierExtended) {
    btnTierStandard.addEventListener('click', () => {
      currentPrice = 79;
      btnTierStandard.style.background = 'var(--brand-primary)';
      btnTierStandard.style.color = '#ffffff';
      btnTierStandard.style.fontWeight = '700';
      btnTierExtended.style.background = 'var(--bg-surface)';
      btnTierExtended.style.color = 'var(--text-secondary)';
      btnTierExtended.style.fontWeight = 'normal';
      if (demoKhqrAmountDisplay) demoKhqrAmountDisplay.textContent = `$${currentPrice}.00 USD`;
      if (demoTelegramAmountDisplay) demoTelegramAmountDisplay.textContent = `$${currentPrice}.00 (ABA KHQR)`;
      resetKhqrStatus();
    });

    btnTierExtended.addEventListener('click', () => {
      currentPrice = 149;
      btnTierExtended.style.background = 'var(--brand-primary)';
      btnTierExtended.style.color = '#ffffff';
      btnTierExtended.style.fontWeight = '700';
      btnTierStandard.style.background = 'var(--bg-surface)';
      btnTierStandard.style.color = 'var(--text-secondary)';
      btnTierStandard.style.fontWeight = 'normal';
      if (demoKhqrAmountDisplay) demoKhqrAmountDisplay.textContent = `$${currentPrice}.00 USD`;
      if (demoTelegramAmountDisplay) demoTelegramAmountDisplay.textContent = `$${currentPrice}.00 (ABA KHQR)`;
      resetKhqrStatus();
    });
  }

  // Engine 1 Add to Cart
  btnDemoAddToCart.addEventListener('click', () => {
    cartCount++;
    if (stockCount > 1) stockCount--;
    if (demoCartCountDisplay) demoCartCountDisplay.textContent = cartCount;
    if (demoLiveStockBadge) demoLiveStockBadge.textContent = `● ${stockCount} In Stock`;

    btnDemoAddToCart.style.transform = 'scale(0.96)';
    setTimeout(() => btnDemoAddToCart.style.transform = '', 150);

    resetKhqrStatus();
    showToast(`✓ Smart Catalog: Added to cart! Total: $${currentPrice}.00. Ready for KHQR scan.`);
  });

  // Engine 3 Trigger Telegram Dispatch
  const triggerTelegramDispatch = () => {
    if (demoTelegramBubble) {
      demoTelegramBubble.style.transform = 'scale(1.03)';
      demoTelegramBubble.style.borderColor = '#10b981';
      demoTelegramBubble.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.4)';
      setTimeout(() => {
        demoTelegramBubble.style.transform = '';
        demoTelegramBubble.style.borderColor = '#38bdf8';
        demoTelegramBubble.style.boxShadow = '';
      }, 500);
    }
    if (demoTelegramTimestamp) {
      demoTelegramTimestamp.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    playChime();
    showToast(`🤖 Telegram Dispatch: Order alert & invoice dispatched to @Acmart6666!`);
  };

  // Engine 2 Simulate KHQR Payment
  const triggerKhqrPaymentSimulation = () => {
    if (demoKhqrStatusTag) {
      demoKhqrStatusTag.textContent = '⏳ Processing ABA Scan...';
      demoKhqrStatusTag.style.background = 'rgba(56, 189, 248, 0.2)';
      demoKhqrStatusTag.style.color = '#38bdf8';
    }
    if (demoQrBox) {
      demoQrBox.style.boxShadow = '0 0 15px rgba(220, 38, 38, 0.8)';
    }

    setTimeout(() => {
      if (demoKhqrStatusTag) {
        demoKhqrStatusTag.textContent = '✓ PAID & VERIFIED';
        demoKhqrStatusTag.style.background = 'rgba(16, 185, 129, 0.2)';
        demoKhqrStatusTag.style.color = '#10b981';
      }
      if (demoQrBox) {
        demoQrBox.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.8)';
      }
      playChime();
      showToast(`🎉 Payment Success! $${currentPrice}.00 verified via ABA Bakong Gateway!`);

      // Automatically trigger Telegram alert dispatch
      setTimeout(triggerTelegramDispatch, 600);
    }, 700);
  };

  if (btnDemoSimulateKhqrPay) {
    btnDemoSimulateKhqrPay.addEventListener('click', triggerKhqrPaymentSimulation);
  }

  if (btnDemoSendTelegramAlert) {
    btnDemoSendTelegramAlert.addEventListener('click', triggerTelegramDispatch);
  }

  // 1-Click End-to-End Simulation of All 3 Engines
  if (btnRunAllDemoEngines) {
    btnRunAllDemoEngines.addEventListener('click', () => {
      // Step 1: Catalog Add
      btnDemoAddToCart.click();

      // Step 2: KHQR Pay after 800ms
      setTimeout(() => {
        triggerKhqrPaymentSimulation();
      }, 800);
    });
  }
}
