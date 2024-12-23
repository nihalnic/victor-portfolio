"use client";

import React, { useState } from "react";

import { validateForm } from "@/app/lib/validation";
import { ZodIssue } from "zod";

import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

type FormErrors = ZodIssue[] | null;

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>(null);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    const result = validateForm({ name, email, message });

    if (result.success) {
      setEmail("");
      setName("");
      setMessage("");
      setIsSubmitted(true);
      setFormErrors(null);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else {
      setFormErrors(result.error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-3 w-full  ">
        <Input
          id="name"
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {formErrors?.find((error) => error.path[0] === "name") && (
          <div className="text-red-500 text-sm">
            {formErrors?.find((error) => error.path[0] === "name")?.message}
          </div>
        )}

        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {formErrors?.find((error) => error.path[0] === "email") && (
          <div className="text-red-500 text-sm">
            {formErrors?.find((error) => error.path[0] === "email")?.message}
          </div>
        )}

        <TextArea
          id="message"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {formErrors?.find((error) => error.path[0] === "message") && (
          <div className="text-red-500 text-sm">
            {formErrors?.find((error) => error.path[0] === "message")?.message}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Submit
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-4 text-yellow-shade text-center">
          Form submitted successfully!
        </div>
      )}
    </>
  );
};

export default Form;
