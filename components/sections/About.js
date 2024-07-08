/* eslint-disable react/no-unescaped-entities */

import SectionTitle from "../_child/SectionTitle";
import ScrollAnimation from "../animation/ScrollAnimation";

import Skill from "../Skill";

const informations = [
  {
    label: "Name",
    info: "Achem Habib Nomaer",
  },
  {
    label: "Email",
    info: "achemnomaer@gmail.com",
  },
  {
    label: "Phone",
    info: "+8801889197863",
  },
  {
    label: "Address",
    info: "Sylhet, Bangldesh",
  },
  {
    label: "Freelance",
    info: "Available",
  },
  {
    label: "Birthday",
    info: "15 November 2000",
  },
];

export default function About() {
  return (
    <div className="px-4 mx-auto max-w-6xl sm:px-6 xl:px-0">
      <SectionTitle>About</SectionTitle>
      <div className=" flex flex-col gap-y-8 ">
        <ScrollAnimation>
          <div className="space-y-4  mx-auto">
            <div className="relative overflow-hidden w-fit leading-relaxed text-contentDark dark:text-contentLight">
              <p className="">
                <span className=" bg-primary text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                  H
                </span>
                ey there! I’m Achem Habib Nomaer from Bangladesh. Despite my
                academic background in Biotechnology, I found my true calling in
                coding and web development. What started as a personal interest
                has evolved into a serious pursuit.
              </p>

              <p className="mt-4">
                As a self-taught web developer, I have embraced the continuous
                learning process and have successfully completed various
                projects that showcase my skills and dedication. Though I am
                early in my professional career, I am committed to further
                developing my expertise and contributing effectively to the
                field.
              </p>

              <p className="mt-4">
                I am enthusiastic about the opportunities and challenges that
                lie ahead and look forward to collaborating on innovative
                projects. Let’s connect and create impactful digital
                experiences together.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 justify-between gap-y-4">
              {informations.map((information, index) => (
                <li className="flex gap-x-8" key={index}>
                  <span className="text-black dark:text-white">
                    {information.label}:
                  </span>
                  <span className="text-contentDark dark:text-contentLight">
                    {information.info}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>

        <Skill />
      </div>
    </div>
  );
}
