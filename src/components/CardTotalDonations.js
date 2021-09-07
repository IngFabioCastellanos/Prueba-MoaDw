import React from "react";

export const CardTotalDonations = ({ props }) => {
  const { donations, total } = props;
  return (
    <div className="p-4 mb-3 text-white border-2 sm:grid sm:gap-2 rounded-xl border-gradient sm:grid-cols-2 sm:py-6">
      <div className="border-b-2 sm:border-b-0 sm:border-r-2">
        <h2>TOTAL DONATIONS</h2>
        {donations}
      </div>
      <div className="font-bold ">
        <h2>TOTAL DONATIONS</h2>
        <h2 className="text-3xl">${total}</h2>
      </div>
    </div>
  );
};
