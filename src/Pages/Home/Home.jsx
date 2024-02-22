import { useContext } from "react";
import AllArea from "../../Components/AllArea/AllArea";
import AllBrands from "../../Components/AllBrands/AllBrands";
import AllSummarySection from "../../Components/AllSummarySection/AllSummarySection";
import BestSellingProduct from "../../Components/BestSellingProduct/BestSellingProduct";
import BookingShortcut from "../../Components/BookingShortcut/BookingShortcut";
import DarkLightModeToggle from "../../Components/DarkLightModeToggle/DarkLightModeToggle";
import Emergency from "../../Components/Emergency";
import HeroArea from "../../Components/HeroArea/HeroArea";
import LocationFind from "../../Components/LocationFind/LocationFind";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <div className={`${darkMode && "bg-gray-500"}`}>
      <div>
        <HeroArea></HeroArea>
      </div>
      <div>
        <Emergency></Emergency>
      </div>
      <div className="container mx-auto px-2 my-24">
        <AllBrands></AllBrands>
      </div>
      <hr />
      <div data-aos="fade-down" className="container mx-auto px-2">
        <SpecialOffers></SpecialOffers>
      </div>
      <hr />
      <div
        className={`container mx-auto px-2 py-24 ${
          darkMode ? "text-white" : "text-blue-600"
        }`}
      >
        <div className="mx-auto text-center my-12">
          <h2 className="text-4xl font-bold ">Most Selling Products</h2>
          <br />
          <hr className=" w-1/6 text-center mx-auto" />
        </div>
        <BestSellingProduct></BestSellingProduct>
      </div>
      <hr />
      <div>
        <AllArea></AllArea>
      </div>
      <hr />
      <div data-aos="fade-up">
        <AllSummarySection></AllSummarySection>
      </div>
      <div className="container mx-auto px-2 py-24">
        <LocationFind></LocationFind>
      </div>
      <div data-aos="flip-right">
        <BookingShortcut></BookingShortcut>
      </div>
      <div className="fixed z-[9999] right-0 top-[50%]">
        <DarkLightModeToggle></DarkLightModeToggle>
      </div>
    </div>
  );
};

export default Home;
