import React from "react";
import { useLoaderData } from "react-router-dom";

const Info = () => {
  const infos = useLoaderData();
  console.log(infos);
  return (
    <div className="bg-black flex justify-center">
      <div className="card  w-96 h-46  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={infos.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl text-pink-700">{infos.name}</h2>
          <p className="text-2xl text-pink-700">{infos.profession}</p>
          <p className="text-1xl text-pink-700">Born:{infos.date_of_birth}</p>

          <label
            htmlFor="my-modal"
            className="btn  bg-black text-pink-white hover:bg-pink-700 "
          >
            Autobiography
          </label>

          <input
            type="checkbox"
            id="my-modal"
            className="modal-toggle bg-pink-700"
          />
          <div className="modal">
            <div className="modal-box text-white bg-pink-600">
              <p>{infos.descreption}</p>

              <div className="modal-action">
                <label
                  htmlFor="my-modal"
                  className="btn bg-black text-pink-white hover:bg-pink-700  "
                >
                  Thank you
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
