import React from 'react';
import styled from 'styled-components';
const Disclaimer = () => {
	return (
		<Wrapper>
			<article className='boxed'>
				<h3 className='title'>Fair Use Act Disclaimer</h3>
				<br />
				<p>This site is for educational purposes only.</p>
				<br />
				<p>Fair Use Copyright</p>
				<p>
					Disclaimer under section 107 of the Copyright Act of 1976, allowance
					is made for “fair use” for purposes such as criticism, comment, news
					reporting, teaching, scholarship, education and research.{' '}
				</p>

				<p>
					Fair use is a use permitted by copyright statute that might otherwise
					be infringing.
				</p>
				<p>Fair Use Definition </p>
				<p>
					Fair use is a doctrine in United States copyright law that allows
					limited use of copyrighted material without requiring permission from
					the rights holders, such as commentary, criticism, news reporting,
					research, teaching or scholarship. It provides for the legal,
					non-licensed citation or incorporation of copyrighted material in
					another author’s work under a four-factor balancing test.
				</p>
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-bottom: 200px;
	margin-top: 0px;
	h3,
	h5 {
		color: black;
	}

	article {
		text-align: justify;
	}
	.title {
		text-align: center;
		margin-bottom: 0.5rem;
	}
	.boxed {
		border: 1px solid black;
		width: 60%;
		height: auto;
		padding: 40px;
		margin: 50px auto;
		border-radius: 10px;
	}
	@media (min-width: 992px) {
		.header {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (min-width: 576px) {
		.services-center {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
	@media (min-width: 1280px) {
		padding: 0;
		.section-center {
			transform: translateY(5rem);
		}
	}
`;

export default Disclaimer;
