import { createTypedHooks } from 'easy-peasy';
import { IBlockModel } from './storeModel';

const typedHooks = createTypedHooks<IBlockModel>();

export const useStoreState = typedHooks.useStoreState;
export const useStoreActions = typedHooks.useStoreActions;
