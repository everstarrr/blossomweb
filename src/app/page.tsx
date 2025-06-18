import { CourseSwitcher } from "@/components/shared/CourseSwitcher";
import { Review } from "@/components/shared/Review";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { toolsData } from "@/data/mainData";
import Image from "next/image";

export default function HomePAge() {
  return (
    <main className="flex flex-col">
      <section className="h-[calc(100vh_-_92px)] mt-[92px] relative overflow-hidden pt-[152px]" id="hero">
        <Image
          src="/stone.webp"
          alt="Stone"
          width={1490}
          height={1490}
          className="absolute right-0 top-0 z-10 h-screen w-auto"
        />
        <div className="absolute bg-linear-to-r from-[#111111] to-[#944BEC] inset-0 h-full w-full opacity-20" />
        <div className="px-[60px] flex flex-col gap-10 max-w-[822px]">
          <h1 className="font-defectica text-8xl">ЦВЕТУЩИЙ ВЕБ</h1>
          <div className="flex flex-col gap-5">
            <p className="text-5xl">Курс по веб-дизайну</p>
            <p className="text-[32px] leading-[30px]">
              Научитесь создавать и верстать узнаваемые интерфейсы, которые
              сделают жизнь тысяч людей проще и удобнее
            </p>
          </div>
          <Button className="max-w-[315px]">Записаться на курс</Button>
        </div>
      </section>
      <section className="mt-[60px] flex flex-col gap-12 px-[60px]" id="courseParts">
        <h2 className="text-center text-8xl font-defectica">
          КУРС СОСТОИТ ИЗ ДВУХ ЧАСТЕЙ
        </h2>
        <CourseSwitcher />
      </section>
      <section className="mt-[60px] flex flex-col gap-12 px-[60px] pt-2.5 pb-[180px]" id="results">
        <h2 className="text-center text-8xl font-defectica">
          РЕЗУЛЬТАТЫ ПОСЛЕ ОБУЧЕНИЯ
        </h2>
        <div className="flex flex-col gap-5">
          <h3 className="text-[64px] font-defectica">ИНСТРУМЕНТЫ</h3>
          <div className="flex gap-5">
            {toolsData.map((item, index) => (
              <Card
                key={`tool-${index}`}
                className="flex-1 bg-almost-black"
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
          <h3 className="text-[64px] font-defectica">
            МЕТОДЫ. ПОДХОДЫ. РУКОВОДСТВА
          </h3>
          <div className="flex gap-5">
            <Card title="JTBD" className="bg-almost-black flex-1 text-center" />
            <Card
              title="UX-тестирование"
              className="bg-almost-black flex-1 text-center"
            />
            <Card title="Css" className="bg-almost-black flex-1 text-center" />
          </div>
          <div className="flex gap-5 justify-center">
            <Card
              title="Конкурентный анализ"
              className="bg-almost-black text-center w-[calc((100%_-_40px)_/_3)]"
            />
            <Card
              title="CustDev"
              className="bg-almost-black text-center w-[calc((100%_-_40px)_/_3)]"
            />
          </div>
        </div>
      </section>
      <section className="py-2.5 mt-[60px] flex flex-col gap-12" id="portfolio">
        <h2 className="text-center text-8xl font-defectica px-[60px]">
          ПОРТФОЛИО НАШИХ УЧЕНИКОВ
        </h2>
        <ScrollArea>
          <div className="flex px-[60px] gap-5 w-max">
            <Review />
            <Review />
            <Review />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <div className="mt-[60px] mx-auto px-[17px] h-[75px] flex flex-col justify-end relative">
            <Image src="/cursor.png" alt="Cursor" width={26} height={37} className="absolute top-0 -left-2"/>
            <Button className="px-[22px] py-[15px]">Записаться на курс</Button>
      </div>
    </main>
  );
}
