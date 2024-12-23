import React from "react";
import Image from "next/image";
import Link from "next/link";

import Form from "@/app/components/shared/From";
import { CONTACT_INFO } from "@/app/constans";

const page = () => {
  return (
    <>
      <div className=" w-full md:flex-center inline-flex items-center md:space-x-10 mb-5">
        <div className=" bg-primary-600 rounded-full hover:bg-light-primary transition duration-300 ">
          <Link href="/" className="w-10 h-10 flex-center ">
            <Image
              src="/icons/arrow-left.svg"
              alt="back-arrow"
              width={100}
              height={100}
              className="w-6 "
            />
          </Link>
        </div>
        <h1 className="w-full md:w-auto text-5xl font-bold text-yellow-shade text-center">
          CONTACT!
        </h1>
      </div>
      <div className="mt-[15%] w-full flex items-start justify-between md:flex-row flex-col gap-16">
        <div className=" flex md:w-2/5 w-full ">
          <ul className=" flex-center flex-col items-start space-y-5">
            {CONTACT_INFO.map((name) => (
              <li key={name.text} className="contactInfo-list">
                <Image
                  src={name.img}
                  alt={name.alt}
                  width={100}
                  height={100}
                  className="w-7 block"
                />
                <p>{name.text}</p>
              </li>
            ))}
            <li className="contactInfo-list">
              <Image
                src="/icons/location.svg"
                alt="victor-alvarado-location"
                width={100}
                height={100}
                className=" w-7 block"
              />
              <p>
                84889 Ruecker Creek, <br /> West Tyville, PA 90748
              </p>
            </li>
          </ul>
        </div>
        <div className=" w-full md:w-3/5">
          <Form />
        </div>
      </div>
    </>
  );
};

export default page;
