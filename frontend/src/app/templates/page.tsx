"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideBar from "@/components/SideBar";

const Page = () => {
  const [user, setUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  let data = [
    {
      id: 1,
      title: "Software Engineer",
      image: "template1.png",
      link: "",
    },
    {
      id: 2,
      title: "Web Designer",
      image: "template2.png",
      link: "",
    },
    {
      id: 3,
      title: "Web Developer",
      image: "template3.png",
      link: "",
    },
    {
      id: 4,
      title: "Photographer",
      image: "template4.png",
      link: "",
    },
    {
      id: 5,
      title: "Teacher",
      image: "template5.png",
      link: "",
    },
    {
      id: 6,
      title: "Doctor",
      image: "template6.png",
      link: "",
    },
  ];

  useEffect(() => {
    const storedValue = localStorage.getItem("user");
    const parsedValue = storedValue ? JSON.parse(storedValue) : null;
    setUser(parsedValue);
  }, []);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-200 min-h-screen">
      <SideBar />
      <div className="w-full bg-white py-5 flex items-center justify-end">
        <span style={{ fontWeight: "bold", fontSize: 20 }} className="px-2">
          {user ? user.username : "null"}
        </span>

        <div style={{ color: "#333" }} className="pr-5">
          <Image src={"/user.png"} alt="Logo" width={25} height={25} />
        </div>
      </div>

      <div className="p-4 bg-gray-200 sm:ml-64">
        <div className="border  dark:border-gray-700">
          <div className="my-10 flex flex-col items-center justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 mb-5 w-1/3"
              placeholder="Search..."
            />
            <div className="w-4/5">
              <div className="grid grid-cols-3 gap-10 mt-4">
                {filteredData.length == 0 ? (
                  <p className="text-lg">No item matches your result</p>
                ) : (
                  filteredData.map((item) => (
                    <Link
                      key={item.id}
                      href={`http://localhost/WEBTEMPLATE${item.id}/index.html`}
                      target="_blank"
                    >
                      <Image
                        src={`/${item.image}`}
                        alt="Logo"
                        width={200}
                        height={200}
                        className="w-full rounded-t-md"
                      />
                      <div className="border border-gray-300 p-2 rounded-b-md bg-gray-100">
                        {item.title}
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
