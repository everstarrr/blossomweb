import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export const AddTaskDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="inCircle" size="sm">
          <Image src="/plus.svg" alt="Plus" width={25} height={25} />
          Добавить задание
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[874px] max-h-4/5 overflow-y-auto no-scrollbar">
        <DialogHeader>
          <DialogTitle className="leading-none h-[115px]">
            ДОБАВИТЬ ЗАДАНИЕ
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Label className="font-light" htmlFor="title">
            Название
          </Label>
          <Input id="title" placeholder="Исследование и анализ данных" />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="font-light">Тип</Label>
          <div className="flex gap-3">
            <Badge>Лабораторная работа</Badge>
            <Badge>Домашняя работа</Badge>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Label className="font-light" htmlFor="description">
            Описание
          </Label>
          <Textarea
            className="h-36"
            placeholder="Начните вводить текст здесь..."
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="font-light" htmlFor="deadline">
            Дедлайн
          </Label>
          <div className="flex gap-3">
            <Badge>Online</Badge>
            <Badge>Online</Badge>
          </div>
          <Input id="deadline" placeholder="9 декабря" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-3xl">Оценивание</p>
          <div className="p-3 border-2 border-stroke rounded-xl bg-almost-black font-extralight text-2xl">
            Семантика и базовая правильность вёрстки
            <br />
            Работа с изображениями
            <br />
            Качество контента
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-3xl">Ответ принимается как:</p>
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
        <Button className="w-52 mx-auto">Готово</Button>
      </DialogContent>
    </Dialog>
  );
};
