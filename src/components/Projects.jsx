import FormulaE from "../assets/projeto1.png";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        Projects
      </motion.h2>

      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a
              href="https://github.com/Brunootavioliveira/Sprint3Front?tab=readme-ov-file"
              target="_blank"
            >
              <img
                width={200}
                height={200}
                className="mb-6 rounded"
                src={FormulaE}
                alt="projeto1.png"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">Fórmula E</h6>
            <p className="mb-4 text-neutral-400">
            O site Formula E transmite corridas ao vivo, proporcionando uma experiência 
            imersiva com comentários e estatísticas. Projeto feito com Html5, CSS, JS, React E Python
              <br />
              <a
                href="https://github.com/Brunootavioliveira/Sprint3Front?tab=readme-ov-file"
                className="border-b"
                target="_blank"
              >
               Link Github 
              </a>
              ,{" "}
              {" "}
              <a
                href=""
                className="border-b"
                target="_blank"
              >
                LinkedIn video post
              </a>
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              HTML5
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              CSS3
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              JavaScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Python
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              React.js
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
