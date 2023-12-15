"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import Main from "@/context/Main";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";

const Nav = () => {
  const { mobileNav, toggleMobileNav } = useContext(Main);

  return (
    <div className="h-[80px] py-5 md:py-0 flex-1 px-3  flex items-center justify-between border w-full">
      <div className="flex justify-between items-center gap-2">
        <Image src="/icon.svg" alt="logo" width={160} height={80} />
      </div>

      <div className=" flex justify-end gap-5 items-center">
        <div className="flex gap-5 justify-center items-center">
          <Image src="/bell.svg" alt="logo" width={25} height={30} />
          <div className="flex gap-3 justify-center items-center">
            <CircleUserRound size={31} className="text-gray-400" />
            <p className="font-bold">
              David
              <br />
              <span className="text-gray-500 font-normal text-sm">CEO</span>
            </p>
          </div>
        </div>

        {/* mobile toggle */}
        <div className="relative z-10 content lg:hidden">
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            className="flex flex-col justify-center items-center rounded-lg bg-white p-2 py-3 gap-1 border"
            onClick={() => toggleMobileNav()}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px bg-gray-400 block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-px bg-gray-400 block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px bg-gray-400 block"
            ></motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
