import Image from "next/image";
import "@/styles/index.css";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import { getProducts } from "./services/products";


export default function Home() {
  const products = getProducts();
  return (
    <div className="relative container py-7 px-5 @container flex flex-col max-w-[960px] justify-center">
      {/* Hero */}
      <Hero />

      {/* Products */}
      <section>
        <div className="title py-7 font-bold text-2xl">Featured Products</div>
        <ProductsGrid products={products} />
      </section>
    </div>
  );
}
