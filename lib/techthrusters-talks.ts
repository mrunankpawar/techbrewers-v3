/**
 * Google Form for TechThrusters Talks (speaker applications).
 * Override with NEXT_PUBLIC_TECHTHRUSTERS_TALKS_FORM_URL if the form URL changes.
 */
const DEFAULT_FORM_URL = 'https://forms.gle/B11VGSioEMcXaWZ58';

export const TECHTHRUSTERS_TALKS_FORM_URL = (
  process.env.NEXT_PUBLIC_TECHTHRUSTERS_TALKS_FORM_URL ?? DEFAULT_FORM_URL
).trim();
