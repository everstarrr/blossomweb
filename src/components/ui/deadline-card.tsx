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
    <article className="xl:rounded-[30px] rounded-2xl xl:p-[30px] p-4 bg-almost-black flex flex-col justify-between xl:h-[229px] h-[112px]">
      <div className="xl:text-[32px] xl:leading-[30px] xl:h-[19px] flex w-full justify-between">
        {week}
        {dot && (
          <div className="xl:w-[19px] xl:h-[19px] w-2.5 h-2.5 bg-accent-red rounded-full" />
        )}
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="font-extralight xl:text-2xl text-xs xl:leading-[26px]">{title}</p>
        <div className="flex flex-col gap-1.5">
          <p className="font-light xl:text-base text-[8px]">{description}</p>
          <div className="flex gap-2.5 font-extralight text-xl items-center">
            <p className="xl:p-[5px] p-0.5 xl:text-base text-[10px]">{deadline}</p>
            {!online ? (
              <div className="xl:rounded-[9px] rounded-sm xl:p-[5px] p-0.5 xl:text-base text-[10px] bg-background-2 xl:h-auto h-4">
                Offline
              </div>
            ) : (
              <div className="xl:rounded-[9px] rounded-sm xl:p-[5px] p-0.5 xl:text-base text-[10px] bg-accent-lime xl:h-auto h-4">Online</div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
