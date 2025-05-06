"use client"

import { useTranslations } from "next-intl";

// import himessage from "../messages/hi.json";

export default function Home() {


    const t = useTranslations();
    // console.log(himessage);

  return (

    <div className="flex items-center justify-center mt-[100px] text-2xl">
      <h1> {t("title")} </h1>
    </div>

  );
}
