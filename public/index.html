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

        // 1. Convert input to URL
        const url = search(address.value, searchEngine.value);

        // 2. Load the site through the proxy
        // This assumes your Scramjet config is correctly loaded
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
}
