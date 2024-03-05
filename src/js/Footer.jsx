import React from "react";
import { Link } from "react-router-dom";

const footerStyle = {
  position: 'relative',
  bottom: '0',
  width: '100%',
  backgroundColor: 'rgb(240,240,240)',
  zIndex: '1',
};
const linksStyle = {
  height: '265px',
  display: 'flex',
};
const QRcodeStyle = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  right: '0',
  padding: '30px',
  fontSize: '0.75rem',
  marginTop: '20px',
  gap: '10px'
};
const menuStyle = {
  padding: '3vh 4vw 3vh 4vw',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};
const linkStyle = {
  color: 'dimgray',
  textDecoration: 'none',
  fontSize: '0.9rem',
};
const copyrightStyle = {
  display: 'flex',
  height: '55px',
  alignItems: 'center',
  fontSize: '0.75rem',
  paddingLeft: '20px',
  color: 'dimgray',
};
export default function Footer({navList,setSelectedIndex,setSelectedSubIndex}) {
  const handleClick = (index,subIndex) => {
    setSelectedIndex(index);
    setSelectedSubIndex(subIndex);
    window.scrollTo({top: 0,behavior: 'smooth'});
  };
  return (
    <>
      <footer style={footerStyle}>
        <div id="links" style={linksStyle}>
          {
            navList.filter(item => item.text != '首页').map((navItem,index) => {
              return (
                <div key={index} style={menuStyle}>
                  <strong><p>{navItem.text}</p></strong>
                  {
                    navItem.dropdowns.map((item,subIndex) => 
                    <Link to={navItem.href + '/' + item} key={subIndex} 
                    onClick={() => handleClick(index + 1,subIndex)} style={linkStyle}>{item}</Link>)
                  }
                </div>
              );
            })
          }
          <div id="QRCode" style={QRcodeStyle}>
            <img src="" alt="QRcode"/>
            微信公众号
          </div>
        </div>
        <hr />
        <div id="copyright" style={copyrightStyle}>
          Copyright @ xxx...
        </div>
      </footer>
    </>
  );
}