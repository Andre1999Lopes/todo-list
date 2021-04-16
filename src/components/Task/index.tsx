import React, { useRef } from 'react';
import { useStoreState, useStoreActions } from '../../store/hookStore';
import styled from 'styled-components';

const StyledTask = styled.p`
	position: relative;
	font-size: 120%;
	background-color: #ffffff;
	padding: 5px;
	border-radius: 5px;
	margin-bottom: 1px;

	&.urgent {
		background-color: #ff6f6f;
	}

	&.finished {
		text-decoration: line-through;
		background-color: #8aff73;
	}
`;

const StyledTaskOptions = styled.div`
	border-radius: 5px;
	position: absolute;
	padding: 5px;
	right: -80%;
	top: 100%;
	background-color: #ffffff;
	z-index: 1;
	transition: all 100ms linear;

	& p {
		margin: 5px;
		border-radius: 5px;
		padding: 2px;
		user-select: none;
		cursor: pointer;
		font-size: 80%;
		width: 15vw;
		transition: background-color 100ms linear;
	}

	& p:hover {
		background-color: #3D4F51;
		color: white;
	}
`;

interface IProps {
	blockIndex: number;
	index: number;
	name: string;
	urgent: boolean;
}

function Task({ blockIndex, index, name, urgent }:IProps) {
	const task = useStoreState(state => state.taskStore.blocks[blockIndex].tasks[index]);
	const setTaskFinished = useStoreActions(actions => actions.taskStore.setTaskFinished);
	const taskOptionsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const taskRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;
	const deleteTask = useStoreActions(actions => actions.taskStore.removeTask);

	const handleDeleteTaskClick = () => {
		taskOptionsRef.current.classList.toggle('inv');
		deleteTask({blockIndex, taskIndex: index});
	}

	const handleSetTaskFinishedClick = () => {
		taskOptionsRef.current.classList.toggle('inv');
		setTaskFinished({ blockIndex, taskIndex: index, isFinished: task.finished });
	}

	return(
		<>
			<StyledTask
				ref={taskRef}
				className={(urgent ? 'urgent' : '') + (task.finished ? ' finished' : '')}
			>
				{name}
				<span
					onClick={() => {taskOptionsRef.current.classList.toggle('inv')}}
				>
					...
				</span>
				<StyledTaskOptions
						ref={taskOptionsRef} className='inv'
					>
						<p onClick={handleSetTaskFinishedClick}
						>Marcar tarefa como concluída</p>
						<p onClick={handleDeleteTaskClick}>Excluir tarefa</p>
				</StyledTaskOptions>
			</StyledTask>
		</>
	)
}

export default Task;