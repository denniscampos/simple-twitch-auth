import { writable } from 'svelte/store';

let stored;

if (typeof localStorage !== 'undefined') {
  stored = localStorage.getItem('access_token');
}

export const accessToken = writable(stored || null);

if (typeof localStorage !== 'undefined') {
  accessToken.subscribe((value) => {
    localStorage.setItem('access_token', String(value));
  });
}
