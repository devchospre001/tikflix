import { PAGE_TITLE } from "../utils/common.js";

export const authenticatedRoutes = {
    "/": { title: `${PAGE_TITLE} | Dashboard`, page: "/views/dashboard.html", description: "", script: "/scripts/dashboard.js", style: "/styles/dashboard.css" },
    "/dashboard": { title: `${PAGE_TITLE} | Dashboard`, page: "/views/dashboard.html", description: "", script: "/scripts/dashboard.js", style: "/styles/dashboard.css" },
    "/shows": { title: `${PAGE_TITLE} | Shows`, page: "/views/shows.html", description: "", script: "/scripts/shows.js", style: "/styles/shows.css" },
    "/movies": { title: `${PAGE_TITLE} | Movies`, page: "/views/movies.html", description: "", script: "/scripts/movies.js", style: "/styles/movies.css" },
};