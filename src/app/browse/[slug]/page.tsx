import Image from "next/image";
import type { ProductProp } from "@/components/ProductCard";
import Reviews from "@/components/Reviews";

function ProductDetail({ params }: { params: {slug: string} }) {
    // Fetch data using {params.slug}
    const product: ProductProp = {
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLn3_IarAvllKJtHxQ1jbCmhoH4fJ61dUUIO00D_FChIsJAfQjMjefEyL80UFh1ynN5KvjHEJX2oRbcvgJknK90kJ7qJIKVH5NOL44EA1V9CNNm_9JA5xH1yPlR-gWPObolSxf-sGva8yq2kkXV3HdmwaluK-_Ls6IEy6InO0IxoiPN8qF0F60vCK33U1e2x7Sxp9SYNJ4vnv3aobJ8jXTtp59J-cjAAuFfM0ok0Gd7AZV_q9x-XYJC2ZWfCDof3SLmbwY9c8LlSKH",
        name: "Artisan Sourdough",
        brief: "Our signature sourdough bread, perfect for any meal.",
        desc: "Our signature sourdough bread, perfect for any meal.Our signature sourdough bread, perfect for any meal.Our signature sourdough bread, perfect for any meal.",
        price: 35.00,
    }

    return (
        <div className="w-full px-10 py-10 flex flex-col">
            <div className="flex font-light text-sm pb-10">Bread crumbs</div>
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-8 flex-flex-col">
                    <section className="image">
                        <div className="relative w-full h-120">
                            
                            <Image src={product.img} alt={params.slug}
                                fill
                                sizes="(max-width: 768px) 100vw, 
                                    (max-width: 1200px) 50vw, 
                                    33vw"
                                style={{ objectFit: 'cover' }} className="rounded-lg"/>
                        </div>
                    </section>
                    <section className="reviews"></section>
                </div>
                <section className="col-span-4 details flex flex-col gap-5 justify-between">
                    <div className="flex flex-col gap-5">
                        <h2 className="title font-bold text-xl">{product.name}</h2>
                        <div className="desc flex flex-col gap-5">
                            <p>{product.desc}</p>
                            
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="price text-xl font-bold">${product.price}</span>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ee8d2b] text-[#1b140d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base">
                            <span className="truncate">Add to Cart</span>
                        </button>
                    </div>
                </section>

                <Reviews slug={params.slug} />
            </div>
        </div>
    );
}

export default ProductDetail;