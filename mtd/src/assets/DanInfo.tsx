import imageAssetsVar from "./images/imageAssets";

export const Experience=[
    {
        year: "2024 - 2024",
        role: "Software Developer",
        company: "Fiverr Freelance.",
        description: `Designed an automated solution to retrieve data via API, generate Excel reports, 
        and distribute them to multiple recipients daily. Implemented a Google Apps Script version for 
        seamless, always-online operation. Developed a Selenium-based alternative for website scraping,incase of recapcha updates `,
        technologies: ["Python", "Google Apps Script", "Selenium", "Requests"],
    }
    ,
    {
        year: "2023 - 2023",
        role: "Software Developer",
        company: "Upwork Freelance.",
        description: `Assisted in developing LinkedIn automation tools by setting up Django endpoints 
    for seamless data processing and integration.`,
        technologies: ["Python", "Django", "LinkedIn API"],
    }
    
];


export const  HeroContent='I am an innovator who loves creating practical solutions to everyday challenges. My passion lies in turning ideas into systems that work seamlessly and provide value to users. I enjoy exploring different approaches, learning from each experience, and delivering results that make a difference. Collaboration, growth, and impact are what drive me forward.';

export const AboutContent='I am a passionate problem-solver who thrives on creating practical, impactful solutions. I enjoy turning ideas into seamless systems that simplify tasks and deliver real value to users. With a mindset focused on innovation and growth, I embrace every project as a chance to learn, collaborate, and make a difference. I’m driven by the desire to build tools that empower others, streamline workflows, and leave a meaningful impact.';

