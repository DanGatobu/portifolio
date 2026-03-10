import imageAssetsVar from "./images/imageAssets";

export const Experience = [
    {
        year: "2024 - Present",
        role: "Software Developer",
        company: "Fiverr Freelance.",
        description: `Designed an automated solution to retrieve data via API, generate Excel reports, 
        and distribute them to multiple recipients daily. Implemented a Google Apps Script version for 
        seamless, always-online operation. Developed a Selenium-based alternative for website scraping, in case of recaptcha updates.`,
        technologies: ["Python", "Google Apps Script", "Selenium", "Requests"],
    },
    {
        year: "2023 - 2023",
        role: "Software Developer",
        company: "Upwork Freelance.",
        description: `Assisted in developing LinkedIn automation tools by setting up Django endpoints 
    for seamless data processing and integration.`,
        technologies: ["Python", "Django", "LinkedIn API"],
    },
];

export const HeroContent = 'I am an innovator who loves creating practical solutions to everyday challenges. My passion lies in turning ideas into systems that work seamlessly and provide value to users. I enjoy exploring different approaches, learning from each experience, and delivering results that make a difference. Collaboration, growth, and impact are what drive me forward.';

export const AboutContent = 'I am a passionate problem-solver who thrives on creating practical, impactful solutions. I enjoy turning ideas into seamless systems that simplify tasks and deliver real value to users. With a mindset focused on innovation and growth, I embrace every project as a chance to learn, collaborate, and make a difference. I\'m driven by the desire to build tools that empower others, streamline workflows, and leave a meaningful impact.';

export const TechSummary = {
    languages: ["Python", "JavaScript", "TypeScript"],
    frameworks: ["React", "Next.js", "Django", "FastAPI", "Flask"],
    databases: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"],
    cloudDevOps: ["AWS EC2", "AWS ECS", "AWS Lambda", "Vercel", "Docker", "GCP", "Koyeb", "Render"],
    apis: ["Slack", "Linear", "YouTube", "Stripe", "PayPal", "Calendly", "MetaTrader", "Apollo", "LinkedIn", "Attio", "Fireflies AI"],
    automation: ["N8N", "Zapier", "GoHighLevel", "Airtable", "Monday.com", "Selenium", "Web Scraping"],
    aiMl: ["TensorFlow", "LangChain", "Natural Language Processing"],
    mediaProcessing: ["FFmpeg", "PDF.js", "yt-dlp"],
};

