"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { debounce } from "lodash";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { AuthClass } from "@/types";
import {
  currentAuthSelector,
  currentUserSelector,
} from "@/redux/selectors/users";
import { verifySession } from "@/utils/hoc/verifySession";
import { handleAuthorize } from "@/utils/hoc/handleAuthorize";

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
  const [pageVisible, setPageVisible] = useState(false);
  const userId = (searchParams.get("userId") as string) || currentUser?.id;
  const sessionId =
    (searchParams.get("sessionId") as string) || currentAuth?.sessionId;

  const setAuthFn = async () => {
    const authObj = new AuthClass(true, sessionId as string);
    verifySession({
      data: authObj,
      dispatch,
      setPageVisible,
      userId,
      router,
      pathname,
    });
  };

  const systemHoc = () => {
    if (currentAuth?.isLogged) {
      verifySession({
        data: currentAuth,
        dispatch,
        setPageVisible,
        userId,
        router,
        pathname,
      });
    } else if (!currentAuth?.isLogged && userId && sessionId) {
      setAuthFn();
    } else {
      console.log("emitimos false en sechoc", currentAuth?.isLogged, pathname);
      handleAuthorize({
        pathname,
        isLogged: currentAuth?.isLogged,
        setPageVisible,
              router,
      });
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

  if (!pageVisible) return null;
  return <>{children}</>;
};

export default SecurityHOC;
