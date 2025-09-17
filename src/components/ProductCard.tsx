"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { ProductProp } from "@/app/services/products";

function Product({slug, img, name, brief}: ProductProp) {
    const router = useRouter()
    slug = name;
    return (
        <div className="card cursor-pointer" onClick={() => router.push(`/browse/${slug}`)}>
            <div className="">
                <Image className="rounded-sm  @[480px]:rounded-lg" src={img}
                    alt="product" width={300} height={300} />
            </div>
            <div className="py-2">
                <p className="text-normal font-medium leading-normal">{name}</p>
                <p className="text-[#9a734c] text-sm font-normal leading-normal">{brief}</p>
            </div>
        </div>
    )
}

export {Product};
export type {ProductProp};