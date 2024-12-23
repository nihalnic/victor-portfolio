import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_WORKS } from "../constans";

const Work = () => {
  return (
    <div className="grid md:grid-cols-2 w-full gap-7">
      {PORTFOLIO_WORKS.map((content, index) => (
        <Link href={content.link} key={index}>
          <div className="w-full rounded-lg h-full aspect-square relative work group overflow-hidden">
            <Image
              src={content.img}
              alt={content.title}
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
            <div className="work-content space-y-2">
              <h1 className=" text-3xl font-medium">{content.title}</h1>
              <span className="bg-light-secondary rounded-full p-3">
                <Image
                  src="/icons/link.svg"
                  alt="link"
                  width={100}
                  height={100}
                  className="w-[22px] "
                />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Work;
