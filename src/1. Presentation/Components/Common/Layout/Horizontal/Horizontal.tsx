import { FunctionComponent, PropsWithChildren } from "react";

export interface IHorizontalProps extends PropsWithChildren {}

export const Horizontal: FunctionComponent<IHorizontalProps> = ({
  children,
}) => {
  return <div className="flex flex-row gap-3">{children}</div>;
};
