"use client";
import React from "react";

const HelpButton = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "mailto:help@example.com";
      }}
      className="bg-black border text-white px-8 py-2 rounded-full m-4 text-lg cursor-pointer"
    >
      Help
    </button>
  );
};

export default HelpButton;
