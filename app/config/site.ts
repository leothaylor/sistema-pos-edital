const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://neuralconcursos.com.br/";

export const siteOrigin = new URL("/", configuredSiteUrl).toString();

export const siteRoutes = {
  home: "/",
  product: "/sistema-pos-edital/",
  raioX: "/raio-x-express/",
  legacyRaioX: "/raio-x/",
} as const;

export const siteUrls = {
  home: new URL(siteRoutes.home, siteOrigin).toString(),
  product: new URL(siteRoutes.product, siteOrigin).toString(),
  raioX: new URL(siteRoutes.raioX, siteOrigin).toString(),
} as const;
