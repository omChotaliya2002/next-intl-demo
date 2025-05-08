import type { Metadata } from "next";
import "./globals.css";
import { Locale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LocaleProvider from "./LocaleProvider";     // external file to provide locales📌📌
import React from "react";


export const metadata: Metadata = {
  title: "Intl demo",
  description: "This is intl demo",

    other:{
      "google" : "notranslate"
    }

};


export default function RootLayout({children, params} : {children : React.ReactNode; params : {locale : string}}) {

  const {locale} = params;

    if(!routing.locales.includes(locale as (typeof routing.locales)[number])){
      notFound();
    }


  return (
    <html lang={locale} className="notranslate">

      <head>

          <meta name="google" content="notranslate"/>

      </head>

      <body translate="no">
            <LocaleProvider locale={locale}>
              {children}
            </LocaleProvider>
      </body>
    </html>
  );
}