import React from 'react';
import logo from '../../assets/logo.png'

const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <img className='h-20 w-20 animate-spin' src={logo} alt="Loading..." />
        </div>
    );
};

export default Loading;