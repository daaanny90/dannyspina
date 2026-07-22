/* Absolute URLs cannot be derived from the request at build time: prerendering
   runs against a synthetic origin, so every absolute link — canonical tags, og
   images, RSS items — is composed from the constants below. */

export const SITE_URL = "https://dannyspina.com";
export const SITE_NAME = "Danny Spina";
export const AUTHOR_NAME = "Danny Spina";

export const DEFAULT_DESCRIPTION =
  "Danny Spina — software developer (web) in Parma, Italy. Special focus on frontend and design ops. Software that stays serviceable.";

/* 1200×630 card rendered from the site's own tokens, see scripts/og_image.html */
export const DEFAULT_OG_IMAGE = "/og-default.png";

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
