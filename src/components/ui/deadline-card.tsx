interface DeadlineCardProps {
  week: string;
  title: string;
  description: string;
  deadline: string;
  online: boolean;
  dot: boolean;
}

export const DeadlineCard = ({
  week,
  title,
  description,
  deadline,
  online,
  dot,
}: DeadlineCardProps) => {
  return (
    <div className="rounded-[30px] p-[30px] bg-almost-black flex flex-col justify-between h-[229px]">
      <div className="text-[32px] leading-[30px] h-[19px] flex w-full justify-between">
        {week}
        {dot && (
          <div className="w-[19px] h-[19px] bg-accent-red rounded-full" />
        )}
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="font-extralight text-2xl leading-[26px]">{title}</p>
        <div className="flex flex-col gap-1.5">
          <p className="font-light">{description}</p>
          <div className="flex gap-2.5 font-extralight text-xl">
            <p className="p-[5px]">{deadline}</p>
            {!online ? (
              <div className="rounded-[9px] p-[5px] bg-background-2">
                Offline
              </div>
            ) : (
              <div className="rounded-[9px] p-[5px] bg-accent-lime">Online</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
