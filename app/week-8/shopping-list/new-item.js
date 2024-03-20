"use client";

import { useState } from "react";

export default function NewItem(props) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: randomId(),
      name,
      quantity,
      category,
    };
    console.log(item);

    props.onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <>
      <h2 className="text-xl font-bold">Add New Item</h2>
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            placeholder="Item name"
            required
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex justify-between">
          <input
            min="1"
            max="99"
            required
            className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <select
            className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Category
            </option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </>
  );
}

function randomId() {
  // This works by reading the hex encoding of the part after the decimal point of a random number
  return Math.random().toString(16).substring(2);
}
