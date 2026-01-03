import React from "react";
import { Button } from "./Button";

export const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className="border p-2 text-lg font-semibold mb-4 bg-white rounded"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
