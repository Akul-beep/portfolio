/** Base path for GitHub Pages (`/portfolio`) or empty for root deploys. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (
    !basePath ||
    path.startsWith("#") ||
    path.startsWith("http") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (basePath ? `https://akul-beep.github.io${basePath}` : "https://akulnehra.com");
