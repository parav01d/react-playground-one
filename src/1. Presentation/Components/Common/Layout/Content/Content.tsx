import { FunctionComponent, PropsWithChildren } from "react";

export interface IContentProps extends PropsWithChildren {}

export const Content: FunctionComponent<IContentProps> = ({ children }) => {
  return <main className="w-full min-h-full">{children}</main>;
};
