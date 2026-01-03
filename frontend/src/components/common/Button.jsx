import React from "react";

const variantClasses = {
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500",
};

export const Button = ({
  label = "Button",
  onClick,
  type,
  variant = "blue",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${variantClasses[variant]}
        text-white font-medium border rounded p-2 mx-2
      `}
    >
      {label}
    </button>
  );
};
