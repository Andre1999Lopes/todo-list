import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Task from '../Task';

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

	& .newTaskOptions {
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
	}

	& .newTaskOptions input {
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
	}

	& .newTaskOptions select {
		display: block;
		outline: none;
		margin: 5px auto;
		font-family: 'comfortaa';
		font-size: 105%;
	}

	& .options {
		display: block;
		opacity: 1;
		background-color: #ffffff;
		padding: 2px;
		border-radius: 5px;
    z-index: 2;
    position: absolute;
		top: -20%;
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
	}

	& .addTaskBtn {
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
	}

	& .inv {
		top: -100%;
		opacity: 0;
		visibility: hidden;
	}
`;

interface IBlockProps {
	index: number;
	title: string;
	blocks: Array<string>;
	setBlocks: React.Dispatch<React.SetStateAction<string[]>>;
}

interface task {
	name: string;
	urgent: boolean;
}

function Block(props: IBlockProps) {
	const [tasks, setTasks] = useState(Array<task>());

	const deleteBlock = () => {
		const newBlocks = props.blocks.filter((value,index) => index !== props.index);
		blockOptionsRef.current.classList.toggle('inv');
		props.setBlocks(newBlocks);
	}

	const handleNewTaskClick = () => {
		newTaskOptionsRef.current.classList.toggle('inv');
		blockOptionsRef.current.classList.toggle('inv');
	}

	const addTask = () => {
		const taskName = inputRef.current.value;
		if (taskName){
			const urgent = selectRef.current.value === 'true' ? true : false;

			const newTask = {
				name: taskName,
				urgent
			};

			tasks.push(newTask);
			inputRef.current.value = '';
			newTaskOptionsRef.current.classList.toggle('inv');
			setTasks([...tasks]);
		}
	}

	const blockOptionsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const newTaskOptionsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const selectRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
	const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	
	return (
		<StyledDiv>
			<h1>{props.title}<span onClick={() => blockOptionsRef.current.classList.toggle('inv')}>...</span></h1>
			<div ref={blockOptionsRef} className='options inv'>
				<p onClick={handleNewTaskClick}>Adicionar tarefa</p>
				<p onClick={deleteBlock}>Excluir bloco</p>
			</div>
			<div ref={newTaskOptionsRef} className='newTaskOptions inv'>
				<input ref={inputRef} placeholder='Nome da nova tarefa'></input>
				<select ref={selectRef}>
					<option value='false'>Normal</option>
					<option value='true'>Urgente</option>
				</select>
				<p onClick={addTask} className='addTaskBtn'>Adicionar tarefa</p>
				<p onClick={() => {
					inputRef.current.value = '';
					newTaskOptionsRef.current.classList.toggle('inv');
				}} className='addTaskBtn'>Cancelar</p>
			</div>
			{
				tasks.map(
					(task, index) => (
						<Task index={index} tasks={tasks} setTasks={setTasks} task={task}/>
					)
				)
			}
		</StyledDiv>
	);
}

export default Block;