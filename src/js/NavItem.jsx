import React from "react";
import { Link } from 'react-router-dom';

const itemStyle = {
  height: '70px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};
const wordStyle = {
  padding: '0 30px 0 30px',
};
const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};
export default function NavItem({ selected, text, dropdowns, setSelectedIndex, index }) {
  const handleClick = () => {
    setSelectedIndex(index);
  };
  return (
    <>
      <div style={itemStyle} className={selected ? "navItem-hover" : "navItem"}
        onClick={handleClick}>
        <Link to="" style={linkStyle}>
          <span style={wordStyle}>{text}</span>
        </Link>
        <div className={selected ? "underLine-hover" : "underLine"} />

        {dropdowns.length > 0 && <div className="dropdown">
          {
            dropdowns.map((item, index) => {
              return (
                <a key={index}>{item}</a>
              );
            })
          }
        </div>
        }
      </div>
    </>
  );
}