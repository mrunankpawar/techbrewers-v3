import { GlareCard } from "./GlareCard";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBuildingFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";

function GlareCardStats() {
  return (
    <div className="flex justify-center items-center">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-24 gap-10 mt-20 w-full max-w-screen-lg">
      <GlareCard className="flex flex-col items-center justify-center py-8 px-6">
      <BsFillPeopleFill className="text-5xl pb"/>
        <p className="font-bold text-violet-300 text-5xl pt-5">2000+</p>
        <p className="font-normal text-xl text-violet-100 mt-4">Members</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center py-8 px-6">
      <BsGlobe className="text-5xl pb"/>
        <p className="font-bold text-violet-300 text-5xl pt-5">8+</p>
        <p className="font-normal text-xl text-violet-100 mt-4">Countries</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center py-8 px-6">
      <BsBuildingFill className="text-5xl pb"/>
        <p className="font-bold text-violet-300 text-5xl pt-5">100+</p>
        <p className="font-normal text-xl text-violet-100 mt-4">Colleges</p>
      </GlareCard>
    </div>
    </div>
  );
}

export default GlareCardStats;