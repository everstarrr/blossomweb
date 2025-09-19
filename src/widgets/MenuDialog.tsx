import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { SignupDialog } from "./SignupDialog/SignupDialog";
import { SignupDialogProvider } from "@/context/signup-dialog-context";

interface MenuDialogProps {
  className?: string;
}

export const MenuDialog = ({ className }: MenuDialogProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <Image src="/menu.svg" alt="Menu" width={36} height={36} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Навигация</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/students">Ученикам</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/teachers">Преподавателям</Link>
          </DropdownMenuItem>{" "}
        </DropdownMenuGroup>
        <DropdownMenuLabel>Авторизация</DropdownMenuLabel>
        <DropdownMenuGroup>
          <SignupDialog login>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Вход
            </DropdownMenuItem>
          </SignupDialog>

          <SignupDialog>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Регистрация
            </DropdownMenuItem>
          </SignupDialog>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
