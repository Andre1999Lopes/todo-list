import React, { useRef, useState } from 'react';
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

interface task {
	name: string;
	urgent: boolean;
}

interface ITask {
	index: number;
	task: task;
	tasks: Array<task>;
	setTasks: React.Dispatch<React.SetStateAction<task[]>>;
}

function Task(props: ITask) {
	const taskOptionsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const taskRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;
	const [finishedTask, setFinishedTask] = useState(false);
	const index = props.index;
	const deleteTask = () => {
		props.tasks.splice(index, 1);
		taskOptionsRef.current.classList.toggle('inv');
		props.setTasks([...props.tasks]);
	}

	return(
		<>
			<StyledTask
				ref={taskRef}
				className={(props.task.urgent ? 'urgent' : '') + (finishedTask ? ' finished' : '')}
			>
				{props.task.name}
				<span
					onClick={() => {taskOptionsRef.current.classList.toggle('inv')}}
				>
					...
				</span>
				<StyledTaskOptions
						ref={taskOptionsRef} className='inv'
					>
						<p onClick={() => {
							taskOptionsRef.current.classList.toggle('inv');
							setFinishedTask(!finishedTask);
						}}
						>Marcar tarefa como concluída</p>
						<p onClick={deleteTask}>Excluir tarefa</p>
				</StyledTaskOptions>
			</StyledTask>
		</>
	)
}

export default Task;