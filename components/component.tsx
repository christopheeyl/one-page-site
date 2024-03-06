import Link from "next/link"
import Image from "next/image"
import ts from "../public/ts.svg"
import react from "../public/react.svg"
import nest from "../public/NestJS.svg"
import tailwind from "../public/tailwind.svg"
import { FaLinkedin, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"

export default function Component() {
  return (
    <div className="grid place-items-center h-screen w-4/5 sm:w-1/2 mx-auto text-[#202020]">
      <main className="flex-1 space-y-16 lg:space-y-18 xl:space-y-26">
        <section 
          className="flex"
          id="about"
        >
          <div className="flex flex-col w-full space-y-6 text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"><u>Fullstack Freelance Developer</u></h1>
            <div className="space-y-2">
              <p className="text-base sm:text-lg xl:text-xl/none">Hey I'm Christophe Eyl 😁</p>
              <p className="text-base sm:text-lg xl:text-xl/none">I'm a passionate fullstack developer</p>
              <p className="text-base sm:text-lg xl:text-xl/none">I'm living in Paris 📍</p>
            </div>
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
        <section id="projets">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"><u>Projects</u></h2>
            <div className="space-y-10">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="grid place-items-center">
                  <div className="space-y-2">
                    <h3 className="text-lg mb-3 font-semibold">CHC-DEPAGAZ landing page</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#202020] text-white" variant="default">NextJS</Badge>
                      <Badge className="bg-[#202020] text-white" variant="default">React</Badge>
                      <Badge className="bg-[#202020] text-white" variant="default">Tailwind</Badge>
                    </div>
                    <p className="text-base sm:text-lg xl:text-xl text-justify md:text-lg leading-normal md:leading-normal">
                      Une simple <strong>landing page</strong> réalisée pour un chauffagiste. Le prospect peut remplir un formulaire de demande de devis envoyé directement au chauffagiste sous format PDF.
                    </p>
                  </div>
                </div>
                <Link href="https://www.chc-energie.fr/" target="_blank" className="grid place-items-center border rounded-md h-[300px]">
                  <Image
                    src={react}
                    alt="chaudière à condensation"
                    className="rounded-lg scale-75 hover:scale-100 ease-in duration-200"
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Link href="https://www.chc-energie.fr/" target="_blank" className="grid place-items-center border rounded-md h-[300px] xl:order-first order-last">
                  <Image
                    src={react}
                    alt="chaudière à condensation"
                    className="rounded-lg scale-75 hover:scale-100 ease-in duration-200 "
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                </Link>
                <div className="grid place-items-center">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Les doux gîtes de Dordogne</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#202020] text-white" variant="default">NextJS</Badge>
                      <Badge className="bg-[#202020] text-white" variant="default">React</Badge>
                      <Badge className="bg-[#202020] text-white" variant="default">Tailwind</Badge>
                      <Badge className="bg-[#202020] text-white" variant="default">Stripe</Badge>
                      <Badge className="bg-[#202020] text-white" variant="default">Postgresql</Badge>
                    </div>
                    <p className="text-base sm:text-lg xl:text-xl text-justify md:text-lg leading-normal md:leading-normal">
                      Un site <strong>vitrine</strong> pour un particulier possédant des gîtes. Le visiteur peut consulter le calendrier de réservation et faire une demande de réservation payante avec la solution <strong>Stripe</strong>. Un <strong>back office</strong> est disponible pour gérer les réservations et paiements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"><u>Tech Stack</u></h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center place-items-center">
              <Image src={react} alt="React logo" className="w-20 h-20 md:w-60 md:h-60 " />
              <Image src={tailwind} alt="Tailwind logo" className="w-20 h-20 md:w-60 md:h-60 " />
              <Image src={nest} alt="Nest logo" className="w-20 h-20 md:w-60 md:h-60 " />
              <Image src={ts} alt="typescript logo" className="w-20 h-20 md:w-60 md:h-60 " />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
