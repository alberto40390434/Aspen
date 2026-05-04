"use strict";

const swConfig = {
    prefix: "/scram/",
    config: "/scram/scramjet.config.js",
    sw: "/scram/scramjet.sw.js",
};

async function registerSW() {
    if (!navigator.serviceWorker) {
        throw new Error("Your browser does not support Service Workers.");
    }

    // This registers the Scramjet engine to handle your requests
    await navigator.serviceWorker.register(swConfig.sw, {
        scope: swConfig.prefix,
    });
}

registerSW().then(() => {
    console.log("Scramjet Service Worker is ready.");
}).catch((err) => {
    console.error("Service Worker registration failed:", err);
});
