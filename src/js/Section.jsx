import React, { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import '../sass/Section.css';

export default function Section({title,subTitle,description,items,
  background,setSelectedSubIndex,setSelectedIndex,href,index,subIndex = 0,more = true}) {
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
  };
  const handleClick = (index,subIndex) => {
    setSelectedIndex(index);
    setSelectedSubIndex(subIndex);
    window.scrollTo({top: 0,behavior: 'smooth'});
  };
  const sectionRef = useRef();
  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver((entries)=> {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          [...entry.target.children].forEach(elem => {
              elem.animate([
              { opacity: '0',transform: 'translateY(40px)',offset: 0},
              { opacity: '0.8',transform: 'translateY(-5px)',offset: 0.5},
              { opacity: '1',transform: 'translateY(0px)',offset: 1},
            ],
            {
              duration: 1000,
              easing: 'ease-in-out',
              iterations: 1,
            });
            elem.style.opacity = 1;
          });
        } else {
          [...entry.target.children].forEach(elem => {
            elem.animate([
              { opacity: '1',transform: 'translateY(0px)'},
              { opacity: '0',transform: 'translateY(40px)'},
            ],
            {
              duration: 500,
              easing: 'ease-in-out',
              iterations: 1,
            });
            elem.style.opacity = 0;
          });
        }
      });
    },{
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    });
    observer.observe(section);
    return () => {
      observer.unobserve(section)
    };
  },[]);
  return (
    <>
      <section ref={sectionRef} className="section" style={sectionStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <h2 style={subTitleStyle}>{subTitle}</h2>
        <div>{description}</div>
        { !items ? <span style={spanStyle}>暂无数据</span> : 
          <div style={itemsStyle}>
            {
              items.map((item,subIndex) => {
              return (
                <Link to={item.href} key={subIndex} style={{...itemStyle,backgroundImage: `url(/${item.image})`}} 
                onClick={() => handleClick(index,subIndex)} className="section-item">
                  <div className="section-mask" />
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
        <Link to={href} onClick={() => handleClick(index,subIndex) } style={linkStyle}
        className="section-button">
          了解更多
        </Link>}
      </section>
    </>
  );
}