import Image from "next/image";

export const Review = () => {
  return (
    <div className="flex flex-col rounded-[30px] max-w-[calc(100vw_-_120px)] overflow-hidden">
      <Image
        src="/portfolio.png"
        alt="Portfolio"
        width={1230}
        height={231}
        className="h-[231px] w-full"
      />
      <div className="flex flex-col pt-[56px] pb-[30px] px-[30px] bg-background-3 text-4xl">
        <div className="flex gap-[45px] items-center">
          <Image src="/polina.png" alt="Polina" width={126} height={126}/>
          <div className="flex flex-col gap-[15px]">
            <p className="text-4xl">МОСКВИТИНА ПОЛИНА</p>
            <p className="text-4xl font-thin">Студент 3го курса</p>
          </div>
        </div>
        Отличный курс и бесценной информацией и опытом, который будет не только
        уникален среди остальных курсов, но и не повторим!
      </div>
    </div>
  );
};
