import React from "react";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return <div>Home</div>;
};

// Correct HOC usage
export default AppLayout(Home);
