import { useContext } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const SingleProduct = ({ product }) => {
  const { darkMode } = useContext(AuthContext);
  const { brandName, image, discount, type, _id, productName, price, rating } =
    product;

  return (
    <div
      className={`flex  flex-col h-full  shadow-xl hover:shadow-2xl duration-200   rounded-md relative ${
        darkMode ? "bg-gray-400" : "bg-pink-50"
      }`}
    >
      <div className="w-full flex-grow">
        <img className="w-full rounded" src={image} alt="" />
      </div>
      <div className="p-2">
        <div className="flex justify-between">
          <h2 className="font-bold ">{productName}</h2>
          <p className="text-blue-700 font-bold text-lg">${price}</p>
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-gray-900 text-sm">{brandName}</p>
          <Rating
            className="text-sm text-yellow-600"
            initialRating={rating}
            readonly
            emptySymbol="far fa-star star-icon"
            fullSymbol="fas fa-star star-icon"
          ></Rating>
        </div>
        {/* <div className='my-2'>
                    <p>{description.split(" ").slice(0, 20).join(" ")}...</p>
                </div> */}
        <div className="my-4 grid grid-cols-2 gap-x-6">
          <Link to={`/products/${_id}`}>
            <button className="  border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white duration-200  py-1 w-full rounded">
              Details
            </button>
          </Link>
          <Link to={`/updateProduct/${_id}`}>
            <button className="bg-blue-700 hover:bg-transparent border hover:text-blue-700 border-blue-700 duration-200 text-white py-1 w-full rounded">
              Update
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute  text-white flex justify-between w-full">
        <p className="bg-pink-700  px-1 rounded py-1 ">{type}</p>
        <p className="text-pink-900 font-bold  px-1 rounded py-1 ">
          {product?.discount > 0 ? product?.discount + "% off" : " "}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
