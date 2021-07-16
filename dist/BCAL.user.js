// ==UserScript==
// @name         Boxcritters Abstraction Library
// @author       TODO
// @supportURL   http://discord.gg/D2ZpRUW
// @include      /^https:\/\/boxcritters\.com\/play\/(index\.html)?([\?#].*)?$/
// @run-at       document-start
// @require      https://github.com/SArpnt/EventHandler/raw/master/script.js
// ==/UserScript==

// temporary global BCAL variable
const uWindow = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
let BCAL = {};
uWindow.BCAL = BCAL;

(function () {
	"use strict";

	BCAL.Room = class {

	};
	BCAL.Player = class {

	};
	BCAL.World = class {
		constructor() {
			this.rooms = {};
		}
	};

	BCAL.world = new BCAL.World();
})();