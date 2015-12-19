// ==UserScript==
// @name         Hide Itnetwork Premium
// @namespace    none
// @version      2.0.0
// @description  Hide premium articles!
// @author       Josef Kuchař
// @match        http://www.itnetwork.cz/
// @grant        none
// @require http://code.jquery.com/jquery-1.11.3.min.js
// ==/UserScript==
var element = $(".wall-box:contains('premium článek')");
element.next().next().remove();
element.next().remove();
element.remove();

var element2 = $(".wall-box:contains('PR článek')");
element2.next().next().remove();
element2.next().remove();
element2.remove();
