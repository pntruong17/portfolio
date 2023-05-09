import React from "react";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <>
      <div class="p-2 max-w-7xl mx-auto flex flex-col justify-center">
        <h2 className="text-6xl text-_color3 my-5">My Projects:</h2>
        <h3 className="text-5xl text-sky-400 text-center ml-5 underline">
          1. Brain Up - Web Application
        </h3>
        <Image
          width={680}
          height={200}
          src={`/images/brainup.png?${Math.random()}`}
          alt="profile picture"
          className="object-contain mx-auto my-5"
          priority
        />
        <p className="text-4xl text-_color1 ml-5">
          This is a project: an online game and trivia web application, written
          on the <span className="text-_color3">Next.js</span> platform. It
          utilizes <span className="text-_color3">Tailwind CSS</span> for
          styling and <span className="text-_color3">Framer Motion</span>{" "}
          library for animations. It is full responsive, and good for{" "}
          <span className="text-_color3">SEO.</span>
        </p>
        <Link
          href="https://brainup-three.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 mx-auto mt-5 mb-14 text-_color1 font-bold bg-_color2  py-3 px-5 focus:outline-none text-2xl"
        >
          Live Demo
        </Link>
        <h3 className="text-5xl text-sky-400 ml-5 text-center underline">
          2. FlexFashion - Online Shop
        </h3>
        <Image
          width={680}
          height={200}
          src={`/images/flexfashion.png?${Math.random()}`}
          alt="profile picture"
          className="object-contain mx-auto my-5"
          priority
        />
        <p className="text-5xl text-_color1 ml-5">
          This is a project: an online fashion shop, written on the{" "}
          <span className="text-_color3">Next.js</span>
          platform. It utilizes{" "}
          <span className="text-_color3">Tailwind CSS</span> for styling. It has{" "}
          <span className="text-_color3">good SEO</span>
          capabilities and allows online payment.It is{" "}
          <span className="text-_color3">full responsive</span>. Come and
          explore!
        </p>
        <Link
          href="flexfashion-98krf66xm-pntruong17.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 mx-auto mt-5 mb-14 text-_color1 font-bold bg-_color2  py-3 px-5 focus:outline-none text-2xl"
        >
          Live Demo
        </Link>
      </div>
    </>
  );
};

export default Projects;
