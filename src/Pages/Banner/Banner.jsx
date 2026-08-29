import React from 'react';
import heroImg from '../../assets/hero.png'
import playstoreImg from '../../assets/fi_16076057.png'
import appstoreImg from '../../assets/fi_5977575.png'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div>
            <div className='flex flex-col items-center gap-10 lg:max-w-3xl px-10 mx-auto mt-12'>
                <div className='text-center'>
                    <h1 className=' text-4xl lg:text-6xl font-bold'>Web Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                    <p className='text-gray-500 mt-4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className=' flex gap-5'>
                    <Link to='https://play.google.com/store/games?hl=en'>
                        <button className='flex gap-1 items-center border-gray-300  rounded lg:px-5 px-3 btn bg-white border'>
                            <img className='w-5 h-5' src={playstoreImg} alt="" />
                            <p>Google Play</p>
                        </button>
                    </Link>
                    <Link to='https://apps.apple.com/us/app/imposter-game-spy-fakeit/id6749012623'>
                        <button className='flex gap-1 items-center border-gray-300  rounded lg:px-5 px-3 btn bg-white border'>
                            <img className='w-5 h-5' src={appstoreImg} alt="" />
                            <p>App Store</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center py-12  lg:py-14'>
                <div className='mb-6'>
                    <p className='lg:text-3xl text-2xl font-bold'>Trusted by Millions, Built for You</p>
                </div>
                <div className='flex justify-center mt-4 lg:gap-36 gap-4'>
                    <div>
                        <small>Total Downloads</small>
                        <h1 className='text-3xl lg:text-4xl font-bold lg:py-2'>29.6M</h1>
                        <small>21% More Than Last Month</small>
                    </div>
                    <div>
                        <small>Total Reviews</small>
                        <h1 className='text-3xl lg:py-2 lg:text-4xl font-bold'>906k</h1>
                        <small>46% More Than Last Month</small>
                    </div>
                    <div>
                        <small>Active Apps</small>
                        <h1 className='text-3xl lg:text-4xl lg:py-2 font-bold'>132+</h1>
                        <small>31% More Will Launch</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;