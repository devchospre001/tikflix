import { IS_AUTHENTICATED } from './utils/common.js';
import { authenticatedRoutes } from './routes/authenticated.js';
import { unauthenticatedRoutes } from './routes/unauthenticated.js';
import { statusRoutes } from './routes/status.js';

let IS_LANDING = true;

export const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = src;
        script.onload = () => {
            resolve();
        };
        script.onerror = (e) => {
            reject(new Error(`Failed to load script: ${src}`));
        };
        document.body.appendChild(script);
    });
};

export const loadStyle = (href) => {
    return new Promise((resolve, reject) => {
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = href;
        style.onload = () => {
            resolve();
        };

        style.onerror = (e) => {
            reject(new Error(`Failed to load style: ${href}`));
        };
        document.head.appendChild(style);
    });
};

export const routeHandler = async () => {
    let locationHash;
    let currentView;

    if (!IS_AUTHENTICATED) {
        locationHash = window.location.hash.replace("#", "/") || (IS_LANDING ? "/landing" : "/login");
    } else {
        locationHash = window.location.hash.replace("#", "/") || "/";
    }

    const navbar = document.getElementById('navigation');
    
    IS_LANDING = false;

    if (IS_AUTHENTICATED) {
        currentView = authenticatedRoutes[locationHash] || statusRoutes[404];
        navbar.style.display = "block !important";
        navbar.style.setProperty("display", "block !important");
    } else {
        currentView = unauthenticatedRoutes[locationHash] || statusRoutes[404];
        navbar.style.display = "none !important";
        navbar.style.setProperty("display", "none !important")
    }

    console.log(navbar);

    try {
        if (!currentView.page) {
            throw new Error("Page not found!");
        }

        const response = await fetch(currentView.page);

        if (!response.ok) {
            throw new Error(`Failed to load ${currentView.page} (Status ${response.status})`);
        }

        const html = await response.text();

        const app = document.getElementById('app');
        app.innerHTML = html;
        document.title = currentView.title;
        document.querySelector(`meta[name="description"]`)?.setAttribute("content", currentView.description);

        if (currentView.script) {
            await loadScript(currentView.script);
        }

        if (currentView.style) {
            await loadStyle(currentView.style);
        }
    } catch (error) {
        console.error("Error loading page:", error);
        document.title = statusRoutes["404"].title;
        const html = await fetch(statusRoutes["404"].page).then((response) => response.text());
        const app = document.getElementById('app');
        app.innerHTML = html;
    }
};

export const forceRouteHashUpdateOnClick = (event) => {
    const target = event.target.closest("a");
    if (target && target.getAttribute("href")?.startsWith("#")) {
        event.preventDefault();
        const newHash = target.getAttribute("href").replace("#", "");

        if (window.location.hash !== newHash) {
            window.location.hash = newHash;
        }
        routeHandler();
    }
};
