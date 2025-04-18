import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const RequestSwap = ({ owner }) => {
  const handleRequestSwap = () => {
    Swal.fire({
      title: "Success!",
      text: "Swap requested successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="flex items-center justify-between bg-white h-16 p-2 position-fixed">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop"
            alt={owner}
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
        <span className="text-sm text-gray-800 font-poppins">{owner}</span>
      </div>
      <button className="request-swap-button" onClick={handleRequestSwap}>
        Request Swap
      </button>
    </div>
  );
};

export default RequestSwap;
