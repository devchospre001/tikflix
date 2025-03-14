import { forceRouteHashUpdateOnClick, routeHandler } from "./router.js";

document.addEventListener("click", forceRouteHashUpdateOnClick);
document.addEventListener('hashchange', routeHandler);
window.addEventListener("load", routeHandler);