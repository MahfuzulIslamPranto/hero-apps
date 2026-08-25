import React from 'react';
import TrendingAppCards from '../TrendingAppCards/TrendingAppCards';

const TrandingApps = ({loader}) => {
    return (
        <div className='text-center mt-12'>
            <h1 className='text-3xl font-bold'>Trending Apps</h1>
            <small className='text-gray-500'>Explore All Trending Apps on the Market developed by us</small>
            <div className='grid md:grid-cols-3 mx-5 lg:grid-cols-4 gap-2 mt-5 max-w-6xl lg:mx-auto'>
                {
                    loader.map(ldr => <TrendingAppCards loaderTrendingApps={ldr}></TrendingAppCards>)
                }
            </div>
        </div>
    );
};

export default TrandingApps;