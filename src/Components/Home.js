import React from "react";
import Navbar from "./Navbar";
import MainHome from "./MainHome";
import DeviceList from "./DeviceList";
import WeAssure from "./WeAssure";
function Home() {
  return (
    <div>
      <Navbar />
      <MainHome />
      <DeviceList />
      <WeAssure />
    </div>
  );
}

export default Home;
