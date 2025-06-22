"use client";

import { programmingData, uxuiData } from "@/data/mainData";
import { Switch } from "../ui/switch";
import { useState } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const CourseSwitcher = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={cn("flex flex-col gap-5 relative xl:h-[610px]", !checked ? "h-[890px]" : "h-[920px]")}>
      <div className="flex gap-5 items-center font-defectica text-[64px]">
        <Switch onCheckedChange={(value) => setChecked(value)} />
        <p className="leading-[45px] translate-y-2">UX/UI</p>
      </div>
      <div className="relative">
        <div
          className={cn(
            "flex flex-col gap-12 absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100",
            checked && "opacity-0"
          )}
        >
          <div className="flex gap-5 xl:flex-row flex-col">
            {uxuiData.map((item, index) => (
              <Card
                key={`uxui-${index}`}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-[40px] font-defectica leading-7">
              ПРЕПОДАВАТЕЛЬ
            </h3>
            <div className="flex gap-5 xl:flex-row flex-col">
              <Image
                src="/yulya.png"
                alt="Yulya"
                width={203}
                height={203}
                className="rounded-full xl:h-[203px] xl:w-[203px] h-[152px] w-[152px] xl:self-auto self-center"
              />
              <div className="flex flex-col justify-center xl:gap-[45px] gap-2.5">
                <p className="font-defectica xl:text-[40px] text-3xl">ЮЛИЯ ЛЕОКИНЕ</p>
                <p className="font-extralight xl:text-2xl text-lg max-w-[540px] xl:leading-[26px] leading-5">
                  UX/UI Дизайнер и самый красивый преподаватель в ИТМО
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col gap-12 absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0",
            checked && "opacity-100"
          )}
        >
          <div className="flex gap-5 xl:flex-row flex-col">
            {programmingData.map((item, index) => (
              <Card
                key={`prog-${index}`}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-[40px] font-defectica leading-7">
              ПРЕПОДАВАТЕЛЬ
            </h3>
            <div className="flex gap-5 xl:flex-row flex-col">
              <Image
                src="/mihail.png"
                alt="Mihail"
                width={203}
                height={203}
                className="rounded-full xl:h-[203px] xl:w-[203px] h-[152px] w-[152px] xl:self-auto self-center"
              />
              <div className="flex flex-col justify-center xl:gap-[45px] gap-2.5">
                <p className="font-defectica xl:text-[40px] text-3xl">МИХАИЛ КУЧИН</p>
                <p className="font-extralight xl:text-2xl text-lg max-w-[540px] xl:leading-[26px] leading-5">
                  CEO студии M18, активный участник IT-коммьюнити
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
