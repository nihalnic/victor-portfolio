import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" flex-center flex-col w-full my-16 px-4">
      <p className=" text-light-secondary font-light text-sm text-center">
        © Victor Alvarado. {new Date().getFullYear()} All rights reserved.
      </p>

      <h4 className=" text-sm my-2 text-light-secondary tracking-tight">
        Made with{" "}
        <Link
          href="http://nihalnick.com/"
          className=" font-bold text-light-primary"
        >
          Fionn
        </Link>{" "}
        by Nihal Nick
      </h4>
    </footer>
  );
};

export default Footer;
