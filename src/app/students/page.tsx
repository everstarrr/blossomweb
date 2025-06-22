import { Card } from "@/components/ui/card";
import { DeadlineCard } from "@/components/ui/deadline-card";
import {
  deadlinesData,
  studentsHomeworksData,
  studentsMaterialsData,
} from "@/data/studentsData";
import Image from "next/image";

export default function Students() {
  return (
    <main className="flex flex-col xl:mt-[92px] mt-[64px]">
      <section
        className="h-[287px] relative overflow-hidden xl:px-[60px] px-3 xl:py-[62px] py-12"
        id="hero"
      >
        <Image
          src="/stone2.webp"
          alt="Stone"
          width={1490}
          height={1490}
          className="absolute right-0 top-0 z-10 h-full w-auto xl:block hidden"
        />
        <Image
          src="/shape2.png"
          alt="Stone"
          width={1490}
          height={1490}
          className="absolute right-0 top-0 z-10 h-full w-auto xl:hidden"
        />
        <div className="absolute bg-linear-to-r from-black/0 to-[#944BEC] inset-0 h-full w-full opacity-20" />
        <div className="flex flex-col gap-5 max-w-[702px]">
          <h3 className="font-defectica xl:text-5xl text-4xl">
            НАЧНИ ИЗУЧЕНИЕ СЕЙЧАС!
          </h3>
          <p className="font-light xl:text-2xl text-lg xl:leading-[30px]">
            Во вкладке “Ученикам” ты найдешь необходимые тебе материалы для
            изучения, а также описание лабораторных работ и домашних заданий
          </p>
        </div>
      </section>
      <h1 className="mt-[60px] xl:text-8xl text-5xl text-center font-defectica">
        УЧЕНИКАМ
      </h1>
      <section className="xl:px-[60px] px-3 xl:mt-[120px] mt-6 flex flex-col gap-5">
        <h2 className="font-defectica xl:text-[64px] xl:h-[45px] xl:leading-[45px] text-3xl">
          МАТЕРИАЛЫ
        </h2>
        <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-5 gap-1">
          {studentsMaterialsData.map((item, index) => (
            <Card
              titleClassName="text-base"
              descrClassName="text-xs"
              key={index}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </section>
      <section className="xl:px-[60px] px-3 xl:mt-24 mt-12 flex flex-col gap-5">
        <h2 className="font-defectica xl:text-[64px] xl:h-[45px] xl:leading-[45px] text-3xl">
          ДОМАШНИЕ РАБОТЫ И ЛАБЫ
        </h2>
        <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-5 gap-1">
          {studentsHomeworksData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </section>
      <section className="xl:px-[60px] px-3 xl:mt-24 mt-12 flex flex-col gap-5">
        <h2 className="font-defectica xl:text-[64px] xl:h-[45px] xl:leading-[45px] text-3xl">
          ДЕДЛАЙНЫ
        </h2>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-5">
          {deadlinesData.map((item, index) => (
            <DeadlineCard
              key={index}
              week={item.week}
              title={item.title}
              description={item.description}
              deadline={item.deadline}
              online={item.online}
              dot={item.dot}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
