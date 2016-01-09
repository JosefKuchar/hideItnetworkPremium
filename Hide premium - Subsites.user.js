// ==UserScript==
// @name         Hide premium - Subsites
// @namespace    http://www.josefkuchar.cz/
// @version      1.0.0
// @description  Hide premium articles from subsites
// @author       Josef Kuchař
// @match        http://www.itnetwork.cz/*/*
// @grant        none
// ==/UserScript==
$(".article-box:contains('Premium')").remove();