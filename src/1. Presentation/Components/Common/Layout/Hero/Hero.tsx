import { FunctionComponent, PropsWithChildren } from "react";

export interface IHeroProps extends PropsWithChildren {}

interface IHeroContentProps extends PropsWithChildren {}

interface IHeroComponent {
  Content: FunctionComponent<IHeroContentProps>;
}

export const Hero: FunctionComponent<IHeroProps> & IHeroComponent = ({
  children,
}) => (
  <div
    className={"w-full max-w-xl shadow-gray-400 shadow-sm p-6 m-3 rounded-md"}
  >
    {children}
  </div>
);

const Content: FunctionComponent<IHeroContentProps> = ({ children }) => (
  <div className={""}>{children}</div>
);

Hero.Content = Content;
