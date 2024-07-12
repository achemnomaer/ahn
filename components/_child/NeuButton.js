import cn from "classnames";
import Link from "next/link";

export default function NeuButton({ children, light, dark, both, ...rest }) {
  const className = cn(
    " px-6 py-3 font-medium bg-primary text-white  w-fit transition-all shadow-[3px_3px_0px] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",
    {
      "shadow-black": light,
      "shadow-white": dark,
      "shadow-black dark:shadow-white": both,
    }
  );
  return (
    <Link href="/resume_achem.pdf" passHref legacyBehavior>
      <a target="_blank">
        <button {...rest} className={className}>
          {children}
        </button>
      </a>
    </Link>
  );
}
