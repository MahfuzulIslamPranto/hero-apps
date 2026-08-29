import React, { useState } from 'react';
import TrendingAppCards from '../TrendingAppCards/TrendingAppCards';

const TrandingApps = ({loader}) => {
    const [showAll,setShowAll] = useState(false);
    //sorting in descending order
    const sortedApps = [...loader].sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads));
    const displayApps = showAll ? sortedApps : sortedApps.slice(0,8);
    return (
        <div className='text-center mt-20'>
            <h1 className='text-4xl font-bold my-2'>Trending Apps</h1>
            <small className='text-gray-500'>Explore All Trending Apps on the Market developed by us</small>
            <div className='grid md:grid-cols-3 mb-10 grid-cols-2 mx-5 lg:grid-cols-4 gap-4 mt-6 max-w-6xl lg:mx-auto'>
                {
                    displayApps.map(ldr => <TrendingAppCards loaderTrendingApps={ldr}></TrendingAppCards>)
                }
            </div>
             <button onClick={()=>setShowAll(!showAll)} className='my-10 btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8'>{showAll ? 'Show Less':'Show All'}</button>
        </div>
    );
};

export default TrandingApps;