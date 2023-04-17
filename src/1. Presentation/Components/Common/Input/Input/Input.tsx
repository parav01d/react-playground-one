"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { BehaviorSubject, Subject } from "rxjs";

export interface IInputProps {
  onChange$: BehaviorSubject<string>;
  placeholder: string;
  isDisabled?: boolean;
  isValid?: boolean;
  onFocus$?: Subject<string>;
}

export const Input = ({
  onChange$,
  onFocus$,
  placeholder,
  isValid,
  isDisabled,
}: IInputProps) => {
  //! State
  const [value, setValue] = useState(onChange$.value);

  //! Callbacks
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange$.next(event.target.value);
    },
    [onChange$]
  );

  //! Callbacks
  const handleOnFocus = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onFocus$) {
        onFocus$.next(event.target.value);
      }
    },
    [onFocus$]
  );

  //! Effects
  useEffect(() => {
    const subscription = onChange$.subscribe(setValue);
    return () => subscription.unsubscribe();
  }, [onChange$, setValue]);

  return (
    <input
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnChange}
      onFocus={handleOnFocus}
      placeholder={placeholder}
      disabled={isDisabled === true}
      className={`bg-gray-50 border border-gray-300 text-gray-600 text-sm font-normal rounded-lg focus:outline-none focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-none`}
      color={
        isValid === undefined
          ? "primary"
          : isValid === true
          ? "success"
          : "error"
      }
    />
  );
};
