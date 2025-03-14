import { routeHandler } from "./router.js";

document.getElementById('begin-watching').addEventListener('click', () => {
    window.location.hash = 'login';
    routeHandler();
})