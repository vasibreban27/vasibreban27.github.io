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
            "Team-built full-stack Instagram clone with core social features including posts, likes, and user profiles. Integrated Cloudinary for cloud image storage and Neon for a shared serverless PostgreSQL database.",
        tags: ["React", "Spring Boot", "PostgreSQL", "Neon", "Cloudinary"],
        github: "https://github.com/palroland21/Instagram-Clone",
    },
    {
        title: "CabanaAnuca",
        description:
            "Full-stack booking platform for a mountain resort. Supports online reservations, Stripe-based payments, automated email confirmations, and an integrated Google Maps view.",
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