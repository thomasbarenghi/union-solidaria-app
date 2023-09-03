"use client";
import { ReactNode, useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { debounce } from "lodash";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { setAuth, setSession, resetReducer } from "@/redux/slices/authSession";
import { AuthClass } from "@/types";
import { axiosGetter } from "@/utils/requests/axios";
import Endpoints from "@/constants/endpoints";
import {
  currentAuthSelector,
  currentUserSelector,
} from "@/redux/selectors/users";

type Props = {
  children: ReactNode;
};

const SecurityHOC: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUser = useAppSelector(currentUserSelector);
  const currentAuth = useAppSelector(currentAuthSelector);
  const userId = (searchParams.get("userId") as string) || currentUser?.id;
  const sessionId =
    (searchParams.get("sessionId") as string) || currentAuth?.sessionId;

  const verifySession = async (data: AuthClass) => {
    console.log("Verificando sesión", data), userId;
    try {
      if (data.isLogged && userId && data.sessionId) {
        const res = await axiosGetter({
          url: Endpoints.VERIFY,
          headers: {
            sessionId: data.sessionId,
          },
        });

        console.log("res", res);

        dispatch(setAuth(data));
        await dispatch(setSession(userId as string));
        // } else {
        //   dispatch(resetReducer());
        //   console.log("Debes iniciar sesión primero");
      }
    } catch (error: any) {
      console.log(error.message, data, userId);
      dispatch(resetReducer());
      alert("Error al verificar la sesión");
      //router.push("/");
    }
  };

  const setAuthFn = async () => {
    const authObj = new AuthClass(true, sessionId as string);
    verifySession(authObj);
  };

  const systemHoc = () => {
    if (currentAuth?.isLogged) {
      verifySession(currentAuth);
    } else if (!currentAuth?.isLogged && userId && sessionId) {
      setAuthFn();
    } else {
      router.push("/");
    }
  };

  const delayedSystemStart = useMemo(
    () => debounce(() => systemHoc(), 500),
    [pathname, userId, currentAuth?.isLogged, userId, searchParams, sessionId]
  );

  useEffect(() => {
    const cancelDebounce = () => {
      delayedSystemStart.cancel();
    };
    delayedSystemStart();
    return cancelDebounce;
  }, [delayedSystemStart]);

  if (!currentAuth?.isLogged || currentAuth?.isLogged == undefined || !userId) {
    return null;
  } else {
    return <>{children}</>;
  }
};

export default SecurityHOC;
