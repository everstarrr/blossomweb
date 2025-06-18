import { Card } from "@/components/ui/card";
import {
  homeworksData,
  materialsData,
} from "@/data/studentsData";
import { AddMaterialDialog } from "@/widgets/AddMaterialDialog";
import Image from "next/image";

export default function Teachers() {
  return (
    <main className="flex flex-col">
      <section
        className="mt-[92px] h-[287px] relative overflow-hidden px-[60px] py-[62px]"
        id="hero"
      >
        <Image
          src="/stone3.webp"
          alt="Stone"
          width={1000}
          height={1000}
          className="absolute right-0 top-0 z-10 h-full w-auto"
        />
        <div className="absolute bg-linear-to-r from-black/0 to-[#944BEC] inset-0 h-full w-full opacity-20" />
        <div className="flex flex-col gap-5 max-w-[702px]">
          <h3 className="font-defectica text-5xl">ВСЁ ПОД РУКОЙ!</h3>
          <p className="font-light text-2xl leading-[30px]">
            Во вкладке “Преподавателям” ты сможешь редактировать, добавлять
            задания и материал
          </p>
        </div>
      </section>
      <h1 className="mt-[60px] text-8xl text-center font-defectica">
        ПРЕПОДАВАТЕЛЯМ
      </h1>
      <section className="px-[60px] mt-[120px] flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h2 className="font-defectica text-[64px] h-[45px] leading-[45px]">
            МАТЕРИАЛЫ
          </h2>
          <AddMaterialDialog />
        </div>
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
         <div className="flex justify-between items-center">
          <h2 className="font-defectica text-[64px] h-[45px] leading-[45px]">
            ДОМАШНИЕ РАБОТЫ И ЛАБЫ
          </h2>
          <AddMaterialDialog />
        </div>
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
    </main>
  );
}
