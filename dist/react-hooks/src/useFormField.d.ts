export declare type FormField<T> = [
    T | null,
    boolean,
    (_?: T | null) => void
];
declare type ValidateFn<T> = (_: T) => boolean;
export declare function useFormField<T>(defaultValue: T | null, validate?: ValidateFn<T>): FormField<T>;
export {};
