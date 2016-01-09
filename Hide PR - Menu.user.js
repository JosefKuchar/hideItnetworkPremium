// ==UserScript==
// @name         Hide PR - Menu
// @namespace    http://www.josefkuchar.cz
// @version      1.0.0
// @description  Hide pr option in menu
// @author       Josef Kuchař
// @match        http://www.itnetwork.cz/*
// @grant        none
// ==/UserScript==
$('.menu-link[data-id="23"]').remove();