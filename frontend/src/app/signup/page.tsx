"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const router = useRouter();

  const handleChange = (e: any) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log(credentials);
    // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:1234/api" + "/auth/register",
        credentials
      );
      // console.log(res.data.details);
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      // navigate("/");
      
      alert("Success SignUp");
      router.push("/login");
    } catch (err) {
      console.log(err);
      // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div>
      <header style={{ position: "fixed", top: 0, right: 0, padding: "20px" }}>
        <div style={{ color: "#333" }}>
          <Image src={"/user.png"} alt="Logo" width={25} height={25} />
        </div>
      </header>
      <main style={{ display: "flex" }}>
        <div
          style={{
            width: "60%",
            paddingRight: 200,
            paddingLeft: 200,
            paddingTop: 50,
          }}
        >
          <form onSubmit={handleClick}>
            <h2
              style={{
                marginBottom: 20,
                fontSize: 50,
                paddingRight: 50,
                fontFamily: "Segoe UI",
                fontWeight: "bolder",
              }}
            >
              Create New Account
            </h2>
            <div
              style={{
                textAlign: "left",
                marginTop: 10,
                color: "gray",
                marginBottom: 15,
              }}
            >
              <p>
                Already Registered?{" "}
                <Link href={"/login"} className="font-semibold underline">
                  Login
                </Link>
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="font-sans">
                NAME
              </label>
              <input
                placeholder="Your Name"
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                style={{
                  marginBottom: 20,
                  padding: 10,
                  border: "none",
                  backgroundColor: "lightgray",
                  color: "#333",
                  fontSize: 16,
                  outline: "none",
                  paddingRight: 40,
                  paddingTop: 14,
                }}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-sans">
                EMAIL
              </label>
              <input
                placeholder="Your Email"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                style={{
                  marginBottom: 20,
                  padding: 10,
                  border: "none",
                  backgroundColor: "lightgray",
                  color: "#333",
                  fontSize: 16,
                  outline: "none",
                  paddingTop: 14,
                }}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="font-sans">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your Password"
                name="password"
                onChange={handleChange}
                style={{
                  marginBottom: 20,
                  padding: 10,
                  border: "none",
                  backgroundColor: "lightgray",
                  color: "#333",
                  fontSize: 16,
                  outline: "none",
                  paddingTop: 14,
                }}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                style={{
                  padding: "15px 40px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 20,
                  borderRadius: "12%",
                  fontFamily: "Segoe UI",
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div style={{ width: "40%", padding: 50 }}>
          <Link href={"/"}>
            <Image src={logo} alt="logo image" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default page;
