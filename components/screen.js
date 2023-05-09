"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { XSmallIcon } from "./icons";
import Dialog from "./dialog";
import Profile from "./dialogContent/profile";
import Picture from "./dialogContent/picture";
import Welcome from "./dialogContent/welcome";
import Projects from "./dialogContent/projects";
import Contact from "./dialogContent/contact";

const textWelcome = {
  dialog: "Welcome",
  content: <Welcome />,
};
const pictureWelcome = {
  dialog: "My picture",
  content: <Picture />,
};

const contactWelcome = {
  dialog: "Contact me",
  content: <Contact />,
};
const proFileWelcome = {
  dialog: "My profile",
  content: <Profile />,
};
const projectsWelcome = {
  dialog: "My projects",
  content: <Projects />,
};

const onDrag = (id) => {};
const Screen = () => {
  const parentRef = useRef();
  const [textDialog, setTextDialog] = useState(true);
  const [profileDialog, setProfileDialog] = useState(false);
  const [pictureDialog, setPictureDialog] = useState(false);
  const [projectDialog, setProjectDialog] = useState(false);
  const [contactDialog, setContactDialog] = useState(false);

  const [select, setSelect] = useState();
  const [full, setFull] = useState(false);
  const [fullContent, setFullContent] = useState({});

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  useEffect(() => {
    if (select === 1) {
      setFullContent(proFileWelcome);
    } else if (select === 2) {
      setFullContent(projectsWelcome);
    } else {
      setFullContent({});
    }
  }, [select]);
  return (
    <div
      className="w-full min-h-screen font-main text-color1 p-16 relative overflow-hidden"
      ref={parentRef}
    >
      <div className="absolute top-0 left-0 md:top-10 md:left-10 flex flex-col items-center pointer-events-auto scale-75 md:scale-100">
        <div
          onClick={() => {
            setSelect(1);
            setProfileDialog(true);
          }}
          className="w-[110px] h-[120px] relative mb-6 cursor-pointer"
        >
          <Image
            layout="fill"
            className="object-contain"
            src={`/images/computer.png?${Math.random()}`}
            alt="A desktop computer"
          />
        </div>
        <div
          onClick={() => {
            setSelect(2);
            setProjectDialog(true);
          }}
          className="w-[125px] h-[120px] relative mb-6 cursor-pointer"
        >
          <Image
            layout="fill"
            className="object-contain"
            src="/images/projects.png"
            alt="A folder with documents"
          />
        </div>
        <div
          onClick={() => {
            setSelect(3);
            setContactDialog(true);
          }}
          className="w-[110px] h-[120px] relative mb-6 cursor-pointer"
        >
          <Image
            layout="fill"
            className="object-contain"
            src="/images/contact.png"
            alt="A person holding a phone"
          />
        </div>
        <div
          onClick={() => {
            setSelect(4);
            setPictureDialog(true);
          }}
          className="w-[120px] h-[120px] relative mb-6 cursor-pointer"
        >
          <Image
            layout="fill"
            className="object-contain"
            src="/images/picture.png"
            alt="A camera"
          />
        </div>
        <div
          onClick={() => {
            setSelect(5);
            setTextDialog(true);
          }}
          className="w-[170px] h-[120px] relative mb-6 cursor-pointer"
        >
          <Image
            layout="fill"
            className="object-contain"
            src="/images/text.png"
            alt="A document with text"
          />
        </div>
      </div>

      {profileDialog ? (
        <Dialog
          id={1}
          setFull={setFull}
          select={select}
          setSelect={setSelect}
          setShow={setProfileDialog}
          parent={parentRef}
          width={windowWidth < 800 ? windowWidth - 10 : 800 - 10}
          height={650}
          content={proFileWelcome}
        />
      ) : null}

      {projectDialog ? (
        <Dialog
          id={2}
          setFull={setFull}
          select={select}
          setSelect={setSelect}
          setShow={setProjectDialog}
          parent={parentRef}
          width={windowWidth < 800 ? windowWidth - 10 : 800 - 10}
          height={windowHeight - 100}
          content={projectsWelcome}
        />
      ) : null}
      {contactDialog ? (
        <Dialog
          id={3}
          setFull={setFull}
          select={select}
          setSelect={setSelect}
          setShow={setContactDialog}
          parent={parentRef}
          width={windowWidth < 800 ? windowWidth - 10 : 800 - 10}
          height={450}
          content={contactWelcome}
        />
      ) : null}

      {pictureDialog ? (
        <Dialog
          id={4}
          setFull={setFull}
          select={select}
          setSelect={setSelect}
          setShow={setPictureDialog}
          parent={parentRef}
          width={windowWidth < 800 ? windowWidth - 10 : 800 - 10}
          height={800}
          content={pictureWelcome}
        />
      ) : null}
      {textDialog ? (
        <Dialog
          id={5}
          setFull={setFull}
          select={select}
          setSelect={setSelect}
          setShow={setTextDialog}
          parent={parentRef}
          width={windowWidth < 800 ? windowWidth - 10 : 800 - 10}
          height={650}
          content={textWelcome}
        />
      ) : null}
      {full ? (
        <div className={`absolute top-0 left-0 w-full z-20 h-full font-_main`}>
          <div className={`w-full h-full bg-_color4 flex flex-col`}>
            <div className="w-full h-12 border-b-2 border-_color1 g-dialog relative">
              <h3 className="text-4xl text-_color1 mx-3">
                {fullContent.dialog}
              </h3>
              <div
                onClick={() => setFull(false)}
                className={
                  "absolute w-8 h-8 top-2 right-14 border-[5px] border-_color1 cursor-pointer"
                }
              ></div>
              <div
                onClick={() => setFull(false)}
                className={"absolute w-12 h-12 top-0 right-1 cursor-pointer"}
              >
                <XSmallIcon color={"#522614"} />
              </div>
            </div>
            <div className=" w-full scrollbar border-black  overflow-auto">
              {fullContent.content}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Screen;
