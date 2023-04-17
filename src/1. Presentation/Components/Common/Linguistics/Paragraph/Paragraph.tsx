import { FunctionComponent, PropsWithChildren } from "react";

export interface IParagraphProps extends PropsWithChildren {}

export const Paragraph: FunctionComponent<IParagraphProps> = ({ children }) => {
  return <p className={"text-sm font-thin"}>{children}</p>;
};
