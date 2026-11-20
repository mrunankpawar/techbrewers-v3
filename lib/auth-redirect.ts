/**
 * Where Descope sends people back to after Google sign-in or an email link.
 *
 * It must be a page that renders the sign-up-or-in flow (so the flow can pick
 * up the `code` / `t` params), and it must be on the same origin the person
 * started from: the Google popup hands its result to the opener tab only on
 * the same origin, and email links resume the flow from this origin's storage.
 * Without it Descope falls back to the provider's fixed redirect URL (the
 * homepage), where nothing finishes the sign-in.
 */
export function authRedirectUrl(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  return `${window.location.origin}/auth/callback`;
}
