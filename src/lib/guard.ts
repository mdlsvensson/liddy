import { state } from '$lib/stores';
import type { LoadInput, LoadOutput } from '@sveltejs/kit/types.internal';

let auth = { ...state.initialAuthState };
state.auth.subscribe(authState => auth = authState);

export async function authGuard({ page }: LoadInput): Promise<LoadOutput> {
  const loggedIn = auth.loggedIn;

  if (loggedIn && page.path === '/login') {
    return { status: 302, redirect: '/' };
  } else if (loggedIn || page.path === '/login') {
    return {};
  } else {
    return { status: 302, redirect: '/login' }
  }
}

export default {
  authGuard
}