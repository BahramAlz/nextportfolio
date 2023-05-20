import Link from 'next/link'
import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Footer from "@/components/Footer";

import 'animate.css';

const About = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<>
		<div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 dark:text-white md:px-20 lg:px-40 pb-10 h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <Link href="/"><h1 className="font-burtons text-xl">developedbyBahram</h1></Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
					<div className='font-medium pb-20 md:flex'>
						<div className=' max-w-screen-md mt-10 animate__animated animate__backInLeft'>
							<h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
								Bahram Al-Zuhairi
							</h2>
							<div className='w-86 mt-5 md:w-96'>
								<h2 className='text-2xl'>Career Goal</h2>
								<p className=' mt-5 w-'>
									I'm a front-end student with a passion for coding, client interactions and COOL ANIMATIONS.
								</p>
								<p className=' mt-5 w-'>
									My hobbies include coding, coding and more coding with a lil bit of gaming that has been running since childhood.
								</p>
								<p className=' mt-5 w-'>
									Since I'm a Gamer at heart and loves coding, I'm looking for a opportunity to enhance the tools I have to put these two passions together in order to create cool animations and intense interactions that could be fullfilling but also a unique user experience.
								</p>
							</div>
						</div>
					</div>
      </main>
    </div>
	</>
	)
}

export default About