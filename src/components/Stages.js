import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Stages({ bgColor, stagesBG, stageName }) {
  return (
    <div className="w-full items-center">
      <Link to={"/lineup"}>
        <img
          className="row-span-3 w-full "
          src={`${stagesBG}`} /*"../../images/party1.svg"*/
          alt=""
        ></img>
        <div
          className={`bg-${bgColor} flex flex-col w-full h-auto pb-2 text-center justify-center items-center`}
        >
          <h2 className="flex leading-none h-fit align-text-bottom text-black font-acier text-[3rem] pt-2">
            {`${stageName}`}
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              delay: 1,
              duration: 1,
              times: [0, 0.2, 1],
              repeat: 0,
            }}
          >
            <h4 className=" text-xs text-gray-800 leading-none font-montserrat font-bold">
              STAGE
            </h4>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}
