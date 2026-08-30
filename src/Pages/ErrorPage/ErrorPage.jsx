import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center my-10'>
            <img className='mx-auto w-2/7' src={errorImg} alt="Error Image" />
            <div>
                <h1 className='text-4xl mt-4 mb-2 font-bold'>Oops, page not found!</h1>
                <p className='text-gray-500'>The page you are looking for is not available.</p>
                <Link to='/'><button className='px-5 rounded my-4 py-2 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;