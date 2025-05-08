

import { ReactNode, use } from "react";
import { NextIntlClientProvider } from "next-intl";

async function getMessage (locale : string) {

    try{

        return (await import(`../../locales/${locale}.json`)).default;

    }

    catch(error){

            console.error("Missing messages for locale", locale);
            return{};

    }
}


export default function LocaleProvider ({children,locale} : {children : ReactNode; locale : string}) {

    const messages = use(getMessage(locale));       // hook into async call 📌

    return(

        <NextIntlClientProvider locale={locale} messages={messages}>

                {children}

        </NextIntlClientProvider>

    );
}