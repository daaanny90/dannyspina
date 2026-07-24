import { writable } from "svelte/store";

// true if the back arrow goes under the header, while scrolling for example
export const isArrowUnderHeader = writable(false);
