import I_PythonSpaceGame from "../../public/space_rogue.png";
import I_ReactKetoRecipes from "../../public/react_keto_recipes.png";
import I_AngularToDo from "../../public/angular-todo.png";
import I_PplFinder from "../../public/ppl-finder.png";
import I_TypeScriptCalculator from "../../public/typescript-calculator.png";
import I_NextPortfolio from "../../public/next-portfolio.png";
import I_SoapShop from "../../public/soap-shop.png";


import { v4 as uuidv4 } from "uuid";

export const portfolioData = {
    "developer": {
        "name": "Alona Shot",
        "title": "Front-End Developer",
        "description": "Passionate about creating beautiful, responsive web applications with modern technologies. Specializing in React.js, Next.js, and crafting exceptional user experiences.",
        "email": "alona.shot@gmail.com",
        "phone": "+1 (403) 9738-227",
        "social": {
            "github": "https://github.com/kitxomka",
            "linkedin": "https://www.linkedin.com/in/alona-shot/"
        }
    },
    "skills": [
        "React.js",
        "Next.js",
        "Redux",
        "TypeScript",
        "Node.js",
        "Nginx",
        "Express",
        "JavaScript ES6+",
        "jQuery",
        "HTML5 & CSS3",
        "Styled Components",
        "Bootstrap",
        "Material-UI",
        "Responsive Design",
        "Prisma",
        "SQLite",
        "PostgreSQL",
        "Git & GitHub",
        "VS Code",
        "Figma",
        "Canva",
        "Sharepoint",
        "SPFX",
        "Power BI",
        "Power Automate",
        "WordPress"
    ],
    "projects": [
        {
            "id": uuidv4(),
            "title": "Space Rogue Game 🚀",
            "description": "Text-based adventure game (v2) with enhanced features and improved gameplay.",
            "technologies": [
                "Python",
            ],
            "imgSrc": I_PythonSpaceGame,
            "demoUrl": "https://demo-ecommerce.example.com",
            "githubUrl": "https://github.com/kitxomka/python-space-rogue",
            "status": "In proggres"
        },
        {
            "id": uuidv4(),
            "title": "Soap Shop",
            "description": "Recipes App",
            "technologies": [
                "React",
                "Next.js",
                "Styled component",
                "Prisma",
                "SQLite"
            ],
            "imgSrc": I_SoapShop,
            "demoUrl": "https://demo-taskmanager.example.com",
            "githubUrl": "https://github.com/kitxomka/",
            "status": "In proggres"
        },
        // {
        //     "id": uuidv4(),
        //     "title": "Weather Dashboard",
        //     "description": "A beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets for weather enthusiasts.",
        //     "technologies": [
        //         "React",
        //         "Chart.js",
        //         "Weather API",
        //         "CSS Grid"
        //     ],
        //      "imgSrc": "",
        //     "demoUrl": "https://demo-weather.example.com",
        //     "githubUrl": "https://github.com/sarahchen/weather-dashboard",
        //      "Status": ""
        // },
        // {
        //     "id": uuidv4(),
        //     "title": "Social Media Dashboard",
        //     "description": "An analytics dashboard for social media managers with real-time data visualization, reporting tools, and multi-platform integration.",
        //     "technologies": [
        //         "Next.js",
        //         "D3.js",
        //         "API Integration",
        //         "MongoDB"
        //     ],
        //      "imgSrc": "",
        //     "demoUrl": "https://demo-social.example.com",
        //     "githubUrl": "https://github.com/sarahchen/social-dashboard",
        //      "Status": ""
        // },
        // {
        //     "id": uuidv4(),
        //     "title": "Expense Tracker",
        //     "description": "A personal finance application with budget tracking, expense categorization, and financial goal setting with beautiful data visualization.",
        //     "technologies": [
        //         "React",
        //         "Context API",
        //         "Chart.js",
        //         "Local Storage"
        //     ],
        //       "imgSrc": "",
        //     "demoUrl": "https://demo-expenses.example.com",
        //     "githubUrl": "https://github.com/sarahchen/expense-tracker",
        //      "Status": ""
        // },
        {
            "id": uuidv4(),
            "title": "React Keto Recipes Site",
            "description": "This site is about ketogenic (keto) recipes and offers a variety of delicious recipes",
            "technologies": [
                "React",
                "Redux",
                "Redux-Toolkit",
                "Material - UI",
            ],
            "imgSrc": I_ReactKetoRecipes,
            "demoUrl": "https://demo-portfolio.example.com",
            "githubUrl": "https://github.com/kitxomka/react_keto_recipes",
            "Status": "In proggres"
        },
        {
            "id": uuidv4(),
            "title": "People Finder",
            "description": "The app loads and displays random list of people with details, can mark as favorite.",
            "technologies": [
                "React",
                "React-router",
                "axios",
                "Local Storage",
                "Material - UI",
                "Styled Components"
            ],
            "imgSrc": I_PplFinder,
            "demoUrl": "https://demo-portfolio.example.com",
            "githubUrl": "https://github.com/kitxomka/PplFinder",
            "Status": "Done"
        },
        {
            "id": uuidv4(),
            "title": "Angular ToDo App",
            "description": "Users log in and can see and maintain their todos",
            "technologies": [
                "Angular",
                "Material - UI",
            ],
            "imgSrc": I_AngularToDo,
            "demoUrl": "https://demo-portfolio.example.com",
            "githubUrl": "https://github.com/kitxomka/angular-todo",
            "Status": "Done"
        },
        {
            "id": uuidv4(),
            "title": "React Typescript Calculator",
            "description": "This is a calculator",
            "technologies": [
                "React",
                "TypeScript",
                "Styled Components"
            ],
            "imgSrc": I_TypeScriptCalculator,
            "demoUrl": "https://demo-portfolio.example.com",
            "githubUrl": "https://github.com/kitxomka/react-typescript-calculato",
            "Status": "Done"
        },
        {
            "id": uuidv4(),
            "title": "Portfolio Website",
            "description": "A responsive portfolio website showcasing modern design principles with smooth animations and optimized performance.",
            "technologies": [
                "React",
                "Next.js",
                "Styled Components",
            ],
            "imgSrc": I_NextPortfolio,
            "demoUrl": "https://demo-portfolio.example.com",
            "githubUrl": "https://github.com/kitxomka/portfolio_next_styled",
            "Status": "Done"
        },
    ]
}