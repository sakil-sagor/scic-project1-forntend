import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import blue from "../../assets/blue.gif";
import SingleCartProduct from "./SingleCartProduct";

const AddToCart = () => {
  const [carts, setCarts] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `https://tenthserver.iitpark.com/addToCart?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  const handelCancel = (id) => {
    console.log(id);
    let link = `https://tenthserver.iitpark.com/addToCart?email=${user?.email}&&id=${id}`;
    console.log(link);
    fetch(
      `https://tenthserver.iitpark.com/addToCart?email=${user?.email}&&id=${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Successfully Removed");
          const remainingData = carts.filter((user) => user._id !== id);
          setCarts(remainingData);
        }
      });
  };

  console.log(carts);
  return (
    <div>
      <div>
        <h1 className="text-left text-2xl text-blue-700 font-semibold mb-12">
          You Can Place Order from your Cart Products!
        </h1>
      </div>
      <hr />
      {loading && (
        <div className="flex justify-center items-center mt-24">
          <img className="w-24" src={blue} alt="" />
        </div>
      )}
      {!loading && (
        <div className="pt-12">
          {!carts.length ? (
            <div>
              <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">
                Oops! You Have no any Cart Products.
              </h1>
              <div className="mt-24">
                <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">
                  Want to make some Shop...?{" "}
                </h1>
                <p className="text-center">
                  <NavLink
                    className="transition duration-500 bg-indigo-900 text-white px-10 py-3 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900"
                    to="/"
                  >
                    Shop Now
                  </NavLink>
                </p>
              </div>
            </div>
          ) : (
            <div>
              {carts.length && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
                    {carts.map((cart) => (
                      <SingleCartProduct
                        key={cart?._id}
                        cart={cart}
                        handelCancel={handelCancel}
                      ></SingleCartProduct>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </div>
  );
};

export default AddToCart;
