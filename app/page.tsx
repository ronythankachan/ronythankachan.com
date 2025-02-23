import React from "react";
import Hero from "./components/Greeting";
import Services from "./components/Services";
import Timeline from "./components/Timeline";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Timeline />
    </div>
  );
};

export default Home;
