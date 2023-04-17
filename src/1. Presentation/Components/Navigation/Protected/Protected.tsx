"use client";

import { useAuthenticatedUser } from "../../../Flux/Selector";
import { useRouter } from "next/navigation";
import { FunctionComponent, PropsWithChildren } from "react";

export interface IProtectedProps extends PropsWithChildren {}

export const Protected: FunctionComponent<IProtectedProps> = ({ children }) => {
  const router = useRouter();
  const authenticatedUser = useAuthenticatedUser();

  console.log(authenticatedUser);

  if (!authenticatedUser) {
    router.push("/");
  }

  return <div>{children}</div>;
};
