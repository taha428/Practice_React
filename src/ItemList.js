import React from "react";

function ItemList() {
  const items = ["Phone", "Charger", "11D Protector", "Back Case"];

  return (
    <div>
      <h2>BOX Pack (Phone)</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
