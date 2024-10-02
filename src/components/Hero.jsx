import ProfileImg from "../assets/fotoPerfil.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap mb-40">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-center pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Bruno Otavio
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-300 via-slate-500 to-green-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Olá, meu nome é Bruno Otavio Oliveira, e sou apaixonado por tecnologia e desenvolvimento
               de software. Ao longo da minha jornada, adquiri experiência em diversas linguagens de 
               programação, incluindo JavaScript e C#, além de ter me aprofundado em frameworks modernos como React e Node.js.<br></br>
              Meu interesse por programação começou tarde, porém quando percebi o potencial de 
              transformar ideias em realidade através da codificação. Desde então, 
              busquei sempre aprender e me adaptar às novas tendências do mercado. 
              Acredito que a tecnologia tem o poder de impactar positivamente a vida das 
              pessoas, e é isso que me motiva a continuar crescendo na área.
            </motion.p>
            <a
              href="/CurriculoBrunoOtavio.pdf"
              download="CurriculoBrunoOtavio.pdf"
              className="bg-gradient-to-r from-blue-300 via-slate-500 to-green-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              width={300}
              height={300}
              className="rounded-2xl"
              src={ProfileImg}
              alt="Profile_Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
