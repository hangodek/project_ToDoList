"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const text = (form.elements.namedItem("listcontent") as HTMLInputElement)
      .value;

    try {
      const response = await axios.post("http://localhost:8080/list", {
        text,
      });
      console.log("Response:", response.data);
      router.push("http://localhost:3000/list");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col gap-4 p-4"
        >
          <textarea
            name="listcontent"
            id="listcontent"
            cols={30}
            rows={10}
            className="border border-black bg-slate-100 p-4 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="border border-black bg-slate-100 rounded-md"
          >
            Add new list
          </button>
        </form>
      </section>
    </>
  );
}
