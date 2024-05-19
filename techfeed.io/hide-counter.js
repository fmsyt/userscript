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

    let hidden = false;

    const watcher = () => {
        const elements = document.querySelectorALl(".tf-sticky:not([hidden])");
        if (elements.length === 0) {
            return;
        }

        [...elements].forEach((element) => {
            element.hidden = true;
            element.style.display = "none";
        })
    }

    const observer = new MutationObserver(watcher);
    observer.observe(document.body, {childList: true, subtree: true});

    watcher();
})();
