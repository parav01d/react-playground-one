import { FunctionComponent, PropsWithChildren } from "react";

export interface IVerticalProps extends PropsWithChildren {}

export const Vertical: FunctionComponent<IVerticalProps> = ({ children }) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};
