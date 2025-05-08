import type { Metadata } from "next";
import "./globals.css";
import { Locale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LocaleProvider from "./LocaleProvider";     // external file to provide locales📌📌


export const metadata: Metadata = {
  title: "Intl demo",
  description: "This is intl demo",

    other:{
      "google" : "notranslate"
    }

};

type SupportedLocale = (typeof routing.locales)[number];

interface Props {

    children : React.ReactNode;
    params : {locale : string}

}


export default function RootLayout({children, params} : Props) {

  const {locale} = params;

    if(!routing.locales.includes(locale as SupportedLocale)){
      notFound();
    }

    
    // const messages = await getMessages(locale);


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