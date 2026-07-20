export type StockistProduct = {
  name: string;
  price: number;
};

export type StockistShop = {
  slug: string;
  name: string;
  contact: string;
  address: string;
  days: string;
  products: StockistProduct[];
};

export const STOCKIST_SHOPS: StockistShop[] = [
  {
    slug: "crumb-deli",
    name: "Crumb & Deli",
    contact: "Kirstey",
    address: "52 Station Road, Westgate, CT8 8QY",
    days: "Thursday, Friday & Saturday",
    products: [
      { name: "Country Wholemeal Sourdough", price: 4.00 },
      { name: "Inclusion Loaf",              price: 4.50 },
      { name: "Large Focaccia Tray",         price: 12.00 },
    ],
  },
  {
    slug: "flowers-felicities",
    name: "Flowers & Felicities",
    contact: "",
    address: "5 The Broadway, Broadstairs CT10 2AD",
    days: "Thursdays",
    products: [
      { name: "Country White Sourdough",     price: 4.00 },
      { name: "Country Wholemeal Sourdough", price: 4.00 },
    ],
  },
  {
    slug: "union-cafe",
    name: "Union Cafe",
    contact: "Lucy",
    address: "25-27 Queen St, Ramsgate CT11 9DZ",
    days: "Thursday, Friday & Saturday",
    products: [
      { name: "Country Wholemeal Sourdough",                    price: 4.00 },
      { name: "Large Focaccia Tray (Rosemary & Roasted Garlic)", price: 12.00 },
      { name: "Large Focaccia Tray (Plain)",                    price: 10.00 },
    ],
  },
];

export function getShop(slug: string): StockistShop | undefined {
  return STOCKIST_SHOPS.find((s) => s.slug === slug);
}
