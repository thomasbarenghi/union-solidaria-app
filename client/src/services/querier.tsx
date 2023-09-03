import { useEffect, ReactNode } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { getCurrentUser } from "@/redux/slices/users";
import { currentUserSelector } from "@/redux/selectors/users";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function Querier({ children }: Props) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  console.log(pathname.slice(1));
  const currentUser = useAppSelector(currentUserSelector);
  const username = pathname.slice(1) ?? currentUser?.username;

  useEffect(() => {
    dispatch(getCurrentUser(username));
  }, [username]);
  return <div>{children}</div>;
}
