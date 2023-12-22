import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import img from "../public/picture.jpeg"
import { FaFigma, FaLinkedin, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Component() {
  return (
    <div className="text-[#F7EDFE] bg-[#402060]">
      <div className="border-b">
      <header className="w-2/3 mx-auto px-4 lg:px-6 p-2 flex items-center grid md:grid-cols-2">
        <Image width={64} height={64} className="rounded-full w-14 h-14" src={img} alt={"profil picture"} />
        <nav className="ml-auto flex gap-2 sm:gap-4">
          <Link className="text-base font-medium hover:text-[#EAD5F9]" href="#">
           <span className="text-[#8E4EC6]"> 1. </span>
            About
          </Link>
          <Link className="text-base font-medium hover:text-[#EAD5F9]" href="#">
           <span className="text-[#8E4EC6]"> 2. </span>
            Skills
          </Link>
          <Link className="text-base font-medium hover:text-[#EAD5F9]" href="#">
           <span className="text-[#8E4EC6]">3. </span>
            Projects
          </Link>
        </nav>
      </header>
      </div>
      <main className="flex-1">
        <section 
          className="flex w-2/3 mx-auto py-4 sm:py-8 md:py-12 lg:py-20 xl:py-30"
          id="about"
        >
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xl sm:text-3xl xl:text-4xl/none">Hey I'm</p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Christophe Eyl</h2>
            <p className="text-xl sm:text-3xl xl:text-4xl/none">FullStack Typescript developer.</p>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#8347B9] px-4 py-2 text-sm font-medium text-white shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#8347B9] px-4 py-2 text-sm font-medium text-white shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                <FaGithub className="mr-2" />
                GitHub
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center md:justify-end">
            <Image width={144} height={144} className="rounded-full w-60 h-60" src={img} alt={"profil picture"} />
          </div>
        </section>
        <section className="w-2/3 mx-auto py-4 sm:py-8 md:py-12 lg:py-20 xl:py-30" id="skills">
          <div className="container space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-4 bg-[#F7EDFE] text-[#402060]">
                <CardHeader>
                  <h3 className="text-lg font-semibold">Design</h3>
                </CardHeader>
                <CardContent className="inline-flex items-center justify-center">
                  <FaFigma className="mr-2" />
                  <p className="">Figma</p>
                </CardContent>
              </Card>
              <Card className="p-4 bg-[#F7EDFE] text-[#402060]">
                <CardHeader>
                  <h3 className="text-lg font-semibold">Front-end</h3>
                </CardHeader>
                <CardContent className="inline-flex items-center justify-center">
                  <ul>
                    <li>
                      <FaReact className="mr-2" />
                      React
                    </li>
                    <li>
                      <FaReact className="mr-2" />
                      Next
                    </li>
                    <li>
                      Tailwind
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-4 bg-[#F7EDFE] text-[#402060]">
                <CardHeader>
                  <h3 className="text-lg font-semibold">Back-end</h3>
                </CardHeader>
                <CardContent className="inline-flex items-center justify-center">
                  <ul>
                    <li>Nest</li>
                    <li>Prisma</li>
                    <li>TypeORM</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-4 bg-[#F7EDFE] text-[#402060]">
                <CardHeader>
                  <h3 className="text-lg font-semibold">Other</h3>
                </CardHeader>
                <CardContent className="inline-flex items-center justify-center">
                  <ul>
                    <li>Typescript</li>
                    <li>GitHub</li>
                    <li>Vercel</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-2/3 mx-auto py-4 sm:py-8 md:py-12 lg:py-20 xl:py-30" id="projects">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Projects</h2>
            <Card className="mt-6">
              <CardHeader>
                <h3 className="text-2xl font-bold">Project title</h3>
              </CardHeader>
              <CardContent>
                <p className="md:text-xl">Project description.</p>
                <div className="flex space-x-4 mt-4">
                  <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Repository
                  </Link>
                  <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Live Demo
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-white">© Web3 Developer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
