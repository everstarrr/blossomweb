"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignupDialog } from "@/context/signup-dialog-context";

export const Registration = () => {
  const { next } = useSignupDialog();

  return (
    <>
      <DialogHeader>
        <DialogTitle>РЕГИСТРАЦИЯ</DialogTitle>
        <DialogDescription />
      </DialogHeader>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="name">
            Имя
          </Label>
          <Input id="name" placeholder="Имя" className="bg-almost-black" />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="surname">
            Фамилия
          </Label>
          <Input
            id="surname"
            placeholder="Фамилия"
            className="bg-almost-black"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="phone">
            Телефон
          </Label>
          <Input
            id="phone"
            placeholder="+79052728666"
            className="bg-almost-black"
          />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="email">
            E-mail
          </Label>
          <Input
            id="email"
            placeholder="bigboss2004@mail.ru"
            className="bg-almost-black"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="password">
            Пароль
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="+79052728666"
            className="bg-almost-black"
          />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="confirmPassword">
            Подтвердить пароль
          </Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="bigboss2004@mail.ru"
            className="bg-almost-black"
          />
        </div>
      </div>
      <div className="py-1 flex gap-[5px] items-center">
        <Checkbox id="agree" />
        <Label className="inline" htmlFor="agree">
          Я согласен с{" "}
          <span className="bg-gradient-to-r from-accent-blue to-accent-magenta clip-bg-text">
            Условиями предоставления доступа
          </span>
        </Label>
      </div>
      <Button onClick={next}>Продолжить</Button>
      <DialogFooter className="inline-flex gap-1.5 font-light w-full justify-center">
        Уже есть аккаунт?
        <span className="bg-gradient-to-r from-accent-blue to-accent-magenta clip-bg-text cursor-pointer">
          Войти
        </span>
      </DialogFooter>
    </>
  );
};
