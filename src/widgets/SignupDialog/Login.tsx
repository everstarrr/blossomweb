"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignupDialog } from "@/context/signup-dialog-context";

export const Login = () => {
  const { next } = useSignupDialog();

  return (
    <>
      <DialogHeader className="gap-0">
        <DialogTitle>ВХОД</DialogTitle>
        <DialogDescription />
      </DialogHeader>
      <div className="flex flex-col gap-3">
        <Label className="font-light" htmlFor="email">
          E-mail
        </Label>
        <Input
          className="bg-background-3"
          id="email"
          placeholder="bigboss2004@mail.ru"
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label className="font-light" htmlFor="password">
          Пароль
        </Label>
        <Input
          className="bg-background-3"
          type="password"
          id="password"
          placeholder="+79052728666"
        />
      </div>
      <div className="flex justify-between">
        <div className="py-1 flex gap-[5px] items-center">
          <Checkbox id="agree" />
          <Label className="inline" htmlFor="agree">
            Запомнить меня
          </Label>
        </div>
        <p className="bg-gradient-to-r cursor-pointer from-accent-blue to-accent-magenta clip-bg-text">
          Забыли пароль?
        </p>
      </div>
      <DialogClose asChild>
        <Button className="w-[204px] mx-auto" onClick={next}>
          Продолжить
        </Button>
      </DialogClose>
      <DialogFooter className="inline-flex gap-1.5 font-light w-full justify-center">
        Уже есть аккаунт?
        <span className="bg-gradient-to-r from-accent-blue to-accent-magenta clip-bg-text cursor-pointer">
          Войти
        </span>
      </DialogFooter>
    </>
  );
};
