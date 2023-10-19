import React from "react";
import aboutSvg from "../project-assets/about.svg";
import SectionTitle from "./sectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64"></img>
        <article>
          <SectionTitle text="Code, Cloud, Data and Guitar" />
          <p className="text-slate-600 mt-8 leading-loose">
            I really enjoy coding, especially in data engineering and cloud
            computing. It's exciting to work with data and create scalable
            solutions. I also like playing the guitar, which is a great way to
            unwind and express myself outside of the tech world. These two
            passions keep me balanced and happy.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
