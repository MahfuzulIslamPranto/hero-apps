import React from 'react';
import downloadSign from '../../assets/downloadSign.png'
import star from '../../assets/Star.png'
import { Link } from 'react-router';

const TrendingAppCard = ({ loaderTrendingApps }) => {
    const { image,description, title, companyName, id, ratingAvg ,downloads} = loaderTrendingApps;
    console.log(loaderTrendingApps  )
    return (
        <Link to={`/apps/${id}`}>
            <div className=''>
                <div className=" bg-base-100 shadow-sm">
                    <figure className="px-2 pt-2">
                        <img
                            src={image}
                            alt={title}
                            className="rounded w-80 h-50 lg:h-55" />
                    </figure>
                    <div className="py-2 mx-2 flex flex-col">
                        <small className='block text-start py-3 h-16'>
                            <span className='font-bold'>{title}: {description}</span>
                        </small>
                        <div className="pt-2 card-actions flex justify-between">
                            <button className="bg-[#d5fbef] rounded px-1">
                                <small className='flex gap-1 items-center'>
                                    <img className='w-3 h-3' src={downloadSign} alt="" />
                                    <p className='text-[#00D390]'>{downloads}</p>
                                </small>
                            </button>
                            <button className="bg-[#ffe8d0] rounded px-1">
                                <div>
                                    <small className='flex gap-1 items-center'>
                                        <img className='w-3 h-3' src={star} alt="" />
                                        <p className='text-[#FF8811]'>{ratingAvg}</p>
                                    </small>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingAppCard;