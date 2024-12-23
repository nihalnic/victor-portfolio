import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_WORKS } from "@/app/constans";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Metadata 
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const workId = parseInt(id, 10);
  const work = PORTFOLIO_WORKS[workId - 1];

  if (!work) {
    return {
      title: "Work Not Found",
      description: "The portfolio work you are looking for does not exist.",
    };
  }

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      images: [
        {
          url: work.img,
          width: 800,
          height: 600,
          alt: work.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: work.title,
      description: work.description,
      images: [work.img],
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const workId = parseInt(id, 10);
  const work = PORTFOLIO_WORKS[workId - 1];

  if (!work) {
    return notFound();
  }

  return (
    <div className="max-w-full mx-auto p-4">
      <div className="flex flex-col items-start gap-4">
        <div className="flex-center space-x-5 mb-5">
          <div className=" flex-center w-10 h-10 bg-primary-600 rounded-full hover:bg-light-primary transition duration-300 ">
            <Link href="/">
              <Image
                src="/icons/arrow-left.svg"
                alt="back-arrow"
                width={100}
                height={100}
                className="w-6"
              />
            </Link>
          </div>
          <h1 className="text-4xl font-bold">{work.title}</h1>
        </div>
        <Image
          src={work.img}
          alt={work.title}
          width={100}
          height={100}
          className="rounded-lg object-cover w-full h-full"
        />
        <p className="text-lg text-light-secondary">{work.description}</p>
      </div>
    </div>
  );
};

export default Page;
