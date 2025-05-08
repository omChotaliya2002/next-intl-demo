import React from "react";
import "./globals2.css";

export default function RootLayout({children,} : {children : React.ReactNode})
{
        return(

            <html lang="en">

                <body>
                    {children}
                </body>
                
            </html>
        );
}
