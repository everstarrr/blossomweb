"use client";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useSignupDialog } from "@/context/signup-dialog-context";

export const ConfirmAccount = () => {
  const { next } = useSignupDialog();

  return (
    <>
      <DialogHeader>
        <DialogTitle className="h-[115px] leading-none">ПОДТВЕРДИТЕ АККАУНТ</DialogTitle>
      </DialogHeader>
      <InputOTP containerClassName="mt-6 justify-center" maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <Button onClick={next}>Продолжить</Button>
      <DialogFooter className="inline-flex gap-1.5 font-light w-full justify-center">
        Нет письма на почте?
        <span className="bg-gradient-to-r from-accent-blue to-accent-magenta clip-bg-text cursor-pointer">
          Отправить снова
        </span>
      </DialogFooter>
    </>
  );
};
