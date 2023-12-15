"use client";
import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Main from "@/context/Main";
import { sidebarMenu } from "@/app/data";
import { X } from "lucide-react";

const SideBar = () => {
  const { mobileNav, toggleMobileNav } = useContext(Main);
  const path = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`lg:flex-[1] lg:min-w-[200px] lg:bg-white h-full lg:flex lg:flex-col lg:relative border-r-2 ${
        mobileNav
          ? "flex flex-col w-[200px] fixed top-0 left-0 z-20 bg-white shadow-md transition-all duration-150 ease-in-out"
          : "w-0 hidden"
      }`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full h-full pb-3"
      >
        <motion.div initial="hidden" animate="visible" className="flex-1">
          <div className="relative py-5">
            <motion.h3
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.08, ease: "easeInOut" }}
              className="text-xl text-center font-semibold text-primary opacity-90"
            >
              Widget Library
            </motion.h3>
            <span className="absolute top-1 right-2 text-gray-400 font-bold cursor-pointer">
              <X size={15} />
            </span>
          </div>
          <hr className="mb-5 border-2 border-gray-300" />
          <ul className="px-3 ">
            {sidebarMenu.map((item, i) => (
              <motion.li
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: i * 0.1, ease: "easeIn" }}
                className="list-none w-full"
                key={item.name}
              >
                <Link
                  href={item.path}
                  onClick={() => {
                    toggleMobileNav();
                  }}
                  className={`mb-5 p-3 rounded-lg border border-gray-200 hover:bg-primary-light transition-all duration-150 ease-in-out font-[500] hover:border-primary hover:border hover:scale-[1.05] cursor-pointer text-xs flex flex-col
                ${
                  path === item.path &&
                  "bg-primary text-white"
                }`}
                >
                  <div className="flex gap-2 -mb-2">
                    <span className="flex-[1]">{item.iconActive}</span>
                    <span className="flex-[9]">
                      <p>{item.name}</p>
                    </span>
                  </div>
                  <p className="self-end underline">Add</p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
