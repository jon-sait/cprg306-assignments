"use client";

import { useState } from "react";

import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((x, y) => x.name.localeCompare(y.name));
  } else if (sortBy === "category") {
    sortedItems.sort((x, y) => x.category.localeCompare(y.category));
  }

  return (
    <>
      <div>
        <label for="sort">Sort by: </label>
        <button
          className={`${sortBy === "name" ? "bg-orange-500" : "bg-orange-700"} p-1 m-2 w-28`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`${sortBy === "category" ? "bg-orange-500" : "bg-orange-700"} p-1 m-2 w-28`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </>
  );
}
