import { MdCall, MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";

import Link from "next/link";
import ContactForm from "../ContactForm";
import Socials from "../_child/Socials";

const contacts = [
  {
    icon: <MdOutlineMail className="w-7 h-7 text-gray-200 my-auto" />,
    address: "achemnomaer@gmail.com",
    href: "mailto:achemnomaer@gmail.com",
  },
  {
    icon: <MdCall className="w-7 h-7 text-gray-200 my-auto" />,
    address: "+8801889197863",
    href: "tel:+8801889197863",
  },
  {
    icon: <MdOutlineLocationOn className="w-7 h-7 text-gray-200 my-auto" />,
    address: "Chattogram, Bangladesh",
    href: "#",
  },
];

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="bg-secondary w-full h-full">
      <div className="max-w-6xl mx-auto pt-12">
        {/* Section title */}
        <div className="w-full flex items-center">
          <h2 className=" mx-auto">
            <div className="relative  overflow-hidden w-fit">
              <div className="opacity-100 transform-none">
                <span className="text-3xl md:text-5xl font-black text-end text-white">
                  Let's Connect
                  <span className="text-primaryLight">.</span>
                </span>
              </div>
            </div>
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-y-8 lg:flex-row-reverse lg:flex-x-8 justify-between  gap-16 sm:p-10 p-4 ">
          <div className="w-full md:w-1/3">
            <ul className="md:mt-12 space-y-8">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-center">
                  {contact.icon}
                  <Link
                    href={contact.href}
                    className="text-gray-100 font-medium text-sm ml-3 px-2 py-0.5 bg-gray-700 hover:bg-gray-600 border border-gray-700 rounded-lg shadow-lg"
                  >
                    {contact.address}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-y-4 mt-12">
              <p className="text-md font-semibold text-gray-200 leading-6">
                Socials
              </p>
              <Socials />
            </div>
          </div>

          <div className="w-full rounded-lg lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
