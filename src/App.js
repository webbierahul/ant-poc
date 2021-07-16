import React from 'react';
import HeaderTop from './components/common/HeaderTop';
import HeaderNav from './components/common/HeaderNav';
// import HeaderAnt from './HeaderAnt';
import './App.css';
import Layout from 'antd/lib/layout/layout';
import { Divider } from 'antd';


const App = () => (
  
    <Layout className="main-layout">
       <HeaderTop/>
       <Divider style={{margin:0}}/>
       <HeaderNav/>
       
    </Layout>
   
  
);

export default App;