import React, { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleAddEmail = async () => {
    const newData = { name: "", age: "" };
    const result = await updateEmail(email, newData);
  };

  function handleSubmit(event) {
    event.preventDefault();

    // Kiểm tra tính hợp lệ của email
    if (!email || !isValidEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    // Lưu email vào Firestore hoặc gửi email đến server
    //handleAddEmail();

    // Reset giá trị của input
    setEmail("");
    setIsEmailValid(true);
  }

  function handleChange(event) {
    setEmail(event.target.value);
    setIsEmailValid(true);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <div className="p-2">
      <div className="flex flex-col">
        <h2 className="text-3xl text-_bg_dark">
          You can contact me via email at:{" "}
          <span className="text-_color3">pntruong17@gmail.com</span>
        </h2>
        <p className="text-center text-xl mt-5 ">
          Or Subscribe your email here
        </p>
        <div className="w-3/4 mx-auto mt-2">
          <form onSubmit={handleSubmit} className="flex w-full">
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="flex-grow text-xl bg-gray-100 bg-opacity-50 rounded-md border-2 border-_color1 focus:border-_color1/[0.5] focus:bg-transparent outline-none text-gray-700 py-3 px-5 mt-3 leading-8 transition-colors duration-200 ease-in-out"
            />

            <button
              type="submit"
              className="w-32 text-_color1 font-bold bg-_color2 rounded-md border-2 border-_color1 py-3 px-5 focus:outline-none sm:ml-5 text-lg mt-3"
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="text-center text-xl mt-8 ">- Social media link -</p>
        <div className="w-3/4 mx-auto flex justify-evenly">
          <Link
            href={""}
            type="submit"
            className="w-32 text-_color1 font-bold py-3 px-5 focus:outline-none sm:ml-5 text-3xl mt-3 underline"
          >
            Facebook
          </Link>
          <Link
            href={""}
            type="submit"
            className="w-32 text-_color1 font-bold py-3 px-5 focus:outline-none sm:ml-5 text-3xl mt-3 underline"
          >
            Instagram
          </Link>
        </div>
        {!isEmailValid && (
          <span className="w-full text-center text-_red mt-5">
            Email is not available, please collect later
          </span>
        )}
      </div>
    </div>
  );
};
export default Contact;
