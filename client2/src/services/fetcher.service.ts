import { serverUrl } from "@/utils/constants/env.const";

export const fetcher = (url: string) =>
  fetch(`${serverUrl}${url}`).then((res) => res.json());
