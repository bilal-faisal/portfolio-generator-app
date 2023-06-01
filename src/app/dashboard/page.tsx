import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-black">
          <ul className="space-y-2 font-medium text-white">
            <li style={{ marginBottom: 100, paddingLeft: 20, marginTop: 30 }}>
              <a href="#" className="flex items-center rounded-lg">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 transition duration-75 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span
                  className="ml-3"
                  style={{ fontSize: 25, fontWeight: "bolder" }}
                >
                  Dashboard
                </span>
              </a>
            </li>
            <li style={{ marginBottom: 30, marginLeft: 20, marginTop: 30 }}>
              <a href="#" className="flex items-center rounded-lg">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Choose Template
                </span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li style={{ marginBottom: 30, marginLeft: 20, marginTop: 20 }}>
              <a href="#" className="flex items-center rounded-lg">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  My Projects
                </span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  3
                </span>
              </a>
            </li>
            <li style={{ marginBottom: 30, marginLeft: 20, marginTop: 20 }}>
              <a href="#" className="flex items-center rounded-lg">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  3
                </span>
              </a>
            </li>
            <li style={{ marginBottom: 30, marginLeft: 20, marginTop: 20 }}>
              <a href="#" className="flex items-center rounded-lg">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="flex space-x-2" style={{ position: "absolute", top: 10, right: 10 }}>
        <span style={{ fontWeight: "bold", fontSize: 20 }}>Pro Profile</span>
        
        <div style={{ color: "#333" }}>
          <Image src={"/user.png"} alt="Logo" width={25} height={25} />
        </div>
      </div>

      <div className="p-4 sm:ml-64 mt-14">
        {/* ...content here... */}
        <div className="p-4 border border-gray-200 dark:border-gray-700">
          <div
            className="flex h-52 mb-4 rounded bg-gray-50 shadow-md"
            style={{ borderRadius: "5%", height: "210px" }}
          >
            <div>
              <img
                src="template.png"
                alt="Template Image"
                style={{
                  position: "relative",
                  height: "210px",
                  width: "310px",
                  borderRadius: "8%",
                }}
              />
            </div>
            <div>
              <a className="text-4xl font-bold ml-6 mt-20 inline-block">
                Customize a Designed Template
              </a>
              <p className="ml-6">Create Template using built-in components.</p>
            </div>
          </div>
          <div
            className="flex h-52 mb-4 rounded bg-gray-50 mt-6 shadow-md"
            style={{ borderRadius: "5%", height: "210px" }}
          >
            <div>
              <img
                src="own.png"
                alt="Template Image"
                style={{ height: "210px", width: "310px", borderRadius: "8%" }}
              />
            </div>
            <div>
              <a className="text-4xl font-bold ml-6 mt-20 inline-block">
                Create your own site
              </a>
              <p className="ml-6">
                Create Template by selecting your favourite components
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
