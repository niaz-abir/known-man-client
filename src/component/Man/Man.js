import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Singleman from "../Singleman/Singleman";

const Man = () => {
  const mans = useLoaderData();

  return (
    <div className=" p-0 lg:p-24 bg-black text-white pb-28">
      {mans.map((man) => (
        <Singleman man={man} key={man.id}></Singleman>
      ))}
    </div>
  );
};

export default Man;
