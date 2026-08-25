import React from 'react';
import downloadSign from '../../assets/downloadSign.png'
import star from '../../assets/Star.png'

const TrendingAppCard = ({ loaderTrendingApps }) => {
    const { image,description, title, companyName, id, ratingAvg ,downloads} = loaderTrendingApps;
    console.log(loaderTrendingApps  )
    return (
        <div className=''>
            <div className=" bg-base-100 shadow-sm w-70">
                <figure className="px-2 pt-2">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded lg:h-50 h-40" />
                </figure>
                <div className="py-2 mx-2">
                    <small className='block text-start py-3'><span className='font-bold'>{title}</span>: {description}</small>
                    <div className="pt-2 card-actions flex justify-between">
                        <button className="bg-gray-200 rounded px-2"><small><img src={downloadSign} alt="" /> {downloads}</small></button>
                        <button className="bg-gray-200 rounded px-1">
                            <div>
                                <small className='flex gap-1 items-center'>
                                    <img className='w-3 h-3' src={star} alt="" />
                                    <p>{ratingAvg}</p>
                                </small>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingAppCard;