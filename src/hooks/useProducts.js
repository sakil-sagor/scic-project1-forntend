import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/product/create")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data));
  }, []);
  console.log(products);
  return [products, setProducts];
};
export default useProducts;
