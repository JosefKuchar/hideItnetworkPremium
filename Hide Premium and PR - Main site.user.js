// ==UserScript==
// @name         Hide Premium and PR - Main site
// @namespace    http://www.josefkuchar.cz/
// @version      2.0.0
// @description  Hide premium and pr articles from main site
// @author       Josef Kuchař
// @match        http://www.itnetwork.cz/
// @grant        none
// ==/UserScript==
var element = $(".wall-box:contains('premium článek')");
element.next().next().remove();
element.next().remove();
element.remove();

var element2 = $(".wall-box:contains('PR článek')");
element2.next().next().remove();
element2.next().remove();
element2.remove();