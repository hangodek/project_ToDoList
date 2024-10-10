"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import checkBox from "@/app/ui/svg/checkBox.svg";
import check from "@/app/ui/svg/check.svg";

import Image from "next/image";
import { clsx } from "clsx";

export default function ContentCard() {
  const [todos, setTodos] = useState([
    { text: "Take Banana in aunty house", checked: false },
    { text: "Get new T-Shirt from local shop", checked: false },
  ]);

  const toggleCheck = (index: number) => {
    const updatedTodos = todos.map((todo, i) => {
      return i === index ? { ...todo, checked: !todo.checked } : todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="flex flex-col h-full gap-4 p-4">
        <motion.h1
          whileHover={{ scale: 1.2, cursor: "pointer" }}
          whileTap={{ scale: 1.1 }}
          className="text-5xl  text-center font-bold font-DancingScript"
        >
          To Do List
        </motion.h1>
        <div className="[&>div]:flex [&>div]:gap-2 [&>div]:p-4">
          {todos.map((todo, index) => (
            <div key={index}>
              <button
                onClick={() => toggleCheck(index)}
                value={todo.checked.toString()}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.1 }}
                  className="relative"
                >
                  <Image
                    src={checkBox}
                    alt="Check Box"
                    width={30}
                    height={30}
                  />
                  {todo.checked === true ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute top-[2px] right-[2px]"
                    >
                      <Image src={check} alt="Check" width={25} height={25} />
                    </motion.div>
                  ) : null}
                </motion.div>
              </button>
              <div className="flex-grow border-b border-gray-500 ml-2">
                <p
                  className={clsx("transition-all", {
                    "line-through text-red-500": todo.checked === true,
                  })}
                >
                  {todo.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
