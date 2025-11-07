import Image from "next/image";
import Banner from "./(Components)/Layout/Banner";
import Catagory from "./(Components)/Layout/Catagory";
import FeaturedProduct from "./(Components)/Layout/FeaturedProduct";
import PopularProducts from "./(Components)/Layout/PopularProducts";
import PlantAnalysis from "./(Components)/Layout/PlantAnalysis";

export default function Home() {
  return (
    <>
    <Banner/>
    <Catagory/>
    <FeaturedProduct/>
    <PopularProducts/>
    <PlantAnalysis/>
    </>
  );
}
