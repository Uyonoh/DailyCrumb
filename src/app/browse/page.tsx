import "@/styles/index.css";
import ProductsGrid from "@/components/ProductsGrid";
import { getProductCategories } from "../services/products";

function Browse() {
    const categories = getProductCategories();
    return (
        <section className="container py-7 px-5 @container flex flex-col max-w-[960px] justify-center">
            <div className="title py-7 font-bold text-2xl text-center">Browse Delicacies</div>

            {categories.map((category, index) => {
                return (
                    <section key={index}>
                        <div className="title py-7 font-bold text-2xl">{category.name}</div>
                        <ProductsGrid products={category.products} />
                    </section>
                );
            })}
        </section>
    );
}

export default Browse;