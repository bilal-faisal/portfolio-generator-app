"use client"
import HelpButton from "@/components/HelpButton";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

const page = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem("user");
    const parsedValue = storedValue ? JSON.parse(storedValue) : null;
    setUser(parsedValue);
  }, []);

  return (
    <div className="h-screen bg-gray-200">
      <SideBar />
      <div className="sm:ml-64">
        <div className="w-full bg-white py-5 flex items-center justify-end">
          <span style={{ fontWeight: "bold", fontSize: 20 }} className="px-2">
            {user ? user.username : "null"}
          </span>

          <div style={{ color: "#333" }} className="pr-5">
            <Image src={"/user.png"} alt="Logo" width={25} height={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
