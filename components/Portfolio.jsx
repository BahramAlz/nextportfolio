import React from "react";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFigma,
  TbBrandThreejs,
} from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiGreensock, SiWebgl, SiAframe } from "react-icons/si";
import Link from "next/link";


const Portfolio = () => {
  return (
    <div>
      <section className="mt-16">
        <h2 className="font-burtons text-2xl text-center  dark:text-white ">
          Portfolio
        </h2>
        <div>
          <p className="text-md py-2 leading-8 max-w-xl mx-auto md:text-xl text-gray-800 dark:text-gray-200 text-center">
            Since the beginning of my journey as a Hyper Island student, I've
            collaborated with talented people to create challenging projects for
            the sake of experimenting and learning.
          </p>
        </div>
        <div className="lg:flex gap-10 flex-col justify-center items-center">
          <div className="md:flex flex-row">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 md:mx-3 dark:bg-white md:w-96 lg:w-96">
              <h3 className="text-lg font-medium pt-8 pb-2 font-burtons">
                Freelayer
              </h3>
              <p className="py-2">
                As a group we designed and created a website that showcases our
                client's needs.
              </p>
              <h4 className="py-4 text-teal-600">Tools Used</h4>
              <div className="flex justify-center">
                <TbBrandNextjs className="text-4xl" />
                <FaReact className="text-4xl text-blue-500" />
                <TbBrandTailwind className="text-4xl text-cyan-400" />
                <TbBrandFigma className="text-4xl text-red-500" />
              </div>

              <div className="flex justify-center gap-2">
                <button className=" bg-slate-600 text-white px-4 py-2 rounded-md mt-5 border">
                  <a
                    href="https://github.com/Kristallers/horses"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </button>
                <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 rounded-md mt-5">
                  <a
                    href="https://horses-steel.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
              <Link href="/projects" className=" text-teal-400">
                Learn More
              </Link>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 md:mx-3 dark:bg-white md:w-96 lg:w-96">
              <h3 className="text-lg font-medium pt-8 pb-2 font-burtons">
                POP IT
              </h3>
              <p className="py-2">
                Me and my team created a Ninja Fruit replica with our own spin
                off.
              </p>
              <h4 className="py-4 text-teal-600">Tools Used</h4>
              <div className="flex justify-center">
                <DiJavascript className=" text-4xl text-yellow-500" />
                <BsFiletypeHtml className="text-4xl text-red-500" />
                <DiCss3 className="text-4xl text-blue-500" />
              </div>

              <div className="flex justify-center gap-2">
                <button className=" bg-slate-600 text-white px-4 py-2 rounded-md mt-5 border">
                  <a
                    href="https://github.com/BahramAlz/POP-IT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </button>
                <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 rounded-md mt-5">
                  <a
                    href="https://pop-it-game-team6.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
              <Link href="/projects" className=" text-teal-400">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:flex flex-row">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 md:mx-3 dark:bg-white md:w-96 lg:w-96">
              <h3 className="text-lg font-medium pt-8 pb-2 font-burtons ">
                Yung Titties Experience
              </h3>
              <p className="py-2">
                With my team, I designed and programmed a game-based way to
                experience a newly released song.
              </p>
              <h4 className="py-4 text-teal-600">Tools Used</h4>
              <div className="flex justify-center">
                <TbBrandNextjs className="text-4xl" />
                <FaReact className="text-4xl text-blue-500" />
                <TbBrandFigma className="text-4xl text-red-500" />
                <SiGreensock className="text-4xl text-green-900" />
                <TbBrandThreejs className="text-4xl text-grey-900" />
                <SiWebgl className="text-4xl text-red-500" />
                <SiAframe className="text-4xl text-rose-500" />
              </div>

              <div className="flex justify-center gap-2">
                <button className=" bg-slate-600 text-white px-4 py-2 rounded-md mt-5 border">
                  <a
                    href="https://github.com/BahramAlz/tittieteam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </button>
                <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 rounded-md mt-5">
                  <a
                    href="https://titty-landing.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
              <Link href="/projects" className=" text-teal-400">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
