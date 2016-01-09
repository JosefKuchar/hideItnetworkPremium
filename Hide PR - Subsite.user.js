// ==UserScript==
// @name         Hide PR - Subsite
// @namespace    http://www.josefkuchar.cz/
// @version      1.0.0
// @description  Hide pr articles from http://www.itnetwork.cz/pr-clanky
// @author       Josef Kuchař
// @match        http://www.itnetwork.cz/pr-clanky
// @grant        none
// ==/UserScript==
$(".article-box").remove();