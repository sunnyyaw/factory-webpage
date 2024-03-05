import React from "react";
import '../sass/CompanyInfo.css';

export default function CompanyInfo({title,subTitle,description,
  background}) {
  const titleStyle = {
    fontSize: '1.6rem',
    marginBottom: '5px',
  };
  const subTitleStyle = {
    color: 'rgb(230,0,0)',
    fontSize: '1rem',
    fontWeight: 'normal',
    marginTop: '0',
  };
  const sectionStyle = {
    background: background ? background : 'white',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '40px 20px',
  };
  const gridStyle = {
    padding: '40px 10px',
  };
  const imgStyle = {
    display: 'block',
    height: '100%',
  };
  const descriptionStyle = {
    margin: '30px 0',
    color: 'dimgray',
  }
  return (
    <>
      <section className="company-info" style={sectionStyle}>
        <div style={gridStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <h2 style={subTitleStyle}>{subTitle}</h2>
          <div style={descriptionStyle}>{description}</div>
        </div>
        <img src="" style={imgStyle} alt="company image"/>
      </section>
    </>
  );
}