import {Product} from "@/components/ProductCard";
import type { ProductProp } from "@/components/ProductCard";

function ProductsGrid({ products }: { products: ProductProp[] }) {
    return (
        <div>
            <div className="grid grid-cols-2 @[480px]:grid-cols-4 gap-3">
                {products.map((product, index) => {
                    return (
                        <div className="product" key={index}>
                            <Product img={product.img}
                                name={product.name} brief={product.brief} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsGrid;