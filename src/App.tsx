import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Block from './components/Block';
import Header from './components/Header';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from './store/hookStore';
import { ITask } from './store/blocks/IBlockStore';

const StyledSection = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

function App() {
  const blocks = useStoreState(state => state.taskStore.blocks);
	const addBlockState = useStoreActions(actions => actions.taskStore.addBlock);
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const addBlock = () => {
    const blockName = inputRef.current.value;

		if (blockName) {
			inputRef.current.value = '';
			const newBlock = {
				name: blockName,
				tasks: Array<ITask>()
			}
			console.log(newBlock);
			addBlockState(newBlock);
		}
  }

	const handleKeyPress = (e:React.KeyboardEvent) => {
		if (e.key === 'Enter'){
			addBlock();
		}
	}

  return (
    <>
      <Header />
      <Input onKeyPress={handleKeyPress} ref={inputRef} placeholder={'Nome do bloco de tarefas'} />
      <Button onClick={addBlock}>Adicionar bloco</Button>
			<StyledSection>
				{
					blocks.map((block, index) => 
						<Block index={index} name={block.name} />
					)
				}
			</StyledSection>
    </>
  );
}

export default App;
