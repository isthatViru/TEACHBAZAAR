import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const [isPaid, setIsPaid] = useState(true);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  return (
    <div className="p-8 max-w-4xl mx-auto mt-20">

      {/* Heading */}
      <h1 className="text-xl font-extrabold text-gray-900 mb-1">
        Pricing
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Set your course price and availability.
      </p>

      {/* Free / Paid Toggle */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">

        <label className="text-sm font-medium text-gray-700 mb-4 block">
          Course Type
        </label>

        <div className="flex gap-4">
          <button
            onClick={() => setIsPaid(true)}
            className={`px-4 py-2 rounded-lg border ${
              isPaid
                ? "bg-blue-600 text-white"
                : "border-gray-300 text-gray-600"
            }`}
          >
            Paid
          </button>

          <button
            onClick={() => setIsPaid(false)}
            className={`px-4 py-2 rounded-lg border ${
              !isPaid
                ? "bg-blue-600 text-white"
                : "border-gray-300 text-gray-600"
            }`}
          >
            Free
          </button>
        </div>
      </div>

      {/* Price */}
      {isPaid && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">

          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Course Price (₹)
          </label>

          <input
            type="number"
            placeholder="e.g. 999"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm"
          />

          <p className="text-xs text-gray-400 mt-2">
            Recommended: ₹499 - ₹1999
          </p>
        </div>
      )}

      {/* Discount */}
      {isPaid && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">

          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Discount (Optional %)
          </label>

          <input
            type="number"
            placeholder="e.g. 20"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-10">

        <button
          onClick={() => navigate("/courseupload/media")}
          className="text-gray-600 text-sm"
        >
          ← Back
        </button>

        <button
          onClick={() => navigate("/courseupload/publish")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold"
        >
          Continue →
        </button>
      </div>

    </div>
  );
};

export default Pricing;