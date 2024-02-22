import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://scic-project1.vercel.app/api/v1/product/create")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data));
  }, []);
  return [products, setProducts];
};
export default useProducts;
