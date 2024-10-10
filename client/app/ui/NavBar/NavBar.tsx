"use client";

import { useState } from "react";
import { clsx } from "clsx";

import menuLogo from "@/app/ui/svg/menu.svg";
import arrowUp from "@/app/ui/svg/doubleArrowUp.svg";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <nav className="flex bg-orange-200">
        <button onClick={handleOpen}>
          <Image
            src={isOpen ? arrowUp : menuLogo}
            alt="Menu"
            width={50}
            height={50}
          />
        </button>
      </nav>
      <nav
        className={clsx("flex bg-orange-100", {
          block: isOpen,
          hidden: !isOpen,
        })}
      >
        <ul className="flex flex-col font-bold justify-center items-center p-2 w-full [&>li>a:focus]:text-red-600">
          <li>
            <a href="#">To Do</a>
          </li>
          <li>
            <a href="#">Archived</a>
          </li>
          <li>
            <a href="#">Trash</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
