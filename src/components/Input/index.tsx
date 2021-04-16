import styled from 'styled-components';

const StyledInput = styled.input`
	@font-face{
    font-family: 'comfortaa';
    src: url('../../fonts/Comfortaa-Regular.ttf');
	}

	color: black;
	display: block;
	background-color: #ffffff;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	width: 50%;
	height: 50px;
	font-size: 200%;
	border: none;
	outline: none;
	border-radius: 5px;
	font-family: 'comfortaa';
	transition: background-color 100ms linear;

	&:focus {
		background-color: #e1e1e1;
	}
`;

export default StyledInput