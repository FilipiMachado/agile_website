"use client";

import { useState } from "react";

const links = ["all", "Link 1", "Link 2", "Link 3", "Link 4"];

const Filters = () => {
  const [active, setActive] = useState("");

  const handleFilter = (link: string) => {
    setActive(link);
  };

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? "gradient_blue-purple hover:text-white-800" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize hover:text-white-400 transition`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
