import { FunctionComponent, PropsWithChildren } from "react";

export interface ICenteredProps extends PropsWithChildren {}

export const Centered: FunctionComponent<ICenteredProps> = ({ children }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
};
