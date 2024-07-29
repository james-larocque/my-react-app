import React from 'react';
import HelloWorld from '@my-lawyer-portal/product-hello-world';
import Sidebar from '@my-lawyer-portal/product-sidebar';
import Topbar from '@my-lawyer-portal/product-topbar';
import Layout from '@my-lawyer-portal/core-layout';

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
  