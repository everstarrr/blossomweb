"use client";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSignupDialog } from "@/context/signup-dialog-context";

export const ChooseRole = () => {
  const { next } = useSignupDialog();

  return (
    <>
      <DialogHeader>
        <DialogTitle>ВЫБОР РОЛИ</DialogTitle>
        <DialogDescription>Выберите роль, чтобы продолжить</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3">
        <button className="bg-background-2 rounded-[30px] p-[30px] w-full text-[32px] leading-[19px] h-[79px] hover:bg-almost-black border-[3px] border-transparent focus-visible:border-almost-black cursor-pointer">
          Я Преподаватель
        </button>
        <button className="bg-background-2 rounded-[30px] p-[30px] w-full text-[32px] leading-[19px] h-[79px] hover:bg-almost-black border-[3px] border-transparent focus-visible:border-almost-black cursor-pointer">
          Я Ученик
        </button>
      </div>
      <Button onClick={next}>Продолжить</Button>
    </>
  );
};
