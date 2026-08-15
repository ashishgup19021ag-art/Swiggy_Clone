import React from 'react';
import { useSelector } from 'react-redux';
import { Checkoutdata } from './Checkoutdata';

export const Checkout = () => {

  const items = useSelector(state => state.cartSlice.items);

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-sm">

        <h1 className="text-2xl font-bold mb-6">
          Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            Your cart is empty
          </div>
        ) : (
          items.map(value => (
            <Checkoutdata
              key={value.id}
              data={value}
            />
          ))
        )}

      </div>

    </div>
  );
};