"use client";
import { SignupDialogProvider } from "@/context/signup-dialog-context";
import { MenuDialog } from "@/widgets/MenuDialog";
import { SignupDialog } from "@/widgets/SignupDialog/SignupDialog";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export const Header = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name ?? "";
  return (
    <header className="flex justify-between xl:py-5 py-4 xl:px-[60px] px-3 text-xl fixed left-0 top-0 w-full bg-background z-50">
      <nav className="flex gap-[15px]">
        <Link href="/" className="flex gap-2.5 items-center">
          <Image src="/logo.svg" alt="Logo" width={40} height={52} className="xl:h-10 h-9" />
          <p className="font-defectica xl:text-5xl xl:h-[34px] text-3xl">BLOSSOMWEB</p>
        </Link>
        <Link href="/students" className="p-[15px] xl:block hidden">
          Ученикам
        </Link>
        <Link href="/teachers" className="p-[15px] xl:block hidden">
          Преподавателям
        </Link>
      </nav>
      {session?.user ? (
        <div className="xl:flex hidden items-center gap-4">
          <button className="p-4" onClick={() => signOut({ redirect: false })}>Выход</button>
          <div className="flex items-center gap-4">
            <div className="font-light max-w-[220px] truncate p-4">{userName}</div>
            <Image src="/avatar.png" alt="Avatar" width={52} height={52} className="rounded-full" />
          </div>
        </div>
      ) : (
        <SignupDialogProvider>
          <div className="xl:flex hidden gap-[15px]">
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
      )}
      <MenuDialog className="xl:hidden"/>
    </header>
  );
};
