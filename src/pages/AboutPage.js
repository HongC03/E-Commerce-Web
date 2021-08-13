import React from 'react';
import styled from 'styled-components';
import { ShoePage } from '../components';
import aboutImg from '../assets/nikeshoe3.jpeg';
import { User } from '@auth0/auth0-react';

const AboutPage = () => {
	return (
		<main>
			<ShoePage title='About Us' />
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='nice desk'></img>
				<article>
					<div className='title'>
						<h2>WHO WE ARE</h2>
						<div className='underline'></div>
					</div>
					<p>
						Our story started just about 50 years back when Cyrus and James made
						a shoe from sheepskin off-cuts. At the time it was notable; a mix of
						development and craftsmanship that is stayed at the core of what we
						do. Furthermore, while now, as usual, each match of our shoes starts
						with a last cut by hand from a solitary square of hornbeam,
						propelled development strategies, innovations and contemporary
						materials enable us to convey flawlessness customized for the
						cutting edge world.
					</p>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.main`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
		text-align: justify;
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export default AboutPage;
