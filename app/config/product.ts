export type ProductConfig = {
  productName: string;
  brandName: string;
  price: number | null;
  checkoutUrl: string | null;
  guaranteeDays: number | null;
  lifetimeAccess: boolean | null;
  showBonuses: boolean;
  showStickyMobileCta: boolean;
  bonuses: readonly {
    title: string;
    description: string;
  }[];
};

/**
 * Fonte central de toda informação comercial variável.
 * Preencha somente depois da confirmação oficial da oferta e do checkout.
 */
export const productConfig: ProductConfig = {
  productName: "Sistema Pós-Edital",
  brandName: "Neural Concursos",
  price: null,
  checkoutUrl: "https://pay.hotmart.com/J107137200W",
  guaranteeDays: null,
  lifetimeAccess: null,
  showBonuses: false,
  showStickyMobileCta: true,
  bonuses: [
    {
      title: "Painel Neural Concursos IA",
      description: "Aplicativo de apoio à organização da preparação, com versões para Windows e Android.",
    },
    {
      title: "Professor Zoeiro",
      description: "Ferramenta de apoio à resolução e compreensão de questões.",
    },
  ],
};

export function formatProductPrice(price = productConfig.price) {
  if (price === null) return null;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);
}
