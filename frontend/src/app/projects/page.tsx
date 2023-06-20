"use client";
import HelpButton from "@/components/HelpButton";
import SideBar from "@/components/SideBar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const page = () => {
  const [user, setUser] = useState<any>(null);
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem("user");
    const parsedValue = storedValue ? JSON.parse(storedValue) : null;
    setUser(parsedValue);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (user && user._id) {
          // Check if user exists and has _id property
          const response = await axios.get(
            `http://localhost:1234/api/auth/arrayItems/${user._id}`
          );
          // console.log(response);
          setProjects(response.data);
          console.log(response.data);
          // alert("Get Success");
        } else {
          alert("User not found");
        }
      } catch (err) {
        alert(err);
      }
    };
    if (user !== null) {
      fetchProjects();
    }
  }, [user]);

  return (
    <>
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
          {/* {projects.map(()=>{
            return(
              
            )
          })} */}
          <div className="flex w-full px-4">
            {projects &&
              projects.reverse().map((item: any, index: any) => (
                <div key={index} className="w-1/3 bg-gray-200">
                  <Link href={"/builder"} target="_blank">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 ml-4">
                      <img
                        className="w-full"
                        src="https://res.cloudinary.com/dm1mlee94/image/upload/v1687146052/WhatsApp_Image_2023-06-19_at_8.22.49_AM_pj1pxy.jpg"
                      />
                      <div className="px-6 py-4 border border-gray-300 border-t-0">
                        <div className="px-6 pt-4 pb-2">
                          <div className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <div
                              style={{
                                fontWeight: "bold",
                                color: "#000000",
                                fontSize: "20px",
                              }}
                              className="mb-3"
                            >
                              Project: {projects.length - index}{" "}
                            </div>
                            <div
                              style={{ fontWeight: "bold", color: "#1ac2ff" }}
                            >
                              HTML: {"  "}
                              <span className="text-gray-600">
                                {(item.html as string).slice(0, 20)}{"  "}...
                              </span>
                            </div>
                            <div
                              style={{ fontWeight: "bold", color: "#9f0df9" }}
                            >
                              CSS: {"  "}
                              <span className="text-gray-600">
                                {(item.css as string).slice(0, 20)}{"  "}...
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
