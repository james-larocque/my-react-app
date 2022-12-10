import React, { ReactNode } from 'react';

type LayoutProps = {
    topbar: ReactNode;
    sidebar: ReactNode;
    page: ReactNode
}

const Layout = ({ topbar, sidebar, page }: LayoutProps) => {
    return (
        <div>
            <div className='flex h-screen'>
                <div className='h-full'>
                    {sidebar}
                </div>
                <div className='w-full h-full flex-1'>
                    <div className='w-full'>
                        {topbar}
                    </div>
                    <div className='p-3 w-full bg-yellow-100'>
                        {page}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Layout;