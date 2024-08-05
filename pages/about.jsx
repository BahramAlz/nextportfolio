import Link from "next/link";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

import "animate.css";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white px-10 dark:bg-gray-900 dark:text-white md:px-20 lg:px-40 md:h-screen">
          <nav className="py-8 flex justify-between dark:text-white">
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
          <div className="font-medium pb-8 md:flex">
            <div className=" max-w-screen-md mt-10 animate__animated animate__backInLeft">
              <h2 className="text-3xl text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                About Me
              </h2>
              <div className="w-86 mt-5 md:w-96">
                <p className=" mt-5 w-">
                  I'm a passionate React Developer who loves coding, client
                  interactions, and creating minimalistic yet elegeant websites.
                </p>
                <p className=" mt-5 w-">
                  I chose coding because I've always been a logical problem
                  solver, and my lifelong love for gaming sparked my curiosity
                  about the boundless potential of the internet. This drove me
                  to dive into the development scene and leave my mark.
                </p>
                <p className=" mt-5 w-">
                  Front-end development became my starting point, providing an
                  opportunity to deepen my coding skills while reaching a wide
                  audience through daily website usage. It's like a canvas where
                  I can learn, code, and craft meaningful experiences for users.
                </p>
                <p className=" mt-5 w-">
                  What excites me even more is that front-end development also
                  allows me to enhance my communication and leadership
                  abilities. I value these skills greatly and aspire to further
                  develop them. It's not just about coding; it's about
                  collaborating, effectively expressing ideas, and taking on
                  leadership roles to drive successful projects. Joining the
                  front-end world enables me to merge my passions, grow as a
                  coder, and become a skilled leader capable of creating
                  remarkable user experiences.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
