import React from 'react';
import Footer from '../Shared/Footer';
import MainButton from '../Shared/MainButton';
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
            <MainButton> Button </MainButton>
            \
            <Footer />
        </div>
    );
};

export default Home;