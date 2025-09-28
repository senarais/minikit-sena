const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjEzNTYwOTcsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg1NDI2Mjc1MWQ2MDI3MGU2NTg2MGQ1MGQxRTVFMkVmOUZlNGI2Y0M1In0",
    payload: "eyJkb21haW4iOiJtaW5pa2l0LXNlbmEudmVyY2VsLmFwcCJ9",
    signature: "MHg4OTMzNjgyNDAzODI2NmUzZGFhMjU3ZmQ0MjYxOWY1M2M5MDYzYTdiNzZlYzEyNmFmNjk0YzI2Y2JhNWIxYjFjNzExZTVmZTljZGJkOWJiODNhN2JhMDk2YWQzM2M4ZWNhNmE4NzkwNzBlODBhMmRjYzU1MmRhOWFkNDk0MGQyZTFi",
  },
  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "my-minikit-app",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
