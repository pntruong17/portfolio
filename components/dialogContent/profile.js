import React from "react";
import Image from "next/image";
import AnimatedTextCharacter from "../animatedTextCharacter";
import { addNewlines } from "@/utils/callback";

const Profile = () => {
  return (
    <>
      <div class="p-2 max-w-7xl mx-auto">
        <div className="flex justify-between w-full pb-5 border-b-8 border-_color2">
          <div className="pr-3">
            <h2 className="text-5xl text-_color3">My name: Trường Phan</h2>
            <h3 className="text-5xl">
              Nickname: <span className="text-_color2">Flexrow</span> , maybe I
              have used Tailwindcss so much
            </h3>
            <h3 className="text-5xl text-sky-400">Country: Vietnam</h3>
          </div>
          <Image
            width={200}
            height={120}
            src={"/images/mypxArt.png"}
            alt="profile picture"
            className="object-contain"
          />
        </div>
        <h2 className="text-6xl text-_color3 my-5">My skills:</h2>
        <h3 className="text-5xl text-sky-400 ml-5 underline">
          1. Web development:
        </h3>
        <Image
          width={500}
          height={200}
          src={`/images/webdev.png?${Math.random()}`}
          alt="profile picture"
          className="object-contain"
        />
        <p className="text-5xl text-_color1 ml-5 mb-12">
          "Skills are sufficient to work on a full stack project. Performs best
          with front-end projects."
        </p>
        <h3 className="text-5xl text-sky-400 ml-5 underline">
          2. Video editing:
        </h3>
        <Image
          width={500}
          height={200}
          src={`/images/edit-video.png?${Math.random()}`}
          alt="profile picture"
          className="object-contain"
        />
        <p className="text-5xl text-_color1 ml-5 mb-12">
          "I am proficient in using video editing software and can create some
          video effects. Additionally, I can create simple 3D models for the
          web."
        </p>
        <h3 className="text-5xl text-sky-400 ml-5 underline">
          3. Online platform:
        </h3>
        <Image
          width={500}
          height={200}
          src={`/images/online-flatform.png?${Math.random()}`}
          alt="profile picture"
          className="object-contain"
        />
        <p className="text-5xl text-_color1 ml-5 mb-12">
          "I am able to use graphic design and UX/UI design applications."
        </p>
        <p className="text-4xl pb-5">
          <span className="text-sky-400 text-6xl">About me:</span>
          <AnimatedTextCharacter
            text={addNewlines(
              "I used to work as an employee in a food factory and wrote code as a hobby during my free time because of my passion and interest. However,            in 2023, the economy faced many difficulties and the company went bankrupt. So now my main job is to work as a freelancer like I am currently doing."
            )}
          />
        </p>
      </div>
    </>
  );
};

export default Profile;
