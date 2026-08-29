//Apps btn's --> top title and called AllApplications.jsx for all apps here
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApplications from '../AllAplications/AllApplications';

const Apps = () => {
    const loader = useLoaderData();
    const [searchText,setSearchText] = useState('');
    const searchApp = loader.filter(app => app.title.toLowerCase().includes(searchText.toLowerCase()) || app.companyName.toLowerCase().includes(searchText.toLowerCase()));
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-bold text-4xl'>Our All Applications</h1>
                <p className='text-gray-500 py-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between lg:mx-auto mx-5 max-w-6xl'>
                <p className='font-bold text-xl '>({searchApp.length}) Apps Found</p>
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
                    <input type="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} required placeholder="Search Apps by Title or Company name" />
                </label>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 mb-10 mx-5 lg:grid-cols-4 gap-4 mt-5 max-w-6xl lg:mx-auto'>
                {
                    searchApp.map(ldr => <AllApplications ldr={ldr}></AllApplications>)
                }
            </div>
        </div>
    );
};

export default Apps;