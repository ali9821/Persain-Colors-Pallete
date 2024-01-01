import { useEffect, useRef, useState } from "react";

export default function ColorSection({ data }) {
  return (
    <div className="CS_container">
      <h1>{data.sectionTitle}</h1>
      <div className="CS_colors_box">
        {data.colors.map((item, index) => (
          <ColorBox item={item} />
        ))}
      </div>
    </div>
  );
}

const ColorBox = ({ item }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current) {
      const isInside = ref.current.contains(e.target);
      if (isInside) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleClick);
    };
  }, []);

  return (
    <div
      ref={ref}
      key={item.HEX}
      style={{ backgroundColor: item.HEX }}
      className="CS_color_item"
    >
      {show ? (
        <>
          <button
            onClick={() => {
              console.log(item.HEX);
              navigator.clipboard.writeText(item.HEX);
              alert("HEX copied to your clipboard");
            }}
          >
            Copy HEX
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(hexToRgb(item.HEX));
              alert("RGB copied to your clipboard");
            }}
          >
            Copy RGB
          </button>
        </>
      ) : (
        <p>{item.HEX}</p>
      )}
    </div>
  );
};

function hexToRgb(hex) {
  // Ensure the hex code is formatted properly
  hex = hex.trim().startsWith("#") ? hex.slice(1) : hex;

  // Check if the hex code is in the short form (e.g., "#FFF")
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Convert the hex code to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r},${g},${b}`;
}
