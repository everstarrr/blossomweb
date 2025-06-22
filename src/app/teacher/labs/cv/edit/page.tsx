"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Edit() {
  const router = useRouter();

  return (
    <main className="flex flex-col xl:px-16 px-3 xl:mt-[92px] mt-[64px] xl:gap-12 gap-9">
      <button
        className="flex font-extralight text-2xl gap-2 uppercase mt-12"
        onClick={router.back}
      >
        <Image src="/arrow.svg" alt="Назад" width={91} height={8} />
        Назад
      </button>
      <h1 className="font-defectica xl:text-8xl text-4xl text-center xl:mt-0 mt-3">Редактирование</h1>
      <div className="flex flex-col gap-6">
        <Label className="text-3xl font-normal leading-5 h-5" htmlFor="title">
          Название
        </Label>
        <Input
          id="title"
          placeholder="Исследование и анализ данных"
          className="text-2xl"
          value="CV"
        />
        <Label className="text-3xl font-normal leading-5 h-5">Тип работы</Label>
        <div className="flex gap-3 xl:flex-row flex-col">
          <Badge>Лабораторная работа</Badge>
          <Badge>Домашняя работа</Badge>
        </div>
      </div>
      <Textarea
        className="xl:text-2xl text-lg bg-almost-black font-extralight"
        placeholder="Начните вводить текст здесь..."
        value="Важно показать правильное использование тегов HTML5 (размечать по смыслу, строить правильную семантику). Особенное внимание стоит уделить структуре информации и её разделению на блоки, правильности выбора заголовков, использованию списков. Нелишним будет сделать перелинковку между блоками, а также внешние ссылки.
              Минимальный набор блоков, которые стоить реализовать: главный блок о себе (в том числе фотография), учебные достижения, профессиональные достижения (если есть), контактная информация. Особенно интересные и полные проекты можно оформить в виде отдельных страниц с возможностью вернуться на главную.
              Адаптивная вёрстка будет плюсом, но не обязательна."
      />
      <div className="flex flex-col gap-3">
        <p className="text-3xl">Оценивание</p>
        <div className="p-3 border-2 border-stroke rounded-xl bg-almost-black font-extralight xl:text-2xl text-lg">
          Семантика и базовая правильность вёрстки
          <br />
          Работа с изображениями
          <br />
          Качество контента
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label className="font-normal text-3xl" htmlFor="deadline">
          Дедлайн
        </Label>
        <div className="flex gap-3">
          <Badge>Online</Badge>
          <Badge>Online</Badge>
        </div>
        <Input
          id="deadline"
          placeholder="9 декабря"
          className="bg-background-3"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-4xl font-defectica">Ответ принимается как:</p>
        <RadioGroup className="text-2xl font-extralight">
          <div className="flex items-center gap-5">
            <RadioGroupItem value="link" id="r1" />
            <Label htmlFor="r1">Ссылка</Label>
          </div>
          <div className="flex items-center gap-5">
            <RadioGroupItem value="file" id="r2" />
            <Label htmlFor="r2">Файл</Label>
          </div>
          <div className="flex items-center gap-5">
            <RadioGroupItem value="text" id="r3" />
            <Label htmlFor="r3">Текст</Label>
          </div>
        </RadioGroup>
      </div>
      <Button className="xl:w-52">Сохранить</Button>
    </main>
  );
}
