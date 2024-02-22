import { useContext } from "react";
import AllBrands from "../../Components/AllBrands/AllBrands";
import Emergency from "../../Components/Emergency";
import HeroArea from "../../Components/HeroArea/HeroArea";
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
    </div>
  );
};

export default Home;
