import { Button3 } from "./Buttons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LogoComp() {
  return (
    <article className="flex flex-col items-center w-full h-auto bg-concert-l-green text-black ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          delay: 0.5,
          duration: 1,
          times: [0, 0.2, 1],
          repeat: 0,
        }}
      >
        <div className="flex flex-col pt-16">
          <span className="font-acier text-6xl leading-[1.5rem]">Asgård</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          delay: 0.7,
          duration: 1.5,
          times: [0, 0.2, 1],
          repeat: 0,
        }}
      >
        <div className="flex flex-col">
          <span className="font-bold p-0">FESTIVAL</span>
        </div>
      </motion.div>

      <div className="flex space-x-2 pt-8 pb-8">
        <div className="text-sm">
          <Link to="/home">
            <Button3 label="HOME" buttonThreeBg="concert-yellow" />
          </Link>
        </div>
        <div className="text-sm">
          <Link to="/home">
            <Button3 label="CONTACT" buttonThreeBg="concert-redish" />
          </Link>
        </div>
      </div>
    </article>
  );
}
