import { writable } from "svelte/store";

// manage the open/close status of the menu bar through the burger button
export const menuOpen = writable(false);

// true if the back arrow is goes under the header, while scrolling for example
export const isArrowUnderHeader = writable(false);
// the current page to go back
export const backArrowPage = writable("");
