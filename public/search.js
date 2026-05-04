"use strict";

/**
 * Logic to determine if input is a URL or a search query
 */
function search(input, template) {
    try {
        return new URL(input).toString();
    } catch (err) {
        // Not a valid URL
    }

    try {
        const url = new URL(`http://${input}`);
        if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
        // Not a valid URL
    }

    return template.replace("%s", encodeURIComponent(input));
}

/**
 * New Logic to connect to Aspen's Modern UI
 */
const form = document.getElementById("sj-form");
const address = document.getElementById("sj-address");
const searchEngine = document.getElementById("sj-search-engine");

// Check if the elements exist before adding the listener
if (form && address) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // 1. Get the final URL using the search function above
        const url = search(address.value, searchEngine.value);

        // 2. Register the Service Worker (the unblocking engine)
        // This is usually handled by register-sw.js, but we call it here to be safe
        try {
            await __uv$config.registerSW();
        } catch (err) {
            console.error("Failed to register SW:", err);
        }

        // 3. Redirect to the unblocked page
        // This uses the Scramjet/Ultraviolet encoding logic
        location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
}
