import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/messages">Messages</Link>
    </>
  );
};

export default Home;
