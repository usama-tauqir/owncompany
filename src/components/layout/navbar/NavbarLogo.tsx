"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import LogoIcon from "./logo/LogoIcon";
import LogoText from "./logo/LogoText";
import Link from "next/dist/client/link";


export default function NavbarLogo() {

  const [hover, setHover] = useState(false);


  return (

    <Link
      href="/"
      className="flex items-center overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >


      {/* Icon */}

      <motion.div
        animate={{
          scale: hover ? 0.95 : 1
        }}
        transition={{
          duration:0.3
        }}
      >

        <LogoIcon />

      </motion.div>



      {/* Text Logo */}

      <motion.div

        initial={{
          x:-40,
          opacity:0
        }}

        animate={{
          x:hover ? 0 : -40,
          opacity:hover ? 1 : 0
        }}

        transition={{
          duration:0.45,
          ease:"easeOut"
        }}

        className="ml-3"

      >

        <LogoText />

      </motion.div>


    </Link>

  );
}