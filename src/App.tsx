import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Block from './components/Block';
import Header from './components/Header';
import styled from 'styled-components';

const StyledSection = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

function App() {
  const [blocks, setBlocks] = useState(Array<string>());
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const addBlock = () => {
    const blockName = inputRef.current.value;
		if (blockName) {
			inputRef.current.value = '';
			blocks.push(blockName);
			console.log(blocks);
			setBlocks([...blocks]);
		}
  }

  return (
    <>
      <Header />
      <Input ref={inputRef} placeholder={'Nome do bloco de tarefas'}></Input>
      <Button onClick={() => addBlock()}>Adicionar bloco</Button>
			<StyledSection>
				{
					blocks.map((blockTitle, index) => 
						<Block index={index} blocks={blocks} setBlocks={setBlocks} title={blockTitle} />
					)
				}
			</StyledSection>
    </>
  );
}

export default App;
