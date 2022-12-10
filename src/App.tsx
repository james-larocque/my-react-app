import React from 'react';
import Page from './components/Page';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Layout from './components/layout/Layout';

function App() {
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
  
  export default App;
  