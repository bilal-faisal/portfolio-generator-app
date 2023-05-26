import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#ffffff]">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center justify-between">
          <nav className="flex flex-wrap items-center">
            <a
              href="home.html"
              className="mr-[50px] text-black font-medium text-3xl no-underline"
              // onmouseover="this.style.color='gray';"
              // onmouseout="this.style.color='black';"
            >
              Home
            </a>

            <a
              href="SignUp.html"
              className="mr-[50px] text-black font-medium text-3xl no-underline"
              // onmouseover="this.style.color='gray';"
              // onmouseout="this.style.color='black';"
            >
              Sign Up
            </a>

            <a
              href="login.html"
              className="mr-[50px] text-black font-medium text-3xl no-underline"
              // onmouseover="this.style.color='gray';"
              // onmouseout="this.style.color='black';"
            >
              Login
            </a>

            <a
              href="secondpage.html"
              className="mr-[50px] text-black font-medium text-3xl no-underline"
              // onmouseover="this.style.color='gray';"
              // onmouseout="this.style.color='black';"
            >
              Learn More
            </a>
          </nav>
          {/* <a className="flex items-center" style="transition: all 0.3s ease-in-out;"> */}
          <a className="flex items-center">
            <Image src={"/logo.png"} alt="Logo" width={170} height={170} />
          </a>
        </div>
      </header>
      <div className="container px-5  mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div
            className="sm:w-1/2 mb-10 px-4 bg-black"
            style={{  flex: "2" }}
          >
            <h2
              className="title-font text-2xl font-medium mt-6 mb-3 text-white leading-snug"
              style={{
                fontSize: "74px",
                paddingTop: "40px",
                textAlign: "left",
                paddingLeft: "40px",
              }}
            >
              LESS TIME
            </h2>
            <h2
              className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 leading-snug"
              style={{
                color: "white",
                fontSize: "74px",
                textAlign: "left",
                paddingLeft: "40px",
                paddingTop: "20px",
              }}
            >
              LESS EFFORT
            </h2>
            <p
              className="leading-relaxed text-base"
              style={{
                color: "white",
                textAlign: "left",
                paddingLeft: "40px",
                fontSize: "30px",
                paddingTop: "20px",
              }}
            >
              Build your own portfolio website without code in few minutes.
            </p>
            <button
              className="flex mx-auto mt-6 mb-12 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              style={{
                backgroundColor: "black",
                color: "white",
                border: "2px solid white",
                padding: "10px 20px",
                fontSize: "16px",
              }}
            >
              Read Now
            </button>

          </div>
          <div className="sm:w-1/2 mb-10 px-4" style={{ flex: "1" }}>
            <div className="rounded-lg h-64 overflow-hidden">
              {/* <img alt="content"  src="fyp3.jpg" style="height : 260px; width:400px; ">  */}
              <Image
                src={"/fyp3.jpg"}
                alt="content img"
                width={400}
                height={400}
              />
            </div>
            <button
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                padding: "10px 20px",
                height: "150px",
                width: "390px",
                fontSize: "50px",
                paddingTop: "30px",
              }}
            >
              <i
                className="fas fa-arrow-right"
                style={{
                  fontSize: "60px",
                  paddingTop: "15px",
                  paddingRight: "15px",
                }}
              ></i>
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
