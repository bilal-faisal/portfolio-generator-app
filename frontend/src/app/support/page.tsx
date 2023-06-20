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
          <span style={{ fontWeight: "bold", fontSize: 20 }} className="px-2">{user ? user.username : "loading.."}</span>

          <div style={{ color: "#333" }} className="pr-5">
            <Image src={"/user.png"} alt="Logo" width={25} height={25} />
          </div>
        </div>
        <div className="p-8  border-gray-200  dark:border-gray-700">
          <div className="flex   mb-4 rounded  ">
            <div>
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "bolder",
                  marginLeft: "30px",
                  marginTop: "50px",
                  display: "inline-block",
                }}
              >
                Support{" "}
                <i
                  className="fa-solid fa-envelope"
                  style={{
                    fontSize: "40px",
                    paddingTop: "15px",
                    paddingLeft: "15px",
                  }}
                ></i>
              </p>
              <p
                style={{
                  marginLeft: "30px",
                  marginTop: "20px",
                  fontSize: "25px",
                }}
              >
                Free Consultation with us to help your problem.
              </p>
            </div>
          </div>

          <div className="  mb-4 rounded  ">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginLeft: "30px",
                marginTop: "50px",
                display: "inline-block",
              }}
            >
              Hello, can I help you with something?
            </p>
            <HelpButton />
          </div>
        </div>
      </div>
      {/* <header style={{ position: "fixed", top: 0, right: 0, padding: "20px" }}>
        <div style={{ color: "#333" }}>
          <Image src={"/user.png"} alt="Logo" width={25} height={25} />
        </div>
      </header> */}
    </div>
  );
};

export default page;
