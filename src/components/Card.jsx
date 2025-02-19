import React from "react";

const Card = ({ car }) => {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      <div className="flex items-center gap-4">
        <div className="relative w-32 md:w-40 aspect-[4/3]">
          <img
            src={car.carImageUrls.length ? car.carImageUrls[0] : "thumbnail.com"}
            alt={car.name}
            className="absolute inset-0 w-full h-full object-contain rounded-md shadow-sm"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-bold text-lg text-black">{car.carModel}</p>
          <p className="text-gray-500 text-sm">{car.carManufacturer}</p>
        </div>
      </div>
      <p className="font-bold text-lg text-black">US${car.price}</p>
    </div>
  );
};

export default Card;