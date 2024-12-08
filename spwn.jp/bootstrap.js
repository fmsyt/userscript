// ==UserScript==
// @name         Full Screen SPWN Streaming
// @namespace    motsuni
// @version      1.0.1
// @description  
// @author       motsuni
// @match        https://spwn.jp/events/*/streaming
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spwn.jp
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/fmsyt/userscript/master/spwn.jp/bootstrap.js
// @downloadURL  https://raw.githubusercontent.com/fmsyt/userscript/master/spwn.jp/bootstrap.js
// @supportURL   https://github.com/motsuni/userscript/spwn.jp
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const watcher = () => {
        const container = document.getElementById("container");
        if (!container) {
            return;
        }

        container.style.maxWidth = "100%";
    }

    const observer = new MutationObserver(watcher);
    const config = {
        childList: true,
        subtree: true
    }

    const target = document.querySelector("body");
    observer.observe(target, config);

    watcher();
})();
