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

    let understandBtn, tokenDismissBtn, i=0;
    // Loops until buttons are found or reached max trials
    while(!understandBtn && !tokenDismissBtn && i++ < 30){
        await wait(200).then(() => {
            console.log('try');
            understandBtn = document.querySelector('.\\.understand-checkbox');
            console.log(understandBtn);
            tokenDismissBtn = document.querySelector('.\\.token-dismiss-button');
        });
    }

    // Click buttons
    if(understandBtn && tokenDismissBtn){
        understandBtn.click();
        tokenDismissBtn.click();
    }
})();
