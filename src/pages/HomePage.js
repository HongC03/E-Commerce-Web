import React from 'react';
import { Disclaimer, FeaturedProducts, Shoe } from '../components';
import Services from '../components/Services';
const HomePage = () => {
	return (
		<main>
			<Shoe />
			<FeaturedProducts />
			<Services />
			<Disclaimer />
		</main>
	);
};

export default HomePage;
