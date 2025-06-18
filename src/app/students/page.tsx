import { Card } from "@/components/ui/card";
import { DeadlineCard } from "@/components/ui/deadline-card";
import {
  deadlinesData,
  homeworksData,
  materialsData,
} from "@/data/studentsData";
import Image from "next/image";

export default function Students() {
  return (
    <main className="flex flex-col">
      <section
        className="mt-[92px] h-[287px] relative overflow-hidden px-[60px] py-[62px]"
        id="hero"
      >
        <Image
          src="/stone2.webp"
          alt="Stone"
          width={1490}
          height={1490}
          className="absolute right-0 top-0 z-10 h-full w-auto"
        />
        <div className="absolute bg-linear-to-r from-black/0 to-[#944BEC] inset-0 h-full w-full opacity-20" />
        <div className="flex flex-col gap-5 max-w-[702px]">
          <h3 className="font-defectica text-5xl">НАЧНИ ИЗУЧЕНИЕ СЕЙЧАС!</h3>
          <p className="font-light text-2xl leading-[30px]">
            Во вкладке “Ученикам” ты найдешь необходимые тебе материалы для
            изучения, а также описание лабораторных работ и домашних заданий
          </p>
        </div>
      </section>
      <h1 className="mt-[60px] text-8xl text-center font-defectica">
        УЧЕНИКАМ
      </h1>
      <section className="px-[60px] mt-[120px] flex flex-col gap-5">
        <h2 className="font-defectica text-[64px] h-[45px] leading-[45px]">МАТЕРИАЛЫ</h2>
        <div className="grid grid-cols-3 gap-5">
          {materialsData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section className="px-[60px] mt-[96px] flex flex-col gap-5">
        <h2 className="font-defectica text-[64px] h-[45px] leading-[45px]">ДОМАШНИЕ РАБОТЫ И ЛАБЫ</h2>
        <div className="grid grid-cols-3 gap-5">
          {homeworksData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section className="px-[60px] mt-[96px] flex flex-col gap-5">
        <h2 className="font-defectica text-[64px] h-[45px] leading-[45px]">ДЕДЛАЙНЫ</h2>
        <div className="grid grid-cols-3 gap-5">
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
