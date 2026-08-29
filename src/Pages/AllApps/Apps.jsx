//Apps btn's --> top title and called AllApplications.jsx for all apps here
import React from 'react';
import { useLoaderData } from 'react-router';
import AllApplications from '../AllAplications/AllApplications';

const Apps = () => {
    const loader = useLoaderData();
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-bold text-4xl'>Our All Applications</h1>
                <p className='text-gray-500 py-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mx-auto max-w-6xl'>
                <p className='font-bold text-xl '>({loader.length}) Apps Found</p>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search Apps" />
                </label>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 mb-10 mx-5 lg:grid-cols-4 gap-4 mt-5 max-w-6xl lg:mx-auto'>
                {
                    loader.map(ldr => <AllApplications ldr={ldr}></AllApplications>)
                }
            </div>
        </div>
    );
};

export default Apps;