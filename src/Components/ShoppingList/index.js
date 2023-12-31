import { useState } from "react";
import "./index.css";
import ShopItem from "./shopItem";

export default function ShoppingList() {
  const [userInput, setUserInput] = useState("");
  const [unit, setUnit] = useState("KG");
  const [shopList, setShopList] = useState([]);
  const [counter, setCounter] = useState(1);

  const addItem = () => {
    const newShopItem = {
      name: userInput,
      id: Math.random(),
      unit: unit,
      value: counter,
    };
    setShopList([...shopList, newShopItem]);
  };
  return (
    <div className="SHL_container">
      <ul className="SHL_container_taskbar">
        {shopList.map((item, index) => {
          return (
            <ShopItem
              id={item.id}
              name={item.name}
              unit={item.unit}
              value={item.value}
            />
          );
        })}
      </ul>
      <div className="SHL_container_inputbar">
        <input
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <div>
          <button
            onClick={() => {
              if (counter > 1) {
                setCounter((prev) => prev - 1);
              }
            }}
          >
            -
          </button>
          {counter}
          <button
            onClick={() => {
              setCounter((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <select
          value={unit}
          onChange={(e) => {
            setUnit(e.target.value);
          }}
        >
          <option value={"KG"}>KG </option>
          <option value={"NUM"}>NUM </option>
          <option value={"LIT"}>LIT </option>
          <option value={"G"}>G </option>
        </select>
        <button className="SHL_container_inputbar_button" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
}
