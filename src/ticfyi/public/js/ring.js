function loadWebRing(domain) {
    const container = document.getElementById("innerCircleWebRing");
    if (!container) {
        return;
    }

    const base = "https://the.inner-circle.fyi";
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
                width="88"
                height="31"
                loading="lazy"
                style="image-rendering:pixelated"
                alt="the.inner-circle.fyi 88x31px web ring back button"
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
                width="88"
                height="31"
                loading="lazy"
                style="image-rendering:pixelated"
                alt="the.inner-circle.fyi 88x31px web ring forward button"
                id="innerCircleWebRingNavForwards"
            >
        </a>
    `;
}
