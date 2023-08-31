import { ReactNode, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
type Props = {
  children: ReactNode;
};

export default function RedirectProvider({ children }: Props) {
  const router = useRouter();
  const currentRoute = useAppSelector((state) => state.system.currentRoute);

  useEffect(() => {
    router.push(currentRoute);
  }, [currentRoute]);

  return <div>{children}</div>;
}
