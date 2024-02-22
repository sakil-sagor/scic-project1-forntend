import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/AddProduct/AddProduct";
import AddBrands from "../Components/AllBrands/AddBrands";
import Registration from "../Components/Registration/Registration";
import Main from "../Layout/Main";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";

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
        path: "/addProducts",
        element: <AddProduct></AddProduct>,
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