export const Projects = [
    {
        title: "React UI with Vercel Deployment (PDF Management)",
        image: imageAssetsVar.pydfui, // Add the appropriate image import
        description: (
            <>
                A sleek, React-based frontend deployed on Vercel, allowing users to preview, manage, and organize PDF files with an intuitive UI. The app seamlessly interacts with a FastAPI backend, ensuring fast and efficient file handling. 
                <br />
                Visit at{' '}
                <a href="https://pydfui.vercel.app/" target="_blank" rel="noopener noreferrer">
                    https://pydfui.vercel.app/
                </a>
            </>
        ),
        technologies: ["React", "Vercel", "FastAPI", "PDF.js"]
    },
    {
        title: "FastAPI Backend with Vercel Deployment (PDF Management)",
        image: imageAssetsVar.pdfapi, // Add the appropriate image import
        description: (
            <>
                A FastAPI-based backend, deployed on Vercel, that processes and handles PDF files. It serves as the backbone for a React frontend, enabling users to upload, preview, and organize their PDFs with optimal speed and performance.
                <br />
                Make Requests at{' '}
                <a href="https://pydf-api.vercel.app" target="_blank" rel="noopener noreferrer">
                https://pydf-api.vercel.app
                </a>
            </>
        ),
        technologies: ["FastAPI", "Vercel", "Python"]
    },
    {
        title: "FastAPI Integration for Yemot and Donary APIs",
        image: imageAssetsVar.yemapi, // Add the appropriate image import
        description: (
            <>
                A FastAPI-based backend designed to integrate the Yemot telephony system with the Donary API, enabling seamless communication between the two systems. The application processes incoming telephony data and routes it to Donary for further actions, ensuring real-time data exchange and high performance.
                <br />
                Explore the project on GitHub at{' '}
                <a href="https://github.com/DanGatobu/DnApi" target="_blank" rel="noopener noreferrer">
                https://github.com/DanGatobu/DnApi
                </a>
            </>
        ),
        technologies: ["FastAPI", "Python", "Yemot", "Donary API"]
    },
    {
        title: "AI-Powered Trading Bot",
        image: imageAssetsVar.fxb, // Add the appropriate image import
        description: (
            <>
                A sophisticated trading bot leveraging TensorFlow for machine learning, PyQt6 for the GUI, and the MetaTrader API for executing trades based on real-time market data. This bot automates trading tasks and provides a user-friendly interface for configuration and monitoring.
                <br />
                Check out the project on GitHub at{' '}
                <a href="https://github.com/DanGatobu/Forth-project" target="_blank" rel="noopener noreferrer">
                    https://github.com/DanGatobu/Forth-project
                </a>
            </>
        ),
        technologies: ["Python", "TensorFlow", "PyQt6", "MetaTrader", "MongoDB", "APScheduler"]
    },
    
    {
        title: "Automated Instagram Account grower (Selenium)",
        image: imageAssetsVar.instagrower, // Add the appropriate image import
        description: (
            <>
                A Qt application that automates Instagram account growth by following,unfollowing targeted and random accounts and also posts images set.Its using Selenium to iteract with instagram to avoid detection. The system supports multiple Instagram accounts and stores data in PostgreSQL for growth metrics.
                <br />
                Clone at{' '}
                <a href="https://github.com/DanGatobu/instabot" target="_blank" rel="noopener noreferrer">
                https://github.com/DanGatobu/instabot
                </a>
            </>
        ),
        technologies: ["QT", "Selenium", "PostgreSQL", "Python"]
    },
    {
        title: "Automated Excel Generator & Email Sender",
        image: imageAssetsVar.gap, // Add the appropriate image import
        description: (
            <>
                A Python tool that fetches data via an API, generates Excel reports, and sends them via email daily. It automates the report creation and delivery process.Also has a Google Apps Script version for always online operation.
                <br />
                Clone at{' '}
                <a href="https://github.com/DanGatobu/donaryselenum" target="_blank" rel="noopener noreferrer">
                https://github.com/DanGatobu/donaryselenum
                </a>
                {' & '}
                <a href="https://github.com/DanGatobu/donary-scrap" target="_blank" rel="noopener noreferrer">
                https://github.com/DanGatobu/donary-scrap
                </a>
            </>
        ),
        technologies: ["Python",  "Selenium", "Google Apps Script"]
    },
    {
        title: "Django Job Application Assistant",
        image: imageAssetsVar.jbap, // Add the appropriate image import
        description: (
            <>
               A productivity tool that simplifies the job application process by automating template customization and submission, with scheduling reminders to resend applications. It uses PostgreSQL for data management.
                <br />
                Clone at{' '}
                <a href="https://github.com/DanGatobu/job-application-manager" target="_blank" rel="noopener noreferrer">
                https://github.com/DanGatobu/job-application-manager
                </a>
                
            </>
        ),
        technologies: ["Django", "PostgreSQL", "Python"]
    },
    {
        title: "Django E-commerce Shop",
        image: imageAssetsVar.djangoecom2, // Add the appropriate image import
        description: (
            <>
                An online shopping platform built with Django, featuring secure payment integration, real-time inventory updates via Firebase, and order management for a seamless shopping experience.
                <br />
                Clone at{' '}
                <a href="https://github.com/DanGatobu/Fitshop" target="_blank" rel="noopener noreferrer">
                https://github.com/DanGatobu/Fitshop
                </a>
            </>
        ),
        technologies: ["Django", "Firebase", "PostgreSQL", "Paypal", "Python"]
    },
    
    {
        title: "React E-commerce Shop",
        image: imageAssetsVar.reactshp, // Add the appropriate image import
        description: (
            <>
                A modern e-commerce platform built with React, featuring a sleek design and intuitive user experience. This application supports product browsing, a shopping cart, and secure checkout functionality.
                <br />
                Check out the project on GitHub at{' '}
                <a href="https://github.com/DanGatobu/fitshopui" target="_blank" rel="noopener noreferrer">
                    https://github.com/DanGatobu/fitshopui
                </a>
            </>
        ),
        technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    }
    
    
];


export const contactMe={
    email: "rdan99848@gmail.com",
    phoneNo: "+254 710948 426",
    address: "Nairobi, Kenya",
}