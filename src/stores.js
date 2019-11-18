import { readable, writable } from "svelte/store";

export const readUser = readable({ name: "Arnold" });
export const writeUser = writable({ name: "Donald" });
export const created = writable(new Date().toLocaleString("sv-SE"));

export const enabled = writable(false);
