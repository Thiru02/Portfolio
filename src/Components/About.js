import React from "react";
import about_img from '../Images/HD-wallpaper-programmer-code-coding-dark-program.jpg'
import ReactTypingEffect from 'react-typing-effect';


export default function About() {
  return (
    <section id="about" >
      <div className=" container mx-auto flex px-10 py-20 pt-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-500">
            Hello World!
            <br/> 
            I'm Thiru. <br className="" />
            <span className=" text-[25px] ">
            I love to <span ><ReactTypingEffect
          text={["build apps.","learn new things."]}
        />
        </span>
        <br/>
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
          A highly motivated, innovative, dedicated individual willing to work
        hard . As someone who is comfortable with and able to effectively cope
        with change. I enjoy creating things that live on the internet, which gives immediate satisfaction. I like developing interactive things with Code. Currently I am focused with React and Javascript.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={about_img}
          />
        </div>
      </div>
    </section>
  );
}