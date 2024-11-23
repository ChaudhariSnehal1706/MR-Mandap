import React from "react";
import { Link } from "react-router-dom";
import mandapData from "../JsonData/MandapData";

const Mandap = () => {
  return (
    <div>
      <div className="mandap-container relative">
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="content text-center relative z-10">
          <div className="mb-6">
            <h1 className="lg:text-[50px] text-2xl font-opensans-condensed font-bold">
              <span className="text-custom-red"> Mandap</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {mandapData.slice(0, 3).map((mandap) => (
              <div key={mandap.id} className="mandap-image">
                <img
                  src={mandap.mandapImage} // Use direct relative path from your JSON data
                  alt={`Mandap ${mandap.id}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
          <Link to="/mandapphotos">
            <button className="px-6 py-3 bg-custom-red text-white font-bold rounded hover:bg-opacity-80 transition">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mandap;
