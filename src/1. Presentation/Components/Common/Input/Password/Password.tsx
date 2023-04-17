"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

export interface IPasswordProps {
  onChange$: BehaviorSubject<string>;
  placeholder: string;
  isDisabled?: boolean;
  isValid?: boolean;
}

export const Password = ({
  onChange$,
  placeholder,
  isValid,
  isDisabled,
}: IPasswordProps) => {
  //! State
  const [value, setValue] = useState(onChange$.value);

  //! Callbacks
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange$.next(event.target.value);
    },
    [onChange$]
  );

  //! Effects
  useEffect(() => {
    const subscription = onChange$.subscribe(setValue);
    return () => subscription.unsubscribe();
  }, [onChange$, setValue]);

  return (
    <input
      type={"password"}
      value={value}
      placeholder={placeholder}
      onChange={handleOnChange}
      onBlur={handleOnChange}
      disabled={isDisabled === true}
      className={
        "bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:outline-none focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-none"
      }
      color={
        value.length === 0 ? "primary" : isValid === true ? "success" : "error"
      }
    />
  );
};

export const validatePassword = (value: string) => value.length > 5;
