import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";


export const metadata: Metadata = {
  title: "Intl demo",
  description: "This is intl demo",

    other:{
      "google" : "notranslate"
    }

};

interface Props {

    children : React.ReactNode;
    params : {locale : any}

}

async function getMessages(locale : string) {     //getMessage IS DEFAULT FUNCTION..👍👍

    try{
      return(await import(`../../locales/${locale}.json`)).default;
    }
    catch(error){
      console.error("Missing messages for locale : ", locale);
      notFound();
    }

}

export default async function RootLayout({children, params} : Props) {

  const {locale} = await params;

    if(!routing.locales.includes(locale)){
      notFound();
    }

    
    const messages = await getMessages(locale);


  return (
    <html lang={locale} className="notranslate">

      <head>

          <meta name="google" content="notranslate"/>

      </head>

      <body translate="no">
          <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}