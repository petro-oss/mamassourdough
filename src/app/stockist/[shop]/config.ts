export type StockistProduct = {
  name: string;
  price: number;
};

export type StockistDay = {
  day: string;
  products: StockistProduct[];
};

export type StockistShop = {
  slug: string;
  name: string;
  contact: string;
  email?: string;
  phone?: string;
  address: string;
  days: StockistDay[];
};

export const STOCKIST_SHOPS: StockistShop[] = [
  {
    slug: "crumb-deli",
    name: "Crumb & Deli",
    contact: "Kirstey",
    phone: "+447469990594",
    address: "52 Station Road, Westgate, CT8 8QY",
    days: [
      {
        day: "Wednesday",
        products: [
          { name: "Mixed Loaves",        price: 4.00 },
          { name: "Large Focaccia Tray", price: 12.00 },
          { name: "Rye Bread",           price: 4.50 },
        ],
      },
      {
        day: "Saturday",
        products: [
          { name: "Mixed Loaves",        price: 4.00 },
          { name: "Large Focaccia Tray", price: 12.00 },
          { name: "Rye Bread",           price: 4.50 },
        ],
      },
    ],
  },
  {
    slug: "flowers-felicities",
    name: "Flowers & Felicities",
    contact: "Laura",
    phone: "+447890326306",
    address: "5 The Broadway, Broadstairs CT10 2AD",
    days: [
      {
        day: "Thursday",
        products: [
          { name: "Country White Sourdough",     price: 4.00 },
          { name: "Country Wholemeal Sourdough", price: 4.00 },
        ],
      },
    ],
  },
  {
    slug: "union-cafe",
    name: "Union Cafe",
    contact: "Lucy",
    phone: "07928067006",
    email: "hellounioncafe@gmail.com",
    address: "25-27 Queen St, Ramsgate CT11 9DZ",
    days: [
      {
        day: "Tuesday",
        products: [
          { name: "Large Focaccia Tray (Rosemary & Roasted Garlic)", price: 12.00 },
        ],
      },
      {
        day: "Thursday",
        products: [
          { name: "Large Focaccia Tray (Rosemary & Roasted Garlic)", price: 12.00 },
          { name: "Large Focaccia Tray (Plain)",                     price: 10.00 },
        ],
      },
      {
        day: "Friday",
        products: [
          { name: "Country Wholemeal Sourdough",                     price: 4.00 },
          { name: "Large Focaccia Tray (Rosemary & Roasted Garlic)", price: 12.00 },
        ],
      },
      {
        day: "Saturday",
        products: [
          { name: "Country Wholemeal Sourdough",                     price: 4.00 },
          { name: "Large Focaccia Tray (Rosemary & Roasted Garlic)", price: 12.00 },
        ],
      },
    ],
  },
  {
    slug: "shahlas-cakes",
    name: "Shahla's Cakes",
    contact: "Shahla",
    email: "Shahla.joiner@hotmail.co.uk",
    phone: "07494271132",
    address: "1a Wentworth Avenue, Margate CT9 5HW",
    days: [
      {
        day: "Friday",
        products: [
          { name: "Country White Sourdough", price: 4.00 },
          { name: "Focaccia",                price: 5.00 },
        ],
      },
    ],
  },
];

export function getShop(slug: string): StockistShop | undefined {
  return STOCKIST_SHOPS.find((s) => s.slug === slug);
}

export function formatDays(days: StockistDay[]): string {
  if (days.length === 1) return `${days[0].day}s`;
  const short: Record<string, string> = {
    Monday: "Mon", Tuesday: "Tues", Wednesday: "Wed",
    Thursday: "Thurs", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
  };
  return days.map((d) => short[d.day] ?? d.day).join(" · ");
}
