import ColorSection from "./ColorSection/ColorSection";
import "./index.css";

const colors = [
  {
    sectionTitle: "Persian Blue Color Scheme",
    colors: [
      {
        HEX: "#1C39BB",
      },
      {
        HEX: "#57C5C6",
      },
      {
        HEX: "#0067A5",
      },
      {
        HEX: "#AE6A0B",
      },
      {
        HEX: "#91A3B0",
      },
      {
        HEX: "#BCD4E6",
      },
      {
        HEX: "#4C516D",
      },
    ],
  },
  {
    sectionTitle: "Persian Indigo Combination",
    colors: [
      {
        HEX: "#32127A",
      },
      {
        HEX: "#322C69",
      },
      {
        HEX: "#870074",
      },
      {
        HEX: "#1C1C41",
      },
      {
        HEX: "#211934",
      },
    ],
  },
  {
    sectionTitle: "Persian Rose Color Combination",
    colors: [
      {
        HEX: "#FE28A2",
      },
      {
        HEX: "#C270A0",
      },
      {
        HEX: "#70C298",
      },
      {
        HEX: "#EB83DB",
      },
    ],
  },
  {
    sectionTitle: "Persian Pink Color Palette",
    colors: [
      {
        HEX: "#F77FBE",
      },
      {
        HEX: "#D47616",
      },
      {
        HEX: "#D7BEC4",
      },
      {
        HEX: "#7E243E",
      },
      {
        HEX: "#D597AE",
      },
      {
        HEX: "#C17E91",
      },
    ],
  },
  {
    sectionTitle: "Persian Plum Color Combination",
    colors: [
      {
        HEX: "#701C1C",
      },
      {
        HEX: "#AB3924",
      },
      {
        HEX: "#C37237",
      },
      {
        HEX: "#790914",
      },
      {
        HEX: "#882D17",
      },
    ],
  },
  {
    sectionTitle: "Persian Red Color Palette",
    colors: [
      {
        HEX: "#C81D11",
      },
      {
        HEX: "#FFB19A",
      },
      {
        HEX: "#6E0509",
      },
      {
        HEX: "#DCA562",
      },
      {
        HEX: "#B3446C",
      },
      {
        HEX: "#CE4676",
      },
      {
        HEX: "#A8516E",
      },
      {
        HEX: "#CC3333",
      },
    ],
  },
  {
    sectionTitle: "Persian Orange Color Combination",
    colors: [
      {
        HEX: "#D99058",
      },
      {
        HEX: "#8C4107",
      },
      {
        HEX: "#C68F3F",
      },
      {
        HEX: "#C2B07E",
      },
      {
        HEX: "#CB6D51",
      },
      {
        HEX: "#B4745E",
      },
      {
        HEX: "#E25822",
      },
      {
        HEX: "#F38400",
      },
    ],
  },
  {
    sectionTitle: "Persian Green Color Palette",
    colors: [
      {
        HEX: "#00A693",
      },
      {
        HEX: "#5EE7D8",
      },
      {
        HEX: "#C5D5D0",
      },
      {
        HEX: "#42504C",
      },
      {
        HEX: "#5E716A",
      },
      {
        HEX: "#3A4B47",
      },
      {
        HEX: "#317873",
      },
    ],
  },
];

export default function PersianColors() {
  return (
    <section className="PC_container">
      <div className="PC_blur_layer">
        {colors.map((item, index) => (
          <ColorSection data={item} key={item.sectionTitle} />
        ))}
      </div>
    </section>
  );
}
