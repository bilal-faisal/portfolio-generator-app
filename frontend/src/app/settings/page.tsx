import SideBar from "@/components/SideBar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <SideBar />

      <div
        className="flex space-x-2"
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <span style={{ fontWeight: "bold", fontSize: 20 }}>Pro Profile</span>

        <div style={{ color: "#333" }}>
          <Image src={"/user.png"} alt="Logo" width={25} height={25} />
        </div>
      </div>

      <div className="p-4 sm:ml-64 mt-14">
        <div className="p-4  border-gray-200  dark:border-gray-700">
          <div className="flex mb-4 rounded  ">
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
                Settings
                <i
                  className="fa-solid fa-gear"
                  style={{
                    fontSize: "40px",
                    paddingTop: "15px",
                    paddingRight: "15px",
                  }}
                ></i>
              </p>
            </div>
          </div>

          <div className="mb-4 rounded  ">
            <form style={{ marginLeft: "250px", marginRight: "300px" }}>
              <div style={{ marginTop: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="name"
                    style={{
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      marginBottom: "10px",
                    }}
                  >
                    N A M E
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Pro Profile"
                    style={{
                      marginBottom: "20px",
                      padding: "10px",
                      border: "none",
                      color: "#333",
                      fontSize: "16px",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="password"
                    style={{
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      marginBottom: "10px",
                    }}
                  >
                    E M A I L
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="ProProfile@gmail.com"
                    style={{
                      marginBottom: "20px",
                      padding: "10px",
                      border: "none",
                      color: "#333",
                      fontSize: "16px",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="password"
                    style={{
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      marginBottom: "10px",
                    }}
                  >
                    P A S S W O R D
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="********"
                    style={{
                      marginBottom: "20px",
                      padding: "10px",
                      border: "none",
                      color: "#333",
                      fontSize: "16px",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="submit"
                    style={{
                      padding: "15px 40px",
                      backgroundColor: "#333",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "20px",
                      borderRadius: "12%",
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    }}
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
