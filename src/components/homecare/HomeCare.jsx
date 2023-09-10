import React from "react";
import { Link } from "react-router-dom";
import "./homecare.css";

function HomeCare() {
  return (
    <div className="homecare flex-col flex items-center justify-center">
      <div className="container homecare-wrapper flex items-center justify-between">
        <div className="homecare-img bg-white"></div>
        <div className="homecare-desc flex flex-col items-end px-4">
          <p className="homecare-text text-end font-extrabold text-3xl md:text-4xl text-white">
            Homecare services is <br />
            our focus to make all is well with you
          </p>
          <p className="homecare-text text-white text-end mt-4">
            The range of homecare services that we offer is endless depending on
            patient need. These include; doctor care, nursing care, laboratory
            workups as well as physical, occupational, and/or speech therapy.
            Our doctors will examine you and together, come up with a care plan
            and the services you might need. So, sit comfortable knowing we will
            take care of you and your loved ones.
          </p>
          <Link to="/services">
            <button className="text-white bg-gradient-to-r from-blue-300 to-blue-500 hover:from-indigo-800 hover:to-indigo-600 py-3 px-20 rounded-md mt-2">
              Explore more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCare;
