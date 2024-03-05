import React from "react";
import { Link } from "react-router-dom";
import '../sass/Section.css';

export default function Section({title,subTitle,description,items,
  background,setSelectedSubIndex,setSelectedIndex,href,index,more = true}) {
  const titleStyle = {
    textAlign: 'center',
    fontSize: '1.6rem',
    marginBottom: '5px',
  };
  const subTitleStyle = {
    textAlign: 'center',
    color: 'rgb(230,0,0)',
    fontSize: '1rem',
    fontWeight: 'normal',
    marginTop: '0',
  };
  const sectionStyle = {
    background: background ? background : 'white',
    padding: 20,
  };
  const spanStyle = {
    fontSize: '0.8rem',
    color: 'gray',
  };
  const itemsStyle = {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridAutoRows: 250,
    gap: '20px',
  };
  const itemStyle = {
    position: 'relative',
    textDecoration: 'none',
    color: 'unset',
  };
  const nameStyle = {
    fontWeight: 'bold',
    fontSize: 'x-large',
    position: 'absolute',
    left: '5%',
    bottom: '5%',
  };
  const depictStyle = {
    position: 'absolute',
    left: '5%',
    bottom: '5%',
    fontSize: '1rem',
  };
  const linkStyle = {
    textDecoration: 'none',
  }
  const handleClick = (index,subIndex) => {
    setSelectedIndex(index);
    setSelectedSubIndex(subIndex);
    window.scrollTo({top: 0,behavior: 'smooth'});
  }
  return (
    <>
      <section className="section" style={sectionStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <h2 style={subTitleStyle}>{subTitle}</h2>
        <div>{description}</div>
        { !items ? <span style={spanStyle}>暂无数据</span> : 
          <div style={itemsStyle}>
            {
              items.map((item,subIndex) => {
              return (
                <Link to={item.href} key={subIndex} style={itemStyle} 
                onClick={() => handleClick(index,subIndex)} className="section-item">
                  <span style={nameStyle} className="section-name">
                    {item.name}
                  </span>
                  <span style={depictStyle} className="section-depict">
                    {item.depict}
                  </span>
                </Link>
              );
            })
           }
          </div>
        }
        {more && 
        <Link to={href} onClick={() => handleClick(index,0) } style={linkStyle}
        className="section-button">
          了解更多
        </Link>}
      </section>
    </>
  );
}