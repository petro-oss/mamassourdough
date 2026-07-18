import { notFound } from "next/navigation";
import { getShop } from "./config";
import StockistForm from "./StockistForm";

export default async function StockistOrderPage({ params }: { params: Promise<{ shop: string }> }) {
  const { shop } = await params;
  const shopConfig = getShop(shop);
  if (!shopConfig) notFound();
  return <StockistForm shopConfig={shopConfig} />;
}
