import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
const Fetures = ({item}) => {
   const {name,price,features} = item
    return (
        <div className='space-y-3 p-8 rounded-lg bg-[#21272f] flex-col shadow'>
            <div className='md:h-[330px]'>
            <div>
                <span className='text-5xl font-bold'>${price}</span>
                <span className='text-3xl'>/mo</span>
            </div>
            <div>
                <h2 className='text-2xl'>{name}</h2>
            </div>
            <div className=''>
                <ul className=' space-y-1 mt-5'>
                    {
                        features.map((item,index)=> <li key={index} className='text-lg flex items-center gap-2'><FcCheckmark></FcCheckmark>{item}</li>)
                    }
                </ul>
            </div>
            </div>
            <div className='flex justify-start flex-grow w-full'>
            <button className='border-2 w-full  px-4 py-1 rounded-md border-[#313b47]'>Buy Now</button>
            </div>
        </div>
    );
};



export default Fetures;