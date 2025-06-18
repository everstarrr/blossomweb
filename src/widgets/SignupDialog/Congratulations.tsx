"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export const Congratulations = () => {
  return (
    <>
      <Image src="/stone4.webp" alt="Stone" width={250} height={250} className="mx-auto"/>
      <DialogHeader>
        <DialogTitle>ПОЗДРАВЛЯЕМ!</DialogTitle>
        <DialogDescription>
          Вы успешно зарегистрировались на курс BLOSSOMWEB!
        </DialogDescription>
      </DialogHeader>
      <DialogClose asChild>
        <Button>Хорошо</Button>
      </DialogClose>
    </>
  );
};
