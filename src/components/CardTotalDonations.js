import React from "react";

export const CardTotalDonations = ({ props }) => {
  const { donations, total } = props;
  return (
    <div className="p-4 mb-3 text-white border-2 sm:grid sm:gap-2 rounded-xl border-gradient sm:grid-cols-2 sm:py-10">
      <div className="border-b-2 md:pl-10 sm:border-b-0 sm:border-r-2 border-opacity-30">
        <h2 className="text-xl font-bold">TOTAL DONATIONS</h2>
        <h2 className="text-4xl font-bold">{donations}</h2>
      </div>
      <div className="text-xl font-bold md:pl-10">
        <h2>TOTAL DONATIONS</h2>
        <h2 className="text-4xl">${total}</h2>
      </div>
    </div>
  );
};
