export * from "./Input/Input";
export * from "./Label/Label";
export * from "./Password/Password";
export * from "./FormControl/FormControl";
export * from "./Validation/Validation";

export const validateIsLongerThan =
  (limit: number) => (value: { length: number }) =>
    value.length > limit;

export const validateEmail = (mail: string) =>
  /^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,3})+$/.test(mail);
