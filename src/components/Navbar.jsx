import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className=" mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 w-10">
          <span className="text-pink-500"></span>
        </h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          target="_blank"
          className="pointer transform transition-transform duration-200 hover:-translate-y-1 active:scale-90"
          href="https://www.linkedin.com/in/bruno-otavio-oliveira-498b80282/"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          className="pointer transform transition-transform duration-200 hover:-translate-y-1 active:scale-90"
          href="https://github.com/Brunootavioliveira"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};
