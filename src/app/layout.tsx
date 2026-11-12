import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { default: "Bora | Seu próximo destino", template: "%s | Bora" },
  description: "Um pequeno portal para descobrir grandes paisagens brasileiras.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Layout>{children}</Layout></body></html>;
}
