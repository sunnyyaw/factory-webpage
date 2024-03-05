import React from "react";
import Subnav from "./Subnav";
import CompanyInfo from "./CompanyInfo";

export default function CompanyInfoPage({navList,selectedIndex,
  selectedSubIndex,setSelectedSubIndex,
  setSelectedIndex,description}) {
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
      <CompanyInfo title={navList[selectedIndex].dropdowns[selectedSubIndex]}
      subTitle={navList[selectedIndex].subTitles[selectedSubIndex]} 
      index={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      setSelectedSubIndex={setSelectedSubIndex}
      description={description}/>
    </>
  );
}