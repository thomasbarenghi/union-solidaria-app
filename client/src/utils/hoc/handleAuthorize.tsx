import Routes from "@/constants/routes";

type Props = {
  pathname: string;
  isLogged: boolean;
  setPageVisible: (arg: boolean) => void;
  router: any;
};

export const handleAuthorize = async ({
  pathname,
  isLogged,
  setPageVisible,
  router,
}: Props) => {
  setPageVisible(false);
  if (pathname.startsWith(Routes.EDIT_ACCOUNT) && !isLogged) {
    return router.push(Routes.LOGIN);
  }

  setPageVisible(true);
};
