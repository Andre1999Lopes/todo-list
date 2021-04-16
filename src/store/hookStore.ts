import { createTypedHooks } from 'easy-peasy';
import { ITaskModel } from './storeModel';

const typedHooks = createTypedHooks<ITaskModel>();

export const useStoreState = typedHooks.useStoreState;
export const useStoreActions = typedHooks.useStoreActions;
