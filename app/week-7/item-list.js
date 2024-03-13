"use client";

import { useState } from "react";

import Item from "./item";

export default function ItemList(props) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...props.items];

  if (sortBy === "name") {
    sortedItems.sort((x, y) => x.name.localeCompare(y.name));
  } else if (sortBy === "category") {
    sortedItems.sort((x, y) => x.category.localeCompare(y.category));
  }

  return (
    <>
      <div className="mt-8">
        <label htmlFor="sort">Sort by: </label>
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
            onSelect={() => {
              props.onItemSelect(item);
            }}
          />
        ))}
      </ul>
    </>
  );
}
