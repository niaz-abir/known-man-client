import React from "react";
import Lottie from "lottie-react";
import reader from "../../asset/reader.json";

const Home = () => {
  return (
    <div>
      <div className="bg-black  flex justify-center  pb-48">
        <Lottie
          className="w-1/2 bg-black"
          animationData={reader}
          loop={true}
        ></Lottie>
      </div>
    </div>
  );
};

export default Home;
