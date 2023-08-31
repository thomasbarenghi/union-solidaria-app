import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "...",
  description: "...",
  themeColor: "#166534",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
