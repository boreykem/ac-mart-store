/**
 * GoShope & AC MART - Comprehensive Platform Logic
 * Handles Marketplace, Interactive Demo, Pricing, Checkout (ABA KHQR),
 * and Store Owner Panel (Dashboard, Products, Categories, Orders, Customers, Coupons, Settings, Billing)
 */

// --- BILINGUAL TRANSLATION DICTIONARY ---
const translations = {
  en: {
    badge_apps: "AC MART",
    nav_marketplace: "Our Apps",
    nav_features: "Features",
    nav_how_it_works: "How to Buy",
    nav_demo: "Live Sandbox",
    nav_pricing: "App Licenses",
    nav_tutorial: "Tutorial",
    nav_sign_in: "Owner Login",
    nav_seller_panel: "Store Owner Panel",
    cta_owner_panel: "Owner Login 🔐",
    cta_marketplace: "Customer Storefront",
    announcement_text: "🚀 Official AC MART Release: Full source code licenses with instant ABA KHQR active!",
    hero_title_1: "Production-Ready Web Apps &",
    hero_title_2: "SaaS Software For Sale",
    hero_subtitle: "Developed and sold directly by AC MART. Explore live interactive demos, test all features, and get clean commercial source code with instant ABA KHQR payment.",
    btn_get_started_free: "Browse App Catalog",
    btn_explore_demo: "Test Live Sandbox",
    trust_khqr: "Instant ABA KHQR & Card",
    trust_source: "100% Clean Source Code",
    trust_setup: "1-Click Interactive Test",
    trust_updates: "Free Lifetime Updates",
    
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
    dash_subtitle: "Overview metrics for បូវ",
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
    step4_title: "Test Your Store",
    step4_desc: "Preview your customer checkout and verify your products",
    btn_add: "Add",
    btn_configure: "Configure",
    btn_setup: "Set up",
    btn_test_store: "Test Store",
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
    btn_live_demo: "Live Demo",
    btn_buy_now: "Buy License"
  },
  kh: {
    badge_apps: "AC MART",
    nav_marketplace: "ទីផ្សារកម្មវិធី",
    nav_features: "លក្ខណៈពិសេស",
    nav_how_it_works: "របៀបដំណើរការ",
    nav_demo: "សាកល្បង Demo",
    nav_pricing: "កញ្ចប់តម្លៃ",
    nav_tutorial: "វីដេអូបង្រៀន",
    nav_sign_in: "ចូលគណនី",
    nav_seller_panel: "ផ្ទាំងគ្រប់គ្រងហាង",
    cta_owner_panel: "ចាប់ផ្តើមឥតគិតថ្លៃ",
    cta_marketplace: "មើលទីផ្សារកម្មវិធី",
    announcement_text: "✨ ការអាប់ដេតភ្លាមៗ: ប្រព័ន្ធផ្ញើកូដកម្មវិធី និងកូនសោអាជ្ញាប័ណ្ណដោយស្វ័យប្រវត្តិកំពុងដំណើរការ!",
    hero_title_1: "ប្រែក្លាយអាជីវកម្មរបស់អ្នកទៅជា",
    hero_title_2: "ហាងអនឡាញដ៏មានឥទ្ធិពលថ្ងៃនេះ",
    hero_subtitle: "បង្កើតគេហទំព័រហាងផ្ទាល់ខ្លួនរបស់អ្នកក្នុងរយៈពេលប៉ុន្មាននាទី។ លក់ផលិតផល ទទួលប្រាក់ និងទទួលការកុម្ម៉ង់គ្រប់ពេលវេលា — ដោយមិនបាច់រៀបចំស្មុគស្មាញ។",
    btn_get_started_free: "ចាប់ផ្តើមឥតគិតថ្លៃ",
    btn_explore_demo: "សាកល្បង Demo ហាង",
    trust_khqr: "ទូទាត់តាម ABA KHQR & កាត",
    trust_source: "ផ្តល់ជូន Source Code ពេញលេញ",
    trust_setup: "សាកល្បង Live Demo ភ្លាមៗ",
    trust_updates: "ការអាប់ដេតឥតគិតថ្លៃរហូត",
    
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
    dash_subtitle: "ទិដ្ឋភាពទូទៅនៃស្ថិតិសម្រាប់ បូវ",
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
    step4_title: "សាកល្បងទិញកម្មវិធីរបស់អ្នក",
    step4_desc: "មើលជាមុននូវការទូទាត់របស់អតិថិជន និងផ្ទៀងផ្ទាត់ផលិតផលរបស់អ្នក",
    btn_add: "បន្ថែម",
    btn_configure: "កំណត់",
    btn_setup: "រៀបចំ",
    btn_test_store: "សាកល្បងហាង",
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
    btn_live_demo: "សាកល្បង Demo",
    btn_buy_now: "ទិញអាជ្ញាប័ណ្ណ"
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
    previewImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=60"
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
    previewImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=60"
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
    previewImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60"
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
    previewImage: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=60"
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
    previewImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60"
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
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
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
let storeSettings = JSON.parse(localStorage.getItem('acmart_store_settings')) || {
  name: "AC MART",
  merchantId: "088 6666 584",
  contactPhone: "+855 88 6666 584 (@kemborey)",
  bakongId: "",
  telegramToken: "",
  adminPin: "1234"
};
if (!storeSettings.adminPin) storeSettings.adminPin = "1234";
if (!storeSettings.contactPhone) storeSettings.contactPhone = "+855 88 6666 584 (@kemborey)";
if (!storeSettings.merchantId) storeSettings.merchantId = "088 6666 584";

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
  if (lang === 'en') {
    langEN.classList.add('active');
    langKH.classList.remove('active');
  } else {
    langKH.classList.add('active');
    langEN.classList.remove('active');
  }

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

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

  if (nameInput) nameInput.value = storeSettings.name || 'AC MART';
  if (urlInput) {
    const origin = window.location.origin;
    urlInput.value = (origin && !origin.includes('file://') && !origin.includes('localhost')) 
      ? origin 
      : 'https://ac-mart-offical.vercel.app';
  }
  if (phoneInput) phoneInput.value = storeSettings.contactPhone || '+855 88 6666 584 (@kemborey)';
  if (abaInput) abaInput.value = storeSettings.merchantId || '088 6666 584';
  if (bakongInput) bakongInput.value = storeSettings.bakongId || '';
  if (telegramInput) telegramInput.value = storeSettings.telegramToken || '';
  if (pinInput) pinInput.value = storeSettings.adminPin || '1234';
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
        <div class="app-card-preview">
          <span class="app-badge-featured">★ Verified App</span>
          <span class="app-badge-category">${app.category}</span>
          <img src="${app.previewImage}" alt="${title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60'">
        </div>
        <div class="app-card-body">
          <div class="app-card-header">
            <h3 class="app-title">${title}</h3>
            <div class="app-price-tag">
              <div class="app-price">$${app.price}</div>
              ${app.originalPrice ? `<div class="app-price-original">$${app.originalPrice}</div>` : ''}
            </div>
          </div>
          
          <p class="app-description">${description}</p>
          
          <div class="app-tech-tags">
            ${techBadges}
          </div>

          <ul class="app-card-features">
            ${featuresList}
          </ul>

          <div class="app-card-footer">
            <button class="btn btn-secondary btn-sm btn-demo" onclick="openLiveDemo('${app.id}')">
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
  productsManagerTableBody.innerHTML = appsList.map(app => `
    <tr>
      <td>
        <div style="font-weight: 700; color: #fff;">${app.name}</div>
        <div style="font-size: 0.78rem; color: #94a3b8;">${app.id}</div>
      </td>
      <td><span class="tech-tag">${app.category}</span></td>
      <td style="font-weight: 800; color: var(--brand-primary);">$${app.price}.00</td>
      <td>${app.techStack.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join(' ')}</td>
      <td style="font-weight: 700;">${app.salesCount || 0} units</td>
      <td><span class="status-badge status-paid">● Active In Store</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="editProductPrice('${app.id}')" style="padding: 4px 8px; font-size: 0.78rem;">Edit</button>
        <button class="btn btn-secondary btn-sm" onclick="deleteProduct('${app.id}')" style="padding: 4px 8px; font-size: 0.78rem; color: #f87171;">Delete</button>
      </td>
    </tr>
  `).join('');
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
  let html = `<button class="cat-btn ${activeFilter === 'all' ? 'active' : ''}" data-category="all" data-i18n="cat_all">All Categories</button>`;
  categoriesList.forEach(cat => {
    const isActive = activeFilter === cat.name ? 'active' : '';
    html += `<button class="cat-btn ${isActive}" data-category="${cat.name}">${cat.icon || '📁'} ${cat.name}</button>`;
  });
  container.innerHTML = html;
}

// --- CATEGORIES GRID (Dashboard) ---
function renderCategoriesGrid() {
  if (!categoriesCardsContainer) return;
  categoriesCardsContainer.innerHTML = categoriesList.map((cat, index) => {
    const count = appsList.filter(a => a.category === cat.name || a.category === cat.id).length;
    return `
      <div class="category-card" style="display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 18px 20px; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 14px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <span style="font-size: 2rem; background: var(--bg-card); padding: 8px 12px; border-radius: 10px; border: 1px solid var(--border-color); cursor: pointer;" onclick="changeCategoryIcon(${index})" title="Click to change Emoji Icon">${cat.icon || '📁'}</span>
          <div>
            <h4 style="font-weight: 700; font-size: 1.05rem; color: var(--text-primary); margin-bottom: 4px;">${cat.name}</h4>
            <span style="font-size: 0.82rem; color: var(--text-muted);">${count} Active Products</span>
          </div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm" onclick="editCategoryName(${index})" style="padding: 6px 12px; font-size: 0.82rem;">✏️ Rename</button>
          <button class="btn btn-danger btn-sm" onclick="deleteCategory(${index})" style="padding: 6px 12px; font-size: 0.82rem; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);">🗑️ Delete</button>
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
  const list = filteredOrders || ordersList;
  fullOrdersTableBody.innerHTML = list.map(order => `
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
      <td><span class="status-badge status-paid">● ${order.status}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="viewLicenseKey('${order.id}')" style="padding: 4px 10px; font-size: 0.78rem;">
          Receipt & Key
        </button>
      </td>
    </tr>
  `).join('');
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
  customersTableBody.innerHTML = customersList.map(c => `
    <tr>
      <td style="font-weight: 700; color: #fff;">${c.name}</td>
      <td style="color: #94a3b8;">${c.contact}</td>
      <td style="font-weight: 700;">${c.orders} orders</td>
      <td style="font-weight: 800; color: var(--brand-primary);">${c.spent}</td>
      <td><span class="tech-tag">${c.latest}</span></td>
      <td><span class="status-badge status-paid">● ${c.status}</span></td>
    </tr>
  `).join('');
}

// --- DISCOUNT COUPONS (Dashboard) ---
function renderCouponsTable() {
  if (!couponsTableBody) return;
  couponsTableBody.innerHTML = couponsList.map(cp => `
    <tr>
      <td style="font-weight: 800; color: #38bdf8; font-family: monospace; font-size: 1rem;">${cp.code}</td>
      <td style="font-weight: 700; color: #10b981;">${cp.discount}</td>
      <td>${cp.uses} times</td>
      <td style="color: #94a3b8;">${cp.expires}</td>
      <td><span class="status-badge status-paid">● ${cp.status}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="copyCoupon('${cp.code}')" style="padding: 4px 8px; font-size: 0.78rem;">Copy Code</button>
      </td>
    </tr>
  `).join('');
}

window.copyCoupon = function(code) {
  navigator.clipboard.writeText(code);
  showToast(`📋 Copied coupon code "${code}" to clipboard!`);
};

// --- LIVE DEMO SIMULATOR ---
// --- LIVE DEMO SIMULATOR ---
window.openLiveDemo = function(appId) {
  const app = (appsList && appsList.find(a => a.id === appId)) || (appsList && appsList[0]) || initialApps[0];
  if (!app) return;
  if (demoModalAppTitle) demoModalAppTitle.textContent = app.name;
  if (demoModalCategory) demoModalCategory.textContent = app.category;
  
  if (demoSandboxIframe) {
    demoSandboxIframe.srcdoc = generateDemoFrameHtml(app);
  }
  if (demoModalBuyBtn) {
    demoModalBuyBtn.onclick = () => {
      closeModal(demoSandboxModal);
      openCheckout(app.id);
    };
  }
  
  openModal(demoSandboxModal);
};

function generateDemoFrameHtml(app) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${app.name} - Interactive Demo</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; }
    body { background: #0b0f19; color: #f8fafc; overflow-x: hidden; min-height: 100vh; display: flex; flex-direction: column; }
    
    /* Demo Header */
    .top-header { background: #111827; border-bottom: 1px solid #1f2937; padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
    .brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 1.15rem; color: #f97316; }
    .nav-tabs { display: flex; gap: 6px; background: #0f172a; padding: 4px; border-radius: 8px; border: 1px solid #1e293b; }
    .tab-btn { background: transparent; color: #94a3b8; border: none; padding: 6px 14px; border-radius: 6px; font-size: 0.82rem; font-weight: 700; cursor: pointer; transition: 0.2s; }
    .tab-btn.active { background: #f97316; color: white; }
    .cart-trigger { background: #1e293b; color: #38bdf8; border: 1px solid #334155; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px; }
    .cart-badge { background: #ef4444; color: white; font-size: 0.72rem; padding: 2px 7px; border-radius: 99px; }

    /* Main Container */
    .content-area { flex-grow: 1; padding: 20px; max-width: 1000px; margin: 0 auto; width: 100%; }

    /* Storefront View */
    .hero-banner { background: linear-gradient(135deg, #1e293b, #0f172a); border: 1px solid #334155; border-radius: 14px; padding: 20px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; }
    .hero-title { font-size: 1.3rem; font-weight: 800; margin-bottom: 6px; }
    .hero-sub { font-size: 0.85rem; color: #94a3b8; }
    .banner-pill { background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 99px; font-size: 0.78rem; font-weight: 700; }

    /* Product Grid */
    .prod-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .prod-card { background: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; transition: 0.2s; }
    .prod-card:hover { border-color: #f97316; transform: translateY(-3px); }
    .prod-img { width: 100%; height: 130px; object-fit: cover; background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; }
    .prod-info { padding: 14px; flex-grow: 1; display: flex; flex-direction: column; }
    .prod-name { font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; color: #fff; }
    .prod-price-row { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 10px; }
    .prod-price { font-weight: 800; font-size: 1.1rem; color: #10b981; }
    .btn-add { background: #f97316; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: 0.2s; }
    .btn-add:hover { background: #ea580c; }

    /* Admin View */
    .metrics-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 20px; }
    .metric-card { background: #111827; border: 1px solid #1f2937; border-radius: 12px; padding: 16px; }
    .metric-card h5 { font-size: 0.8rem; color: #94a3b8; margin-bottom: 6px; }
    .metric-card .val { font-size: 1.4rem; font-weight: 800; color: #fff; }
    .table-card { background: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; }
    .table-title { padding: 14px 18px; font-weight: 700; border-bottom: 1px solid #1f2937; font-size: 0.95rem; }
    .orders-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
    .orders-table th, .orders-table td { padding: 10px 16px; text-align: left; border-bottom: 1px solid #1f2937; }
    .orders-table th { color: #94a3b8; font-weight: 600; }

    /* Cart / Checkout Drawer */
    .cart-drawer { position: fixed; top: 0; right: -360px; width: 340px; height: 100vh; background: #111827; border-left: 1px solid #1f2937; z-index: 100; display: flex; flex-direction: column; transition: 0.3s; box-shadow: -10px 0 30px rgba(0,0,0,0.5); }
    .cart-drawer.open { right: 0; }
    .cart-header { padding: 16px; border-bottom: 1px solid #1f2937; display: flex; justify-content: space-between; align-items: center; }
    .cart-items { flex-grow: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 12px; }
    .cart-item { display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 10px; border-radius: 8px; }
    .cart-footer { padding: 16px; border-top: 1px solid #1f2937; background: #0f172a; }
    .total-row { display: flex; justify-content: space-between; font-weight: 800; font-size: 1.1rem; margin-bottom: 14px; }
    .btn-checkout { width: 100%; background: #dc2626; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: 800; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; }

    /* KHQR Simulation Modal */
    .khqr-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(5px); z-index: 200; display: none; align-items: center; justify-content: center; padding: 20px; }
    .khqr-overlay.active { display: flex; }
    .khqr-box { background: #dc2626; border-radius: 18px; width: 100%; max-width: 320px; color: white; padding: 24px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.7); }
    .khqr-qr-wrap { background: white; border-radius: 14px; padding: 16px; margin: 16px auto; width: 200px; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .btn-pay-sim { background: #10b981; color: white; border: none; width: 100%; padding: 12px; border-radius: 8px; font-weight: 800; font-size: 0.95rem; cursor: pointer; margin-top: 12px; }
    .btn-pay-close { background: rgba(255,255,255,0.2); color: white; border: none; width: 100%; padding: 8px; border-radius: 6px; font-size: 0.8rem; cursor: pointer; margin-top: 8px; }

    /* Success Screen */
    .success-box { display: none; background: #111827; border: 1px solid #10b981; border-radius: 16px; padding: 24px; text-align: center; margin: 20px 0; }
    .success-icon { font-size: 3rem; margin-bottom: 10px; }
  </style>
</head>
<body>

  <!-- Top Navigation Bar -->
  <header class="top-header">
    <div class="brand">
      <span>⚡</span>
      <span>${app.name}</span>
    </div>
    <div class="nav-tabs">
      <button class="tab-btn active" id="tabStore" onclick="switchDemoView('store')">🛍️ Storefront</button>
      <button class="tab-btn" id="tabAdmin" onclick="switchDemoView('admin')">📊 Owner Dashboard</button>
    </div>
    <button class="cart-trigger" onclick="toggleCart()">
      <span>🛒 Cart</span>
      <span class="cart-badge" id="cartCount">0</span>
    </button>
  </header>

  <main class="content-area">

    <!-- STOREFRONT VIEW -->
    <div id="viewStore">
      <div class="hero-banner">
        <div>
          <div class="banner-pill">⚡ Interactive Customer Demo</div>
          <h2 class="hero-title">${app.name}</h2>
          <p class="hero-sub">Try browsing items, adding to cart, and testing real-time ABA KHQR checkout!</p>
        </div>
      </div>

      <div class="prod-grid" id="demoProductGrid">
        <div class="prod-card">
          <div class="prod-img">📱</div>
          <div class="prod-info">
            <div class="prod-name">Pro Mobile Smart Device</div>
            <div class="prod-price-row">
              <span class="prod-price">$120.00</span>
              <button class="btn-add" onclick="addToDemoCart('Pro Mobile Smart Device', 120)">+ Add</button>
            </div>
          </div>
        </div>

        <div class="prod-card">
          <div class="prod-img">🎧</div>
          <div class="prod-info">
            <div class="prod-name">Wireless ANC Headset</div>
            <div class="prod-price-row">
              <span class="prod-price">$45.00</span>
              <button class="btn-add" onclick="addToDemoCart('Wireless ANC Headset', 45)">+ Add</button>
            </div>
          </div>
        </div>

        <div class="prod-card">
          <div class="prod-img">💻</div>
          <div class="prod-info">
            <div class="prod-name">Mechanical Keyboard RGB</div>
            <div class="prod-price-row">
              <span class="prod-price">$65.00</span>
              <button class="btn-add" onclick="addToDemoCart('Mechanical Keyboard RGB', 65)">+ Add</button>
            </div>
          </div>
        </div>

        <div class="prod-card">
          <div class="prod-img">⚡</div>
          <div class="prod-info">
            <div class="prod-name">Fast Wireless Charger Pad</div>
            <div class="prod-price-row">
              <span class="prod-price">$25.00</span>
              <button class="btn-add" onclick="addToDemoCart('Fast Wireless Charger Pad', 25)">+ Add</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Success Banner -->
      <div class="success-box" id="successBox">
        <div class="success-icon">🎉</div>
        <h3 style="color: #10b981; margin-bottom: 6px;">ABA KHQR Payment Received!</h3>
        <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 12px;">The transaction was instantly settled and dispatched to the store owner.</p>
        <button class="btn-add" onclick="document.getElementById('successBox').style.display='none'">Continue Shopping</button>
      </div>
    </div>

    <!-- OWNER DASHBOARD VIEW -->
    <div id="viewAdmin" style="display: none;">
      <div class="metrics-row">
        <div class="metric-card">
          <h5>Total Revenue Today</h5>
          <div class="val" id="metricSales">$3,840.00</div>
        </div>
        <div class="metric-card">
          <h5>Total Orders</h5>
          <div class="val" id="metricOrders">28</div>
        </div>
        <div class="metric-card">
          <h5>ABA KHQR Settlement</h5>
          <div class="val" style="color: #10b981;">100% Instant</div>
        </div>
      </div>

      <div class="table-card">
        <div class="table-title">Recent Real-Time Customer Orders</div>
        <table class="orders-table">
          <thead>
            <tr><th>Order ID</th><th>Customer</th><th>Item</th><th>Amount</th><th>Status</th></tr>
          </thead>
          <tbody id="demoOrdersTable">
            <tr><td>#ORD-8941</td><td>Sok Dara</td><td>Pro Mobile Smart Device</td><td>$120.00</td><td style="color:#10b981;">✓ Paid (KHQR)</td></tr>
            <tr><td>#ORD-8940</td><td>Bopha Chan</td><td>Wireless ANC Headset</td><td>$45.00</td><td style="color:#10b981;">✓ Paid (KHQR)</td></tr>
            <tr><td>#ORD-8939</td><td>Vannak Meas</td><td>Mechanical Keyboard RGB</td><td>$65.00</td><td style="color:#10b981;">✓ Paid (KHQR)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

  </main>

  <!-- Sliding Cart Drawer -->
  <div class="cart-drawer" id="cartDrawer">
    <div class="cart-header">
      <h3 style="font-size: 1.1rem; font-weight: 800;">Your Cart</h3>
      <button onclick="toggleCart()" style="background:none; border:none; color:#94a3b8; font-size:1.4rem; cursor:pointer;">&times;</button>
    </div>
    <div class="cart-items" id="cartItemsList">
      <div style="text-align: center; color: #94a3b8; padding: 40px 0;">Cart is empty. Add an item!</div>
    </div>
    <div class="cart-footer">
      <div class="total-row">
        <span>Total:</span>
        <span id="cartTotalDisplay">$0.00</span>
      </div>
      <button class="btn-checkout" onclick="openSimKhqr()">
        <span>🇰🇭 Pay with ABA KHQR</span>
      </button>
    </div>
  </div>

  <!-- Simulated ABA KHQR Modal -->
  <div class="khqr-overlay" id="khqrModal">
    <div class="khqr-box">
      <h3 style="font-weight: 800; font-size: 1.15rem; letter-spacing: 1px;">🇰🇭 ABA KHQR</h3>
      <p style="font-size: 0.78rem; opacity: 0.9; margin-top: 2px;">National Bank of Cambodia</p>
      
      <div class="khqr-qr-wrap">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="#000">
          <path d="M0 0h30v30H0zM10 10h10v10H10zM70 0h30v30H70zM80 10h10v10H80zM0 70h30v30H0zM10 80h10v10H10zM40 10h10v10H40zM50 20h10v10H50zM10 40h10v10H10zM20 50h10v10H20zM40 40h20v20H40zM70 40h10v10H70zM80 50h20v10H80zM40 70h10v20H40zM60 70h20v10H60zM70 80h10v20H70zM90 70h10v30H90z"/>
        </svg>
      </div>

      <div style="font-size: 1.3rem; font-weight: 800; margin-bottom: 2px;" id="khqrAmount">$0.00</div>
      <div style="font-size: 0.8rem; opacity: 0.9;">Store: ${app.name}</div>

      <button class="btn-pay-sim" onclick="simulateSuccessfulPayment()">
        📱 Simulate Customer Payment
      </button>
      <button class="btn-pay-close" onclick="closeSimKhqr()">Cancel</button>
    </div>
  </div>

  <script>
    let cart = [];
    let totalSales = 3840;
    let orderCount = 28;

    function switchDemoView(v) {
      document.getElementById('viewStore').style.display = (v === 'store' ? 'block' : 'none');
      document.getElementById('viewAdmin').style.display = (v === 'admin' ? 'block' : 'none');
      document.getElementById('tabStore').classList.toggle('active', v === 'store');
      document.getElementById('tabAdmin').classList.toggle('active', v === 'admin');
    }

    function toggleCart() {
      document.getElementById('cartDrawer').classList.toggle('open');
    }

    function addToDemoCart(name, price) {
      cart.push({ name, price });
      renderCart();
      toggleCart();
    }

    function renderCart() {
      const list = document.getElementById('cartItemsList');
      const countEl = document.getElementById('cartCount');
      const totalEl = document.getElementById('cartTotalDisplay');
      
      countEl.textContent = cart.length;
      if (cart.length === 0) {
        list.innerHTML = '<div style="text-align: center; color: #94a3b8; padding: 40px 0;">Cart is empty. Add an item!</div>';
        totalEl.textContent = '$0.00';
        return;
      }

      let total = 0;
      list.innerHTML = cart.map((item, idx) => {
        total += item.price;
        return '<div class="cart-item"><div><div style="font-weight:700;">' + item.name + '</div><div style="color:#10b981; font-weight:800;">$' + item.price.toFixed(2) + '</div></div><button onclick="removeFromCart(' + idx + ')" style="background:none; border:none; color:#ef4444; cursor:pointer; font-weight:bold;">&times;</button></div>';
      }).join('');
      totalEl.textContent = '$' + total.toFixed(2);
    }

    function removeFromCart(idx) {
      cart.splice(idx, 1);
      renderCart();
    }

    function openSimKhqr() {
      if (cart.length === 0) {
        alert("Please add at least one product to cart first!");
        return;
      }
      let total = cart.reduce((acc, c) => acc + c.price, 0);
      document.getElementById('khqrAmount').textContent = '$' + total.toFixed(2);
      document.getElementById('khqrModal').classList.add('active');
    }

    function closeSimKhqr() {
      document.getElementById('khqrModal').classList.remove('active');
    }

    function simulateSuccessfulPayment() {
      let total = cart.reduce((acc, c) => acc + c.price, 0);
      totalSales += total;
      orderCount += 1;
      
      document.getElementById('metricSales').textContent = '$' + totalSales.toFixed(2);
      document.getElementById('metricOrders').textContent = orderCount;

      const tb = document.getElementById('demoOrdersTable');
      const tr = document.createElement('tr');
      const ordId = '#ORD-' + Math.floor(1000 + Math.random() * 9000);
      tr.innerHTML = '<td>' + ordId + '</td><td>You (Live Demo)</td><td>' + cart[0].name + (cart.length > 1 ? ' +' + (cart.length - 1) + ' more' : '') + '</td><td>$' + total.toFixed(2) + '</td><td style="color:#10b981; font-weight:700;">✓ Paid (KHQR)</td>';
      tb.insertBefore(tr, tb.firstChild);

      cart = [];
      renderCart();
      closeSimKhqr();
      document.getElementById('cartDrawer').classList.remove('open');
      document.getElementById('successBox').style.display = 'block';
      document.getElementById('successBox').scrollIntoView({ behavior: 'smooth' });
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
  dashOrdersTableBody.innerHTML = ordersList.slice(0, 4).map(order => `
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
      <td><span class="status-badge status-paid">● ${order.status}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="viewLicenseKey('${order.id}')" style="padding: 4px 10px; font-size: 0.78rem;">
          License Key
        </button>
      </td>
    </tr>
  `).join('');
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

// --- EVENT LISTENERS & SMOOTH NAVIGATION FLOW ---
function setupEventListeners() {
  // Brand Logo & View Switching
  brandLogoBtn.addEventListener('click', () => {
    switchView('marketplace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  headerSignInBtn.addEventListener('click', () => switchView('dashboard'));
  
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
  btnChecklistPayment.addEventListener('click', () => openModal(settingsModal));
  btnChecklistDelivery.addEventListener('click', () => openModal(settingsModal));
  btnChecklistTestStore.addEventListener('click', () => {
    switchView('marketplace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast("🛒 Previewing customer storefront. Test adding an app to cart!");
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
    storeLogoFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        if (file.size > 3 * 1024 * 1024) {
          alert("Please select an image smaller than 3MB.");
          return;
        }
        const reader = new FileReader();
        reader.onload = (loadEvt) => {
          const dataUrl = loadEvt.target.result;
          localStorage.setItem('acmart_custom_logo', dataUrl);
          applyCustomLogo(dataUrl);
          showToast("✓ Custom logo uploaded and applied to AC MART!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // --- Product Preview Image File Upload Handler ---
  const btnUploadProductImg = document.getElementById('btnUploadProductImg');
  const formAppImgFile = document.getElementById('formAppImgFile');
  const formAppImg = document.getElementById('formAppImg');

  if (btnUploadProductImg && formAppImgFile) {
    btnUploadProductImg.addEventListener('click', () => formAppImgFile.click());
  }

  if (formAppImgFile && formAppImg) {
    formAppImgFile.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        if (file.size > 3 * 1024 * 1024) {
          alert("Please select an image smaller than 3MB.");
          return;
        }
        const reader = new FileReader();
        reader.onload = (loadEvt) => {
          formAppImg.value = loadEvt.target.result;
          showToast("✓ Product image loaded successfully!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (btnRemoveCustomLogo) {
    btnRemoveCustomLogo.addEventListener('click', () => {
      localStorage.removeItem('acmart_custom_logo');
      applyCustomLogo(null);
      showToast("✓ Logo reset to default AC MART typography.");
    });
  }

  // Settings & Store Switcher
  storeSwitcherBtn.addEventListener('click', () => openModal(settingsModal));
  saveSettingsBtn.addEventListener('click', () => {
    const newName = settingStoreName.value.trim() || "បូវ Store";
    storeSettings.name = newName;
    sidebarStoreName.textContent = newName;
    dashStoreSubtitle.textContent = `Overview metrics for ${newName}`;
    localStorage.setItem('acmart_store_settings', JSON.stringify(storeSettings));
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
    const img = document.getElementById('formAppImg').value.trim() || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60";

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
      previewImage: img
    };

    appsList.unshift(newApp);
    localStorage.setItem('acmart_apps', JSON.stringify(appsList));

    const checkCircle1 = document.getElementById('checkCircle1');
    if (checkCircle1) checkCircle1.classList.add('completed');

    closeModal(appFormModal);
    renderAllSections();
    showToast(`✓ "${name}" has been published to AC MART Marketplace!`);
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
  headerSignInBtn.addEventListener('click', requestAdminAccess);
  headerCtaBtn.addEventListener('click', () => {
    if (currentView === 'dashboard') {
      switchView('marketplace');
    } else {
      requestAdminAccess();
    }
  });

  heroGetStartedBtn.addEventListener('click', requestAdminAccess);

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
  closeAppFormModalBtn.addEventListener('click', () => closeModal(appFormModal));
  cancelAppFormBtn.addEventListener('click', () => closeModal(appFormModal));
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
}
