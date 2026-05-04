"use strict";

const swConfig = {
    prefix: "/scram/",
    sw: "/scram/scramjet.sw.js",
};

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register(swConfig.sw, {
                scope: swConfig.prefix,
            })
            .then(() => {
                console.log("Scramjet Engine Ready");
            })
            .catch((err) => {
                console.error("SW Failed:", err);
            });
    });
}
