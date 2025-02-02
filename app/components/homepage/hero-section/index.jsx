// @flow strict

import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { personalData } from "@/utils/data/personal-data";
import Marquee from "react-fast-marquee";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import { Analytics } from "@vercel/analytics/react"

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      /><Analytics />
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <p className="text-3xl font-bold leading-10 text-white md:font-bold lg:text-[2.6rem] lg:leading-[3.5rem]">
            I&apos;m <span className="text-pink-500">{personalData.name}</span>,
            {` a professional `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>
          </p>
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-center justify-center gap-6 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] p-6">
          <div className="flex flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center justify-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center justify-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        {/* First row - moving left */}
        <Marquee speed={40} gradient={false} direction="left">
          {skillsData
            .slice(0, Math.ceil(skillsData.length / 2))
            .map((skill, id) => (
              <div key={id} className="mx-4">
                <div className="w-28 p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-duration-300">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={10}
                      height={10}
                      className="h-4 w-auto"
                    />
                    <p className="text-white text-sm">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
        </Marquee>

        {/* Second row - moving right */}
        <Marquee speed={40} gradient={false} direction="right">
          {skillsData
            .slice(Math.ceil(skillsData.length / 2))
            .map((skill, id) => (
              <div key={id} className="mx-4">
                <div className="w-28 p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-duration-300">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={10}
                      height={10}
                      className="h-4 w-auto"
                    />
                    <p className="text-white text-sm">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
        </Marquee>
      </div>
    </section>
  );
}

export default HeroSection;
