"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

import { CONTENT, SOCIAL_URL } from "../constans";

const Profile = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };

  const router = useRouter();

  const handleRedirectToContact = () => {
    router.push("/contact");
  };

  return (
    <>
      <Link href="/contact" className=" md:mb-[55px] mb-[35px]">
        <Image src="/icons/light.svg" alt="light-mood" width={24} height={24} />
      </Link>
      <div className="flex-center flex-col md:flex-row gap-10 ">
        <div className="w-[115] h-[115] flex-center bg-primary-500 md:bg-light-primary border-[3px] md:border border-yellow-shade rounded-full ">
          <Image
            src="/images/profile.png"
            alt="profile-pic"
            width={100}
            height={100}
            className="w-[calc(100%-5px)] h-auto"
          />
        </div>
        <div className="flex-center flex-col md:items-start">
          <h1 className=" text-4xl font-semibold">{CONTENT.Headers.title}</h1>
          <p className=" text-base mt-1">{CONTENT.Headers.description}</p>

          <ul className="flex space-x-5 mt-5 md:mt-3">
            {SOCIAL_URL.map((link) => (
              <li key={link.platform}>
                <Link href={link.URL} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={link.icon}
                    alt={`${link.platform}`}
                    width={100}
                    height={100}
                    className="block w-8 h-8 md:w-7 md:h-7"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ul className=" flex-center gap-10 mt-5 md:mt-12">
          <li className=" text-2xl flex-center flex-col font-semibold">
            {CONTENT.Experience.yearsExperience}
            <p className="text-sm md:text-base text-center font-normal text-light-secondary">
              Years of work <br /> experience
            </p>
          </li>
          <li className=" text-2xl flex-center flex-col font-semibold">
            {CONTENT.Experience.completedProjects}+
            <p className="text-sm md:text-base text-center font-normal text-light-secondary">
              Completed <br /> projects
            </p>
          </li>
          <li className=" text-2xl flex-center flex-col font-semibold">
            {CONTENT.Experience.satisfiedCustomers}+
            <p className="text-sm md:text-base text-center font-normal text-light-secondary">
              Satisfied <br /> customers
            </p>
          </li>
        </ul>

        <div className="mt-10 flex-center gap-5 w-full ">
          <Button
            onClick={handleDownloadCV}
            variant="primary"
            size="medium"
            className=" w-full flex-center gap-2 text-sm"
          >
            Download CV
            <Image
              src="/icons/download-arrow.svg"
              alt="download-cv"
              width={100}
              height={100}
              className=" w-[20px] h-[20px]"
            />
          </Button>
          <Button
            onClick={handleRedirectToContact}
            variant="secondary"
            size="medium"
            className=" w-full"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
