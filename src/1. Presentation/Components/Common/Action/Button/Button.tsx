import { PropsWithChildren } from "react";
import { Subject } from "rxjs";

export interface IButtonProps<T> extends PropsWithChildren {
  subject: Subject<T>;
  value?: T;
  type:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "ghost";
  isDisabled?: boolean;
}

export const Button = <T,>({
  children,
  subject,
  value,
  isDisabled,
}: IButtonProps<T>) => (
  <button
    className={`w-full bg-white text-gray-500 py-2 px-4 border border-gray-300 rounded-md`}
    disabled={isDisabled}
    onClick={() => subject.next(value!)}
  >
    {children}
  </button>
);
