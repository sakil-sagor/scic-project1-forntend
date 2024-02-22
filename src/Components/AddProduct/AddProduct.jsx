import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blue from "../../assets/blue.gif";
import useBrands from "../../hooks/useBrands";

const AddProduct = () => {
  const [brands] = useBrands();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    type: "",
    price: "",
    rating: "",
    description: "",
    discount: "",
    image: "",
  });

  console.log(brands);
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

    fetch("http://localhost:5000/api/v1/product/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("success");
          setFormData({
            productName: "",
            brandName: "",
            type: "",
            price: "",
            rating: "",
            description: "",
            discount: "",
            image: "",
          });
        }
        if (data?.error) {
          toast.error(" failed");
        }

        setLoading(false);
      });
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className=" pt-4  pb-24 ">
        <div className="w-full md:2/4 lg:w-2/4 m-auto pt-12">
          <div className="bg-blue-50 ">
            <div className=" ">
              <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                <h2 className="text-2xl font-bold text-blue-700">
                  Add Products Detials
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
                      htmlFor="productName"
                    >
                      Name
                    </label>
                    <input
                      className="py-1 px-2 rounded-md border border-gray-300"
                      type="text"
                      name="productName"
                      placeholder="Product Name"
                      value={formData.productName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex space-x-4 justify-between mt-2">
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block "
                        htmlFor="brandName"
                      >
                        Brand Name
                      </label>

                      <select
                        className="py-1 px-2 w-full text-center rounded-md border border-gray-300"
                        type="text"
                        name="brandName"
                        value={formData.brandName}
                        onChange={handleInputChange}
                      >
                        <option className="" value="" disabled selected>
                          --Select Type--
                        </option>
                        {brands.map((brand, i) => (
                          <option key={i} value={brand?.brandName}>
                            {brand?.brandName}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block "
                        htmlFor="type"
                      >
                        Type
                      </label>

                      <select
                        className="py-1 w-full  text-center px-2 rounded-md border border-gray-300"
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                      >
                        <option className="" value="" disabled selected>
                          --Select Type--
                        </option>
                        <option value="phone">phone </option>
                        <option value="computer">Computer</option>
                        <option value="accessories">Accessories</option>
                        <option value="camera">Camera</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-4 justify-between mt-2">
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block  "
                        htmlFor="price"
                      >
                        Price
                      </label>
                      <input
                        className="py-1 px-2 w-full rounded-md border border-gray-300"
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block  "
                        htmlFor="rating"
                      >
                        Rating (0-5 )
                      </label>

                      <input
                        className="py-1 px-2 w-full rounded-md border border-gray-300"
                        type="number"
                        step="0.01"
                        name="rating"
                        min="0"
                        max="5"
                        placeholder="Your rating ( 0 - 5 )"
                        value={formData.rating}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4 justify-between mt-2">
                    <div className="w-1/2">
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
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block "
                        htmlFor="discount"
                      >
                        Discount (0-100)%
                      </label>

                      <input
                        className="py-1 px-2 w-full rounded-md border border-gray-300"
                        type="number"
                        step="1"
                        name="discount"
                        min="0"
                        max="100"
                        placeholder=" Discount ( 0 - 100 )"
                        value={formData.discount}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* <div className='flex flex-col w-full mt-2'>
                                        <label className=' text-gray-600 font-semibold block  ' for='image'>
                                            Image
                                        </label>
                                        <input
                                            id='image'
                                            className='py-1 px-2 rounded-md'
                                            type="file"
                                            accept="image/*"

                                            onChange={handleImageUpload}
                                        />
                                    </div> */}
                  <div className="flex flex-col w-full mt-2">
                    <label
                      className=" text-gray-600 font-semibold block "
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      required
                      className="py-1 rounded-md  px-2  border border-gray-300"
                      name="description"
                      id="description"
                      placeholder="Description..."
                      cols="30"
                      rows="2"
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>
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
                        <span>Add Product</span>
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

export default AddProduct;
