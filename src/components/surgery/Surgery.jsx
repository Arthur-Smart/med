import React from "react";
import "./surgery.css";

function Surgery() {
  return (
    <div className="surgery flex flex-col items-center justify-center py-10">
      <div className="container px-5 surgery-wrapper flex items-center  justify-between">
        <div className="surgery-left">
          <p className="text-white font-extrabold text-3xl md:text-5xl">
            BORESHA AFYA
          </p>
          {/* md:text-5xl bg-clip-text bg-gradient-to-r from-blue-700 to-pink-600 */}
          {/* drop-shadow-lg */}
          <p className="text-white font-extrabold text-2xl md:text-4xl ">
            Minor and Major surgeries
          </p>
          <p className="text-white mt-4">
            The range of our sugeries are endless. Our minor sugeries includes
            bone fructures, growth detected at an early age, kid sugeries and
            much more. This is done by a team of professionals in the health
            sectors. Our major sugeries such a kidney transplant , neurosurgery,
            heart sergeries and other form of major surgeries has also been a
            success. For any operation to be undertaken, a thorough diagnosis is
            undertaken to carefully identify the problem before the surgery
            starts. If a surgery is to be performed to an individual, he or she
            will be notified 15 days earier unless it is an emergency.
          </p>
          <p className="text-white text-lg font-medium mt-3 cursor-pointer">
            Checkout our success stories{" "}
            <i class="fa-solid fa-eye text-white"></i>
          </p>
        </div>
        <div className="surgery-right ">
          <div className="surgery-img bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Surgery;
