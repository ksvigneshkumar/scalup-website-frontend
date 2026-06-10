
export const features = [
  {
    icon: "⚡", iconBg: "#1a1040", iconColor: "#f59e0b",
    title: "Marketing engine",
    desc: "From content creation to audience building, AI-powered marketing products that generate leads and automate campaigns at scale.",
    badges: ["Marketing automation", "Gamified lead gen", "Review management"],
  },
  {
    icon: "🎯", iconBg: "#0f2a1a", iconColor: "#ec4899",
    title: "Sales engine",
    desc: "Sales coaching, cold email, and email marketing automation — everything you need to accelerate sales performance and crush quota.",
    badges: ["Sales automation", "400M lead database", "Intent signals"],
  },
  {
    icon: "🤖", iconBg: "#101828", iconColor: "#a855f7",
    title: "Support engine",
    desc: "AI-native chatbot with agentic features to automate customer support, qualify leads, and handle inbound sales 24/7.",
    badges: ["Omni-channel helpdesk", "Lead qualification", "Implicit capture"],
  },
  {
    icon: "🛍️", iconBg: "#1a1000", iconColor: "#f97316",
    title: "eCommerce engine",
    desc: "AI chatbot with agentic capabilities for pre-purchase, purchase, and post-purchase eCommerce support with product recommendations.",
    badges: ["AI-native workflows", "Product recommendations", "Multilingual"],
  },
  {
    icon: "📊", iconBg: "#1a0e00", iconColor: "#f59e0b",
    title: "Analytics engine",
    desc: "Unified dashboard across all your products. Understand pipeline health, campaign ROI, and customer journeys at a glance.",
    badges: ["Revenue attribution", "Funnel analysis", "Real-time reports"],
  },
  {
    icon: "🔌", iconBg: "#1a0a30", iconColor: "#a855f7",
    title: "Integration hub",
    desc: "Connect with 60+ of your favorite tools directly — no third-party middleware needed. Your data flows exactly where it should.",
    badges: ["60+ integrations", "Native webhooks", "Zapier-free"],
  },
];

export const products = {
  marketing: [
    ["🎪", "Optinly", "Engage your audience with strategic popups personalized for your use case that capture leads 10X faster."],
    ["📝", "Forms", "AI-powered no-code form builder to collect feedback via forms, polls, and surveys with zero effort."],
    ["🎮", "Engage", "A gamified, eCommerce-friendly lead generation platform that makes capturing leads fun."],
    ["🔔", "Notify", "Push notification software that boosts customer engagement and retention across devices."],
    ["✍️", "Content AI", "AI-powered content creator for high-quality SEO content and copywriting at any scale."],
    ["⭐", "Testimonials", "Collect, manage, and display social proof from Google, Trustpilot, and Facebook automatically."],
  ],
  sales: [
    ["📈", "Growth", "End-to-end sales automation to help you close more deals faster with less effort."],
    ["🎯", "HyperReach AI", "AI-powered cold outreach with a 400M lead database and intent signals."],
    ["🧭", "Inbound 360", "Capture, qualify, and route inbound leads automatically — no manual effort required."],
  ],
  support: [
    ["🤖", "DeepAgent", "AI agent builder for fully automated customer support and sales workflows."],
    ["💬", "Omni Helpdesk", "Unified inbox across email, chat, and social for seamless customer support."],
    ["🛍️", "eCommerce Bot", "AI shopping assistant that handles pre and post-purchase support end to end."],
  ],
};

export const integrations = [
  ["⚡","Zapier"],["🔶","HubSpot"],["📊","Google Sheets"],["🛍️","WooCommerce"],
  ["💳","Stripe"],["📦","Shopify"],["📧","Gmail"],["📅","Google Calendar"],
  ["💬","Slack"],["🔵","Salesforce"],["📝","Notion"],["🌐","WordPress"],
  ["📌","Trello"],["🔗","Webflow"],["🟡","Pipedrive"],["📱","WhatsApp"],
  ["🔴","Mailchimp"],["🟣","ActiveCampaign"],["📊","Airtable"],["➕","+40 more..."],
];

