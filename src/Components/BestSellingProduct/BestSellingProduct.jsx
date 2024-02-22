import useProducts from "../../hooks/useProducts";
import SingleProduct from "../AllProducts/SingleProduct";

const BestSellingProduct = () => {
  const [products] = useProducts();

  return (
    <div className="my-8 min-h-screen container mx-auto px-2">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
      {/* <p>{description.split(" ").slice(0, 20).join(" ")}...</p> */}
    </div>
  );
};

export default BestSellingProduct;
