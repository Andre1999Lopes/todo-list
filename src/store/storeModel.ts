import block from './blocks';
import IBlockStore from './blocks/IBlockStore';

interface IBlockModel {
	taskStore: IBlockStore;
};

const BlockModel:IBlockModel = {
	taskStore: block,
}

export { BlockModel };
export type { IBlockModel };