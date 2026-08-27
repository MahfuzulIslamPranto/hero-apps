import React from 'react';
import demoAppImg from '../../assets/demo-app (2).webp'
import downloadSign from '../../assets/downloadSign.png'
import star from '../../assets/Star.png'
import likeImg from '../../assets/icon-review.png'

const AppDetail = ({loader}) => {
    return (
        <div>
            <div className='lg:mx-auto mx-20 max-w-6xl my-12'>
                <div className='lg:flex gap-10 p-4 border-b-1 border-gray-300'>
                    <img className='mb-8' src={demoAppImg} alt="" />
                    <div className='lg:flex-1'>
                        <h1 className='text-2xl font-bold'>SmPlan: ToDo List with Reminder</h1>
                        <p className='border-b-1 border-gray-300 pb-6'><span className='text-gray-400'>Developed by</span> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>productive.io</span></p>
                        <div className='mt-5 flex gap-5 lg:gap-12'>
                            <div>
                                <img className='w-5 h-5' src={downloadSign} alt="" />
                                <small className=''>Downloads</small>
                                <p className='text-2xl font-bold'>8M</p>
                            </div>
                            <div>
                                <img className='w-5 h-5' src={star} alt="" />
                                <small>Average Ratings</small>
                                <p className='text-2xl font-bold'>4.9</p>
                            </div>
                            <div>
                                <img className='w-5 h-5' src={likeImg} alt="" />
                                <small>Total Reviews</small>
                                <p className='text-2xl font-bold'>8M</p>
                            </div>
                        </div>
                        <button className='bg-[#00D390] text-white px-4 py-1 rounded mt-12'>Install Now (291 MB)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetail;