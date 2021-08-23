import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import { VscCheck, VscClose } from "react-icons/vsc";
import {
	Loading,
	Error,
	ProductImages,
	AddToCart,
	Stars,
	ShoePage,
} from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
	const { id } = useParams();
	const history = useHistory();
	const [product, setProduct] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchSingleProduct = async () => {
		try {
			const { data } = await axios.get(`${single_product_url}${id}`);
			setProduct(data);
		} catch (error) {
			setIsError(true);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchSingleProduct();
	}, []);

	useEffect(() => {
		if (isError) {
			setTimeout(() => {
				history.push('/');
			}, 5000);
		}
	});

	if (isLoading) {
		return <Loading />;
	}
	if (isError) {
		return <Error />;
	}

	const { fields } = product;
	const {
		name,
		price,
		stock,
		releaseDate,
		stars,
		reviews,
		department,
		company,
		images,
		freeshipping
} = fields

	return (
		<Wrapper>
			<ShoePage title={name} product={product} />
			<div className='section section-center page'>
				<Link to='/products' className='btn'>
					back to products
				</Link>
				<div className=' product-center'>
					<ProductImages images={images} />
					<section className='content'>
						<h2>{name}</h2>
						<Stars stars={stars} reviews={reviews} />
						<h5 className='price'> {formatPrice(price)}</h5>
						<p className='info'>
							<span className='desc'>Date First Available : </span>
							<span className="date">{releaseDate}</span>
						</p>
						<p className='info'>
							<span>Available : </span>
							{stock > 0 ? 'In stock' : 'out of stock'}
						</p>
						<p className='info'>
							<span>Department : </span>
							{department}
						</p>
						<p className='info'>
							<span>Brand : </span>
							{company}
						</p>
						<p className='info'>
							<span>Freeshipping : </span>
							<span className='icon'>{freeshipping ? <VscCheck /> : <VscClose />}</span>
						</p>
						<hr />
						{stock > 0 && <AddToCart product={fields} />}
					</section>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.product-center {
		display: grid;
		gap: 4rem;
		margin-top: 2rem;
	}
	.price {
		color: var(--clr-primary-5);
	}
	.desc {
		line-height: 2;
		width: 200px;
	}
	.date {
		padding-left: 3.5rem;
		padding-top: 0.25rem;
	}
	.info {
		text-transform: capitalize;
		width: 500px;
		display: grid;
		grid-template-columns: 125px 1fr;
		span {
			font-weight: 700;
		}
	}
	.icon {
		margin-top: 0.25rem;
		padding-left: 0.5rem;
	}

	@media (min-width: 992px) {
		.product-center {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		.price {
			font-size: 1.25rem;
		}
	}
`;

export default SingleProductPage;
