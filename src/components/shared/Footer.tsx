"use client";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <footer className="flex flex-col bg-background-2 mt-[60px]">
      <div className="xl:p-[60px] py-8 px-3 flex xl:gap-6 gap-8 xl:flex-row flex-col">
        <div className="flex flex-col gap-[30px] flex-1">
          <Link href="/" className="flex gap-2.5 items-center">
            <Image src="/logo.svg" alt="Logo" width={40} height={52} />
            <p className="font-defectica text-5xl h-[34px]">BLOSSOMWEB</p>
          </Link>
          <div className="flex flex-col xl:gap-[30px] gap-6 font-light xl:text-base text-sm">
            <p>
              BLOSSOMWEB - уникальный курс, учитывающий обе стороны разработки
              сайтов: UX/UI и программирование. Здесь каждый сможет попробовать
              себя в обеих ролях и научиться новому
            </p>
            <p>Помните, не стыдно не знать, стыдно не хотеть узнать!</p>
            <p>
              Напишите нам на{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent-magenta clip-bg-text">
                info@blossomweb.ru
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-6 flex-1 xl:flex-row flex-col">
          <div className="flex flex-col xl:gap-[30px] gap-4 flex-1">
            <p className="font-defectica xl:text-[40px] xl:h-7 text-3xl ">НАВИГАЦИЯ</p>
            <nav className="flex flex-col xl:gap-[15px] gap-1 font-light leading-[18px]">
              <button
                className="text-left"
                onClick={() => scrollToElement("hero")}
              >
                Цветущий веб
              </button>
              <button
                className="text-left"
                onClick={() => scrollToElement("courseParts")}
              >
                Части курса
              </button>
              <button
                className="text-left"
                onClick={() => scrollToElement("results")}
              >
                Инструменты и методы
              </button>
              <button
                className="text-left"
                onClick={() => scrollToElement("portfolio")}
              >
                Портфолио учеников
              </button>
            </nav>
          </div>
          <div className="flex flex-col xl:gap-[30px] gap-4 flex-1">
            <p className="font-defectica xl:text-[40px] xl:h-7 text-3xl">Контакты</p>
            <address className="flex flex-col xl:gap-[15px] gap-1 font-light not-italic leading-[18px]">
                <p>+ 7 905 272 86 66</p>
                <p>Санкт-Петербург, Кронверкский пр. 49</p>
            </address>
          </div>
        </div>
      </div>
      <div className="xl:px-[60px] px-3 xl:py-[30px] py-6 xl:text-2xl font-extralight">
        © 2024 blossomweb.ru
      </div>
    </footer>
  );
};
