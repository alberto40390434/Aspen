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

if (form && address) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const url = search(address.value, searchEngine.value);

        // This uses the built-in Scramjet encoder if available
        // If not, it falls back to a standard Base64 route
        let encodedUrl = "";
        if (window.__scramjet$config) {
            encodedUrl = __scramjet$config.prefix + __scramjet$config.encodeUrl(url);
        } else {
            encodedUrl = "/scram/" + btoa(url).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
        }
        
        window.location.href = encodedUrl;
    });
}
