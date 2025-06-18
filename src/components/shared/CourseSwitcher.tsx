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
    <div className="flex flex-col gap-5 relative h-[610px]">
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
          <div className="flex gap-5">
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
            <div className="flex gap-5">
              <Image
                src="/yulya.png"
                alt="Yulya"
                width={203}
                height={203}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center gap-[45px]">
                <p className="font-defectica text-[40px]">ЮЛИЯ ЛЕОКИНЕ</p>
                <p className="font-extralight text-2xl max-w-[540px] leading-[26px]">
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
          <div className="flex gap-5">
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
            <div className="flex gap-5">
              <Image
                src="/mihail.png"
                alt="Mihail"
                width={203}
                height={203}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center gap-[45px]">
                <p className="font-defectica text-[40px]">МИХАИЛ КУЧИН</p>
                <p className="font-extralight text-2xl max-w-[540px] leading-[26px]">
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
