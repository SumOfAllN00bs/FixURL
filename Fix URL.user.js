// ==UserScript==
// @name         Fix URL
// @namespace    SumOfAllN00bs_FixURL
// @version      0.2
// @description  "Fix URL":= I use the chrome extension Tabbie which has reddit links available to peruse. Sometimes links are of the form https://i.reddituploads.com/xxxxxxxxx?fit=max&amp;h=xxx&amp;w=xxx&amp;s=xxx with the ampersands not correctly decoded this fixes that problem for the url and then loads the page with the fixed url
// @author       SumOfAllN00bs
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function(){
    'use strict';
    if(window.location.href.indexOf("&amp;") >=0){
        var newURLPath = window.location.href;
        while(newURLPath.indexOf("&amp;")>=0){
            //console.log("href: " + newURLPath);
            newURLPath = newURLPath.replace('&amp;','&');
        }
        console.log("fixed URL: " + newURLPath);
        location.href = newURLPath;
    }
})();