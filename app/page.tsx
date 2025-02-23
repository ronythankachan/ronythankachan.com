import React from "react";
import Greeting from "./components/Greeting";
import Services from "./components/Services";
import Timeline from "./components/Timeline";

const Home = () => {
  return (
    <div>
      <Greeting />
      <Services />
      <Timeline />
    </div>
  );
};

export default Home;
