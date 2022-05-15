import React from "react";
import ItemCard from "./item-card";

export default function ListCard() {
  return (
    <div className="row">
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}
