import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCards from "../components/ServiceCards";

export default function Home() {
  return (
    <div>
        <Header />
        <ServiceCards />
        <Footer />
    </div>
  );
}
