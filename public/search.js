"use strict";

/**
 * Your original search logic
 */
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

/**
 * Connecting it to the new Aspen IDs
 */
const form = document.getElementById("sj-form");
const address = document.getElementById("sj-address");
const searchEngine = document.getElementById("sj-search-engine");

if (form && address) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const url = search(address.value, searchEngine.value);
        
        // This is the specific encoding your Scramjet server needs
        // It converts the URL into the /scram/ format seen in your errors
        location.href = "/scram/" + btoa(url)
            .replace(/\//g, "_")
            .replace(/\+/g, "-")
            .replace(/=/g, "");
    });
}
