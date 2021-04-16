import {action} from 'easy-peasy';
import ITaskStore from './ITaskStore';

const taskStore:ITaskStore = {
	finished: false,
	setFinished:action((state, payload) => {
		state.finished = payload;
	})
}

export default taskStore;
