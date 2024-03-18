import React from "react";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import '../sass/Navbar.css';

const navStyle = {
  display: 'flex',
};
const imgStyle = {
  objectFit: 'contain',
  width: 200,
  height: 70,
  padding: 10,
};
const divStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'end',
  flexGrow: 1,
};
const iconStyle = {
  position: 'relative',
  marginTop: 'auto',
  marginBottom: 'auto',
  fontSize: '16px',
  padding: '0 30px 0 30px'
};
const inputStyle = {
  position: 'absolute',
  display: 'flex',
  height: '30px',
  top: '20px',
  right: '10px',
  visibility: 'hidden',
};
const subIconStyle = {
  marginTop: 'auto',
  marginBottom: 'auto',
  fontSize: '16px',
  cursor: 'pointer',
};
const fakenavStyle = {
  height: 0,
};
export default function Navbar({ navList,selectedIndex,setSelectedIndex,setSelectedSubIndex}) {
  const input = useRef();
  const handleMouseOver = () => {
    input.current.style.visibility = 'visible';
  };
  const handleMouseOut = () => {
    input.current.style.visibility = 'hidden';
  };
  
  let hit = true;
  const handleScroll = (event) => {
    const navigator = document.getElementById('navigator');
    const fakenav = document.getElementById('fakenav');
    const offsetTop = navigator.offsetTop;
    const offsetHeight = navigator.offsetHeight;
    if (!hit && window.scrollY == 0) {
      hit = true;
      fakenav.style.height = 0;
      navigator.className = 'navbar';
    } else if (hit && window.scrollY >= offsetTop + offsetHeight) {
      hit = false;
      fakenav.style.height = offsetHeight + 'px';
      navigator.className = 'navbar-show';
    }
  };
  const handleHome = () => {
    setSelectedIndex(0);
    setSelectedSubIndex(0);
    scrollTo({top: 0,behavior: 'smooth'});
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <div id="fakenav" style={fakenavStyle}></div>
      <div id="navigator" className="navbar">
        <nav style={navStyle}>
          <Link to="/" onClick={handleHome} className="navbar-home-link">
          <img src="/src/assets/logo.jpg" style={imgStyle} alt="logo"></img>
          </Link>
          <div style={divStyle}>
            {
              navList.map((item, index) => {
                return (<NavItem
                  selected={index === selectedIndex ? true : false}
                  navItem={item}
                  index={index} key={index}
                  setSelectedIndex={setSelectedIndex} 
                  setSelectedSubIndex={setSelectedSubIndex}/>);
              })
            }
            <div
              style={iconStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <div ref={input} style={inputStyle}>
                <label htmlFor="search"></label>
                <input id="search" type="text"
                  placeholder="搜索" />
                <FontAwesomeIcon icon={faMagnifyingGlass}
                  style={subIconStyle} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}