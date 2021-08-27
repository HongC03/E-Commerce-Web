import React from 'react';
import { FeaturedProducts, Shoe } from '../components';
import Services from '../components/Services';
const HomePage = () => {
	return (
		<main>
			<Shoe />
			<FeaturedProducts />
			<Services />
		</main>
	);
};

export default HomePage;
