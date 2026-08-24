import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Order fresh sourdough, focaccia and sweet bakes from mama's sourdough. Orders close Wednesday 7pm, ready for Friday collection in Ramsgate, Kent.",
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
