"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const body = await response.json();

  return body.meals ?? [];
}

export default function MealIdeas(props) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    setMeals([]);
    setMeals(await fetchMealIdeas(props.ingredient));
  };

  useEffect(() => {
    if (props.ingredient) {
      loadMealIdeas();
    }
  }, [props.ingredient]);

  return (
    <div>
      <h3 className="text-xl font-bold">Meal Ideas</h3>
      <div>
        {props.ingredient ? (
          meals.length > 0 ? (
            <>
              <p>{`Here are some meal ideas using ${props.ingredient}:`}</p>
              <ul>
                {meals.map((item) => (
                  <li
                    className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
                    key={item.idMeal}
                  >
                    {item.strMeal}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>{`No meal ideas found for ${props.ingredient}`}</p>
          )
        ) : (
          <p>Select an item to see meal ideas</p>
        )}
      </div>
    </div>
  );
}
