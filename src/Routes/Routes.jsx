import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/AddProduct/AddProduct";
import AddBrands from "../Components/AllBrands/AddBrands";
import AllProducts from "../Components/AllProducts/AllProducts";
import DetailsProduct from "../Components/AllProducts/DetailsProduct";
import Registration from "../Components/Registration/Registration";
import Main from "../Layout/Main";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErroPage></ErroPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/products/:_id",
        element: <DetailsProduct></DetailsProduct>,
      },

      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/addBrand",
        element: <AddBrands></AddBrands>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
