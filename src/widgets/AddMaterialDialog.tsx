import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FileDropInput from "@/components/ui/file-drop-input";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export const AddMaterialDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="inCircle" size="sm">
          <Image src="/plus.svg" alt="Plus" width={25} height={25} />
          Добавить материал
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="leading-none h-[115px]">
            ДОБАВИТЬ МАТЕРИАЛ
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="title">
            Название
          </Label>
          <Input
            type="title"
            id="title"
            placeholder="Исследование и анализ данных"
          />
        </div>
        <FileDropInput />
        <DialogClose asChild>
          <Button className="w-[204px] mx-auto">Готово</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
