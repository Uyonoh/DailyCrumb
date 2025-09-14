import Image from "next/image";
interface ProductProp {
    img: string;
    name: string;
    brief: string;
};

function Product(product: ProductProp) {
    return (
        <div className="card">
            <div className="">
                <Image className="rounded-sm  @[480px]:rounded-lg" src={product.img}
                alt="product" width={300} height={300} />
            </div>
            <div>
                <p className="text-normal font-normal leading-normal">{product.name}</p>
                <p className="text-[#9a734c] text-sm font-normal leading-normal">{product.brief}</p>
            </div>
        </div>
    )
}

export default Product;