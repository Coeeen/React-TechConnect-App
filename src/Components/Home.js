import React from "react";
import Navbar from "./Navbar";
import MainHome from "./MainHome";
import DeviceList from "./DeviceList";
import WeAssure from "./WeAssure";
import SummerSale from "./SummerSale";
import BestSellersList from "./BestSellersList";
import NewProducts from "./NewProducts";
import HappyHour from "./HappyHour";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <MainHome />
      <DeviceList />
      <WeAssure />
      <SummerSale />
      <BestSellersList />
      <HappyHour />
      <NewProducts />
      <Footer />
    </div>
  );
}

export default Home;
