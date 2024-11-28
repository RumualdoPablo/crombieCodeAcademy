"use client";

import { useState } from "react";
import orders from "../orderTracking/ordersDB";

export default function OrderTracking() {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [orderState, setOrderState] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();

    const order = orders.find(
      (order) => order.id.toString() === trackingNumber
    );

    if (order) {
      setOrderState(`Order #${order.id} is ${order.state}`);
    } else {
      setOrderState("Order not found.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
        <h1 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Order Tracking
        </h1>
        <form className="flex flex-col" onSubmit={handleTrack}>
          <input
            type="text"
            placeholder="# Enter Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Track
          </button>
        </form>
        {orderState && (
          <div className="mt-4 text-center text-gray-700">
            <p>{orderState}</p>
          </div>
        )}
      </div>
    </div>
  );
}
