import React from 'react';
import './Home.css'; // We'll style the layout here
import Sidebar from '../../components/Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
