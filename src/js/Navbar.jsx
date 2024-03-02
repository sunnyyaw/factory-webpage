import React from "react";
import { useRef,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";
import '../sass/Navbar.css';

const navStyle = {
  display: 'flex',
};
const imgStyle = {
  objectFit: 'contain',
  width: 70,
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
const outBoxStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
}
export default function Navbar({navList}) {
  const input = useRef();
  const [selectedIndex,setSelectedIndex] = useState(0);
  const navItems = navList.map((item,index) => {
   return (<NavItem 
     selected={index === selectedIndex ? true : false}
     text={item.text} dropdowns={item.dropdowns}
     index={index} key={index}
     setSelectedIndex={setSelectedIndex}/>);
  });
  const handleMouseOver = () => {
    input.current.style.visibility = 'visible';
  };
  const handleMouseOut = () => {
    input.current.style.visibility = 'hidden';
  };
  return (
    <div style={outBoxStyle}>
      <nav style={navStyle}>
        <img src="" style={imgStyle} alt="logo"></img>
        <div style={divStyle}>
          { navItems }
          <div 
          style={iconStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <div ref={input}  style={inputStyle}>
              <input type="text" 
              placeholder="搜索"/>
              <FontAwesomeIcon icon={faMagnifyingGlass}
               style={subIconStyle}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}