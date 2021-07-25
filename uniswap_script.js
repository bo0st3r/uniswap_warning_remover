// ==UserScript==
// @name         Uniswap coin warning remover
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description
// @author       github.com/bo0st3r
// @match        https://app.uniswap.org/*
// @match        https://pancakeswap.finance/*
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    console.log('Uniswap/Pancakeswap script loaded');

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let tokenDismissBtn, i=0;
    // Loops until buttons are found or reached max trials
    while(!tokenDismissBtn && i++ < 30){
        await wait(200).then(() => {
            tokenDismissBtn = document.querySelector('.\\.token-dismiss-button');
        });
    }

    const iUnderstandBtn = document.getElementsByName('confirmed')[0];

    // Click button
    if(tokenDismissBtn){
        if(iUnderstandBtn){
          iUnderstandBtn.click();
        }

        tokenDismissBtn.click();
    }
})();
