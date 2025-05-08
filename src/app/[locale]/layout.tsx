import type { Metadata } from "next";
import "./globals.css";
import { Locale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LocaleProvider from "./LocaleProvider";     // external file to provide locales📌📌
import React from "react";


// Forces Next.js to infer correct params type for [locale]
export async function generateMetadata({ params }: { params: { locale: string } }) {
  return {};
}


    type SupportedLocale = (typeof routing.locales)[number];



export default function RootLayout({children, params} : {children : React.ReactNode; params : {locale : SupportedLocale}}) {

  const {locale} = params;

    if(!routing.locales.includes(locale as SupportedLocale)){
     console.warn("Invalid locale:", locale);
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