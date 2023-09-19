
import { useState } from 'react';
import './Navbar.css'
import Navitem from './Navitem';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' }, 
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Product Details', path: '/products/:id' }
    ];
    
    
    const [open,setOpen] = useState(false);


    return (
        <nav className=' flex md:flex relative items-center justify-between px-5 container mx-auto py-5'>
            <div onClick={() => setOpen(!open)} className='md:hidden text-2xl cursor-pointer'>
                {
                    open ?  <AiOutlineClose></AiOutlineClose> :  <FaBars className='md:hidden'></FaBars>
                }
            </div>
            <h3>Logo</h3>
            <div className={`absolute transition-all   py-8 md:py-0 bg-[#2c343e] md:bg-[#1D232A] w-1/2 md:w-full md:relative md:top-0 ${open ? 'top-20' : '-top-72  transition-none'}`}>
                <ul className= {`md:flex gap-8 item-center justify-end relative space-y-3 md:space-y-0  px-5`}>
                    {
                        routes.map(item => <Navitem item = {item} key={item.id}/>)
                    }
                </ul>
            </div>
            
        </nav>
    );
};

export default Navbar;