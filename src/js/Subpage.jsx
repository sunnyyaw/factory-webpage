import React from "react";
import Subnav from "./Subnav";
import Products from "./Products";

export default function Subpage({navList,selectedIndex,selectedSubIndex,
  setSelectedSubIndex,setSelectedIndex}) {
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
      <Products title={navList[selectedIndex].dropdowns[selectedSubIndex]}
      subTitle={navList[selectedIndex].subTitles[selectedSubIndex]} 
      more={false} index={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      setSelectedSubIndex={setSelectedSubIndex}
      items={navList[selectedIndex].products[selectedSubIndex].map(item => ({name: item,depict: '',href: ''}))}/>
    </>
  );
}