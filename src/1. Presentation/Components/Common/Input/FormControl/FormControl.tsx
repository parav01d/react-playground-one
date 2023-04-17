import React, { FunctionComponent, PropsWithChildren } from "react";

export interface IFormControlProps extends PropsWithChildren {}

interface IGroupComponent {
  Group: FunctionComponent<IGroupProps>;
  Control: FunctionComponent<IControlProps>;
}
export const FormControl: FunctionComponent<IFormControlProps> &
  IGroupComponent = ({ children }: IFormControlProps) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

interface IGroupProps extends PropsWithChildren {}

const Group = ({ children }: IGroupProps) => {
  return <div className="flex flex-col">{children}</div>;
};

interface IControlProps extends PropsWithChildren {}

const Control = ({ children }: IControlProps) => {
  return <div className="flex flex-col mt-3">{children}</div>;
};

FormControl.Group = Group;
FormControl.Control = Control;
