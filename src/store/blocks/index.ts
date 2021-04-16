import { action } from 'easy-peasy';
import IBlockStore, { IBlock } from './IBlockStore';

const blockStore:IBlockStore = {
	blocks: Array<IBlock>(),
	addTask: action((state, payload) => {
		state.blocks[payload.blockIndex].tasks.push(payload);
	}),
	addBlock: action((state, payload) => {
		state.blocks.push(payload);
	}),
	removeTask: action((state, payload) => {
		state.blocks[payload.blockIndex].tasks.splice(payload.taskIndex, 1);
	}),
	removeBlock: action((state, payload) => {
		state.blocks.splice(payload, 1);
	}),
	setTaskFinished: action((state, payload) => {
		state.blocks[payload.blockIndex].tasks[payload.taskIndex].finished = !payload.isFinished;
	})
}

export default blockStore;
