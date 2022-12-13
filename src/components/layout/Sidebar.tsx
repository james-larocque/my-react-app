import React, { useState } from 'react';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='min-h-0 h-full flex-1 flex overflow-hidden'>
            <nav aria-label='Sidebar' className='narrow-sidebar lg:block flex-shrink-0 bg-gray-800 overflow-y-auto'>
                <div className='relative w-20 flex space-y-16 flex-col p-3'>
                    <a href="#" class="text-gray-400 hover:text-red-700">
                        <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
                            <i class="fa fa-house"></i>
                        </div>
                        <div class="text-center text-xs font-normal">Home</div>
                    </a>

                    <a href="#" class="text-gray-400 hover:text-red-700">
                        <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
                            <i class="fa fa-cog"></i>
                        </div>
                        <div class="text-center text-xs font-normal ">Settings</div>
                    </a>

                    <a href="#" class="text-gray-400 hover:text-red-700">
                        <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <div class="text-center text-xs font-normal ">Messages</div>
                    </a>

                </div>
            </nav>
        </div>
    );
}

export default Sidebar;