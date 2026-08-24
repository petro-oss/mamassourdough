import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getShop } from "./config";
import StockistForm from "./StockistForm";

export async function generateMetadata({ params }: { params: Promise<{ shop: string }> }): Promise<Metadata> {
  const { shop } = await params;
  const shopConfig = getShop(shop);
  if (!shopConfig) return { title: "Stockist order" };
  return {
    title: `Order — ${shopConfig.name}`,
    description: `Weekly wholesale order form for ${shopConfig.name}, a mama's sourdough stockist.`,
    robots: { index: false, follow: false },
  };
}

export default async function StockistOrderPage({ params }: { params: Promise<{ shop: string }> }) {
  const { shop } = await params;
  const shopConfig = getShop(shop);
  if (!shopConfig) notFound();
  return <StockistForm shopConfig={shopConfig} />;
}
