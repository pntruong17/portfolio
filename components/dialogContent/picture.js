import React from "react";
import Image from "next/image";
import AnimatedTextCharacter from "../animatedTextCharacter";
import { addNewlines } from "@/utils/callback";
const Picture = () => {
  return (
    <>
      <Image
        width={600}
        height={500}
        src={"/images/mypxArt.png"}
        alt="profile picture"
      />
      <h2 className="text-6xl text-_color1 mx-3 my-auto">
        <AnimatedTextCharacter
          text={addNewlines(
            "I have created this image using the @giventofly app!"
          )}
        />
      </h2>
    </>
  );
};

export default Picture;
