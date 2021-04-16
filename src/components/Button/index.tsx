import styled from 'styled-components';

const StyledButton = styled.p`
	display: block;
	background-color: #253031;
	color: white;
	width: 15%;
	text-align: center;
	padding: 5px;
	margin-top: 10px;
	margin-left: auto;
	margin-right: auto;
	font-size: 150%;
	font-family: 'comfortaa';
	border-radius: 10px;
	transition: background-color 100ms linear;
	user-select: none;

	&:hover {
		cursor: pointer;
		background-color: #3D4F51;
	}
`;

export default StyledButton;