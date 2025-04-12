import React from 'react';
import "./Dashboard.css"
import { IoIosSearch } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import AllItemImages from '../../components/AllItemImages/AllItemImages';
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-con'>
    <div className="search-container">
      <div className='searchbar'>
        <IoIosSearch />
        <input
          className="input-custom"
          placeholder='What’s on your mind?'
          type="text"
        />
        <RxCross2 />
      </div>
      <div>Filter</div>
    </div>
    <div>Top Sale</div>
  <div className="nav-left">
    <div>🛒</div>
    <div>⚙️</div>
    <div>🔔</div>
    <div>👤</div>
  </div>
      </div>
    <AllItemImages/>
    </div>
  
  );
};

export default Dashboard;
