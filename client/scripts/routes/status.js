import { PAGE_TITLE } from "../utils/common.js";

export const statusRoutes = {
    "404": { title: `${PAGE_TITLE} | Not Found`, page: "/views/404.html", description: "", script: "/scripts/404.js" },
    "401": { title: `${PAGE_TITLE} | Unauthorized`, page: "/views/401.html", description: "", script: "/scripts/401.js" },
    "302": { title: `${PAGE_TITLE} | Redirecting`, page: "/views/302.html", description: "", script: "/scripts/302.js" }
};