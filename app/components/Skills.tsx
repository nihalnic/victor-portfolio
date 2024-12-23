import React from "react";
import { SKILL } from "../constans";
import Image from "next/image";

const Skills = () => {
  const gridSize = 8;

  return (
    <div className=" max-w-full mx-auto h-full flex-center flex-col mt-16">
      <h1 className=" py-5 text-light-primary text-2xl tracking-wider ">
        I work with software I <span className=" font-semibold ">expert</span>{" "}
        in
      </h1>
      <div className=" skills-grid mt-5">
        {Array.from({ length: gridSize }, (_, i) => (
          <div
            key={i}
            className=" bg-primary-500 flex-center w-full h-[140px] cursor-pointer"
          >
            {i < SKILL.length ? (
              <Image
                src={SKILL[i].img}
                alt={SKILL[i].alt}
                width={100}
                height={100}
                className="w-[80px] object-contain object-center opacity-[.4] hover:opacity-100 transition-opacity duration-500"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
