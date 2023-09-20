"use client";
import { SWRConfig } from "swr";

export default function SWRProvider({ children }: React.PropsWithChildren<{}>) {
  return <SWRConfig>{children}</SWRConfig>;
}
