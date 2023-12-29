import Link from "next/link"
import Image from "next/image"
import ts from "../public/ts.svg"
import react from "../public/react.svg"
import nest from "../public/NestJS.svg"
import tailwind from "../public/tailwind.svg"
import { FaLinkedin, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Component() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="w-full sm:w-1/2 mx-auto text-[#202020] bg-[#FCFCFC]">
        <main className="flex-1 space-y-4 sm:space-y-8 md:space-y-12 lg:space-y-20 xl:space-y-30">
          <section 
            className="flex"
            id="about"
          >
            <div className="flex flex-col w-full space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">Front-End React Developer</h2>
              <p className="text-base sm:text-lg xl:text-xl/none">Hey I'm Christophe Eyl 😁</p>
              <p className="text-base sm:text-lg xl:text-xl/none">I'm a passionate front-end developer</p>
              <p className="text-base sm:text-lg xl:text-xl/none">I'm living in Paris 📍</p>
              <div className="space-x-4">
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-[#202020] px-2 py-2 text-white"
                  href="https://www.linkedin.com/in/christophe-eyl-26651016a"
                  target="_blank"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-[#202020] px-2 py-2 text-white"
                  href="https://github.com/christopheeyl"
                  target="_blank"
                >
                  <FaGithub className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="card-zoom">
              <div className="card-zoom-image bg-linkedinPicture" />
            </div>
          </section>
          <section id="skills">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Tech Stack</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center place-items-center">
                <Image src={react} alt="React logo" className="h-60 w-60" />
                <Image src={tailwind} alt="Tailwind logo" className="h-60 w-60" />
                <Image src={nest} alt="Nest logo" className="h-60 w-60" />
                <Image src={ts} alt="typescript logo" className="h-60 w-60" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
