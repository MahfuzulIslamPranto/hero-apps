import React from 'react';
import downloadSign from '../../assets/downloadSign.png'
import star from '../../assets/Star.png'

const InstalledApps = ({loadr}) => {
    const {size, image, description, title, companyName, id, ratingAvg, downloads } = loadr;
    return (
        <div className='flex justify-between mx-auto max-w-6xl bg-white my-3 px-4 py-2 items-center rounded'>
            <div className='mt-4'>
                <div className='flex gap-2'>
                    <img className='w-15' src={image} alt={title} />
                    <div className=''>
                        <p className='font-bold'>{title}: {description}</p>
                        <div className='flex gap-5'>
                            <small className='flex gap-1 items-center'>
                                <img className='w-3 h-3' src={downloadSign} alt="" />
                                <p className='text-[#00D390]'>{downloads}</p>
                            </small>
                            <small className='flex gap-1 items-center'>                          <img className='w-3 h-3' src={star} alt="" />
                                <p className='text-[#FF8811]'>{ratingAvg}</p>
                            </small>
                            <small>{size} MB</small>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className='text-white bg-[#00D390] px-2 py-1 rounded'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApps;