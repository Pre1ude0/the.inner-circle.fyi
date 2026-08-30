const base = "https://the.inner-circle.fyi";
// `currentScript` remains reliable when this file is served with a hashed URL.
const script = document.currentScript ?? document.querySelector("script[src*=\"/ring\"]");
// `data-` is the conventional form; accept the legacy `domain` attribute too.
const domain = script?.getAttribute("data-domain") || script?.getAttribute("domain") || window.location.hostname;

function loadWebRing(domain) {
    let container = document.getElementById("innerCircleWebRing");
    if (!container) {
        const parent = script?.parentElement;
        if (!parent) return;
        container = document.createElement("div");
        container.id = "innerCircleWebRing";
        parent.appendChild(container);
    }
    if (container.dataset.loaded === "true") return;
    container.classList.add("innerCircleWebRing");
    container.dataset.loaded = "true";

    const from = encodeURIComponent(domain);

    container.innerHTML = `
        <style>
            #innerCircleWebRing a {text-decoration: none;}
            #innerCircleWebRingNavHome {transition: transform 0.4s;}
            #innerCircleWebRingNavHome:hover {transform: scale(1.05) translateY(-2px);}
            #innerCircleWebRingNavBackwards, #innerCircleWebRingNavForwards {transition: transform 0.4s;}
            #innerCircleWebRingNavBackwards:hover {transform: scale(1.05) translateX(-10px);}
            #innerCircleWebRingNavForwards:hover {transform: scale(1.05) translateX(10px);}
        </style>
        <a href="${base}/ring/back?from_url=${from}" target="_blank" rel="noopener noreferrer">
            <img
                src="${base}/static/images/inner-back.avif"
                width="31"
                height="31"
                loading="lazy"
                style="image-rendering:pixelated"
                alt="the.inner-circle.fyi 31x31px web ring back button"
                id="innerCircleWebRingNavBackwards"
            >
        </a><a href="${base}/" target="_blank" rel="noopener noreferrer">
            <img
                src="${base}/static/images/inner-button.avif"
                width="88"
                height="31"
                loading="lazy"
                style="image-rendering:pixelated"
                alt="the.inner-circle.fyi 88x31px web button"
                id="innerCircleWebRingNavHome"
            >
        </a><a href="${base}/ring/next?from_url=${from}" target="_blank" rel="noopener noreferrer">
            <img
                src="${base}/static/images/inner-forward.avif"
                width="31"
                height="31"
                loading="lazy"
                style="image-rendering:pixelated"
                alt="the.inner-circle.fyi 31x31px web ring forward button"
                id="innerCircleWebRingNavForwards"
            >
        </a>
    `;
}

// Run when page layout is done loading, including scripts loaded after DOMContentLoaded.
const initialize = () => loadWebRing(domain);
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, {once: true});
} else {
    initialize();
}
