import React from 'react';
import Banner from '../Banner/Banner';
import TrandingApps from '../TrandingApps/TrandingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const loader = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <TrandingApps loader={loader}></TrandingApps>
        </div>
    );
};

export default Home;