import React from 'react';
import appErrorImg from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
        <div className='text-center my-10'>
            <img className='mx-auto w-2/7' src={appErrorImg} alt="Error Image" />
            <div>
                <h1 className='text-4xl mt-5 mb-1 font-bold'>OPPS!! APP NOT FOUND</h1>
                <p className='text-gray-500'>The page you are looking for is not available.</p>
                <Link to='/Apps'><button className='px-5 rounded my-4 py-2 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</button></Link>
            </div>
        </div>
    );
};

export default AppNotFound;