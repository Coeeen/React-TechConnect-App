import React from "react";
import Navbar from "./Navbar";
import MainHome from "./MainHome";
import DeviceList from "./DeviceList";
import WeAssure from "./WeAssure";
import SummerSale from "./SummerSale";
import BestSellersList from "./BestSellersList";
function Home() {
  return (
    <div>
      <Navbar />
      <MainHome />
      <DeviceList />
      <WeAssure />
      <SummerSale />
      <BestSellersList />
    </div>
  );
}

export default Home;
