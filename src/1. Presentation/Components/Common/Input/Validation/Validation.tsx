import React, { PropsWithChildren } from "react";

export interface IValidationProps extends PropsWithChildren {
  isValid: boolean;
}

export const Validation = ({ children, isValid }: IValidationProps) => {
  return !isValid ? (
    <span className={`font-thin text-xs pl-2 text-red-400`}>{children}</span>
  ) : null;
};
