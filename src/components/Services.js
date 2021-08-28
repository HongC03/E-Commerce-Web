import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/constants';
const Services = () => {
	return (
		<Wrapper>
			<div className='core-value-center'>
			<div className='title'>
				<h2 className='core-value'>Core Values</h2>
				<div className='underline'></div>
			</div>
				<div className='services-center'>
					{services.map((service) => {
						const { id, title, text } = service;
						return (
							<article className='service' key={id}>
								<h4>{title}</h4>
								<p>{text}</p>
							</article>
						);
					})}
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 100px;
	margin-bottom: 200px;
	h3,
	h4 {
		color: var(--clr-primary-1);
	}
	padding: 2.5rem 2.5rem;

	background: var(--clr-grey-10);

	p {
		margin-bottom: 0;
		line-height: 1.8;
		color: var(--clr-primary-3);
	}
	.core-value-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
	padding-bottom: 100px;
	}	
	.core-value {
		padding-top: 75px;
	}
	.services-center {
		margin-top: 4rem;
		display: grid;
		gap: 2.5rem;
	}

	.service {
		background: var(--clr-primary-10);
		text-align: center;
		padding: 2.5rem 2rem;
		border-radius: var(--radius);
		p {
			color: var(--clr-primary-2);
		}
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
			transform: translateY(-1rem);
		}
	}
`;

export default Services;
