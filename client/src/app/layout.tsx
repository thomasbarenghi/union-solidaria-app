import "./globals.scss";
import React from "react";
import Provider from "@/services/provider";
import { Toaster } from "sonner";

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <body className="">
        <Provider>
          <Toaster
            richColors
            position="bottom-left"
            toastOptions={{
              className: "max-w-[85vw] xs:max-w-none ",
            }}
          />
          {props.children}
        </Provider>
      </body>
    </html>
  );
}
