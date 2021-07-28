import BN from 'bn.js';
import { ApiPromise } from '@polkadot/api/promise';
import { BalanceInterface } from '@polkadot/react-hooks/useBalance';
interface UseKusamaApiInterface {
    formatKsmBalance: (balance: BN | undefined) => string;
    getKusamaBalance: () => void;
    getKusamaTransferFee: (recipient: string, value: BN) => Promise<BN | null>;
    kusamaApi: ApiPromise | undefined;
    kusamaBalance: BalanceInterface | undefined;
    kusamaTransfer: (recipient: string, value: BN, onSuccess: (status: string) => void, onFail: (status: string) => void) => void;
}
export declare function formatKsmBalance(value?: BN | undefined): string;
export declare function formatStrBalance(decimals: number, value?: BN | undefined): string;
export declare const useKusamaApi: (account?: string | undefined) => UseKusamaApiInterface;
export {};
