"use client";

import { ArticleBlock } from "@/components/shared/ArticleBlock";
import { ArticleListBlock } from "@/components/shared/ArticleListBlock";
import {
  baseElementsData,
  howToUseUiKitData,
  moodboardGoalsData,
  moodboardInstrumentsData,
  uiKitAdvantagesData,
  uiPrinciplesData,
} from "@/data/articleData";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UiDesignUiKitAndMoodboard() {
  const router = useRouter();

  return (
    <main className="flex flex-col xl:mt-[92px] mt-[64px]">
      <button
        className="flex font-extralight text-2xl xl:ml-16 ml-3 gap-2 uppercase mt-12"
        onClick={router.back}
      >
        <Image src="/arrow.svg" alt="Назад" width={91} height={8} />
        Назад
      </button>
      <section className="w-full flex flex-col xl:pt-8 pt-3 xl:pb-3 pb-36 text-center items-center relative mt-16 overflow-hidden">
        <Image
          src="/stone5.webp"
          alt="Stone"
          width={322}
          height={287}
          className="absolute left-0 top-0 xl:block hidden"
        />
        <Image
          src="/stone6.webp"
          alt="Stone"
          width={322}
          height={287}
          className="absolute right-0 top-0 xl:block hidden"
        />
        <Image
          src="/shape4.png"
          alt="Stone"
          width={322}
          height={287}
          className="absolute left-3 bottom-0 xl:hidden w-[204px]"
        />
        <Image
          src="/shape5.png"
          alt="Stone"
          width={322}
          height={287}
          className="absolute right-0 bottom-0 xl:hidden w-[271px]"
        />
        <div className="absolute xl:h-[500px] xl:w-[600px] h-[300px] w-[160px] bg-radial from-[#F25AB4] to-[#F25AB400] -z-10 xl:-bottom-80 xl:left-80 -bottom-16 rounded-full xl:blur-3xl blur-2xl rotate-[-30deg]" />
        <div className="absolute xl:h-[500px] xl:w-[600px] h-[260px] w-[60px] bg-radial from-[#4695E3] to-[#4695E300] -z-10 xl:-bottom-96 -bottom-16 xl:right-64 right-32 rounded-full xl:blur-3xl blur-2xl rotate-[30deg]" />
        <h1 className="xl:text-8xl xl:max-w-[795px] text-5xl font-defectica">
          UI-дизайн, UI Kit и мудборд
        </h1>
        <p className="font-light xl:text-2xl text-lg">
          Разбираемся вместе, готовимся к проекту
        </p>
      </section>
      <article className="mt-12 flex flex-col gap-12 font-extralight text-2xl">
        <section className="xl:p-16 px-3 xl:pb-12 flex flex-col gap-12">
          <p>
            Современный веб-дизайн — это не только функциональность, но и
            визуальная эстетика. Хорошо оформленный пользовательский интерфейс
            (UI) помогает сделать взаимодействие с сайтом удобным и приятным. В
            этой статье мы разберем ключевые понятия UI-дизайна, познакомимся с
            UI Kit и узнаем, как создать мудборд для вдохновения.
          </p>
          <div className="flex flex-col gap-6">
            <ArticleBlock
              title="Что такое UI-дизайн?"
              content="UI-дизайн (от англ. User Interface Design) — это процесс разработки визуального представления пользовательского интерфейса. Его основная задача — сделать взаимодействие пользователя с продуктом интуитивно понятным и приятным."
            />
            <ArticleListBlock
              title="Основные элементы UI-дизайна:"
              list={baseElementsData}
            />
            <ArticleListBlock
              title="Принципы хорошего UI-дизайна:"
              list={uiPrinciplesData}
            />
          </div>
        </section>
        <section className="flex flex-col gap-12 xl:[&>*:not(header)]:px-16 [&>*:not(header)]:px-3">
          <header className="xl:pt-16 py-14 xl:pl-32 pl-3 xl:pb-32 flex flex-col xl:gap-5 gap-4 w-full relative overflow-hidden">
            <h2 className="font-defectica xl:text-5xl text-4xl">UI KIT</h2>
            <p className="font-light xl:text-2xl text-lg xl:max-w-full max-w-[202px]">
              Готовые элементы сразу под рукой
            </p>
            <Image
              src="/stone7.webp"
              alt="Stone"
              width={755}
              height={287}
              className="absolute top-0 right-0 h-full xl:block hidden"
            />
            <Image
              src="/shape6.png"
              alt="Stone"
              width={260}
              height={215}
              className="absolute top-0 right-0 h-full xl:hidden"
            />
            <div className="absolute xl:h-[500px] xl:w-[1000px] h-[200px] w-[400px] bg-radial from-[#415BD2] to-[#415BD200] -z-10 xl:-top-80 -top-28 xl:-right-64 -right-40 rounded-full blur-3xl" />
            <div className="absolute xl:h-[500px] xl:w-[900px] h-[200px] w-[400px] bg-radial from-[#4695E3] to-[#4695E300] -z-10 xl:-bottom-80 -bottom-28 xl:-right-64 -right-36 rounded-full blur-3xl" />
          </header>
          <ArticleBlock
            title="Что такое UI Kit?"
            content="UI Kit (от англ. User Interface Kit) — это набор готовых элементов для создания интерфейсов. Он включает в себя кнопки, шрифты, формы, иконки и многое другое. UI Kit помогает ускорить процесс проектирования и поддерживать единый стиль."
          />
          <ArticleListBlock
            title="Преимущества использования UI Kit:"
            list={uiKitAdvantagesData}
          />
          <ArticleListBlock
            title="Как использовать UI Kit?"
            list={howToUseUiKitData}
          />
          <ArticleBlock
            title="Что такое мудборд?"
            content="Мудборд (от англ. Mood Board) — это визуальная презентация идей, вдохновения и концепций для проекта. Он помогает собрать визуальные элементы в одном месте и задать тон будущему дизайну."
          />
        </section>
        <section className="flex flex-col gap-12 xl:[&>*:not(header)]:px-16 [&>*:not(header)]:px-3">
          <header className="xl:pt-16 xl:pl-32 xl:pb-32 pl-3 py-12 flex flex-col xl:gap-5 gap-4 w-full relative overflow-hidden">
            <h2 className="font-defectica xl:text-5xl text-4xl">
              Мудборд и насмотренность
            </h2>
            <p className="font-light xl:text-2xl text-lg">Вдохновение и стиль</p>
            <Image
              src="/stone8.webp"
              alt="Stone"
              width={755}
              height={287}
              className="absolute top-0 right-0 xl:block hidden"
            />
            <Image
              src="/shape7.png"
              alt="Stone"
              width={140}
              height={215}
              className="absolute top-0 right-0 xl:hidden"
            />
            <div className="absolute h-[500px] w-[1000px] bg-radial from-[#F25AB4] to-[#F25AB400] -z-10 -top-52 -right-72 rounded-full blur-3xl" />
            <div className="absolute h-[500px] w-[1100px] bg-radial from-[#944BEC] to-[#944BEC00] -z-10 -bottom-96 -right-24 rounded-full blur-3xl" />
          </header>
          <ArticleListBlock
            title="Зачем нужен мудборд?"
            list={moodboardGoalsData}
          />
          <div className="flex flex-col gap-6">
            <h3 className="xl:text-3xl text-2xl font-normal">
              Инструменты для создания мудбордов:
            </h3>
            <div className="flex flex-col gap-3 xl:text-2xl text-lg">
              <p>
                Canva: удобный и бесплатный инструмент для создания презентаций
                и коллажей.
              </p>
              <p>Milanote: позволяет создавать мудборды онлайн.</p>
              <p>Figma: подходит для более продвинутых дизайнеров.</p>
            </div>
          </div>
          <ArticleListBlock
            title="Инструменты для создания мудбордов:"
            list={moodboardInstrumentsData}
          />
        </section>
        <section className="xl:px-16 px-3 flex flex-col xl:gap-6 gap-4">
          <h2 className="font-defectica font-normal xl:text-4xl text-3xl">Заключение</h2>
          <p className="xl:text-2xl text-lg">
            UI-дизайн, UI Kit и мудборд — это три мощных инструмента, которые
            помогут вам создать профессиональный и эстетически приятный
            веб-дизайн. Мудборд вдохновляет и задает направление, UI Kit
            упрощает работу, а принципы UI-дизайна делают интерфейс понятным для
            пользователей. Используйте их вместе, чтобы добиться лучших
            результатов в своих проектах.
          </p>
        </section>
      </article>
    </main>
  );
}
