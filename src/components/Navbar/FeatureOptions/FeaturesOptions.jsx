import React, { useEffect, useState } from 'react';
import Fetures from './Fetures';


const FeaturesOptions = () => {



    const [features,setFeaturs] = useState([])

    useEffect(() => {
        fetch('feature.json')
        .then(res => res.json())
        .then(data => setFeaturs(data))
    },[])



    return (
        <main className=' px-5 container mx-auto'>
            <div>
                <h2 className='text-3xl my-5 text-center'>Price All Features</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-center'>
                {
                    features.map(item => <Fetures item ={item} key={item.id}/>)
                }
            </div>
        </main>
    );
};

export default FeaturesOptions;