import React, { ReactNode } from 'react';

type LayoutProps = {
    topbar: ReactNode;
    sidebar: ReactNode;
    page: ReactNode
}

const Layout = ({ topbar, sidebar, page }: LayoutProps) => {
    return (
        <div>
            <div className='flex h-screen w-screen'>
                <div className='h-full'>
                    {sidebar}
                </div>
                <div className='w-full h-full flex-1'>
                    <div>
                        {topbar}
                    </div>
                    <div className='p-3 h-auto'>
                        {page}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Layout;