import React from 'react';
import demoAppImg from '../../assets/demo-app (2).webp'
import downloadSign from '../../assets/downloadSign.png'
import star from '../../assets/Star.png'
import likeImg from '../../assets/icon-review.png'
import { BarChart } from 'recharts';
import {Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';    
import { useLoaderData, useParams } from 'react-router';
import AppNotFound from '../AppNotFound/AppNotFound';
import { storeInDB } from '../../utilities/addToDB';

const AppDetail = () => {
    const loader = useLoaderData();
    const {appId} = useParams();
    const apId = parseInt(appId);
    const singleApp = loader.find(singleA=>singleA.id===apId);
    if (!singleApp) {
        return <AppNotFound></AppNotFound>;
    }
    const ratings = [...singleApp.ratings].reverse();
    const { image, description2, title, reviews,size,companyName, id, ratingAvg, downloads }=singleApp;
    const handleAppInstalled = (id) =>{
        storeInDB(appId);
    }
    return (
        <div>
            <div className='lg:mx-auto mx-20 max-w-6xl my-12'>
                <div className='lg:flex gap-10 border-b-1 border-gray-300'>
                    <img className='mb-8 lg:w-3/12 h-53' src={image} alt="" />
                    <div className='lg:flex-1'>
                        <h1 className='text-2xl mb-1 font-bold'>{title}</h1>
                        <p className='border-b-1 border-gray-300 pb-3'><span className='text-gray-400'>Developed by</span> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                        <div className='mt-5 flex gap-5 lg:gap-12'>
                            <div>
                                <img className='w-5 h-5' src={downloadSign} alt="" />
                                <small className=''>Downloads</small>
                                <p className='text-2xl font-bold'>{downloads}</p>
                            </div>
                            <div>
                                <img className='w-5 h-5' src={star} alt="" />
                                <small>Average Ratings</small>
                                <p className='text-2xl font-bold'>{ratingAvg}</p>
                            </div>
                            <div>
                                <img className='w-5 h-5' src={likeImg} alt="" />
                                <small>Total Reviews</small>
                                <p className='text-2xl font-bold'>{reviews}</p>
                            </div>
                        </div>
                        <button onClick={() => handleAppInstalled(appId)} className='bg-[#00D390] text-white px-4 py-1 rounded mt-3'>Install Now ({size} MB)</button>
                    </div>
                </div>
            </div>
            
            <div className='w-full max-w-6xl mx-auto h-[350px]'>
                <BarChart width={800} height={350} layout='vertical' data={ratings} margin= {{top:20,right:20,bottom:20}}>
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='count' fill='#FF8811' radius={[0,8,8,0]} />
                </BarChart>
            </div>
            <div className='max-w-6xl mx-auto py-12'>
                <h1 className='font-bold text-xl'>Description</h1>
                <div className='mt-2 text-gray-500'>
                    <p>{description2}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetail;