import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  descrClassName?: string;
  href?: string;
}

export const Card = ({
  title,
  description,
  className,
  titleClassName,
  descrClassName,
  href,
}: CardProps) => {
  return (
    <Link
      href={href || "#"}
      className={cn(
        "xl:rounded-[30px] rounded-2xl xl:p-[30px] p-4 flex flex-col bg-background-2 xl:gap-5 gap-2.5",
        className
      )}
    >
      {!!title && (
        <p className={cn("xl:text-[32px] text-2xl xl:leading-[30px]", titleClassName)}>
          {title}
        </p>
      )}
      {!!description && (
        <p className={cn("font-extralight xl:text-2xl text-lg xl:leading-[26px] leading-5", descrClassName)}>{description}</p>
      )}
    </Link>
  );
};
