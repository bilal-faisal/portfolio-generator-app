"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: "", email: "", password: "" };

    // Username validation
    if (!credentials.username) {
      newErrors.username = "Username is required";
      isValid = false;
    } else if (!credentials.username || /\d/.test(credentials.username)) {
      newErrors.username = "Username must be a string only ";
      isValid = false;
    }

    // Email validation
    if (!credentials.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    if (!credentials.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (credentials.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const res = await axios.post("http://localhost:1234/api" + "/auth/register", credentials);
        console.log(res);
        console.log(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
        router.push("/dashboard");
        // alert("sign up successful");
      } catch (err) {
        console.error(err);
      }
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
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="username" className="font-sans">
                NAME
              </label>
              <input
                placeholder="Your Name"
                type="text"
                id="username"
                name="username"
                value={credentials.username}
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
              {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
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
                value={credentials.email}
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
              {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
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
                value={credentials.password}
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
              {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
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

export default Page;
