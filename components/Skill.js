import skills from "@/lib/data/skills";
import { HiCpuChip } from "react-icons/hi2";
import ProgressAnimation from "./animation/ProgressAnimation";

export default function Skill() {
  return (
    <div className="mt-4 mx-auto w-full ">
      <h4 className="flex gap-x-2 text-lg text-contentDark dark:text-contentLight font-semibold mb-8">
        <span className="my-auto">
          <HiCpuChip className="w-7 h-7  " />
        </span>
        <span className="my-auto">My skillset</span>
      </h4>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4   gap-6 max-w-4xl ">
        {skills.map((skill, index) => (
          <div key={index}>
            <span className="text-sm font-semibold">{skill.title}</span>
            <div className="relative">
              <div className="w-full bg-gray-300 dark:bg-gray-200 rounded-sm h-3">
                <ProgressAnimation level={skill.level} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
