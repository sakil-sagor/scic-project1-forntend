import { useEffect, useState } from "react";

const useBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://scic-project1.vercel.app/api/v1/product/createBrand")
      .then((res) => res.json())
      .then((data) => setBrands(data.data));
  }, []);
  console.log(brands);
  return [brands, setBrands];
};
export default useBrands;
