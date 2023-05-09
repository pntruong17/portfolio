import Image from "next/image";
import { motion } from "framer-motion";
import { XSmallIcon } from "./icons";

const Dialog = (props) => {
  const {
    id,
    setFull,
    show,
    setShow,
    content,
    parent,
    width,
    height,
    select,
    setSelect,
    windowWidth,
    windowHeight,
  } = props;
  const containerStyle = { width: width, height: height };
  const contentSize = { width: width - 5, height: height - 50 };

  const divWidth = width;
  const divHeight = height;
  const left = (windowWidth - divWidth - 100) / 2;
  const top = (windowHeight - divHeight - 200) / 2;

  const addNewlines = (str) => {
    return str.split(" ").join("\n");
  };

  return (
    <motion.div
      onClick={() => setSelect(id)}
      onDrag={() => setSelect(id)}
      drag
      dragConstraints={parent}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
      dragElastic={false} // tạm dừng motion khi thả chuột
      dragMomentum={false} // loại bỏ quán tính của motion
      className={`relative h-12 bg-_color3`}
      style={{ left, top, width, zIndex: select === id ? "10" : "0" }}
    >
      <div
        className={`relative h-[500px] bg-_color1 font-_main `}
        style={containerStyle}
      >
        <div
          className={`absolute  -top-1 -left-1 h-[500px] bg-_color4 border-2 border-_color1 `}
          style={containerStyle}
        >
          <div className="w-full h-12 border-b-2 border-_color1 g-dialog relative">
            <h3 className="text-4xl text-_color1 mx-3">{content.dialog}</h3>
            {id === 1 || id === 2 ? (
              <div
                onClick={() => setFull(true)}
                className={
                  "absolute w-8 h-8 top-2 right-14 border-[5px] border-_color1 cursor-pointer"
                }
              ></div>
            ) : null}
            <div
              onClick={() => setShow(false)}
              className={"absolute w-12 h-12 top-0 right-1 cursor-pointer"}
            >
              <XSmallIcon color={"#522614"} />
            </div>
          </div>
          <div style={contentSize} className="scrollbar overflow-auto">
            {content.content}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dialog;
