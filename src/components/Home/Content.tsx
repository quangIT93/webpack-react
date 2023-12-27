import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const array = [
    {
      title: "Home",
    },
    {
      title: "Landing-page",
    },
    {
      title: "Message",
    },
  ];
  return (
    <>
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <a
            href=""
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            TMQ
          </a>
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            CLick me
          </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          {array.map((value, index) => (
            <Link to="" key={index}>{value.title}</Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Content;
