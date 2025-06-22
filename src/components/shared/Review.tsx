import { Cedra4F } from "@/app/layout";
import Image from "next/image";

export const Review = () => {
  return (
    <div className="flex flex-col xl:rounded-[30px] rounded-lg max-w-[calc(100vw_-_120px)] overflow-hidden">
      <Image
        src="/portfolio.png"
        alt="Portfolio"
        width={1230}
        height={231}
        className="xl:h-[231px] h-[58px] w-full"
      />
      <div className="flex flex-col xl:gap-0 gap-3.5 xl:pt-[56px] p-2 pt-3.5 xl:pb-[30px] xl:px-[30px] bg-background-3 xl:text-4xl text-xs">
        <div className="flex xl:gap-[45px] gap-3 items-center">
          <Image src="/polina.png" alt="Polina" width={126} height={126} className="xl:w-32 xl:h-32 w-8 h-8"/>
          <div className="flex flex-col xl:gap-[15px] gap-1">
            <p className={`xl:text-4xl text-[9px] xl:${Cedra4F.className} font-defectica`}>МОСКВИТИНА ПОЛИНА</p>
            <p className="xl:text-4xl text-[9px] font-thin">Студент 3го курса</p>
          </div>
        </div>
        Отличный курс и бесценной информацией и опытом, который будет не только
        уникален среди остальных курсов, но и не повторим!
      </div>
    </div>
  );
};
