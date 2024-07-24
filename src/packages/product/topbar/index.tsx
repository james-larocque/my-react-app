import React, { useState } from 'react';
import logo from './assets/logo.png';

const Topbar = () => {
    const [mobileMenuVisibility, setMobileMenuVisibility] = useState('hidden');

    return (
        <navbar>
            <div className='max-w-6xl mx-auto px-4 bg-gray-100'>
                <div className="flex justify-between">
                    <div className='flex space-x-4'>
                        {/* logo */}
                        <div>
                            <a href="#" className='flex items-center py-5 px-2 text-gray-700'>
                                <img src={logo} alt="logo" className='object-scale-down w-52' />
                            </a>
                        </div>

                        {/* primary navigation */}
                        <div className='hidden md:flex items-center space-x-1'>
                            <a href="#" className='items-center py-5 px-2 text-gray-700 hover:text-gray-900'>Features</a>
                            <a href="#" className='items-center py-5 px-2 text-gray-700 hover:text-gray-900'>Pricing</a>
                        </div>
                    </div>

                    {/* secondary navigation */}
                    <div className='hidden md:flex items-center space-x-1'>
                        <a href="#" className='py-5 px-3 '>Login</a>
                        <a href="#" className='py-2 px-3 hover:bg-yellow-300 bg-yellow-400 text-yellow-900 rounded transition duration-300'>Signup</a>
                    </div>

                    {/* mobile button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => mobileMenuVisibility === 'hidden' ? setMobileMenuVisibility('') : setMobileMenuVisibility('hidden')}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div className={'md:hidden ' + mobileMenuVisibility}>
                <a href="#" className='block py-2 px-4 text-sm hover:bg-gray-200'>Features</a>
                <a href="#" className='block py-2 px-4 text-sm hover:bg-gray-200'>Pricing</a>
            </div>
        </navbar>
    );
};

export default Topbar;