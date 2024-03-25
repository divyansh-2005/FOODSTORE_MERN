import React from "react";
import Navebar from "../components/Navebar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <div> <Navebar /> </div>
      <div> <Carousal /> </div>
      <div className="m-3"> <Card /> </div>
      <div> <Footer /> </div>
    </div>
  );
}
