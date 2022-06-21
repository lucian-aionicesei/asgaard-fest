import Merch from "../img/merch.png";
import { Button3 } from "./Buttons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Merchandise() {
  return (
    <article className="flex items-center justify-between w-full h-auto bg-concert-redish text-black 2xl:px-36">
      <div className=" w-2/4 p-4 sm:p-8 md:p-12">
        <img
          className="border-[2px] border-black object-scale-down w-96"
          src={Merch}
          alt=""
        />
      </div>
      <div className="w-2/4 p-2 md:p-14  ">
        <div>
          <h1 className="text-xl flex flex-col font-acier text-black whitespace-pre sm:text-4xl lg:text-5xl ">
            Merchandise
          </h1>
        </div>
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
          <p className="text-sm sm:text-base">
            Festival products can be purchased at the official webshop as well
            as at the festival.
          </p>
        </motion.div>

        <div className="text-sm pt-4">
          <Link to="/schedule">
            <Button3 label="GET MERCH" buttonThreeBg="concert-yellow" />
          </Link>
        </div>
      </div>
    </article>
  );
}
