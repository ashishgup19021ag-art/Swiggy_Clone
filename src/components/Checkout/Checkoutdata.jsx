import React from 'react';

export const Checkoutdata = ({ data }) => {

  const price = (data?.defaultPrice ?? data?.price ?? 0) / 100;

  return (
    <div className="flex justify-center">
      <div className="w-[70%] flex items-center justify-between border-b border-gray-200 py-5">

        {/* Food information */}
        <div className="w-[60%] mr-4">

          <h2 className="text-lg font-bold text-gray-800">
            {data?.name}
          </h2>

          <p className="text-gray-600 mt-1">
            ₹{price}
          </p>

          <p className="text-[#02060C99] mt-2 text-sm md:text-base line-clamp-3">
            {data?.description}
          </p>

        </div>

        {/* Image + quantity */}
        <div className="relative w-37.5">

          <img
            className="37.5 h-25 object-cover rounded-xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`}
            alt={data?.name}
          />

          {/* Quantity */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2
                          bg-white border border-gray-300 rounded-xl
                          h-9 w-24 flex items-center justify-center">

            <span className="text-green-600 font-bold">
              {data?.quantity}
            </span>

          </div>

        </div>

      </div>
    </div>
  );
};