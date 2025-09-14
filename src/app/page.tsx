import Image from "next/image";
import "@/styles/index.css";
import Header from "@/components/Header";

import Product from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="container py-7 px-5 @container flex flex-col max-w-[960px] justify-center">
      {/* Hero */}
      <section className="hero-home flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4">
        <div className="flex flex-col gap-2 text-center">
         <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl"
         >The Daily Crumb</h1>
         <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">Freshly baked goods delivered to your door.</h2>
        </div>
         <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ee8d2b] text-[#1b140d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base">
          <span className="truncate">Order Now</span>
         </button>
      </section>

      {/* Products */}
      <section>
        <div className="title py-5">Products</div>

        <div className="grid grid-cols-4">
          <div className="product">
            <Product img="https://lh3.googleusercontent.com/aida-public/AB6AXuCLn3_IarAvllKJtHxQ1jbCmhoH4fJ61dUUIO00D_FChIsJAfQjMjefEyL80UFh1ynN5KvjHEJX2oRbcvgJknK90kJ7qJIKVH5NOL44EA1V9CNNm_9JA5xH1yPlR-gWPObolSxf-sGva8yq2kkXV3HdmwaluK-_Ls6IEy6InO0IxoiPN8qF0F60vCK33U1e2x7Sxp9SYNJ4vnv3aobJ8jXTtp59J-cjAAuFfM0ok0Gd7AZV_q9x-XYJC2ZWfCDof3SLmbwY9c8LlSKH" 
            name="Artisan Sourdough" brief="Our signature sourdough bread, perfect for any meal."/>
          </div>
        </div>
      </section>
    </div>
  );
}
