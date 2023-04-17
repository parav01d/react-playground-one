import React, { PropsWithChildren } from "react";

export interface ILabelProps extends PropsWithChildren {}

export const Label = ({ children }: ILabelProps) => {
  return (
    <label className="label">
      <span className={`label-text font-thin pl-2`}>{children}</span>
    </label>
  );
};
