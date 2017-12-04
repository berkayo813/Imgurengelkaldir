// Written by Berkay O 
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            redirectUrl: details.url.replace("imgur", "0imgur")
        };
    }, {
        urls: ["*://*.imgur.com/*"]
    }, ["blocking"]);