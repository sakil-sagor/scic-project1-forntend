import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blue from "../../assets/blue.gif";

const AddBrands = () => {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    brandName: "",
    image: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const uploadImageToImgBB = async (imageFile) => {
    const apiKey = "82ec2763f04d19d197f1451e6935abfe";
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      console.log(formData);
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=" + apiKey,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.status === 200) {
        const imageUrl = data.data.url;
        setImageUrl(imageUrl);
        return imageUrl;
      } else {
        console.error("Image upload failed");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Other registration form submission logic
    const imageUrl = await uploadImageToImgBB(imageFile);
    formData.image = imageUrl;
    console.log(formData);
    fetch("https://scic-project1.vercel.app/api/v1/product/createBrand", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          toast.success("success");
          setFormData({
            productName: "",
            image: "",
          });
        }

        if (data.error) {
          toast.error(" failed");
        }
      });
    setLoading(false);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="full-width-all pt-4  pb-24 ">
        <div className="w-full md:2/4 lg:w-2/4 m-auto pt-12">
          <div className="bg-blue-50 ">
            <div className=" ">
              <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                <h2 className="text-2xl font-bold text-blue-700">
                  Add Brand Detials
                </h2>
              </div>
              <div className=" mt-4 ">
                <form
                  className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col w-full">
                    <label
                      className=" text-gray-600 font-semibold block "
                      htmlFor="brandName"
                    >
                      Name
                    </label>
                    <input
                      className="py-1 px-2 rounded-md border border-gray-300"
                      type="text"
                      name="brandName"
                      placeholder="Brand Name"
                      value={formData.brandName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-col w-full mt-2">
                    <label
                      className=" text-gray-600 font-semibold block  "
                      htmlFor="image"
                    >
                      Image
                    </label>
                    <input
                      id="image"
                      className="py-1 px-2 rounded-md"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <div className=" mt-4 ">
                    <div className="flex items-center justify-center h-10  bg-indigo-500 rounded">
                      <button className=" ">
                        <img
                          className={`w-8 text-center  mx-auto ${
                            !loading && "hidden"
                          }`}
                          src={blue}
                          alt=""
                        />
                      </button>
                      <button
                        className={`w-full h-full  text-white py-18 ${
                          loading && "hidden"
                        }`}
                      >
                        <span>Add Brand</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              theme="light"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrands;
