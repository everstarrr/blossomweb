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
import { signIn } from "next-auth/react";
import { useState } from "react";

export const Login = () => {
  const { next } = useSignupDialog();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError(null);
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Неверный email или пароль");
      return;
    }
    next();
  };

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
        <Input className="bg-background-3" id="email" placeholder="bigboss2004@mail.ru" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex flex-col gap-3">
        <Label className="font-light" htmlFor="password">
          Пароль
        </Label>
        <Input className="bg-background-3" type="password" id="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
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
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <DialogClose asChild>
        <Button disabled={loading} className="w-[204px] mx-auto" onClick={submit}>
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
