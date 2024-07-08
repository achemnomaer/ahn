"use client";

import { useForm } from "react-hook-form";

import { useState } from "react";
import Modal from "./Modal";
import NeuButton from "./_child/NeuButton";
import Spinner from "./_child/Spinner";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    setIsLoading(true);
    fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setIsLoading(false);
        reset();
        setModalIsOpen(true);
        console.log("Response received");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }
  return (
    <div className="gap-y-2 relative rounded-lg  px-4 py-8 shadow-lg bg-gray-800 ">
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-y-2"
      >
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="w-full h-[52px] rounded-lg border focus:border-2  focus:border-primary border-contentDark px-[14px] py-3 text-base  text-contentLight outline-none bg-gray-900 "
            {...register("name", { required: true })}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full h-[52px] rounded-lg border focus:border-2  focus:border-primary border-contentDark px-[14px] py-3 text-base  text-contentLight outline-none bg-gray-900 "
            {...register("email", { required: true })}
          />
        </div>

        <div className="mb-3">
          <textarea
            rows="5"
            placeholder="Message"
            name="message"
            className="w-full  rounded-lg border focus:border-2  focus:border-primary border-contentDark px-[14px] py-3 text-base  text-contentLight outline-none bg-gray-900 "
            {...register("message", { required: true })}
          />
        </div>

        <div className="justify-self-end">
          <NeuButton dark type="submit" disabled={isLoading}>
            {isLoading ? <Spinner md /> : "Send Message"}
          </NeuButton>
        </div>
      </form>
    </div>
  );
}
