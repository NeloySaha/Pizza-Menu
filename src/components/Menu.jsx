import React from "react";
import { Pizza } from "./Pizza";
import { pizzaData } from "../data";

export const Menu = () => {
  const pizzas = pizzaData.map((pizza, key) => {
    return <Pizza key={key} {...pizza} />;
  });

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {pizzas.length} creative dishes to choose
            from. All from our stone oven, all organic, all delicious
          </p>

          <ul className="pizzas">{pizzas}</ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later 😃</p>
      )}
    </main>
  );
};
