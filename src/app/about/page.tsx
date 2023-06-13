import Image from "next/image";
import Link from "next/link";
import myimg from "../../../public/learn more.png";

const page = () => {
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
      <div className="flex flex-wrap text-center items-center">
        <div
          className="sm:w-1/2 h-full pb-14"
          style={{
            backgroundColor: "black",
            width: "700px",
            flex: "1.15",
          }}
        >
          <h2
            className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"
            style={{
              color: "white",
              fontSize: "50px",
              paddingTop: "40px",
              textAlign: "left",
              paddingLeft: "180px",
            }}
          >
            More
          </h2>
          <h2
            className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"
            style={{
              color: "white",
              fontSize: "50px",
              textAlign: "left",
              paddingLeft: "180px",
              paddingTop: "10px",
            }}
          >
            Information
          </h2>
          <p
            className="leading-relaxed text-base"
            style={{
              color: "white",
              textAlign: "left",
              paddingLeft: "180px",
              fontSize: "13px",
              paddingTop: "20px",
              paddingRight: "200px",
            }}
          >
            It's a Dynamic Portfolio site Generator, platform where even a
            non-technical person can generate his/her portfolio website. Users
            will be able to build their portfolio site free of cost within
            minutes.
          </p>
          <p
            className="leading-relaxed text-base"
            style={{
              color: "white",
              textAlign: "left",
              paddingLeft: "180px",
              fontSize: "13px",
              paddingTop: "20px",
              paddingRight: "200px",
            }}
          >
            User Interface and Experience will be so good that any person
            belonging to either technical or non-technical background can use it
            easily. Users will be provided with varieties of components from
            which they can select the design of the component.
          </p>
        </div>
        <div className="sm:w-1/2 mb-10 px-4" style={{ flex: "0.85" }}>
          <div>
            <Image src={myimg} alt="content image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
