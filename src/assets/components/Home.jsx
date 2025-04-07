import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="flex justify-between py-5 text-xl font-bold px-10">
        {" "}
        <Link to={'/'}> Home </Link>
        <Link to={'/header'}> About </Link>
        <Link to={'/main'}> Blogs </Link>
        <Link to={'/footer'}> Footer </Link>
     
      </div>
    </div>
  );
};

export default Home;
