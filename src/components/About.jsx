import Animation from "../assets/Animation.gif";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        Ambições Futuras
      </motion.h2>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              width={400}
              height={400}
              className="rounded-2xl"
              src={Animation}
              alt="About_Me_Img"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 maxw-xl py-6">
            Estou sempre em busca de novos desafios e oportunidades de aprendizado. Nos próximos anos, pretendo aprofundar meus conhecimentos em áreas como:<br></br>

- Inteligência Artificial e Machine Learning: Acredito que essas tecnologias têm o potencial de revolucionar o desenvolvimento de software e estou ansioso para explorar suas aplicações práticas.<br></br>
- Desenvolvimento Mobile: Tenho interesse em criar aplicativos que proporcionem experiências únicas aos usuários, utilizando frameworks como React Native.<br></br>
- Metodologias Ágeis: Quero me tornar um profissional mais completo, entendendo e aplicando práticas ágeis que melhorem a eficiência das equipes de desenvolvimento.<br></br>
Estou entusiasmado com o que o futuro me reserva e sempre aberto a colaborações que me permitam aprender e contribuir para projetos inovadores. Se você está interessado em trocar ideias ou discutir oportunidades, sinta-se à vontade para entrar em contato!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
