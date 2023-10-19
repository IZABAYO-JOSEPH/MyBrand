import HeroImg from "../project-assets/Hero.jpeg";
import { FaGithubSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

import React from "react";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className=" align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I'm Joseph
            <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
              Front-End Developer
            </p>
            <p className="mt-2 text-lg txt-slate-700 capitalize tracking-wide">
              Your Digital Transformation Assistant
            </p>
            <div className="flex gap-x-4 mt-4">
              <a href="">
                <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaLinkedin>
              </a>
              <a href="">
                <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaGithubSquare>
              </a>
              <a href="">
                <FaTwitter className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaTwitter>
              </a>
            </div>
          </h1>
        </article>
        <article className="hidden md:block">
          <img
            src={HeroImg}
            alt="izabayo joseph"
            className="h-80 lg:h-96 rounded-full"
          ></img>
        </article>
      </div>
    </div>
  );
};

export default Hero;
