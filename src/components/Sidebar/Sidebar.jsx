import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaTshirt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState('');

  const toggleMenu = (category) => {
    setOpenMenu(openMenu === category ? '' : category);
  };

  const menuData = [
    {
      title: 'Men',
      icon: <FaTshirt />,
      ageGroups: ['18-25', '26-35', '36-50'],
    },
    {
      title: 'Women',
      icon: <FaTshirt />,
      ageGroups: ['18-25', '26-35', '36-50'],
    },
    {
      title: 'Kids',
      icon: <FaTshirt />,
      ageGroups: ['1-5', '6-12'],
    },
    {
      title: 'Girls',
      icon: <FaTshirt />,
      ageGroups: ['5-12', '13-18'],
    },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Garments</h2>
      <ul className="sidebar-list">
        {menuData.map(({ title, icon, ageGroups }) => (
          <li key={title} className="sidebar-item">
            <div className="category-header" onClick={() => toggleMenu(title)}>
              <span className="icon">{icon}</span>
              <span className="category-title">{title}</span>
              <span className="chevron">
                {openMenu === title ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {openMenu === title && (
              <ul className="submenu">
                {ageGroups.map((age, index) => (
                  <li key={index}>
                    <Link to={`/garments/${title.toLowerCase()}/${age}`}>{age} Years</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
