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
        
        // This is the EXACT encoding Scramjet-Demo needs to prevent "Route Error"
        const encodedUrl = "/scram/" + btoa(url)
            .replace(/\//g, "_")
            .replace(/\+/g, "-")
            .replace(/=/g, "");
        
        window.location.href = encodedUrl;
    });
}
