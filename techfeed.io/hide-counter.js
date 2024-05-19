// ==UserScript==
// @name         Hide TechFeed Counter
// @namespace    motsuni
// @version      1.0.0
// @description  Hide TechFeed Counter
// @author       motsuni
// @match        https://techfeed.io/categories/all
// @icon         https://www.google.com/s2/favicons?sz=64&domain=techfeed.io
// @run-at       document-end
// @updateURL    https://github.com/motsuni/userscript/raw/master/techfeed.io/hide-counter.js
// @downloadURL  https://github.com/motsuni/userscript/raw/master/techfeed.io/hide-counter.js
// @supportURL   https://github.com/motsuni/userscript/techfeed.io
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const watcher = () => {
        const elements = document.querySelectorAll(".tf-sticky");
        if (elements.length === 0) {
            return;
        }

        [...elements].forEach((element) => {
            element.hidden = true;
            element.style.display = "none";
        })
    }

    const observer = new MutationObserver(watcher);
    const config = {
        childList: true,
        subtree: true
    }

    const target = document.getElementById("main-content");

    observer.observe(target, config);

    watcher();
})();
