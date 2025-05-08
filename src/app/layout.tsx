import React from "react";
import "./globals2.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intl demo",
    description: "This is intl demo",
  
      other:{
        "google" : "notranslate"
      }
  
  };

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
