import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useBrands from "../../hooks/useBrands";
import Loading from "../Loading/Loading";
import SingleBrands from "./SingleBrands";

const AllBrands = () => {
  const { darkMode } = useContext(AuthContext);
  const [brands] = useBrands();

  return (
    <div className={`mt-8 ${darkMode && "bg-gray-500"}`}>
      <div className="mx-auto text-center my-12">
        <h2
          className={`text-4xl font-bold ${
            darkMode ? "text-white" : "text-blue-600"
          }`}
        >
          Our Top Brands
        </h2>
        <br />
        <hr className=" w-1/6 text-center mx-auto" />
      </div>
      {!brands?.length ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-6 ">
          {brands.map((brand) => (
            <SingleBrands key={brand._id} brand={brand}></SingleBrands>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBrands;
