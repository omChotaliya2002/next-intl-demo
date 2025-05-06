

import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { error } from "console";

export default getRequestConfig(async ({requestLocale})=> {

    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requestLocale)
    ? requestLocale : routing.defaultLocale;


    try {
        const messages = (await import(`../locales/${locale}.json`)).default;

        return{
            locale,
            messages,
        }
    }
    catch(error){

            console.error("failed to load message for", locale,error);
            throw error;

    }
});
