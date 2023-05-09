import React from "react";
import AnimatedTextCharacter from "../animatedTextCharacter";
import { addNewlines } from "@/utils/callback";

const Welcome = () => {
  return (
    <h2 className="text-5xl text-_color1 mx-3 my-auto">
      <span className="text-6xl text-_color3">
        Thank you for visiting my portfolio!{" "}
      </span>
      <AnimatedTextCharacter
        text={addNewlines(
          "I am excited to share my work and experience with you. Whether you're a potential client, employer, or simply interested in my projects, I appreciate your interest." +
            "If you have any questions or inquiries, please don't hesitate to reach out. I am always looking for new opportunities to collaborate and would be happy to discuss any projects you have in mind." +
            "Thank you again for stopping by, and I hope to hear from you soon!"
        )}
      />
    </h2>
  );
};

export default Welcome;
