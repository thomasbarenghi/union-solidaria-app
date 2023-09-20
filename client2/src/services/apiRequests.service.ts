import axios, { AxiosResponse } from "axios";
import { serverUrl } from "@/utils/constants/env.const";

export async function putRequest(
  url: string,
  data: any,
  contentType: string,
): Promise<any> {
  try {
    const response: AxiosResponse = await axios.put(
      `${serverUrl}${url}`,
      data,
      {
        headers: {
          "Content-Type": contentType,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function postRequest(url: string, body: any = {}): Promise<any> {
  try {
    const response: AxiosResponse = await axios.post(
      `${serverUrl}${url}`,
      body,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getRequest(url: string, headers: any = {}): Promise<any> {
  try {
    const response: AxiosResponse = await axios.get(`${serverUrl}${url}`, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteRequest(
  url: string,
  headers: any = {},
): Promise<any> {
  try {
    const response: AxiosResponse = await axios.delete(`${serverUrl}${url}`, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
