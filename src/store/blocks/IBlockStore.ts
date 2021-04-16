import { Action } from 'easy-peasy';

export interface ITask {
	blockIndex: number;
	name: string;
	urgent: boolean;
	finished: boolean;
}

export interface IBlock {
	name: string;
	tasks: ITask[];
}

interface IRemoveTask {
	blockIndex: number;
	taskIndex: number;
}

interface ISetTaskFinished {
	isFinished: boolean;
	blockIndex: number;
	taskIndex: number;
}

export default interface IBlockStore {
	blocks: IBlock[];
	addTask: Action<IBlockStore, ITask>;
	addBlock: Action<IBlockStore, IBlock>;
	removeTask: Action<IBlockStore, IRemoveTask>;
	removeBlock: Action<IBlockStore, number>;
	setTaskFinished: Action<IBlockStore, ISetTaskFinished>;
}