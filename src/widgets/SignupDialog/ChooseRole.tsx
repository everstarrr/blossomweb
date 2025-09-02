"use client";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSignupDialog } from "@/context/signup-dialog-context";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ChooseRole = () => {
  const { next } = useSignupDialog();

  const [role, setRole] = useState<"teacher" | "student" | null>(null);

  return (
    <>
      <DialogHeader>
        <DialogTitle>ВЫБОР РОЛИ</DialogTitle>
        <DialogDescription>Выберите роль, чтобы продолжить</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3">
        <button onClick={() => setRole("teacher")} className={cn("bg-background-2 rounded-[30px] p-[30px] w-full text-[32px] leading-[19px] h-[79px] hover:bg-almost-black border-[3px] border-transparent focus-visible:border-almost-black cursor-pointer", role === "teacher" && "bg-almost-black")}>
          Я Преподаватель
        </button>
        <button onClick={() => setRole("student")} className={cn("bg-background-2 rounded-[30px] p-[30px] w-full text-[32px] leading-[19px] h-[79px] hover:bg-almost-black border-[3px] border-transparent focus-visible:border-almost-black cursor-pointer", role === "student" && "bg-almost-black")}>
          Я Ученик
        </button>
      </div>
      <Button disabled={!role} onClick={next}>Продолжить</Button>
    </>
  );
};
