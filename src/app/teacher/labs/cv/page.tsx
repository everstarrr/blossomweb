"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CV() {
  const router = useRouter();

  return (
    <main className="flex flex-col xl:px-16 px-3 xl:mt-[92px] mt-16">
      <button
        className="flex font-extralight text-2xl gap-2 uppercase xl:mt-12 mt-8"
        onClick={router.back}
      >
        <Image src="/arrow.svg" alt="Назад" width={91} height={8} />
        Назад
      </button>
      <article className="xl:mt-16 mt-8 flex flex-col gap-12">
        <h1 className="font-defectica xl:text-8xl text-4xl text-center">Задание</h1>
        <div className="flex gap-5 xl:flex-row flex-col">
          <Link href="/teacher/labs/cv/edit">
            <Button className="px-8 xl:w-fit w-full">Редактировать задание</Button>
          </Link>
          <Button variant="ghost">Удалить задание</Button>
        </div>
        <section className="flex flex-col gap-6">
          <h2 className="text-6xl font-defectica leading-10 h-10">CV</h2>
          <h3 className="text-4xl font-defectica leading-7 h-7">
            Лабораторная работа
          </h3>
          <div className="flex gap-2.5">
            <Badge>До 9 декабря</Badge>
            <Badge variant="active">Online</Badge>
          </div>
        </section>
        <section className="flex flex-col gap-6 font-extralight xl:text-2xl text-lg">
          <p>
            Важно показать правильное использование тегов HTML5 (размечать по
            смыслу, строить правильную семантику). Особенное внимание стоит
            уделить структуре информации и её разделению на блоки, правильности
            выбора заголовков, использованию списков. Нелишним будет сделать
            перелинковку между блоками, а также внешние ссылки.
          </p>
          <p>
            Минимальный набор блоков, которые стоить реализовать: главный блок о
            себе (в том числе фотография), учебные достижения, профессиональные
            достижения (если есть), контактная информация. Особенно интересные и
            полные проекты можно оформить в виде отдельных страниц с
            возможностью вернуться на главную.
          </p>
          <p>Адаптивная вёрстка будет плюсом, но не обязательна.</p>
        </section>
        <section className="flex flex-col gap-6">
          <h4 className="text-3xl">Оценивание</h4>
          <ul className="font-extralight xl:text-2xl text-lg">
            <li>Семантика и базовая правильность вёрстки</li>
            <li>Работа с изображениями</li>
            <li>Качество контента</li>
          </ul>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="font-defectica text-4xl">Ваш ответ</h3>
          <div className="flex xl:gap-5 gap-2 xl:flex-row flex-col">
            <Input
              className="bg-almost-black max-w-2xl"
              placeholder="Вставьте ссылку сюда"
            />
            <Button className="px-8">Сдать задание</Button>
          </div>
        </section>
      </article>
    </main>
  );
}
