import axios from "axios";
import { serverUrl } from "@/constants/config";

export const axiosPutter = async (url: string, data: any, cType: any) => {
  const { data: res } = await axios.put(serverUrl + url, data, {
    headers: {
      "Content-Type": cType,
    },
  });

  return res;
};

type axiosPoster = {
  url: any;
  body?: any;
};
export const axiosPoster = async ({ url, body }: axiosPoster) => {
  console.log("axiosPoster body", body);
  const { data: res } = await axios.post(serverUrl + url, body || {});
console.log("axiosPoster res", res);
  return res as any;
};

type axiosGetter = {
  url: any;
  headers?: any;
};

export const axiosGetter = async ({ url, headers }: axiosGetter) => {
  console.log("axiosGetter headers", headers);
  const { data: res } = await axios.get(serverUrl + url, {
    headers: headers || {},
  });

  return res;
};

type axiosDeleter = {
  url: any;
  headers?: any;
};

export const axiosDeleter = async ({ url, headers }: axiosDeleter) => {
  const { data: res } = await axios.delete(serverUrl + url, {
    headers: headers,
  });

  return res;
};

