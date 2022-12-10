import React, { useState } from 'react';

const Topbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-slate-300 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold"></h2>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
 
export default Topbar;