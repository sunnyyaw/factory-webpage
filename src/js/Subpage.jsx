import React from "react";
import Subnav from "./Subnav";

export default function Subpage({navList,selectedIndex,selectedSubIndex,setSelectedSubIndex,setSelectedIndex}) {
  const headImgStyle = {
    display: 'block',
    width: '100%',
    height: 320,
  };
  return (
    <>
      <img src="" alt="head-img" style={headImgStyle}/>
      <Subnav navList={navList} selectedIndex={selectedIndex}
       selectedSubIndex={selectedSubIndex} setSelectedSubIndex={setSelectedSubIndex}
       setSelectedIndex={setSelectedIndex}/>
    </>
  );
}