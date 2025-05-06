

import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware({
  locales : routing.locales,
  defaultLocale : routing.defaultLocale,
});


export const config = {
  matcher : ["/", "/(en|es|hi)/:path*"],
};

// export const config = {

    // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)


//   matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
// }