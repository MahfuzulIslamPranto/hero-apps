import { ChevronDown } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import InstalledApps from '../InstalledApp/InstalledApps';

const Installed = () => {
    const loader = useLoaderData();
    return (
        <div className='bg-gray-100 py-10'>
            <div className='text-center max-w-6xl mx-auto '>
                <h1 className='text-4xl font-bold mt-2 mb-1'>Your Installed Apps</h1>
                <small className='text-gray-500'>Explore All Trending Apps on the Market developed by us</small>
                <div className='flex  justify-between mt-6'>
                    <p className='font-bold'>1 Apps Found</p>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button"  className="btn m-1 text-gray-400">Sort By Size<ChevronDown></ChevronDown> </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-37 p-2 shadow-sm">
                            <li><a>File Size</a></li>
                            <li><a>Downloads</a></li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    {
                        loader.map(loadr => <InstalledApps loadr={loadr}></InstalledApps>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installed;