"use client";
import { ReactNode, useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { debounce } from "lodash";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { setAuth, setSession, resetReducer } from "@/redux/slices/authSession";
import { AuthClass, UserClass } from "@/types";
import { VERIFY_SESSION } from "@/graphql/queries";
import { clientQuerier } from "@/utils/requests";

type Props = {
  children: ReactNode;
};

const SecurityHOC: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {
    session: { current: sSession },
    auth: sAuth,
  } = useAppSelector((state) => state.authSession);

  const loginMethodQy = searchParams.get("loginMethod");
  const userIdQy = searchParams.get("id");
  const statusQy = searchParams.get("status");
  const sessionQy = searchParams.get("session");

  const session = UserClass.deserialize(sSession);
  const auth = AuthClass.deserialize(sAuth);
  const userId = session?.getId() || (userIdQy ?? "");

  const verifySession = async (data: AuthClass) => {
    try {
      if (data.isLogged && userId) {
        const { data: verifData, errors } = await clientQuerier(
          VERIFY_SESSION,
          {
            userId: userId,
          },
        );

        if (verifData.verifySession === true) {
          dispatch(setAuth(data));
          await dispatch(setSession(userId as string));
        } else {
          console.log("Debes iniciar sesión primero");
          dispatch(resetReducer());
        }
      } else {
        console.log("Debes iniciar sesión primero");
      }
    } catch (error) {
      console.error(error);
      dispatch(resetReducer());
      alert("Error al verificar la sesión");
      router.push("/");
    }
  };

  const setAuthFn = async () => {
    const authObj = new AuthClass(
      statusQy === "ok" ? true : false,
      loginMethodQy as string,
      sessionQy as string,
    );

    verifySession(authObj);
  };

  const systemHoc = () => {
    if (auth?.getIsLogged()) {
      verifySession(auth);
    } else if (
      !auth?.isLogged &&
      loginMethodQy &&
      userIdQy &&
      statusQy &&
      sessionQy
    ) {
      setAuthFn();
    } else {
      router.push("/");
    }
  };

  const delayedSystemStart = useMemo(
    () => debounce(() => systemHoc(), 500),
    [
      pathname,
      userId,
      auth?.getIsLogged(),
      loginMethodQy,
      userIdQy,
      statusQy,
      searchParams,
      session?.getId(),
    ],
  );

  useEffect(() => {
    const cancelDebounce = () => {
      delayedSystemStart.cancel();
    };
    delayedSystemStart();
    return cancelDebounce;
  }, [delayedSystemStart]);

  // Rutas protegidas
  console.log(auth?.getIsLogged(), userId, auth);
  if (!auth?.getIsLogged() || auth?.getIsLogged() == undefined || !userId) {
    return null;
  } else {
    return <main>{children}</main>;
  }
};

export default SecurityHOC;
