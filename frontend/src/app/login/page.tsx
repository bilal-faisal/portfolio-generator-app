"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
// import { useRouter } from 'next/router';

const page = () => {
  const router = useRouter();
  const [error, setError] = useState<any>(null);
  // const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e: any) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    // console.log(credentials);
    // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:1234/api" + "/auth/login", credentials);
      console.log(res);
      console.log(res.data.details);

      localStorage.setItem('user', JSON.stringify(res.data.details));

      // router.push("/dashboard");

      // navigate("/");

      // alert("Success Login");
      router.push("/dashboard");
      //   alert(res.data.details);
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
    } catch (err) {
      setError("Email or password is incorrect.");
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
      <main className="flex">
        <div style={{ width: "50%", padding: "50px 200px 0 200px" }}>
          <form onSubmit={handleClick}>
            <h2
              style={{
                fontSize: "50px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontWeight: "bolder",
              }}
            >
              LOGIN
            </h2>
            <div
              style={{
                textAlign: "left",
                marginTop: "10px",
                color: "gray",
                marginBottom: "15px",
              }}
            >
              <p style={{ color: "gray", fontSize: "20px" }}>
                Sign in To Continue
              </p>
            </div>
            <div style={{ marginTop: "60px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily:
                      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    marginBottom: "10px",
                  }}
                >
                  E M A I L
                </label>
                <input
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  style={{
                    marginBottom: "20px",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "lightgray",
                    color: "#333",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  required
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
                  placeholder="Your Password"
                  name="password"
                  onChange={handleChange}
                  style={{
                    marginBottom: "20px",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "lightgray",
                    color: "#333",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-3 my-2">
                <button
                  className="self-center"
                  type="submit"
                  style={{
                    padding: "15px 40px",
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  LOGIN
                </button>
                {error && <div style={{ color: "red" }} className="error-p">{error}</div>}
                <p>
                  Don't have an account.{" "}
                  <Link href={"/signup"} className="font-semibold underline">
                    Register now
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div style={{ width: "50%", padding: "50px" }}>
          <Link href={"/"}>
            <Image src={logo} alt="logo image" />
          </Link>
        </div>
      </main >
    </div >
  );
};

export default page;
