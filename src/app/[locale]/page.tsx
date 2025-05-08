"use client"

import { useTranslations } from "next-intl";

// import himessage from "../messages/hi.json";

export default function Home() {


    const t = useTranslations();
    // console.log(himessage);

  return (

    <div className="flex flex-col items-center justify-center mt-[100px] text-2xl">
      <h1 className="text-3xl font-semibold underline underline-offset-4"> {t("title")} </h1>
      <p className="mt-[60px] px-10 py-5 font-serif" style={{border:"0px solid white"}}> {t("content")} </p>
    </div>

  );
}
