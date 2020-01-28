document.querySelector(".test_add_item").addEventListener("click", e => {
	// PRODUCTION MODE
	// e.preventDefault(); // prevents page from reloading on click submit button
	console.log("Hi there");
	listView.renderItem();
});
import Nav from './models/Nav.js';

import * as navPrimaryView from "./views/navPrimaryView.js";
import * as navSecondaryView from "./views/navSecondaryView.js";
import * as listView from "./views/listView.js";
import * as navTitles from "./models/config.js";

// console.log(navTitles.menus.warpstogram.Edit[2]); // TEST
// console.log(navTitles.navSecondaryTitles.audioTools[2]); // TEST

import {
	elements
} from "./views/base.js";

/**
 * STARTUP INIT
 */
const init = () => {
	// navSecondaryView.updateTitles('nav_A_0');
	// navSecondaryView.highlightSelected();
}
init();


const state = {
	nav_A: {
		nav_A_0: false,
		nav_A_1: false,
		nav_A_2: false,
		nav_A_3: false
	}
}

// updates selected nav_A tab to state as active
const updateState = (tabID) => {
	// LOOP THROUGH OBJECT PROPERTIES TO REMOVE ACTIVE CLASS
	console.log(tabID);

	for (var key in state.nav_A) {
		if (state.nav_A.hasOwnProperty(key)) {
			// console.log(key + " is " + state.nav_A[key]);
			state.nav_A[key] = false;
		}
	}

	// ADD TRUE TO SELECTED TAB
	state.nav_A[tabID] = true;
}

/**
 * NAV PRIMARY CONTROLLER
 */
elements.nav_A.addEventListener("click", e => {
	// GETS CLICK EVENT TARGET
	const target = e.target;
	const nav_A_id = target.id;

	if (nav_A_id) {
		navSecondaryView.updateTitles(nav_A_id); // updateTitles NEEDS WORK
		updateState(nav_A_id);
	}

	// 	CLEARS ACTIVE AND ADDS IT TO SELECTED TAB
	navPrimaryView.clearActive();
	navPrimaryView.highlightSelected(nav_A_id);
});



/**
 * NAV SECONDARY CONTROLLER
 */

elements.nav_B.addEventListener("click", e => {
	// GETS CLICK EVENT TARGET
	const target = e.target;
	const subString = 'mart';

	navSecondaryView.clearActive();
	navSecondaryView.checkForSubstring(target, subString);

});



/**
 * LIST CONTROLLER
 */