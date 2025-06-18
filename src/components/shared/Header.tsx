import { SignupDialogProvider } from "@/context/signup-dialog-context";
import { SignupDialog } from "@/widgets/SignupDialog/SignupDialog";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between py-5 px-[60px] text-xl fixed left-0 top-0 w-full bg-background z-50">
      <nav className="flex gap-[15px]">
        <Link href="/" className="flex gap-2.5 items-center">
          <Image src="/logo.svg" alt="Logo" width={40} height={52} />
          <p className="font-defectica text-5xl h-[34px]">BLOSSOMWEB</p>
        </Link>
        <Link href="/students" className="p-[15px]">
          Ученикам
        </Link>
        <Link href="/teachers" className="p-[15px]">
          Преподавателям
        </Link>
      </nav>
      <SignupDialogProvider>
        <div className="flex gap-[15px]">
          <SignupDialog login>
            <button className="p-[15px]">Вход</button>
          </SignupDialog>
          <SignupDialog>
            <button className="py-[15px] px-[30px] relative">
              <div className="absolute inset-0 bg-transparent border-reg" />
              <div className="relative z-10 pointer-events-none">
                Регистрация
              </div>
            </button>
          </SignupDialog>
        </div>
      </SignupDialogProvider>
    </header>
  );
};
