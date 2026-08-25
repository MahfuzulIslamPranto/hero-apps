import React from 'react';
import TrendingAppCard from '../TrendingAppCard/TrendingAppCard';

const TrendingAppCards = ({loaderTrendingApps}) => {
    return (
        <div className='max-w-6xl mx-auto'>
            <TrendingAppCard loaderTrendingApps={loaderTrendingApps}></TrendingAppCard>
        </div>
    );
};

export default TrendingAppCards;