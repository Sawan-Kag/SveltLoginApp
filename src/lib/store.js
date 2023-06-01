import { writable } from "svelte/store";

export const folders = writable([]);
export const user = writable();

export function setUser(email, password) {
  const userData = { email, password };
  user.set(userData);
}

export function clearUser() {
  user.set(null);
}
