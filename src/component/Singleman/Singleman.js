import React from "react";
import { Link } from "react-router-dom";
import "./Singleman.css";

const Singleman = ({ man }) => {
  return (
    <div>
      <Link to={`info/${man.id}`}>
        <div className=" mb-10  ml-10 lg:ml-96 px-2 py-4 text-center border-2 border-pink-700 rounded-lg hover:shadow-lg  hover:shadow-pink-700  man">
          <h1 className="text-2xl">{man.name}</h1>
          <p className="text-1xl">A {man.profession}</p>
        </div>
      </Link>
    </div>
  );
};

export default Singleman;
