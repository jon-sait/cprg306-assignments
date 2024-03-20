"use client";

import { useState } from "react";

import { useUserAuth } from "../_utils/auth-context";

import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    let name = item.name;
    name = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      "",
    );
    name = name.trim();

    const indexComma = name.indexOf(",");
    if (indexComma >= 0) {
      name = name.substr(0, indexComma);
    }

    console.log(name);

    setSelectedItemName(name);
  };

  return user ? (
    <main className="bg-slate-950 p-2 m-2">
      <div className="w-2/3 grid grid-cols-2 gap-8">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      </div>

      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  ) : (
    <p>Your need to be signed in to view this page.</p>
  );
}
