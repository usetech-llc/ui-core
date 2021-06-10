import type { Observable } from '@polkadot/x-rxjs';
export declare type ErrorType = {
    error: boolean;
    message: string;
};
export declare type UseFetchType = {
    fetchData: <T>(url: string) => Observable<T | ErrorType>;
};
export declare const useFetch: () => UseFetchType;
export default useFetch;
