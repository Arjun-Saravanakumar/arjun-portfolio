"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2, duration: 0.4, ease: "easeIn"}
            }}
        >
            <motion.div 
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
                }}
                className="w-[300px] h-[300px] xl:w-[300px] xl:h-[300px] mix-blend-lighten absolute">
                    <Image 
                        src = "/assets/photo.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
            </motion.div>

            <motion.svg 
                className="w-[302px] xl:w-[308px] h-[302px] xl:h-[308px]"
                fill = "transparent"
                viewBox="0 0 308 308"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle 
                    cx = "152"
                    cy = "152"
                    r = "150"
                    stroke = "#ff0000"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                
            </motion.svg>


        </motion.div>
    </div>
  );
}

export default Photo