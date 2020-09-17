// ==UserScript==
// @name         Uniswap coin warning remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  
// @author       github.com/bo0st3r
// @match        https://app.uniswap.org/
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var btn, i=0;

    // Loops every 200ms until the button is found (because it is displayed after page has loaded)
    // If no button is found after 30 tries, stops
    while(!btn && i++ < 100){
        await wait(200).then(() => {
            btn = document.querySelector('.token-dismiss-button');
        });
    }

    // Queries the "I understand" box
    let checkBoxParent = document.querySelector('.understand-checkbox').parentElement;

    // Checks the "I understand" box, then clicks on the button
    if(btn && checkBoxParent){
        checkBoxParent.click();
        btn.click();
    }

    wait(150).then(() => {document.querySelector('.flLCKI').click()});
})();