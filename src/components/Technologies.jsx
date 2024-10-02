import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoPython } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaFigma } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://react.dev/" target="_blank">
            <RiReactjsLine className="text-7xl text-cyan-500" />
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <DiJavascript1 className="text-7xl text-yellow-300" />
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.python.org/doc/" target="_blank">
            <IoLogoPython className="text-7xl text-cyan-800" />
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://v2.tailwindcss.com/docs" target="_blank">
            <BiLogoTailwindCss className="text-7xl text-cyan-500" />
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://help.figma.com/hc/en-us/categories/360002051613"
            target="_blank"
          >
            <FaFigma className="text-7xl text-gray-500" />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="py-20 text-center"
      >
        <p className="my-6 maxw-xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
          Languages, Libraries, Frameworks, and Project Organization Platforms:
        </p>
        <p>- React, Javascript, HTML, CSS</p>
        <p>
          - Tailwind
        </p>
        <p>
          - Python
        </p>
        <p>- Figma, Github</p>
      </motion.div>
    </div>
  );
};
