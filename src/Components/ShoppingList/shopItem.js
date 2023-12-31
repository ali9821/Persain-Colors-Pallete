import { useState } from "react";

export default function ShopItem({ name, unit, value, id }) {
  const [itemValue, setItemValue] = useState(value);
  return (
    <li>
      {name}
      <div>
        <button
          onClick={() => {
            if (itemValue > 1) {
              setItemValue((prev) => prev - 1);
            }
          }}
        >
          -
        </button>
        {itemValue}
        <button
          onClick={() => {
            setItemValue((prev) => prev + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <p>Unit :</p>
        <p>{unit}</p>
      </div>
      <button>Delete</button>
    </li>
  );
}
