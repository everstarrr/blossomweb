"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useSignupDialog } from "@/context/signup-dialog-context";
import { ChooseRole } from "./ChooseRole";
import { cn } from "@/lib/utils";
import { Registration } from "./Registration";
import { ConfirmAccount } from "./ConfirmAccount";
import { Congratulations } from "./Congratulations";
import { Login } from "./Login";

interface SignupDialogProps {
  children: React.ReactNode;
  login?: boolean;
}

export const SignupDialog = ({ children, login }: SignupDialogProps) => {
  const { step, setLogin, reset } = useSignupDialog();

  const getScreen = () => {
    console.log(step);
    switch (step) {
      case 1:
        return <ChooseRole />;
      case 2:
        return <Registration />;
      case 3:
        return <ConfirmAccount />;
      case 4:
        return <Congratulations />;
      case 5:
        return <Login />;
    }
  };

  return (
    <Dialog onOpenChange={(open) => !open && setTimeout(() => reset(), 200)}>
      <DialogTrigger onClick={login ? () => setLogin() : undefined} asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className={cn(step === 2 ? "h-[611px]" : "h-[629px]", "justify-center")}
      >
        {getScreen()}
      </DialogContent>
    </Dialog>
  );
};
