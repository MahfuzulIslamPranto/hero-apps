import React from 'react';
import { useLoaderData } from 'react-router';
import AppDetail from '../AppDetail/AppDetail';

const AppDetails = () => {
    const loader = useLoaderData();
    return (
        <div>
            <AppDetail loader = {loader}></AppDetail>
            {/* {
                loader.map(ldr => <AppDetail ldr={ldr} ></AppDetail>)
            } */}
        </div>
    );
};

export default AppDetails;