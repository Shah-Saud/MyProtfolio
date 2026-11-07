/**
 * Resolves a public asset path safely across both root deployments (`/`)
 * and GitHub Pages repository paths (`/REPOSITORY/`).
 */
export function resolveAssetUrl(path: string): string {
  if (!path) return '';
  if (/^(https?:|mailto:|tel:|data:)/i.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return `${cleanBase}${cleanPath}`;
}
