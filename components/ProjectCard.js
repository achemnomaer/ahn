"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { HiMiniLink } from "react-icons/hi2";
import ScrollAnimation from "./animation/ScrollAnimation";

export default function ProjectCard({ project }) {
  const { title, description, techStack, githubLink, liveLink, projectImage } =
    project;

  return (
    <ScrollAnimation className="flex items-stretch mx-auto">
      <div className="flex-grow transition ease-in-out delay-100 hover:-translate-y-2  duration-200 relative flex w-full max-w-xl flex-col rounded-xl bg-gray-200 dark:bg-gray-800 bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-2 mt-2 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <Image
            src={projectImage}
            width={1600}
            height={1200}
            alt="project-image"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-lg antialiased font-medium leading-snug tracking-normal text-black dark:text-white">
              {title}
            </h5>
            <p className="flex gap-x-2">
              <Link href={githubLink} passHref legacyBehavior>
                <a target="_blank">
                  <DiGithubBadge className="cursor-pointer w-7 h-7 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary" />
                </a>
              </Link>
              <Link href={liveLink} passHref legacyBehavior>
                <a target="_blank">
                  <HiMiniLink className="cursor-pointer w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary" />
                </a>
              </Link>
            </p>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-contentDark dark:text-contentLight">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((item, index) => (
              <span
                key={index}
                className="text-xs text-white px-2 py-1 rounded bg-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
