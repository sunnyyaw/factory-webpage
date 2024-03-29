import React, { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import '../sass/CompanyInfo.css';

export default function CompanyInfo({title,subTitle,description,
  background,setSelectedIndex,href,index,more = true}) {
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
    width: '100%',
    objectFit: 'cover',
  };
  const descriptionStyle = {
    margin: '30px 0',
    color: 'dimgray',
  };
  const linkStyle = {
    textDecoration: 'none',
  };
  const handleClick = () => {
    setSelectedIndex(index);
    scrollTo({top: 0,behavior: 'smooth'});
  };
  const sectionRef = useRef();
  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
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
    })
    observer.observe(section);
    return () => observer.unobserve(section);
  },[]);
  return (
    <>
      <section ref={sectionRef} className="company-info" style={sectionStyle}>
        <div style={gridStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <h2 style={subTitleStyle}>{subTitle}</h2>
          <div style={descriptionStyle}>{description}</div>
          {more && 
          <Link to={href} onClick={() => handleClick(index) } style={linkStyle}
          className="section-button">
            了解更多
          </Link>}
        </div>
        <img src="/src/assets/factory.jpg" style={imgStyle} alt="company image"/>
      </section>
    </>
  );
}