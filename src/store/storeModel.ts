import task from './task';
import ITaskStore from './task/ITaskStore';

interface ITaskModel {
	taskStore: ITaskStore;
};

const TaskModel:ITaskModel = {
	taskStore: task,
}

export { TaskModel };
export type { ITaskModel };