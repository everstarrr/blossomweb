import { cn } from "@/lib/utils";

interface CardProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export const Card = ({ title, description, className, titleClassName }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-[30px] p-[30px] flex flex-col bg-background-2 gap-5",
        className
      )}
    >
      {!!title && <p className={cn("text-[32px] leading-[30px]", titleClassName)}>{title}</p>}
      {!!description && (
        <p className="font-extralight text-2xl leading-[26px]">{description}</p>
      )}
    </div>
  );
};
