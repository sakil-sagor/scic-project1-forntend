import { useEffect, useState } from "react";

const useBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/product/createBrand")
      .then((res) => res.json())
      .then((data) => setBrands(data.data));
  }, []);
  console.log(brands);
  return [brands, setBrands];
};
export default useBrands;
