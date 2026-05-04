"use strict";

function search(input, template) {
    try {
        return new URL(input).toString();
    } catch (err) {}

    try {
        const url = new URL(`http://${input}`);
        if (url.hostname.includes(".")) return url.toString();
    } catch (err) {}

    return template.replace("%s", encodeURIComponent(input));
}

const form = document.getElementById("sj-form");
const address = document.getElementById("sj-address");
const searchEngine = document.getElementById("sj-search-engine");

// THE TRIGGER: This makes the search bar actually DO something
if (form && address) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Check if the proxy config is loaded
        if (typeof __uv$config === 'undefined') {
            console.error("Config not found. Make sure uv.config.js is in the right folder!");
            return;
        }

        const url = search(address.value, searchEngine.value);

        // Redirect to the proxy URL
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
}
