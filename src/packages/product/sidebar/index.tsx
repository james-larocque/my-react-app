import React, { useState } from 'react';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='min-h-0 h-full flex-1 flex overflow-hidden'>
            <nav aria-label='Sidebar' className='narrow-sidebar lg:block flex-shrink-0 bg-gray-800 overflow-y-auto'>
                <div className='relative w-20 flex space-y-16 md:space-y-8 flex-col p-3'>
                    <a href="#" class="text-gray-400 hover:text-red-700">
                        <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
                            <svg class="w-8 h-8 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        </div>
                        <div class="text-center text-xs font-normal hidden md:block">Home</div>
                    </a>

                    <a href="#" class="text-gray-400 hover:text-red-700">
                        <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
                            <svg class="w-8 h-8 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div class="text-center text-xs font-normal hidden md:block">Settings</div>
                    </a>

                    <a href="#" class="text-gray-400 hover:text-red-700">
                        <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
                            <svg class="w-8 h-8 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div class="text-center text-xs font-normal hidden md:block">Messages</div>
                    </a>

                </div>
            </nav>
        </div>
    );
}

export default Sidebar;