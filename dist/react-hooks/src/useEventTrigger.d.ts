import type { AugmentedEvent } from '@polkadot/api/types';
declare type EventCheck = AugmentedEvent<'promise'> | string | false | undefined | null;
export declare function useEventTrigger(checks: EventCheck[]): string;
export {};
