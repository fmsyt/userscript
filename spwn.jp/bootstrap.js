// ==UserScript==
// @name         Full Screen SPWN Streaming
// @namespace    motsuni
// @version      1.0.0
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

    const container = document.getElementById("container");

    const watcher = () => {
        // max-width: 100% !important;
        container.style.maxWidth = "100%";
    }

    const observer = new MutationObserver(watcher);
    const config = {
        childList: false,
        subtree: false
    }

    observer.observe(container, config);

    watcher();
})();
