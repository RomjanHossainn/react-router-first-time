import React from 'react';

const Navitem = ({item}) => {
    return (
        <li className=''>
            <a href={item.path}>{item.name}</a>
        </li>
    );
};

export default Navitem;