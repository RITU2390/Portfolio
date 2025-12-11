"use client";

import Particles from "@/components/particles";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="relative">
      {/* Background Particles */}
      <Particles />

      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-8 px-4 py-16 md:flex-row md:py-24">
        {/* Left Content */}
        <div className="z-10 w-full md:w-2/3 ml-5 md:ml-10 lg:ml-20 text-left">
          {/* Main Heading */}
          <h1
            id="home-title"
            data-aos="fade-right"
            data-aos-duration="1000"
            className="font-sans font-semibold text-white leading-tight"
            style={{ fontSize: "4.5rem" }}
          >
            <span className="neon">H</span>
            <span className="neon">i</span>
            <span className="neon">,</span>
          </h1>

          <div className="lg:mt-10 md:mt-5 text-[4.5rem] font-sans font-semibold text-white leading-tight">
            <span className="neon">I</span>
            <span className="neon">'</span>
            <span className="neon">m</span>{" "}
            <span
              className="text-red-600 main-letter text-[6.5rem]"
              style={{ textShadow: "rgb(1, 226, 217) -8px 1px" }}
            >
              R
            </span>
            <span className="neon">i</span>
            <span className="neon">t</span>
            <span className="neon">u</span>{" "}
            <span className="neon">R</span>
            <span className="neon">a</span>
            <span className="neon">j</span>
          </div>

          {/* Animated Roles */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-6 text-cyan-400 font-bold heading-area"
            style={{ fontSize: "2rem" }}
          >
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Programmer",
                2000,
                "Cloud & DevOps Enthusiast",
                2000,
                "Aspiring Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Subheading */}
          <p
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="mt-4 text-white text-lg"
          >
            Front-End Developer
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://www.instagram.com/_ritu.22_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <FaInstagram size={28} className="text-pink-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/ritu-raj-58395b190/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <FaLinkedin size={28} className="text-blue-500" />
            </a>
            <a
              href="https://github.com/RITU2390"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 rounded-full shadow-lg hover:shadow-gray-500/50 transition-all"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:ritur4586@gmail.com"
              className="p-4 bg-gray-900 rounded-full shadow-lg hover:shadow-red-500/50 transition-all"
            >
              <SiGmail size={28} className="text-red-400" />
            </a>
          </div>
          {/* Download CV Button */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="mt-6"
          >
            <a
              href="/RITU-RAJ_resume_latest.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side Portrait */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="relative w-60 md:w-56 shrink-0 overflow-hidden rounded-full border border-white/10 shadow-lg"
        >
          <Image
            src="/photo_ritu_raj.png"
            alt="Portrait of Ritu Raj"
            width={860}
            height={820}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
