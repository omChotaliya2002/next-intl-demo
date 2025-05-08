

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({

    locales : ["en", "es", "hi"] as const,      // 👈 Tells TS to treat them as literal types
    defaultLocale : "en",
});