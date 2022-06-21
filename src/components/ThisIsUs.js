import { Button3 } from "./Buttons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ThisIsUs() {
  return (
    <article className="flex flex-col items-center w-full h-auto bg-concert-yellow text-black ">
      <div>
        <h1 className="pt-8 font-acier text-5xl text-black whitespace-pre sm:text-5xl md:text-6xl">
          THIS IS US
        </h1>
      </div>

      <div className="2xl: p-4 px-16 align-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            delay: 1,
            duration: 1,
            times: [0, 0.2, 1],
          }}
        >
          <p className="text-center">
            We promote music, freedom and love no matter where it comes from.
            The Asgard Festival also helps develop the music scene in third
            world countries. Our goal is to bring the world's best performers to
            the festival visitors at the lowest possible price for the
            environment.
          </p>
        </motion.div>
      </div>
      <div className="flex space-x-2 pb-8 pt-2">
        <div className="text-sm">
          <Link to="/lineup">
            <Button3 label="ALL ARTISTS" buttonThreeBg="concert-l-green" />
          </Link>
        </div>
        <div className="text-sm">
          <Link to="/schedule">
            <Button3 label="DAILY SCHEDULE" buttonThreeBg="concert-pink" />
          </Link>
        </div>
      </div>
    </article>
  );
}
