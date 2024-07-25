import React from 'react';
import HelloWorld from '@myreact/product-hello-world';
import Sidebar from '@myreact/product-sidebar';
import Topbar from '@myreact/product-topbar';
import Layout from '@myreact/core-layout';

function Home() {
    return (
      <div className="container">
        <Layout 
          topbar={<Topbar />}
          sidebar={<Sidebar />}
          page={<HelloWorld />}
        />
      </div>
    );
  };
  
  export default Home;
  