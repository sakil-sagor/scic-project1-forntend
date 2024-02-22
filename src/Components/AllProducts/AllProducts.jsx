import useProducts from "../../hooks/useProducts";
import PageTitle from "../PageTitle";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  const [products] = useProducts();

  return (
    <div className="my-8 min-h-screen container mx-auto px-2">
      <div className="my-4">
        <PageTitle title={"Find All Products here."} content={""}></PageTitle>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
