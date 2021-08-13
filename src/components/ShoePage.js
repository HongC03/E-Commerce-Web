import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ShoePage = ({ title }) => {
	return (
		<Wrapper>
			<div className='section-center'>
				<h3>
					{title}
				</h3>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: white;
	width: 100%;
	min-height: 20vh;
	display: flex;
	text-align: center;
	align-items: center;
	color: var(--clr-primary-4);
`;

export default ShoePage;
