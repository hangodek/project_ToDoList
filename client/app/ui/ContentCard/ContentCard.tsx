"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import checkBox from "@/app/ui/svg/checkBox.svg";
import check from "@/app/ui/svg/check.svg";

import Image from "next/image";
import { clsx } from "clsx";

export default function ContentCard() {
  const [newTodos, setNewTodos] = useState([]);

  const toggleCheck = (index: number, todoId: number) => {
    if (!todoId) {
      console.error("Todo ID is undefined.");
      return;
    }

    const updatedTodos = newTodos.map((todo: any, i: number) => {
      return i === index ? { ...todo, checked: !todo.checked } : todo;
    });

    // @ts-ignore
    setNewTodos(updatedTodos);

    if (updatedTodos[index].checked) {
      setTimeout(() => {
        axios
          .delete(`http://localhost:8080/list/${todoId}`)
          .then(() => {
            const filteredTodos = updatedTodos.filter(
              (todo: any) => !todo.checked,
            );
            // @ts-ignore
            setNewTodos(filteredTodos);
          })
          .catch((err) => console.error("Delete failed: ", err));
      }, 1000);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/list")
      .then((res) => {
        const todosWithCheck = res.data.map((todo: any) => ({
          ...todo,
          checked: false,
        }));
        setNewTodos(todosWithCheck);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(newTodos);

  return (
    <>
      <div className="flex flex-col h-full gap-4 p-4">
        <motion.h1
          whileHover={{ scale: 1.2, cursor: "pointer" }}
          whileTap={{ scale: 1.1 }}
          className="text-5xl text-center font-bold font-DancingScript"
        >
          To Do List
        </motion.h1>
        <div className="[&>div]:flex [&>div]:gap-2 [&>div]:p-4">
          {newTodos.map((todo: any, index: number) => (
            <div key={index}>
              <button onClick={() => toggleCheck(index, todo.id)}>
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
                  {todo.checked ? (
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
                    "line-through text-red-500": todo.checked,
                  })}
                >
                  {todo.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed flex justify-center items-center bottom-8 right-8 w-12 h-12 bg-blue-400/75 rounded-full">
          <a
            href={"http://localhost:3000/list/newlist"}
            className="text-2xl font-bold text-white"
          >
            +
          </a>
        </div>
      </div>
    </>
  );
}
