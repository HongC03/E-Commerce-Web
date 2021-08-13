import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import nikeshoe1 from '../assets/nikeshoe1.jpeg';
import nikeshoe2 from '../assets/nikeshoe2.jpeg';

const Shoe = () => {
	return (
		<Wrapper className='section-center'>
			<article className='content'>
				<h1>Footable – Footwear for Everyone</h1>
				<p>
					Footable – Footwear for Everyone For each one of those shoe
					sweethearts out there, Footable offer the one-stop goal to pick the
					correct match of footwear. Gone are the days when you needed to go
					from store to store to locate the correct style and size for yourself.
					At Footable , you can locate a vast accumulation of dashing footwear
					in all sizes and styles, all inside a couple of snaps.
				</p>
				<Link to='/products' className='btn shoe-btn'>
					Shop Now
				</Link>
			</article>
			<article className='img-container'>
				<img src={nikeshoe1} alt='shoe1' className='main-img' />
				<img src={nikeshoe2} alt='shoe2' className='accent-img' />
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	min-height: 60vh;
	display: grid;
	place-items: center;
	.img-container {
		display: none;
	}

	p {
		line-height: 2;
		max-width: 45em;
		margin-bottom: 2rem;
		color: var(--clr-grey-5);
		font-size: 1rem;
		text-align: justify;
	}
	@media (min-width: 992px) {
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		h1 {
			margin-bottom: 2rem;
		}
		p {
			font-size: 1.25rem;
			text-align: justify;
		}
		.shoe-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		.img-container {
			display: block;
			position: relative;
		}
		.main-img {
			width: 100%;
			height: 550px;
			position: relative;
			border-radius: var(--radius);
			display: block;
			object-fit: cover;
		}
		.accent-img {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 250px;
			transform: translateX(-50%);
			border-radius: var(--radius);
		}
		.img-container::before {
			content: '';
			position: absolute;
			width: 10%;
			height: 80%;
			bottom: 0%;
			left: -8%;
			border-radius: var(--radius);
		}
	}
`;

export default Shoe;
