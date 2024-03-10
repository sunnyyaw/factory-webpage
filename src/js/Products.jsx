import React, { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import '../sass/Products.css';

export default function Products({title,subTitle,description,items,
  background,href}) {
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
    diplay: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    color: 'unset',
  };
  const nameStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    height: '20%',
  };
  const linkStyle = {
    display: 'block',
    height: '80%',
  };
  const wordStyle = {
    textDecoration: 'none',
  };
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };
  const handleClick = () => {
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
          })
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
      })
    },{
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    });
    observer.observe(section);
    return () => observer.unobserve(section);
  },[]);
  return (
    <>
      <section ref={sectionRef} className="productions" style={sectionStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <h2 style={subTitleStyle}>{subTitle}</h2>
        <div>{description}</div>
        { (!items || items.length === 0 )? <span style={spanStyle}>暂无数据</span> : 
          <div style={itemsStyle}>
            {
              items.map((item,subIndex) => {
              return (
                <div key={subIndex} style={itemStyle}>
                  <Link to={href + '/' + subIndex} style={linkStyle}
                  className="productions-item" onClick={handleClick}>
                    <img src={item.image ? require(`../assets/${item.image}`).default : ''} 
                    alt={`product-image${subIndex}`} style={imgStyle}/>
                  </Link>
                  <div style={nameStyle}>
                    <Link to={href + '/' + subIndex} style={wordStyle} onClick={handleClick}>
                      <span className="productions-name" >{item.name}</span>
                    </Link>
                  </div>
                </div>
              );
            })
           }
          </div>
        }
      </section>
    </>
  );
}