import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with mama's sourdough — small-batch artisan bakery in Ramsgate, Kent.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
