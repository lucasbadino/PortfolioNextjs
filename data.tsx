import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/lucasbadino/",
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/lucasbadino",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Full Stack Web Developer",
        subtitle: "Soy Henry",
        description: "Durante la cursada aprendí y utilicé tecnologías como: HTML5, CSS3, JavaScript, TypeScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, SQL, Git, GitHub, y metodologías ágiles (Scrum).",
        date: "Feb 2024 – Dic 2024",
    },
    {
        id: 2,
        title: "Proyecto Final - VICNASOL APP",
        subtitle: "Bootcamp Soy Henry",
        description: "Desarrollé una aplicación web de gestión de servicios de jardinería que conecta jardineros con clientes. La app permite crear perfiles, gestionar reservas y procesar pagos en línea. Tecnologías utilizadas: Next.js, Tailwind CSS, NestJS, PostgreSQL y Auth0.",
        date: "Nov 2024 – Dic 2024",
    },
    {
        id: 3,
        title: "Vendedor y Encargado Comercial",
        subtitle: "Badino Automotores",
        description: "Me desempeño como vendedor de vehículos, brindando asesoramiento personalizado, generando relaciones a largo plazo con los clientes y participando en campañas de promoción para aumentar ventas. Logré incrementar las ventas en un 15% mediante estrategias efectivas.",
        date: "Mayo 2018 – Actualidad",
    },
    {
        id: 4,
        title: "Piloto Privado de Avión",
        subtitle: "Aeroclub Coronel Olmedo Cordoba",
        description: "Obtuve la Licencia de Piloto Privado de Avión, desarrollando habilidades en navegación, meteorología, radiofonía y procedimientos de vuelo. Esta experiencia fortaleció mi capacidad de tomar decisiones bajo presión y operar con precisión técnica.",
        date: "Mayo 2015 – junio 2018",
    },
];


export const dataCounter = [
    {
        id: 0,
        endCounter: 6,
        text: "Años en el rubro comercial",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 15,
        text: "Tecnologías dominadas",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 3,
        text: "Proyectos web desarrollados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 1,
        text: "Licencia de piloto obtenida",
        lineRight: false,
        lineRightMobile: false,
    },
];


export const serviceData = [
    {
        icon: <Computer />,
        title: "Desarrollo Web Full Stack",
        description: "Desarrollo de aplicaciones web completas, rápidas y seguras utilizando tecnologías modernas como React, NestJS y PostgreSQL.",
    },
    {
        icon: <Pencil />,
        title: "Diseño UI/UX",
        description: "Diseño de interfaces atractivas, funcionales y centradas en el usuario con enfoque en usabilidad y experiencia visual.",
    },
    {
        icon: <Rocket />,
        title: "Integraciones Externas",
        description: "Implementación de herramientas como Auth0, Cloudinary y Mercado Pago para agregar autenticación, medios y pagos.",
    },
    {
        icon: <Book />,
        title: "Documentación Técnica",
        description: "Elaboración de documentación clara y profesional que facilita el mantenimiento, escalabilidad y entendimiento del proyecto.",
    },
    {
        icon: <Crop />,
        title: "Consultoría Tecnológica",
        description: "Asesoramiento técnico para ayudarte a definir la arquitectura, stack y estrategia digital más eficiente para tu proyecto.",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