export const Projects = [
    // ── Full-Stack / Live Platforms ────────────────────────────────────────
    {
        title: "AllTools — Developer Utilities Platform",
        image: imageAssetsVar.pydfui,
        description: "A web platform aggregating practical developer utilities into a single, fast, mobile-friendly interface. React frontend deployed on Vercel, FastAPI backend on AWS EC2/GCP VM, optimized for low-latency API responses and reliable uptime. Live: https://www.alltools.sbs/",
        technologies: ["React", "FastAPI", "Vercel", "AWS EC2", "GCP"],
        liveUrl: "https://www.alltools.sbs/",
    },
    {
        title: "DevToolss — Developer Tools Directory",
        image: imageAssetsVar.pydfui,
        description: "A curated developer tools discovery site focused on discoverability and quick access. Clean, responsive React UI with a FastAPI backend deployed on Koyeb for efficient hosting and scaling. Live: https://www.devtoolss.sbs/",
        technologies: ["React", "FastAPI", "Vercel", "Koyeb"],
        liveUrl: "https://www.devtoolss.sbs/",
    },
    {
        title: "PDFWorkshop — PDF Tools Suite",
        image: imageAssetsVar.pdfapi,
        description: "A web-based PDF utilities suite for everyday document workflows. Decoupled React frontend and FastAPI backend enabling modular feature delivery and independent scaling. Live: https://www.pdfworkshop.sbs/",
        technologies: ["React", "FastAPI", "Vercel", "AWS EC2", "GCP"],
        liveUrl: "https://www.pdfworkshop.sbs/",
    },
    {
        title: "MP3Juices — Audio Download Web App",
        image: imageAssetsVar.mpyjuiceui,
        description: "A lightweight web app for converting and downloading YouTube audio with a simple, user-focused interface. Separate API layer keeps the frontend fast and the backend scalable. Live: https://www.mp3juices.sbs/",
        technologies: ["React", "FastAPI", "Vercel", "AWS EC2", "GCP", "FFmpeg", "yt-dlp"],
        liveUrl: "https://www.mp3juices.sbs/",
    },
    {
        title: "Browser-Based Code Editor",
        image: imageAssetsVar.pydfui,
        description: "A Next.js in-browser editor experience with a Dockerized backend hosted on Render. Focused on performance, reliability, and a smooth in-browser workflow. Live: https://editor-tau-sand.vercel.app/",
        technologies: ["Next.js", "Docker", "Render", "Vercel"],
        liveUrl: "https://editor-tau-sand.vercel.app/",
    },
    {
        title: "Portfolio Website",
        image: imageAssetsVar.abtme,
        description: "Personal portfolio built with React and deployed on Vercel showcasing projects, experience, and skills. Live: https://meetdan.vercel.app/",
        technologies: ["React", "Vercel", "Tailwind CSS", "TypeScript"],
        liveUrl: "https://meetdan.vercel.app/",
    },

    // ── PDF Management System ──────────────────────────────────────────────
    {
        title: "PDF Management System — Full Stack",
        image: imageAssetsVar.pydfui,
        description: "Complete PDF management solution with separate frontend and backend deployments. React frontend on Vercel for intuitive PDF preview, organization, and management. FastAPI backend handling PDF processing and file uploads. Frontend: https://pydfui.vercel.app/ | Backend API: https://pydf-api.vercel.app",
        technologies: ["React", "FastAPI", "Vercel", "PDF.js", "Python"],
        liveUrl: "https://pydfui.vercel.app/",
    },

    // ── MP3 Platform ───────────────────────────────────────────────────────
    {
        title: "MP3 Audio Downloader Platform — Full Stack",
        image: imageAssetsVar.mpyjuiceui,
        description: "Comprehensive audio extraction platform. FastAPI backend leveraging yt-dlp and FFmpeg for YouTube audio extraction. React frontend with YouTube Data API integration for video search and MP3 download management. Deployed on AWS EC2 with Docker containerization. Frontend: https://mpyjuice-ui.vercel.app/ | Docker Hub: https://hub.docker.com/r/dodan9/mpy3juices",
        technologies: ["React", "FastAPI", "AWS EC2", "Docker", "FFmpeg", "yt-dlp", "YouTube Data API"],
        liveUrl: "https://mpyjuice-ui.vercel.app/",
    },

    // ── E-commerce ─────────────────────────────────────────────────────────
    {
        title: "Django E-commerce Shop",
        image: imageAssetsVar.djangoecom2,
        description: "Full-featured online shopping platform with secure PayPal payment integration, real-time inventory management via Firebase, comprehensive order management, and PostgreSQL for robust data handling. GitHub: https://github.com/DanGatobu/Fitshop",
        technologies: ["Django", "Firebase", "PostgreSQL", "PayPal", "Python"],
        githubUrl: "https://github.com/DanGatobu/Fitshop",
    },
    {
        title: "React E-commerce Shop",
        image: imageAssetsVar.reactshp,
        description: "Modern e-commerce solution with sleek responsive design, shopping cart, product catalog, and secure Stripe checkout. MongoDB for flexible data storage. GitHub: https://github.com/DanGatobu/fitshopui",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/DanGatobu/fitshopui",
    },

    // ── API Integration ────────────────────────────────────────────────────
    {
        title: "Telephony System Integration — Yemot & Donary APIs",
        image: imageAssetsVar.yemapi,
        description: "Enterprise-grade FastAPI integration connecting the Yemot telephony system with the Donary platform. Real-time data processing and routing, seamless communication between telephony and business systems, high-performance data exchange architecture. GitHub: https://github.com/DanGatobu/DnApi",
        technologies: ["FastAPI", "Python", "Yemot API", "Donary API"],
        githubUrl: "https://github.com/DanGatobu/DnApi",
    },
    {
        title: "Intelligent Support Ticketing System",
        image: imageAssetsVar.gap,
        description: "Comprehensive real-time customer support platform integrating user communication with internal team workflows. Features WebSocket-powered real-time messaging, automated ticket creation, and direct Slack integration for support team collaboration. Firebase handles user authentication and data persistence for reliable ticket tracking and resolution management.",
        technologies: ["Next.js", "FastAPI", "WebSockets", "Slack API", "Firebase", "Flask"],
    },

    // ── N8N Automation ─────────────────────────────────────────────────────
    {
        title: "Project Management Automation — N8N",
        image: imageAssetsVar.gap,
        description: "Engineered an automated workflow system integrating Linear project tracking with Slack. New projects are automatically posted to designated Slack channels, enabling team members to claim assignments directly through Slack interactions, reducing project allocation time and improving team coordination.",
        technologies: ["N8N", "Slack API", "Linear API"],
    },
    {
        title: "Intelligent Email Response System — N8N",
        image: imageAssetsVar.gap,
        description: "Automated email management system that generates contextual AI responses, routes them through Slack for team approval and modification, then sends finalized responses. Reduces response time while maintaining quality control through human oversight.",
        technologies: ["N8N", "Email APIs", "Slack API"],
    },
    {
        title: "Recruitment Automation — N8N",
        image: imageAssetsVar.gap,
        description: "Intelligent candidate screening system. Automated job application analysis, candidate shortlisting based on predefined criteria, streamlined recruitment process optimization.",
        technologies: ["N8N", "Natural Language Processing"],
    },
    {
        title: "FAQ Generation System — N8N",
        image: imageAssetsVar.gap,
        description: "Automated system that collects and analyzes Slack conversations to generate comprehensive FAQs and knowledge base articles. The N8N workflow processes communication patterns, identifies frequently asked questions, and creates structured documentation, significantly reducing repetitive support queries.",
        technologies: ["N8N", "Slack API", "Natural Language Processing"],
    },

    // ── AI / ML ────────────────────────────────────────────────────────────
    {
        title: "AI-Powered Trading Bot",
        image: imageAssetsVar.fxb,
        description: "Sophisticated algorithmic trading system using TensorFlow for ML market analysis, real-time trade execution via MetaTrader API, PyQt6 GUI for monitoring and configuration, MongoDB for trade history and performance analytics. GitHub: https://github.com/DanGatobu/Forth-project",
        technologies: ["Python", "TensorFlow", "PyQt6", "MetaTrader API", "MongoDB", "APScheduler"],
        githubUrl: "https://github.com/DanGatobu/Forth-project",
    },

    // ── Automation & Scraping ──────────────────────────────────────────────
    {
        title: "Automated Instagram Account Grower",
        image: imageAssetsVar.instagrower,
        description: "Instagram growth automation platform with multi-account management, automated following/unfollowing strategies, image posting with scheduling, and PostgreSQL analytics for growth metrics. Uses Selenium to interact with Instagram to avoid detection. GitHub: https://github.com/DanGatobu/instabot",
        technologies: ["Qt", "Selenium", "PostgreSQL", "Python"],
        githubUrl: "https://github.com/DanGatobu/instabot",
    },
    {
        title: "Automated Excel Report Generator & Email Sender",
        image: imageAssetsVar.gap,
        description: "Automated business reporting solution. API data fetching, Excel report generation, and daily automated email distribution. Also has a Google Apps Script version for always-online operation. GitHub: https://github.com/DanGatobu/donaryselenum & https://github.com/DanGatobu/donary-scrap",
        technologies: ["Python", "Selenium", "Google Apps Script"],
        githubUrl: "https://github.com/DanGatobu/donaryselenum",
    },
    {
        title: "Comprehensive Web Scraping Suite",
        image: imageAssetsVar.gap,
        description: "Large-scale data collection infrastructure. PitchBook: scraped and processed 150,000+ investment and company records. RocketReach: collected and structured 50,000+ contact records in Supabase. Apollo & LinkedIn: built scalable scraping solutions for lead generation and market research. Also covers e-commerce (Zillow, Amazon, Walmart, eBay, Etsy, AliExpress), social media (Facebook, Instagram, TikTok), and travel/review platforms (TripAdvisor, Booking.com, Yelp). 200,000+ records processed total.",
        technologies: ["Python", "Web Scraping", "Supabase", "Apollo API", "LinkedIn API"],
    },

    // ── Content / Media ────────────────────────────────────────────────────
    {
        title: "YouTube Shorts Generator",
        image: imageAssetsVar.ytdownloader,
        description: "Automated content creation pipeline for YouTube Shorts. Text-to-video short generation, automated YouTube upload and publishing, video processing with FFmpeg. Example outputs: https://youtube.com/shorts/short1 | https://youtube.com/shorts/short2",
        technologies: ["Python", "FFmpeg", "YouTube API", "Video Processing"],
    },

    // ── Marketing ──────────────────────────────────────────────────────────
    {
        title: "Email Marketing Platform Integrations",
        image: imageAssetsVar.gap,
        description: "Integrated multiple email marketing platforms including SmartLead, MailLead, and Instantly via API connections. Automated campaign management and analytics, cross-platform data synchronization.",
        technologies: ["APIs", "Automation Workflows"],
    },

    // ── Productivity ───────────────────────────────────────────────────────
    {
        title: "Django Job Application Assistant",
        image: imageAssetsVar.jbap,
        description: "Productivity tool that simplifies the job application process with template customization, automated submission, and scheduling reminders for follow-ups. PostgreSQL for application tracking. GitHub: https://github.com/DanGatobu/job-application-manager",
        technologies: ["Django", "PostgreSQL", "Python"],
        githubUrl: "https://github.com/DanGatobu/job-application-manager",
    },

    // ── New Projects ───────────────────────────────────────────────────────
    {
        title: "Project Management Dashboard",
        image: imageAssetsVar.gap,
        description: "Centralized project management platform providing comprehensive oversight of development projects. Features project creation, status tracking, resource allocation, and progress monitoring. Supabase powers real-time data synchronization with a fully responsive design for cross-device accessibility.",
        technologies: ["Next.js", "FastAPI", "Supabase"],
    },
    {
        title: "AI-Powered Website Analysis Chatbot",
        image: imageAssetsVar.gap,
        description: "Intelligent chatbot agent that analyzes websites and provides actionable insights. Leverages LangChain's NLP capabilities to crawl, analyze, and summarize website content, offering detailed reports on site structure, content quality, and optimization opportunities.",
        technologies: ["LangChain", "FastAPI", "Python", "Natural Language Processing"],
    },
    {
        title: "CRM Integration & Automation Suite",
        image: imageAssetsVar.gap,
        description: "Comprehensive business process automation suite built with N8N. Attio-Bison integration for automated CRM and business intelligence data sync. Calendly-Attio connection for automatic CRM record creation from calendar bookings. Candidate shortlisting automation that screens job applications based on predefined criteria.",
        technologies: ["N8N", "Attio CRM", "Calendly", "Bison Automation"],
    },
    {
        title: "Next.js + FastAPI Production App Maintenance (AWS EC2)",
        image: imageAssetsVar.gap,
        description: "Owned ongoing maintenance for a production Next.js application backed by a FastAPI API hosted on AWS EC2 Linux. Delivered stability improvements, bug fixes, dependency upgrades, and deployment support while maintaining high uptime and performance.",
        technologies: ["Next.js", "FastAPI", "AWS EC2", "Linux"],
    },
    {
        title: "Zapier + Fireflies AI Automation Pipeline",
        image: imageAssetsVar.gap,
        description: "Automation pipeline that pulls meeting transcripts from Fireflies AI, applies a quality scoring and rating step, and saves a clean summary plus rating into documents for different stakeholders. Reduced manual copy-paste work and improved consistency of meeting documentation.",
        technologies: ["Zapier", "Fireflies AI", "Google Docs", "Automation"],
    },
    {
        title: "GoHighLevel Workflow & Pipeline Automation",
        image: imageAssetsVar.gap,
        description: "Designed and implemented multiple GHL workflows to automate course operations and reduce manual updates across the learner lifecycle. Automated pipeline transitions and updates for key milestones such as course start and course completion.",
        technologies: ["GoHighLevel", "CRM Automation", "Workflow Design"],
    },
    {
        title: "Paradigm Sequencer (Contributor)",
        image: imageAssetsVar.gap,
        description: "Contributed to building the Paradigm Sequencer platform, assisting with implementation work and feature delivery. Live: https://paradigmoutreach.com/",
        technologies: ["Web Application Development"],
        liveUrl: "https://paradigmoutreach.com/",
    },
    {
        title: "Airtable + Monday.com Automation",
        image: imageAssetsVar.gap,
        description: "Implemented automation workflows using Airtable native automations and N8N to connect systems, reduce repetitive ops work, and keep data in sync across teams.",
        technologies: ["Airtable", "Monday.com", "N8N", "Automation"],
    },
    {
        title: "Mini Real-Time Ticketing System",
        image: imageAssetsVar.gap,
        description: "Lightweight real-time ticketing system with a FastAPI WebSocket backend hosted on Render, Next.js frontend, and Firebase for authentication and persistence. Enables fast ticket creation and live updates for support operations.",
        technologies: ["FastAPI", "WebSockets", "Next.js", "Firebase", "Render"],
    },
    {
        title: "Artemis Delta — Website Maintenance",
        image: imageAssetsVar.gap,
        description: "Provided ongoing maintenance and improvements for a live production website, focusing on reliability, bug fixes, and incremental enhancements. Live: https://artemisdelta.com/",
        technologies: ["Web Maintenance", "Bug Fixes"],
        liveUrl: "https://artemisdelta.com/",
    },
];

export const contactMe = {
    email: "rdan99848@gmail.com",
    phoneNo: "+254 710948 426",
    address: "Nairobi, Kenya",
};
