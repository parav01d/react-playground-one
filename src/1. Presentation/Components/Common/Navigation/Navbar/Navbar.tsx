import { FunctionComponent, PropsWithChildren } from "react";

export interface INavbarProps extends PropsWithChildren {}

export const Navbar: FunctionComponent<INavbarProps> = ({ children }) => {
  return (
    <div className="p-3">
      <div className="w-full h-12 shadow-sm shadow-gray-400 rounded-xl flex flex-row items-center px-6 justify-between">
        {children}
      </div>
    </div>
  );
};
