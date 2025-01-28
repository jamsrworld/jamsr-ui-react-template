import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Avatar, Button } from "@jamsr-ui/react";

function App() {
  const colors: AvatarProps["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex gap-4">
      {colors.map((color) => (
        <AvatarUsage key={color} color={color} isBordered />
      ))}
    </div>
  );
}

export default App;
