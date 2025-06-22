import { Card } from "@/components/ui/card";
import { teachersHomeworksData, teachersMaterialsData } from "@/data/teachersData";
import { AddMaterialDialog } from "@/widgets/AddMaterialDialog";
import { AddTaskDialog } from "@/widgets/AddTaskDialog";
import Image from "next/image";

export default function Teachers() {
  return (
    <main className="flex flex-col xl:mt-[92px] mt-[64px]">
      <section
        className="h-[287px] relative overflow-hidden xl:px-[60px] px-3 xl:py-[62px] py-20"
        id="hero"
      >
        <Image
          src="/stone3.webp"
          alt="Stone"
          width={1000}
          height={1000}
          className="absolute right-0 top-0 z-10 h-full w-auto xl:block hidden"
        />
        <Image
          src="/shape3.png"
          alt="Shape"
          width={1000}
          height={1000}
          className="absolute right-0 top-0 z-10 h-full w-auto xl:hidden"
        />
        <div className="absolute bg-linear-to-r from-black/0 to-[#944BEC] inset-0 h-full w-full opacity-20" />
        <div className="flex flex-col gap-5 xl:max-w-[702px] max-w-[388px]">
          <h3 className="font-defectica xl:text-5xl text-4xl">ВСЁ ПОД РУКОЙ!</h3>
          <p className="font-light xl:text-2xl xl:leading-[30px] text-lg">
            Во вкладке “Преподавателям” ты сможешь редактировать, добавлять
            задания и материал
          </p>
        </div>
      </section>
      <h1 className="mt-[60px] xl:text-8xl text-5xl text-center font-defectica">
        ПРЕПОДАВАТЕЛЯМ
      </h1>
      <section className="xl:px-[60px] px-3 xl:mt-[120px] mt-6 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h2 className="font-defectica xl:text-[64px] xl:h-[45px] xl:leading-[45px] text-3xl">
            МАТЕРИАЛЫ
          </h2>
          <AddMaterialDialog />
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-5">
          {teachersMaterialsData.map((item, index) => (
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
         <div className="flex justify-between items-center xl:flex-row flex-col xl:gap-0 gap-3">
          <h2 className="font-defectica xl:text-[64px] xl:h-[45px] xl:leading-[45px] text-3xl">
            ДОМАШНИЕ РАБОТЫ И ЛАБЫ
          </h2>
          <AddTaskDialog />
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-5">
          {teachersHomeworksData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
