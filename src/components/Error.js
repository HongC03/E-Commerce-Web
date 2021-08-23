import React from 'react';
import styled from 'styled-components';

const Error = () => {
	return (
		<Wrapper>
			<div className='section section-center text-center'>
				<h2>There was an error...</h2>
				<h3>You're being redirected to Home Page</h3>
				<h3>It may takes up to 5 seconds</h3>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	h2,
	h3 {
		text-transform: none;
	}
`;

export default Error;
