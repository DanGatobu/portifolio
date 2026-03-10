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
    apis: ["Slack", "Linear", "YouTube", "Stripe", "PayPal", "Calendly", "MetaTrader"],
    automation: ["N8N", "Selenium", "Web Scraping"],
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
        description: "Real-time customer support platform with live Slack integration for support teams, WebSocket-powered real-time communication, automated ticket creation and management, and seamless UI-to-Slack workflow for efficient support operations.",
        technologies: ["FastAPI", "Next.js", "Slack API", "WebSockets"],
    },

    // ── N8N Automation ─────────────────────────────────────────────────────
    {
        title: "Project Management Automation — N8N",
        image: imageAssetsVar.gap,
        description: "Streamlined project workflow system using N8N. Automated project posting to Slack channels, direct task assignment through Slack interactions, Linear-Slack integration for seamless project tracking.",
        technologies: ["N8N", "Slack API", "Linear API"],
    },
    {
        title: "Intelligent Email Response System — N8N",
        image: imageAssetsVar.gap,
        description: "Automated email management with human oversight. AI-generated email responses, Slack-based approval and editing workflow, automated sending after confirmation.",
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
        description: "Knowledge base automation via N8N. Slack message analysis and processing, automated FAQ and Q&A generation, continuous knowledge base updates from team communications.",
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
        description: "Large-scale data collection infrastructure built for an upcoming Next.js + FastAPI + Supabase project. Covers e-commerce (Zillow, Amazon, Walmart, eBay, Etsy, AliExpress), social media (Facebook, Instagram, TikTok), business intelligence (Apollo, PitchBook, Crunchbase, ZoomInfo, LinkedIn), and travel/review platforms (TripAdvisor, Booking.com, Yelp). Over 200,000+ records processed across platforms.",
        technologies: ["Python", "Web Scraping", "APIs", "Supabase"],
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
];

export const contactMe = {
    email: "rdan99848@gmail.com",
    phoneNo: "+254 710948 426",
    address: "Nairobi, Kenya",
};
