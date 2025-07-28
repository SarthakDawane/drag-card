import React from "react";
import { FaPersonFallingBurst } from "react-icons/fa6";
import { MdOutlineChangeCircle, MdOutlineCloudDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({data, reference}) => {

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} transition={{ type: "spring", bounce: 0.25 }} className="h-72 w-60 bg-zinc-900 text-zinc-100 relative rounded-[30px] p-6 overflow-hidden">
      <FaPersonFallingBurst size={"1.5em"} />
      <p className="text-sm leading-tight mt-5 tracking-tight text-zinc-400">
        <span className="font-semibold tracking-wider text-zinc-300 cursor-pointer ">
          {data.name} :-
        </span>
         {data.desc}
      </p>
      <div className="footer absolute w-full bottom-0 left-0">
        <div className="flex items-center justify-between mb-3 py-3 px-8 text-[#fff]">
          <h5>{data.file}</h5>
          <span className="w-7 h-7 bg-[#111] hover:text-black hover:bg-white cursor-pointer rounded-full flex items-center justify-center">
          {data.close ? <MdOutlineChangeCircle size={"1.1em"} /> : <MdOutlineCloudDownload size={"1.1em"} /> }
          </span>
        </div>
        {data.tag.isOpen && (
        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
        </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
