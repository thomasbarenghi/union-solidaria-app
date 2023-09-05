import { setAuth, setSession, resetReducer } from "@/redux/slices/authSession";
import { AuthClass } from "@/types";
import { axiosGetter } from "@/utils/requests/axios";
import Endpoints from "@/constants/endpoints";
import { handleAuthorize } from "@/utils/hoc/handleAuthorize";
import { useRouter } from "next/navigation";

type Props = {
  data: AuthClass;
  dispatch: any;
  setPageVisible: any;
  userId: string;
  router: ReturnType<typeof useRouter>;
  pathname: string;
};

export const verifySession = async ({
  data,
  dispatch,
  setPageVisible,
  userId,
  router,
  pathname,
}: Props) => {
  try {
    if (data.isLogged && userId && data.sessionId) {
      await axiosGetter({
        url: Endpoints.VERIFY,
        headers: {
          sessionId: data.sessionId,
        },
      });
      dispatch(setAuth(data));
      await dispatch(setSession(userId as string));
      handleAuthorize({
        pathname,
        isLogged: true,
        setPageVisible,

        router,
      });
    }
  } catch (error: any) {
    console.log(error.message);
    handleAuthorize({
      pathname,
      isLogged: false,
      setPageVisible,
      router,
    });
  }
};
