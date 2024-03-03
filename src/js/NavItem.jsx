import React from "react";
import { Link } from 'react-router-dom';

const itemStyle = {
  height: '70px',
  position: 'relative',
};
const wordStyle = {
  padding: '0 30px 0 30px',
};
const linkStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  textDecoration: 'none',
  color: 'inherit',
};
export default function NavItem({ selected, navItem, setSelectedIndex, index }) {
  const handleClick = () => {
    setSelectedIndex(index);
  };
  return (
    <>
      <div style={itemStyle} className={selected ? "navItem-hover" : "navItem"}
        onClick={handleClick}>
        <Link to={navItem.href} style={linkStyle}>
          <span style={wordStyle}>{navItem.text}</span>
          <div className={selected ? "underLine-hover" : "underLine"} />
        </Link>
        {navItem.dropdowns.length > 0 &&
          <div className="dropdown">
            {
              navItem.dropdowns.map((item, index) => {
                return (
                  <Link key={index}>{item}</Link>
                );
              })
            }
          </div>
        }
      </div>
    </>
  );
}