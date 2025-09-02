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
import { useState } from "react";
import { signIn } from "next-auth/react";

export const Registration = () => {
  const { next, setLogin } = useSignupDialog();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    setError(null);
    if (!form.email || !form.password || form.password !== form.confirmPassword) {
      setError("Проверьте email и совпадение паролей");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          surname: form.surname,
          phone: form.phone,
          email: form.email,
          password: form.password,
        }),
      });
      if (!res.ok) throw new Error("Не удалось зарегистрироваться");
      await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });
      next();
    } catch (e) {
      setError("Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

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
          <Input id="name" placeholder="Имя" className="bg-almost-black" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="surname">
            Фамилия
          </Label>
          <Input id="surname" placeholder="Фамилия" className="bg-almost-black" value={form.surname} onChange={(e) => setForm({ ...form, surname: e.target.value })} />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="phone">
            Телефон
          </Label>
          <Input id="phone" placeholder="+79052728666" className="bg-almost-black" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="email">
            E-mail
          </Label>
          <Input id="email" placeholder="bigboss2004@mail.ru" className="bg-almost-black" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="password">
            Пароль
          </Label>
          <Input type="password" id="password" placeholder="Пароль" className="bg-almost-black" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Label className="font-light" htmlFor="confirmPassword">
            Подтвердить пароль
          </Label>
          <Input type="password" id="confirmPassword" placeholder="Повторите пароль" className="bg-almost-black" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
        </div>
      </div>
      <div className="py-1 flex gap-[5px] items-center">
        <Checkbox id="agree" checked={form.agree} onCheckedChange={(v) => setForm({ ...form, agree: Boolean(v) })} />
        <Label className="inline" htmlFor="agree">
          Я согласен с{" "}
          <span className="bg-gradient-to-r from-accent-blue to-accent-magenta clip-bg-text">
            Условиями предоставления доступа
          </span>
        </Label>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button disabled={loading} onClick={submit}>Продолжить</Button>
      <DialogFooter className="inline-flex gap-1.5 font-light w-full justify-center">
        Уже есть аккаунт?
        <span onClick={() => setLogin()} className="bg-gradient-to-r from-accent-blue to-accent-magenta clip-bg-text cursor-pointer">
          Войти
        </span>
      </DialogFooter>
    </>
  );
};
