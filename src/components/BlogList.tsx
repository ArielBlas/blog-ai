import React, { useState } from "react";
import { motion } from "motion/react";
import { blogCategories } from "../assets/assets";

const BlogList = () => {
  const [menu, setMenu] = useState<string>("All");
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} onClick={() => setMenu(item)} className="relative">
            <button
              className={`cursor-pointer text-gray-500 ${
                menu === item && "text-white px-4 pt-0.5"
              }`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-0 right-0 bottom-0 h-1 bg-primary rounded-full"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div>{/* Blog cards */}</div>
    </div>
  );
};

export default BlogList;
