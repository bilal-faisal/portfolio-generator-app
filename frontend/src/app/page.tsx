import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import myimg from "../../public/fyp3.jpg";

const Home = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#ffffff]">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center justify-between">
          <nav className="flex flex-wrap items-center">
            <Link
              href={"/"}
              className="mr-[50px] text-black font-medium text-3xl no-underline"
            >
              Home
            </Link>
            <Link
              href={"/signup"}
              className="mr-[50px] text-black font-medium text-3xl no-underline"
            >
              Sign Up
            </Link>
            <Link
              href={"/login"}
              className="mr-[50px] text-black font-medium text-3xl no-underline"
            >
              Login
            </Link>
            <Link
              href={"/about"}
              className="mr-[50px] text-black font-medium text-3xl no-underline"
            >
              Learn More
            </Link>
          </nav>
          <a className="flex items-center">
            <Image src={"/logo.png"} alt="Logo" width={170} height={170} />
          </a>
        </div>
      </header>
      <div>
        <div className="flex flex-wrap -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4 bg-black" style={{ flex: "2" }}>
            <h2
              className="title-font text-5xl font-medium mt-6 pt-5 mb-3 text-white leading-snug"
              style={{
                textAlign: "left",
                paddingLeft: "40px",
              }}
            >
              LESS TIME
            </h2>
            <h2
              className="title-font text-5xl font-medium mt-6 mb-3 leading-snug"
              style={{
                color: "white",
                textAlign: "left",
                paddingLeft: "40px",
              }}
            >
              LESS EFFORT
            </h2>
            <p
              className="leading-relaxed text-base pt-5"
              style={{
                color: "white",
                textAlign: "left",
                paddingLeft: "40px",
                fontSize: "30px",
              }}
            >
              Build your own portfolio website without code in few minutes.
            </p>
            <Link href={"/about"}>
              <button
                className="flex mx-auto mt-6 mb-12 text-white bg-black border-0 py-2 px-5 focus:outline-none rounded"
                style={{
                  border: "2px solid white",
                  padding: "10px 20px",
                  fontSize: "16px",
                }}
              >
                Read Now
              </button>
            </Link>
          </div>
          <div className="sm:w-1/2 px-5" style={{ flex: "1" }}>
            <div>
              <Image src={myimg} alt="content img" />
            </div>
            <Link href={"/signup"}>
            <button className="flex items-center gap-x-8 h-36 text-5xl w-full mt-5 text-white bg-black border-0 py-2 px-10 rounded">
              <BsArrowRight />
              Start Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
