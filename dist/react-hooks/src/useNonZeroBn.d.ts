import type BN from 'bn.js';
import { FormField } from './useFormField';
export declare function useNonZeroBn(initialValue?: BN | number): FormField<BN>;
