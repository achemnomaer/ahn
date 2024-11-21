/* eslint-disable react/no-unescaped-entities */

import SectionTitle from "../_child/SectionTitle";
import ScrollAnimation from "../animation/ScrollAnimation";

import Skill from "../Skill";

{
  /* 
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
*/
}

export default function About() {
  return (
    <div className="px-4 mx-auto max-w-6xl sm:px-6 xl:px-0">
      <SectionTitle>About</SectionTitle>
      <div className=" flex flex-col gap-y-8 ">
        <ScrollAnimation>
          <div className="space-y-4  mx-auto">
            <div className="relative overflow-hidden w-fit leading-relaxed text-contentDark dark:text-contentLight">
              <p className="">
                Hi there! I’m a full-stack developer who loves creating
                efficient and user-friendly web applications. With experience in
                technologies like React.js, Next.js, Django, and Express.js,
                I’ve worked on a variety of projects, including eCommerce sites,
                real estate platforms, and education consultancy websites.
              </p>

              <p className="mt-4">
                I’m all about turning ideas into functional and visually
                appealing solutions. I’m also curious by nature and enjoy
                exploring new technologies like AI and machine learning—they’re
                shaping the future, and it’s exciting to be part of it.
              </p>

              <p className="mt-4">
                When I’m not coding, you’ll probably find me watching a good
                thriller, working out at the gym, or hanging out with friends.
                Feel free to check out my work and reach out—let’s build
                something awesome together!
              </p>
            </div>
            {/* 
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
            */}
          </div>
        </ScrollAnimation>

        <Skill />
      </div>
    </div>
  );
}
