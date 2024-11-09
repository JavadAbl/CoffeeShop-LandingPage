import { useState, useEffect } from "react";

export default function useColorize(interval = 1000) {
  const [colorClass, setColorClass] = useState("text-primary");

  useEffect(() => {
    const colors = [
      "#33FFF3", // Aqua

      "#FFD700", // Gold
      "#00FF00", // Lime
      "#00CED1", // Dark Turquoise
      "#FF69B4", // Hot Pink
      "#FF4500", // Orange Red
      "#1E90FF", // Dodger Blue
      "#ADFF2F", // Green Yellow
      "#FF6347", // Tomato
      "#40E0D0", // Turquoise
      "#FFFAF0", // Floral White (light off-white for contrast)
    ];

    const changeColor = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColorClass(randomColor);
    };

    const colorInterval = setInterval(changeColor, interval);

    return () => clearInterval(colorInterval);
  }, [interval]);

  return colorClass;
}
