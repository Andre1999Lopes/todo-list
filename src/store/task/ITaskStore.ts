import { Action } from 'easy-peasy';

export default interface ITaskStore {
	finished: boolean;
	setFinished: Action<ITaskStore, boolean>;
}