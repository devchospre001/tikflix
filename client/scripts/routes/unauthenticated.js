import { PAGE_TITLE } from "../utils/common.js";

export const unauthenticatedRoutes = {
    "/landing": { title: `${PAGE_TITLE} | Landing`, page: "/views/landing.html", description: "", script: "/scripts/landing.js", style: "/styles/landing.css" },
    "/login": { title: `${PAGE_TITLE} | Log In`, page: "/views/login.html", description: "", script: "/scripts/login.js" },
    "/register": { title: `${PAGE_TITLE} | Register`, page: "/views/register.html", description: "", script: "/scripts/register.js" },
};
