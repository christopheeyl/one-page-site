import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import ts from "../public/ts.svg"
import react from "../public/react.svg"
import nest from "../public/NestJS.svg"
import tailwind from "../public/tailwind.svg"
import { FaLinkedin, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Component() {
  return (
    <div className="text-[#202020] bg-[#FCFCFC]">
      <div className="w-full lg:w-1/2 mx-auto px-8">
        <main className="flex-1">
          <section 
            className="flex py-4 sm:py-8 md:py-12 lg:py-20 xl:py-30"
            id="about"
          >
            <div className="flex flex-col w-full space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">Front-End React Developer</h2>
              <p className="text-base sm:text-lg xl:text-xl/none">Hey I'm Christophe Eyl 😁</p>
              <p className="text-base sm:text-lg xl:text-xl/none">I'm a passionate front-end developer based in Paris.</p>
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
          <section className="py-4 sm:py-8 md:py-12 lg:py-20 xl:py-30" id="skills">
            <div className="container space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Tech Stack</h2>
              <div className="grid lg:grid-cols-4 gap-12 items-center justify-center">
                <Image src={react} alt="React logo" className="h-60 w-60" />
                <Image src={tailwind} alt="Tailwind logo" className="h-60 w-60" />
                <Image src={nest} alt="Nest logo" className="h-60 w-60" />
                <Image src={ts} alt="typescript logo" className="h-60 w-60" />
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-sm">© Christophe Eyl. All rights reserved.</p>
      </footer>
    </div>
  )
}
