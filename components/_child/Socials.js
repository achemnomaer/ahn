import Link from "next/link";
import { RiFacebookFill, RiGithubLine, RiLinkedinFill } from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill className="w-6 h-6" />,
    href: "https://www.facebook.com/achem.habibnomaer?mibextid=ZbWKwL",
  },
  {
    icon: <RiGithubLine className="w-6 h-6" />,
    href: "https://github.com/achemnomaer",
  },
  {
    icon: <RiLinkedinFill className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/achem-habib-62865b17a",
  },
];

export default function Socials() {
  return (
    <ul className="flex items-center gap-x-5 text-lg">
      {socials.map((social, index) => (
        <Link key={index} href={social.href} passHref legacyBehavior>
          <a
            target="_blank"
            className=" p-2 bg-primary  rounded-full text-white hover:opacity-50 transition-all duration-300"
          >
            {social.icon}
          </a>
        </Link>
      ))}
    </ul>
  );
}
