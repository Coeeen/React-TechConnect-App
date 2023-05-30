import React from "react";
import Navbar from "./Navbar";
import MainHome from "./MainHome";
import DeviceList from "./DeviceList";
import WeAssure from "./WeAssure";
import SummerSale from "./SummerSale";
function Home() {
  return (
    <div>
      <Navbar />
      <MainHome />
      <DeviceList />
      <WeAssure />
      <SummerSale />
    </div>
  );
}

export default Home;
