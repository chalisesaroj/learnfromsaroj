/**
 * Resolves public-folder asset paths so they work both in local root dev (`/`)
 * and subpath deployments such as GitHub Pages (`/learnfromsaroj/`).
 */
export function resolvePublicAssetUrl(url: string): string {
  if (!url) return '';
  if (/^(data:|blob:|https?:\/\/)/i.test(url)) {
    return url;
  }
  const base = (import.meta as any).env?.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return `${normalizedBase}${cleanPath}`;
}
