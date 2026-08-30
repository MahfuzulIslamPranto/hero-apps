import React, { Suspense } from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Header/Footer/Footer';
import Loading from '../Loading/Loading';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense fallback={<Loading></Loading>}>
                <Outlet></Outlet>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Root;