import { useEffect, ReactNode } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { getCurrentUser } from "@/redux/slices/users";
import { currentUserSelector } from "@/redux/selectors/users";
import {
  getCurrentInitiative,
  getInitiatives,
} from "@/redux/slices/initiatives";
import { usePathname } from "next/navigation";
import {
  currentInitiativeSelector,
  initiativesSelector,
} from "@/redux/selectors/initiatives";

type Props = {
  children: ReactNode;
};

export default function Querier({ children }: Props) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  //Users
  const currentUser = useAppSelector(currentUserSelector);
  const username = pathname.slice(2) ?? currentUser?.username;

  useEffect(() => {
    if (!pathname.startsWith("/@")) return;
    dispatch(getCurrentUser(username));
  }, [username]);

  //Initiatives
  useEffect(() => {
    dispatch(getInitiatives());
  }, []);

  const currentInitiative = useAppSelector(currentInitiativeSelector);
  const initiativeId =
    pathname.replace("/initiatives/", "") ?? currentInitiative?.id;
  useEffect(() => {
    if (!pathname.startsWith("/initiatives/")) return;
    dispatch(getCurrentInitiative(initiativeId));
  }, [initiativeId]);

  return <div>{children}</div>;
}
