export type StockistProduct = {
  name: string;
  price: number;
};

export type StockistShop = {
  slug: string;
  name: string;
  address: string;
  days: string;
  products: StockistProduct[];
};

const PRICE = 4.00;

export const STOCKIST_SHOPS: StockistShop[] = [
  {
    slug: "crumb-deli",
    name: "Crumb & Deli",
    address: "52 Station Road, Westgate, CT8 8QY",
    days: "Thursday, Friday & Saturday",
    products: [
      { name: "Country Wholemeal Sourdough", price: PRICE },
    ],
  },
  {
    slug: "flowers-felicities",
    name: "Flowers & Felicities",
    address: "5 The Broadway, Broadstairs CT10 2AD",
    days: "Thursdays",
    products: [
      { name: "Country White Sourdough",     price: PRICE },
      { name: "Country Wholemeal Sourdough", price: PRICE },
    ],
  },
  {
    slug: "union-cafe",
    name: "Union Cafe",
    address: "25-27 Queen St, Ramsgate CT11 9DZ",
    days: "Thursday, Friday & Saturday",
    products: [
      { name: "Country Wholemeal Sourdough", price: PRICE },
    ],
  },
];

export function getShop(slug: string): StockistShop | undefined {
  return STOCKIST_SHOPS.find((s) => s.slug === slug);
}
