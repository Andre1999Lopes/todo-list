import React, { useRef } from 'react';
import { useStoreState, useStoreActions } from '../../store/hookStore';
import styled from 'styled-components';
import Task from '../Task';

const OptionsDiv = styled.div`
	display: block;
	opacity: 1;
	background-color: #ffffff;
	padding: 2px;
	border-radius: 5px;
	z-index: 2;
	position: absolute;
	top: -20%;
	right: -40%;
	margin: 10px 0 0 0;
	user-select: none;
	transition: all 100ms ease-out;

	p {
		border-radius: 5px;
		cursor: pointer;
		padding: 2px;
		transition: all 100ms ease-out;
	}

	p:hover {
		background-color: #3D4F51;
		color: white;
	}
`;

const NewTaskDiv = styled.div`
	position: absolute;
	background-color: #ffffff;
	display: block;
	margin-left: auto;
	margin-right: auto;
	opacity: 1;
	padding: 2px;
	border-radius: 5px;
	z-index: 1;
	margin: 5px 0 0 0;
	user-select: none;
`;

const StyledSelect = styled.select`
	display: block;
	outline: none;
	margin: 5px auto;
	font-family: 'comfortaa';
	font-size: 105%;
`;

const StyledInput = styled.input`
	color: black;
	background-color: #d6d6d6;
	display: block;
	margin-left: auto;
	margin-right: auto;
	outline: none;
	border: none;
	border-radius: 5px;
	font-family: 'comfortaa';
	transition: background-color 100ms linear;
	font-size: 120%;

	:focus {
		background-color: #b8b8b8;
	}
`;

const StyledButton = styled.p`
	display: block;
	background-color: #253031;
	color: white;
	width: 50%;
	text-align: center;
	padding: 5px;
	margin-top: 10px;
	margin-left: auto;
	margin-right: auto;
	font-size: 105%;
	font-family: 'comfortaa';
	border-radius: 10px;
	transition: background-color 100ms linear;
	user-select: none;

	:hover {
		cursor: pointer;
		background-color: #3D4F51;
	}
`;

const StyledDiv = styled.div`
	@font-face{
		font-family: 'comfortaa';
		src: url('../../fonts/Comfortaa-Regular.ttf');
	}

	font-family: 'comfortaa';
	position: relative;
	height: 100%;
	width: 20%;
	background-color: rgba(0, 238, 255, 0.3);
	padding: 5px;
	margin: 10px;
	word-wrap: break-word;

	& h1 {
		margin: 0;
	}

	& span {
		position: relative;
		float: right;
    cursor: pointer;
		user-select: none;
	}

	& .inv {
		top: -100%;
		opacity: 0;
		visibility: hidden;
	}
`;

interface IProps {
	index: number;
	name: string;
}

function Block({ index, name }:IProps ) {
	const tasks = useStoreState(state => state.taskStore.blocks[index].tasks);
	const addTaskAction = useStoreActions(actions => actions.taskStore.addTask);
	const deleteBlock = useStoreActions(actions => actions.taskStore.removeBlock);
	const blockIndex = index;

	const blockOptionsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const newTaskOptionsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const selectRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
	const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	const handleNewTaskClick = () => {
		newTaskOptionsRef.current.classList.toggle('inv');
		blockOptionsRef.current.classList.toggle('inv');
	}

	const handleDeleteBlockClick = () => {
		blockOptionsRef.current.classList.toggle('inv');
		deleteBlock(index);
	}

	const addTask = () => {
		const taskName = inputRef.current.value;
		if (taskName){
			const urgent = selectRef.current.value === 'true' ? true : false;

			const newTask = {
				blockIndex: blockIndex,
				name: taskName,
				urgent,
				finished: false
			};

			inputRef.current.value = '';
			newTaskOptionsRef.current.classList.toggle('inv');
			addTaskAction(newTask);
		}
	}
	
	return (
		<StyledDiv>
			<h1>{name}<span onClick={() => blockOptionsRef.current.classList.toggle('inv')}>...</span></h1>
			<OptionsDiv ref={blockOptionsRef} className='inv'>
				<p onClick={handleNewTaskClick}>Adicionar tarefa</p>
				<p onClick={handleDeleteBlockClick}>Excluir bloco</p>
			</OptionsDiv>
			<NewTaskDiv ref={newTaskOptionsRef} className='inv'>
				<StyledInput ref={inputRef} placeholder='Nome da nova tarefa'></StyledInput>
				<StyledSelect ref={selectRef}>
					<option value='false'>Normal</option>
					<option value='true'>Urgente</option>
				</StyledSelect>
				<StyledButton onClick={addTask} className='addTaskBtn'>Adicionar tarefa</StyledButton>
				<StyledButton onClick={() => {
					inputRef.current.value = '';
					newTaskOptionsRef.current.classList.toggle('inv');
				}} className='addTaskBtn'>Cancelar</StyledButton>
			</NewTaskDiv>
			{
				tasks.map(
					(task, i) => (
						<Task blockIndex={blockIndex} index={i} name={task.name} urgent={task.urgent} />
					)
				)
			}
		</StyledDiv>
	);
}

export default Block;