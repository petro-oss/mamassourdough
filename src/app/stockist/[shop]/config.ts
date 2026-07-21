export type StockistProduct = {
  name: string;
  price: number;
};

export type StockistShop = {
  slug: string;
  name: string;
  contact: string;
  email?: string;
  phone?: string;
  address: string;
  days: string[];   // ordered delivery days e.g. ["Thursday","Friday","Saturday"]
  products: StockistProduct[];
};

export const STOCKIST_SHOPS: StockistShop[] = [
  {
    slug: "crumb-deli",
    name: "Crumb & Deli",
    contact: "Kirstey",
    address: "52 Station Road, Westgate, CT8 8QY",
    days: ["Thursday", "Friday", "Saturday"],
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
    days: ["Thursday"],
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
    days: ["Thursday", "Friday", "Saturday"],
    products: [
      { name: "Country Wholemeal Sourdough",                     price: 4.00 },
      { name: "Large Focaccia Tray (Rosemary & Roasted Garlic)", price: 12.00 },
      { name: "Large Focaccia Tray (Plain)",                     price: 10.00 },
    ],
  },
  {
    slug: "shahlas-cakes",
    name: "Shahla's Cakes",
    contact: "Shahla",
    email: "Shahla.joiner@hotmail.co.uk",
    phone: "07494271132",
    address: "1a Wentworth Avenue, Margate CT9 5HW",
    days: ["Friday"],
    products: [
      { name: "Country White Sourdough", price: 4.00 },
      { name: "Focaccia",                price: 5.00 },
    ],
  },
];

export function getShop(slug: string): StockistShop | undefined {
  return STOCKIST_SHOPS.find((s) => s.slug === slug);
}

// Returns e.g. "Thurs · Fri · Sat" or "Fridays"
export function formatDays(days: string[]): string {
  if (days.length === 1) return `${days[0]}s`;
  const short: Record<string, string> = {
    Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed",
    Thursday: "Thurs", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
  };
  return days.map((d) => short[d] ?? d).join(" · ");
}
