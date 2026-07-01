export type Project = {
    title: string;
    description: string;
    tags: string[];
    github: string;
    highlight?: boolean;
};

export const projects: Project[] = [
    {
        title: "ResQ",
        description:
            "Crisis-Response Web App connecting victims with nearby rescuers when emergency services are unavailable. Features GPS-based mapping and AI-driven medical triage to prioritize requests by urgency and distance.",
        tags: ["Vue", "Java Spring", "PostgreSQL", "LeafletMap", "Gemini AI"],
        github: "https://github.com/vasibreban27/PoliHack",
        highlight: true,
    },
    {
        title: "Instagram Clone",
        description:
            "Team-built Full Stack Instagram clone built with Spring Boot & React with social features including posts, likes, and user profiles. Integrated Cloudinary for cloud image storage and Neon for a shared serverless PostgreSQL database.",
        tags: ["React", "Spring Boot", "PostgreSQL", "Neon", "Cloudinary"],
        github: "https://github.com/vasibreban27/Instagram-Clone",
    },
    {
        title: "Sign Detection Image Processing",
        description:
            "Computer Vision project for detecting signs in images using image-processing techniques. Focuses on preprocessing, feature extraction, and visual detection workflows for identifying sign regions from image input.",
        tags: ["C/C++", "OpenCV", "Computer Vision", "Image Processing"],
        github: "https://github.com/vasibreban27/Sign-Detection-Image-Processing",
    },
    {
        title: "TACO Trash Instance Segmentation",
        description:
            "Deep Learning project for instance segmentation of waste objects using the TACO dataset. Trains and evaluates Mask R-CNN models to accurately detect and segment individual trash instances for automated waste recognition.",
        tags: ["Python", "PyTorch", "Mask R-CNN", "Computer Vision", "Deep Learning"],
        github: "https://github.com/vasibreban27/taco-trash-instance-segmentation",
    },
    {
        title: "Global Life Expectancy ML",
        description:
            "Machine Learning project analyzing global life expectancy trends through data preprocessing, feature engineering, and predictive modeling. Compares multiple regression models to identify key factors influencing life expectancy.",
        tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Data Analysis"],
        github: "https://github.com/vasibreban27/global-life-expectancy-ml",
    },
    {
        title: "CabanaAnuca",
        description:
            "Full Stack booking platform for a mountain resort. Supports online reservations, Stripe-based payments, automated email confirmations, and an integrated Google Maps view.",
        tags: ["Spring Boot", "MySQL", "JavaScript", "Stripe", "Google Maps"],
        github: "https://github.com/vasibreban27/CabanaAnuca",
    },
    {
        title: "RV-AUTO-SELLER",
        description:
            "Vehicle listing and sales platform with JWT-based authentication and role-secured access. Includes car listings, user feedback, and in-app meeting scheduling between buyers and sellers.",
        tags: ["Vue.js", "Spring Boot", "PostgreSQL", "JWT"],
        github: "https://github.com/vasibreban27/RV-AUTO-SELLER",
    },
    {
        title: "Smart Traffic Light",
        description:
            "FPGA-based intelligent traffic control system with hardware-accelerated fuzzy logic decision-making. Dynamically adjusts green light durations based on real-time congestion data.",
        tags: ["VHDL", "Zybo Z20", "Vivado", "Fuzzy Logic"],
        github: "https://github.com/vasibreban27/Smart-Traffic-Light",
    },
];
