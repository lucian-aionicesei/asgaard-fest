import { Button3 } from "./Buttons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GetHere() {
  return (
    <article className="flex flex-col items-center w-full h-auto bg-concert-yellow text-black 2xl:px-36 ">
      <div className="w-2/4 p-8 md:p-14  ">
<<<<<<< HEAD
        <div>
          <h1
            className="text-left font-acier text-3xl text-black whitespace-pre
          phone: text-4xl sm:text-5xl md:text-6xl"
          >
            {" "}
            GET HERE,
            <br />
            STAY HERE
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
            We offer five locations, depending on your social and life
            preferences, as well as two types of tents.
          </p>
        </motion.div>

=======
        <h1 className="flex flex-col font-acier text-black whitespace-pre phone: text-4xl sm:text-5xl md:text-6xl">
          GET HERE <br />
          STAY HERE
        </h1>
        <p className="text-sm sm:text-base">
          We offer five locations, depending on your social and life
          preferences, as well as two types of tents.
        </p>
>>>>>>> 4d9b17e4fcadf2cea765382512c1d02565687255
        <div className="text-sm pt-4">
          <Link to="/shop">
            <Button3 label="SEE ALL CAMPS" buttonThreeBg="concert-redish" />
          </Link>
        </div>
      </div>
      <div className="pb-8">
        <iframe
          className="h-48 w-96 justify-center align-center"
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45674.73607126121!2d26.14885492966148!3d44.316713550441165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae02d11f22afc7%3A0x41eea82dda28913a!2sBerceni%20077020%2C%20Rumunjska!5e0!3m2!1shr!2sdk!4v1655822455113!5m2!1shr!2sdk"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </article>
  );
}
