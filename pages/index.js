import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";
import Portfolio from "@/components/Portfolio";
import Link from "next/link";
import "animate.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Bahram Al-Zuhairi Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 pb-10">
        <section>
          <nav className="py-10 mb-12 flex justify-between dark:text-white:">
            <Link href="/">
              <h1 className="font-burtons text-xl">developedbyBahram</h1>
            </Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <img src="v2.jpg" alt="" />
          </div>
          <div className="text-center p-10 py-10 animate__animated animate__backInLeft">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl ">
              Bahram Al-Zuhairi
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front-end Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Good evening, I’m a React developer who loves building new things.
              In addition to coding, I also make sure to stay updated with the
              newest tech news!
            </p>
            <div className="text-xl">
              <Link href="/about" className=" text-teal-400">
                About Me
              </Link>
            </div>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/BahramAlz?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/bahram-al-zuhairi-4b6001173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </section>

        <Experiences />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}
