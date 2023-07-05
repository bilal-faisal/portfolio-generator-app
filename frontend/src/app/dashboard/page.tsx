"use client";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [user, setUser] = useState<any>(null);
  // const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem("user");
    const parsedValue = storedValue ? JSON.parse(storedValue) : null;
    setUser(parsedValue);
  }, []);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       await fetch("http://localhost:1234/api" + `/auth/arrayItems/${user._id}`).then((response) => {
  //         if (response.status == 200) {
  //           console.log(response);
  //           console.log(response.data);
  //           setProjects(response.data);
  //           alert("Success");
  //         } else {
  //           alert("Fail");
  //         }
  //       });
  //     } catch (err) {
  //       alert(err);
  //       // setError(err);
  //     }
  //     fetchProjects();
  //   }
  // }, []);

  return (
    <div className="bg-light-gray">
      <SideBar />
      <div className="flex space-x-2 absolute top-10 right-10">
        <span style={{ fontWeight: "bold", fontSize: 20 }}>
          {user ? user.username : "loading"}
        </span>

        <div style={{ color: "#333" }}>
          <Image src={"/user.png"} alt="Logo" width={25} height={25} />
        </div>
      </div>

      <div className="p-4 sm:ml-64 mt-14">
        <div className="p-4 border bg-gray-200 dark:border-gray-700">
          
        <Link href={"/templates"} >
          <div
            className="flex h-52 mb-4 bg-gray-50 shadow-md rounded-xl"
            style={{ height: "210px" }}
          >
            <div>
              <img
                src="template.png"
                alt="Template Image"
                style={{
                  position: "relative",
                  height: "210px",
                  width: "310px",
                }}
              />
            </div>
            <div>
              <a className="text-4xl font-bold ml-6 mt-20 inline-block">
                Customize
              </a>
              <p className="ml-6">Create Template using built-in components.</p>
            </div>
          </div>
          </Link>
          <Link href={"/builder"} target="_blank">
            <div
              className="flex h-52 mb-4 bg-gray-50 mt-6 shadow-md rounded-xl"
              style={{ height: "210px" }}
            >
              <div>
                <img
                  src="own.png"
                  alt="Template Image"
                  style={{ height: "210px", width: "310px" }}
                />
              </div>
              <div>
                <p className="text-4xl font-bold ml-6 mt-20 inline-block">
                  Create your own site
                </p>
                <p className="ml-6">
                  Create Template by using drag and drop feature.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
