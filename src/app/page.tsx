import { CourseSwitcher } from "@/components/shared/CourseSwitcher";
import { Review } from "@/components/shared/Review";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { toolsData } from "@/data/mainData";
import Image from "next/image";

export default function HomePAge() {
  return (
    <main className="flex flex-col xl:mt-[92px] mt-[64px]">
      <section className="xl:h-[calc(100vh_-_92px)]  relative overflow-hidden xl:pt-[calc((100vh_-_92px)_/_5)]" id="hero">
        <Image
          src="/stone.webp"
          alt="Stone"
          width={1490}
          height={1490}
          className="absolute right-0 top-0 z-10 h-screen w-auto xl:block hidden"
        />
        <Image
          src="/shape1.png"
          alt="Stone"
          width={372}
          height={372}
          className="absolute right-0 bottom-0 z-10 w-auto xl:hidden"
        />
        <div className="absolute -z-10 bg-linear-to-r from-[#111111] to-[#944BEC] inset-0 h-full w-full opacity-20" />
        <div className="xl:px-16 px-8 flex flex-col xl:gap-10 gap-5 max-w-[822px] xl:pt-0 pt-10 xl:pb-0 pb-40">
          <h1 className="font-defectica xl:text-8xl text-5xl">ЦВЕТУЩИЙ ВЕБ</h1>
          <div className="flex flex-col xl:gap-5 gap-2.5">
            <p className="xl:text-5xl text-2xl">Курс по веб-дизайну</p>
            <p className="xl:text-[32px] text-base xl:leading-[30px] leading-[15px] xl:font-normal font-light">
              Научитесь создавать и верстать узнаваемые интерфейсы, которые
              сделают жизнь тысяч людей проще и удобнее
            </p>
          </div>
          <Button className="xl:max-w-[315px]">Записаться на курс</Button>
        </div>
      </section>
      <section className="mt-16 flex flex-col gap-12 xl:px-16 px-3" id="courseParts">
        <h2 className="text-center xl:text-8xl text-3xl font-defectica">
          КУРС СОСТОИТ ИЗ ДВУХ ЧАСТЕЙ
        </h2>
        <CourseSwitcher />
      </section>
      <section className="mt-16 flex flex-col xl:gap-12 gap-9 xl:px-16 px-3 pt-2.5 xl:pb-[180px]" id="results">
        <h2 className="text-center xl:text-8xl text-4xl font-defectica">
          РЕЗУЛЬТАТЫ ПОСЛЕ ОБУЧЕНИЯ
        </h2>
        <div className="flex flex-col gap-5">
          <h3 className="xl:text-6xl text-3xl font-defectica">ИНСТРУМЕНТЫ</h3>
          <div className="flex gap-5 xl:flex-row flex-col">
            {toolsData.map((item, index) => (
              <Card
                key={`tool-${index}`}
                className="flex-1 bg-almost-black p-3"
                titleClassName="inline-flex items-center justify-center"
                title={
                  <span className="inline-flex items-center justify-center gap-5 w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={48}
                      height={48}
                    />
                    {item.title}
                  </span>
                }
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="xl:text-6xl text-3xl font-defectica">
            МЕТОДЫ. ПОДХОДЫ. РУКОВОДСТВА
          </h3>
          <div className="flex gap-5 xl:flex-row flex-col">
            <Card title="JTBD" className="bg-almost-black flex-1 text-center" />
            <Card
              title="UX-тестирование"
              className="bg-almost-black flex-1 text-center"
            />
            <Card title="Css" className="bg-almost-black flex-1 text-center" />
          </div>
          <div className="flex gap-5 justify-center xl:flex-row flex-col">
            <Card
              title="Конкурентный анализ"
              className="bg-almost-black text-center xl:w-[calc((100%_-_40px)_/_3)]"
            />
            <Card
              title="CustDev"
              className="bg-almost-black text-center xl:w-[calc((100%_-_40px)_/_3)]"
            />
          </div>
        </div>
      </section>
      <section className="py-2.5 mt-[60px] flex flex-col gap-12" id="portfolio">
        <h2 className="text-center xl:text-8xl text-3xl xl:font-defectica px-[60px]">
          портфолио наших учеников
        </h2>
        <ScrollArea>
          <div className="flex xl:px-[60px] px-3 gap-5 w-max">
            <Review />
            <Review />
            <Review />
          </div>
          <ScrollBar hidden orientation="horizontal" />
        </ScrollArea>
      </section>
      <div className="mt-[60px] mx-auto px-[17px] h-[75px] flex flex-col justify-end relative">
            <Image src="/cursor.png" alt="Cursor" width={26} height={37} className="absolute top-0 -left-2"/>
            <Button className="px-[22px] py-[15px]">Записаться на курс</Button>
      </div>
    </main>
  );
}
