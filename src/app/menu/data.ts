// ─── THIS WEEK'S MENU ────────────────────────────────────────────────────────
// Update these items each week to match the current menu.
// Shared between the Menu page (server component) and the Order form (client
// component) — kept in its own module so neither has to import the other's
// page file (a client component importing a page.tsx with `export const
// metadata` breaks the build).
export const MENU_META = {
  collectionDay: "Friday",
  collectionDate: "TBA on order placement",
};

export const menuItems = [
  // SOURDOUGH LOAVES
  {
    id: "country-white",
    name: "Country White Sourdough",
    subheading: "Sourdough Loaves",
    desc: "Our classic open-crumb white sourdough with a crackling crust.",
    allergens: "Contains gluten, cultured starter.",
    price: 5.00,
    priceLabel: "£5.00",
    category: "Loaves",
    available: true,
  },
  {
    id: "country-wholemeal",
    name: "Country Wholemeal Sourdough",
    desc: "Nutty, wholesome and deeply flavoured. A hearty everyday loaf.",
    allergens: "Contains gluten, cultured starter.",
    price: 5.00,
    priceLabel: "£5.00",
    category: "Loaves",
    available: true,
  },
  // TIN LOAVES
  {
    id: "seeded-tin",
    name: "Seeded Tin Loaf",
    subheading: "Tin Loaves",
    desc: "Packed with seeds — pumpkin, sesame, linseed and sunflower — perfect for toast and sandwiches.",
    allergens: "Contains gluten, cultured starter, mixed seeds (pumpkin, sesame, linseed, sunflower).",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Loaves",
    available: true,
  },
  {
    id: "rye-tin",
    name: "Rye Tin Loaf",
    desc: "Dark, dense and richly flavoured rye sourdough baked in a tin.",
    allergens: "Contains gluten, cultured starter.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Loaves",
    available: false, // not this week
  },
  {
    id: "soft-white-tin",
    name: "Soft White Tin Loaf",
    desc: "Light and pillowy white sourdough in a tin. Brilliant for sandwiches.",
    allergens: "Contains gluten, cultured starter, eggs, dairy, honey.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Loaves",
    available: true,
  },
  // BAGUETTES
  {
    id: "white-baguette",
    name: "White Baguette",
    subheading: "Baguettes",
    desc: "Classic crispy-crusted white sourdough baguette. Perfect for dipping, dunking or slicing.",
    allergens: "Contains gluten, cultured starter.",
    price: 2.50,
    priceLabel: "£2.50",
    category: "Loaves",
    available: false, // not this week
  },
  // FOCACCIA
  {
    id: "focaccia-plain",
    name: "Focaccia: Plain",
    desc: "Simple, pillowy focaccia drizzled with olive oil and sea salt.",
    allergens: "Contains gluten, cultured starter.",
    price: 5.00,
    priceLabel: "£5.00",
    category: "Focaccia",
    available: true,
  },
  {
    id: "focaccia-sundried",
    name: "Focaccia: Sundried Tomato & Basil",
    desc: "Bright, herby focaccia topped with sundried tomatoes and fresh basil.",
    allergens: "Contains gluten, cultured starter.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Focaccia",
    available: true,
  },
  {
    id: "focaccia-garlic-onion",
    name: "Focaccia: Garlic & Caramelised Onion",
    desc: "Sweet caramelised onion and roasted garlic on pillowy sourdough focaccia.",
    allergens: "Contains gluten, cultured starter.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Focaccia",
    available: true,
  },
  {
    id: "focaccia-rosemary",
    name: "Focaccia: Rosemary & Garlic",
    desc: "Fragrant rosemary and garlic baked into a golden, airy focaccia.",
    allergens: "Contains gluten, cultured starter.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Focaccia",
    available: true,
  },
  {
    id: "focaccia-olive-feta",
    name: "Focaccia: Olive & Feta",
    desc: "Salty olives and creamy feta baked into a beautifully flavoured focaccia.",
    allergens: "Contains gluten, cultured starter.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Focaccia",
    available: true,
  },
  // SWEET BAKES
  {
    id: "choc-chip-cookie",
    name: "Chocolate Chip Cookie",
    desc: "Big, chewy, golden-edged sourdough cookies loaded with chocolate.",
    allergens: "Contains gluten, cultured starter, dairy, eggs.",
    price: 2.00,
    priceLabel: "£2.00",
    category: "Sweet Bakes",
    available: true,
  },
  {
    id: "chocolate-brownie",
    name: "Chocolate Brownie",
    desc: "Rich, fudgy sourdough chocolate brownie with a crinkled top and gooey centre.",
    allergens: "Contains gluten, dairy, eggs.",
    price: 4.00,
    priceLabel: "£4.00",
    category: "Sweet Bakes",
    available: true,
  },
  {
    id: "banana-loaf",
    name: "Banana Loaf",
    desc: "Moist, deeply flavoured banana loaf, soft crumb, golden top.",
    allergens: "Contains cultured starter (gluten), cereals, eggs, peanuts.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Sweet Bakes",
    available: false, // not this week
  },
  {
    id: "blueberry-muffin",
    name: "Blueberry Muffin",
    desc: "Soft, golden sourdough muffins bursting with blueberries.",
    allergens: "Contains gluten, cultured starter, eggs, dairy.",
    price: 3.00,
    priceLabel: "£3.00",
    category: "Sweet Bakes",
    available: false, // not this week
  },
];
