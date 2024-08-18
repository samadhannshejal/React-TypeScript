import { useEffect, useState } from "react";

interface Circle {
  x: number;
  y: number;
  color: string;
}

const GenerateCircle = () => {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newCircle = { x: e.clientX, y: e.clientY, color: "red" };

      // Check for overlaps with existing circles
      //   const isOverlapping = circles.some((circle) => {
      //     const distance = Math.sqrt(
      //       Math.pow(circle.x - newCircle.x, 2) + Math.pow(circle.y - newCircle.y, 2)
      //     );
      //     return distance < 100; // Assuming 100px is the diameter
      //   });

      //   if (isOverlapping) {
      //     newCircle.color = "blue";
      //   }
      const overlap = circles.some((circle) => {
        const dx = circle.x - newCircle.x;
        const dy = circle.y - newCircle.y;
        const squaredDistance = dx * dx + dy * dy;
        return squaredDistance < 10000;
      });
      console.log(overlap);
      if (overlap) {
        newCircle.color = "blue";
      }
      setCircles([...circles, newCircle]);
    };

    window.document.addEventListener("click", handleClick);
    return () => {
      window.document.removeEventListener("click", handleClick);
    };
  }, [circles]);

  return (
    <div>
      Generate circle on click of web page. If two circles overlap, then change
      the color of the circle.
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            backgroundColor: circle.color,
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            position: "absolute",
            top: circle.y,
            left: circle.x,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      ))}
    </div>
  );
};

export default GenerateCircle;
