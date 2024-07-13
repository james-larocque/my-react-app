import React from 'react';
import Page from '@myreact/core-page';
import Sidebar from '@myreact/core-sidebar';
import Topbar from '@myreact/core-topbar';
import Layout from '@myreact/core-layout';

function HomePage() {
    return (
      <div className="container">
        <Layout 
          topbar={<Topbar />}
          sidebar={<Sidebar />}
          page={<Page />}
        />
      </div>
    );
  };
  
  export default HomePage;
  