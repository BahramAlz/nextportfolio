import React from "react";

import { BsFillMoonStarsFill, BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

const Experiences = () => {
  return (
    <section className="mt-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-burtons text-2xl text-center  dark:text-white ">
          My Skills
        </h2>
      </div>
      <div className=" md:flex justify-center">
        <div className="shadow-lg p-10 rounded-xl my-10 md:mx-3 dark:bg-white md:w-96">
          <h3 className="text-lg font-medium pb-2 font-burtons text-center">
            Frontend Developement
          </h3>
          <div className="flex flex-wrap gap-16 mt-8">
            <div className="flex">
              <BsPatchCheckFill className="text-teal-600 mt-1" />
              <div className="ml-3">
                <h4>HTML</h4>
                <small className=" text-gray-600">Intermediate</small>
              </div>
            </div>

            <div className="flex">
              <BsPatchCheckFill className="text-teal-600 mt-1" />
              <div className="ml-3">
                <h4>CSS</h4>
                <small className="text-gray-600">Intermediate</small>
              </div>
            </div>

            <div className="flex">
              <BsPatchCheckFill className="text-teal-600 mt-1" />
              <div className="ml-3">
                <h4>JavaScript</h4>
                <small className="text-gray-600">Intermediate</small>
              </div>
            </div>

            <div className="flex">
              <BsPatchCheckFill className="text-teal-600 mt-1" />
              <div className="ml-3">
                <h4>React JS</h4>
                <small className="text-gray-600">Intermediate</small>
              </div>
            </div>

            <div className="flex">
              <BsPatchCheckFill className="text-teal-600 mt-1" />
              <div className="ml-3">
                <h4>Tailwind</h4>
                <small className="text-gray-600">Intermediate</small>
              </div>
            </div>

            <div className="flex">
              <BsPatchCheckFill className="text-teal-600 mt-1" />
              <div className="ml-3">
                <h4>Next JS</h4>
                <small className="text-gray-600">Intermediate</small>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-lg p-10 rounded-xl my-10 md:mx-3 dark:bg-white md:w-96">
          <h3 className="text-lg font-medium pb-2 font-burtons text-center">
            Backend Developement
          </h3>
          <div className="flex flex-wrap gap-16 mt-8">
            <div className="flex">
              <BsPatchCheckFill className="text-teal-600 mt-1" />
              <div className="ml-3">
                <h4>Node JS</h4>
                <small className=" text-gray-600">Intermediate</small>
              </div>
            </div>

            <div className="flex">
              <BsPatchCheckFill className="text-teal-600 mt-1" />
              <div className="ml-3">
                <h4>Python</h4>
                <small className="text-gray-600">Beginner</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
