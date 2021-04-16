import { createStore } from 'easy-peasy';
import { TaskModel } from './storeModel';

const store = createStore(TaskModel);

export default store;