import { ReactNode, useEffect, useMemo } from "react";

type Props = {
  children: ReactNode;
};

export default function Querier({ children }: Props) {
  return <div>{children}</div>;
}
