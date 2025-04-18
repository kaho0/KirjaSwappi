import React from "react";
import { AiOutlineBook } from "react-icons/ai";

const OpenForOffers = () => {
  return (
    <div className="exchange-condition-container">
      <div className="bg-[#dee7f5] p-4 rounded-xl">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <AiOutlineBook className="w-5 h-6 text-gray-800" />
          </div>
          <div>
            <h4 className="text-base font-medium leading-tight text-gray-800">
              Open to Offer
            </h4>
            <p className="text-sm text-gray-600">Flexible exchange</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenForOffers;
