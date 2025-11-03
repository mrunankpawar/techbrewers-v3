import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10">
          Join the Global Tech Network
        </h3>
        <p className="mt-4 font-normal text-base md:text-lg text-violet-200 max-w-xl mx-auto z-10">
          Discover our global network, stay informed with our updates, and join
          us in empowering tech enthusiasts.
        </p>
      </div>
      <BentoGrid className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mt-10 lg:mt-12">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Grid;
