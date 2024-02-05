import Button from "@/components/shared/Button";
import NonErrorLayout from "@/layouts/NonErrorLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shikshya | Features",
};

export default function Page() {
  return (
    <NonErrorLayout>
      <div className="w-full rg:h-[600px] md:h-[500px] h-[400px] gap-4 flex flex-col bg-header-gradient rg:pt-[100px] sm:pt-[0px] rg:pb-12 sm:pb-8 xl:px-[12%] lg:px-[7%] px-[5%] items-start justify-center md:mt-0 mt-12">
        <p className="text-brand-color font-regular rg:text-xs text-xxs">
          Features of Shikshya
        </p>
        <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg text-rg leading-[130%]">
          Features: Shikshya
        </h2>
        <p className="text-text-light rg:text-sm md:text-xs xs:text-xxs md:w-2/3 w-[80%]">
          Welcome to our Help Center! We're here to provide you with the
          information and support you need to make the most of our services.{" "}
        </p>
        <Button
          title={"Explore Our Impact "}
          className={"md:w-[180px]"}
        ></Button>
      </div>
      <div className="flex flex-col gap-3 py-12 items-center xl:px-[12%] lg:px-[7%] px-[5%] bg-background-color">
        <h2 className="text-text-dark text-lg font-semibold">Automation</h2>
        <p className="sm:text-xs text-xxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          At Shikshya, we are on a mission to make a positive and lasting impact
          on society. Our core values are the compass that guides our journey
          toward a better world.
        </p>
      </div>
    </NonErrorLayout>
  );
}
