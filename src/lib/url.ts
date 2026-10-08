/** Prefix an absolute site path with the configured `base`. */
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
