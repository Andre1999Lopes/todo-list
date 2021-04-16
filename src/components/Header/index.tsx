import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	@font-face{
		font-family: 'quicksand';
		src: url('../../fonts/Quicksand_Book.otf');
	}

	display: flex;
	background-color: #FF7099;

	.headerTitle{
		margin-left: 50px;
		width: 100%;
		font-family: 'quicksand';
		font-size: 300%;
		color:#F8F32B;
	}
`;

function Header(){
	return(
		<StyledHeader>
			<h1 className='headerTitle'>Ultimate Procrastinador Pro</h1>
		</StyledHeader>
	)
}

export default Header;