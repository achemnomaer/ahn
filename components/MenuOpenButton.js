"use client";

import { HiOutlineBars3BottomRight, HiXMark } from "react-icons/hi2";

// context
import { useNavContext } from "@/context/NavContext";

export default function MenuOpenButton() {
  const { navOpen, setNavOpen } = useNavContext();
  return (
    <>
      {navOpen ? (
        <button
          type="button"
          className="relative my-auto"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open menu</span>
          <HiXMark className="text-[36px] text-bold" aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          className="relative my-auto"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open menu</span>
          <HiOutlineBars3BottomRight
            className="text-[36px] text-bold"
            aria-hidden="true"
          />
        </button>
      )}
    </>
  );
}
