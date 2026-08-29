import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import InstalledApps from '../InstalledApp/InstalledApps';
import { getInstallApp,removeFromDB } from '../../utilities/addToDB';

const Installed = () => {
    const loader = useLoaderData();
    const [installed,setInstalled] = useState([]);
    const [sortBy,setSortBy] = useState('');
    useEffect(()=>{
        const getStoreAppData = getInstallApp();
        const convertgetStoreAppData = getStoreAppData.map(id =>parseInt(id));
        const installApps = loader.filter(app =>convertgetStoreAppData.includes(app.id));
        setInstalled(installApps);
    },[])
    const handleUninstall = (appId) => {
        removeFromDB(appId);
        setInstalled(prev => prev.filter(app => app.id !== appId));
    }
    const handlesortbyFileSize=()=>{
        const appInstalled = [...installed];
        appInstalled.sort((a,b)=> parseFloat(b.size)-parseFloat(a.size));
        setInstalled(appInstalled);
        setSortBy('File Size');
    }
    const handlesortbyDownloads=()=>{
        const appInstalled = [...installed];
        appInstalled.sort((a,b)=>parseFloat(b.downloads)-parseFloat(a.downloads));
        setInstalled(appInstalled);
        setSortBy('Downloads');
    }
    return (
        <div className='bg-gray-100 py-10'>
            <div className='text-center max-w-6xl mx-auto '>
                <h1 className='text-4xl font-bold mt-2 mb-1'>Your Installed Apps</h1>
                <small className='text-gray-500'>Explore All Trending Apps on the Market developed by us</small>
                <div className='flex  justify-between mt-6'>
                    <p className='font-bold'>{installed.length} Apps Found</p>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button"  className="btn m-1 text-gray-500">Sort By {sortBy} <ChevronDown></ChevronDown> </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-37 p-2 shadow-sm">
                            <li onClick={() => handlesortbyFileSize()}><a>File Size</a></li>
                            <li onClick={handlesortbyDownloads}><a>Downloads</a></li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    {
                        installed.map(loadr => <InstalledApps handleUninstall={handleUninstall} loadr={loadr}></InstalledApps>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installed;