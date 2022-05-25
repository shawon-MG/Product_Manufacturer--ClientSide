import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Items from './Items';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;