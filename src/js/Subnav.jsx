import React from "react";
import { Link } from "react-router-dom";
import "../sass/Subnav.css";

export default function Subnav({navList,selectedIndex,selectedSubIndex,setSelectedSubIndex,setSelectedIndex}) {
  const navStyle = {
    height: 60,
    position: 'relative',
    display: 'flex',
    backgroundColor: 'white',
  };
  const subnavStyle = {
    position: 'relative',
    left: '20px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  };
  const urlStyle = {
    position: 'absolute',
    height: '100%',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
  };
  const linkStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    textDecoration: 'none',
  };
  const slashStyle = {
    color: 'gray',
  };
  const navItem = navList[selectedIndex];
  const handleClick = (index) => {
    setSelectedSubIndex(index);
  };
  return (
    <>
      <div style={navStyle}>
        <div style={subnavStyle}>
          {
            navItem.dropdowns.map((dropdown,index) => {
              return (
                  <Link key={index} to={navItem.href + '/' + dropdown} 
                  style={linkStyle} onClick={e => handleClick(index)} 
                  className={index === selectedSubIndex ? "navItem-hover" : "navItem"}>
                    <span className={index === selectedSubIndex ? "subnav-text-hover" : "subnav-text"}>{dropdown}</span>
                    <div className={index === selectedSubIndex ? "underLine-hover" : "underLine"} />
                  </Link>
              );
            })
          }</div>
        <div style={urlStyle}>
          <Link to="/" onClick={() => setSelectedIndex(0)} className="subnav-link">{navList[0].text}</Link>
          <span style={slashStyle}> / </span>
          <Link to={navItem.href} className="subnav-link">{navItem.text}</Link>
          <span style={slashStyle}> / </span>
          <Link to={navItem.href + '/'+navItem.dropdowns[selectedSubIndex]} className="subnav-link">
            {navItem.dropdowns[selectedSubIndex]}
          </Link>
        </div>
      </div>
    </>
  );
}