export const faqs = [
  ["Can I use full products instead of the bundle",
   "Yes! You can subscribe to individual products. Each is available standalone, but the bundle gives best value with all tools under one roof."],
  ["Is there really no credit card required for the free plan",
   "Absolutely. Starter plan is free forever — no credit card needed. Just sign up with your email."],
  ["How does migration from my current tool work?",
   "Our team provides white-glove migration support. We help export data from current tools and import into Scalup with zero downtime."],
  ["Does Scalup work for eCommerce stores",
   "Yes! Scalup has a dedicated eCommerce engine with AI shopping assistant, post-purchase bots, and Shopify/WooCommerce integrations."],
  ["What Kind of Customer Support do you offer",
   "Email support on Starter, priority support on Growth, and 24/7 dedicated support on Scale plan."],
  ["Is there an affiliate or partnership program",
   "Yes! We have both an affiliate program and a partner program. Visit our Partner Program page to learn more."],
];

export const companyCards = [
  {
    title: "STARTUPS",
    desc: "Built for fast-moving startups that need growth without building large teams. Scalup helps startups automate marketing, capture leads, run outreach campaigns, and support customers using AI-powered tools — all from one platform.",
    features: ["AI-powered marketing automation","Cold outreach + lead database","AI agent / chatbot builder","AI Customer Support","Unified Growth Platform","Rapid Experimental tools"],
  },
  {
    title: "MID-SIZE BUSINESSES",
    desc: "Designed for growing businesses that need scalable systems across marketing, sales, and customer engagement. Scalup helps streamline workflows, improve team productivity, automate customer communication, and unify data.",
    features: ["Scalable marketing & sales systems","Workflow automation & team productivity","Automated customer communication","Unified data across departments","Revenue generation tools","Reduced operational complexity"],
  },
  {
    title: "ENTERPRISES",
    desc: "Engineered for enterprises that require advanced automation, AI-driven workflows, large-scale customer engagement, and deep integrations. Scalup enables enterprise teams to centralize operations and deliver personalized experiences.",
    features: ["Advanced automation & AI-driven workflows","Large-scale customer engagement","Deep integrations with enterprise systems","Centralized operations management","Analytics for data-driven decision making","Personalized customer experiences at scale"],
  },
];

export const pricingPlans = [
  {
    name: "Starter", price: "0", period: "/month forever",
    sub: "Perfect for solopreneurs and early-stage startups exploring growth tools.",
    features: [
      { y: true,  t: "3 active products" },
      { y: true,  t: "500 Contacts" },
      { y: true,  t: "Basic analytics" },
      { y: true,  t: "Email support" },
      { y: false, t: "Advanced automation" },
      { y: false, t: "AI agents" },
      { y: false, t: "Custom integrations" },
    ],
    cta: "Get Started Free", highlight: false,
  },
  {
    name: "Growth", price: "29", period: "/month billed yearly",
    sub: "For growing businesses ready to automate their sales and marketing stack.",
    features: [
      { y: true,  t: "Unlimited products" },
      { y: true,  t: "10,000 Contacts" },
      { y: true,  t: "Advanced analytics" },
      { y: true,  t: "Priority support" },
      { y: false, t: "White-label solution" },
      { y: false, t: "Dedicated manager" },
    ],
    cta: "Start Free Trial", highlight: true,
  },
  {
    name: "Scale", price: "79", period: "/month billed yearly",
    sub: "Built for scaling teams and agencies that need high volume automation.",
    features: [
      { y: true, t: "Unlimited everything" },
      { y: true, t: "AI agents" },
      { y: true, t: "Custom integrations" },
      { y: true, t: "24/7 support" },
      { y: true, t: "10,000 Contacts" },
      { y: true, t: "Advanced analytics" },
      { y: true, t: "Priority support" },
    ],
    cta: "Talk to Expert", highlight: false,
  },
];


export const comparisonFeatures = [
  ["AI-powered marketing automation", "y","p","y","n"],
  ["Cold outreach + lead database",   "y","n","n","y"],
  ["AI agent / chatbot builder",      "y","p","n","n"],
  ["Gamified lead capture",           "y","n","n","n"],
  ["Push notifications",              "y","n","n","n"],
  ["Native eCommerce support",        "y","p","p","n"],
  ["Review / testimonial management", "y","n","n","n"],
  ["Starting price / month",          "$29","$800","$20","$37"],
];

export const footerLinks = {
  products: ["deepagent","growth","HyperReach AI","Forms","Engage","Content AI","Notify","Testimonials","Inbound 360"],
  company:  ["About Us","Blog","Free Ebooks","Partner Program","Referral Program","Careers"],
  policy:   ["Privacy Policy","Terms and Conditions","Cookie Policy","GDPR"],
};
