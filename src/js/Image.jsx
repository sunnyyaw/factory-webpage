import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import '../sass/Image.css';

export default function Image({navList,moreIndex,setSelectedIndex,images}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const buttons = new Array(2).fill(0);

  const handleClick = (index, event) => {
    setSelectedImageIndex(index);
  };
  const handleMore = () => {
    setSelectedIndex(moreIndex);
    window.scrollTo({top: 0,behavior: 'smooth'});
  };
  let hit = true;
  const handleScroll = (event) => {
    const offsetTop = document.getElementById('container').offsetTop;
    const offsetHeight = document.getElementById('container').offsetHeight;
    if (!hit && window.scrollY < offsetTop + offsetHeight / 2) {
      hit = true;
      [...document.getElementsByClassName('img-restart')].forEach((item) => {
        item.className = 'img-text';
      });
      [...document.getElementsByClassName('more-restart')].forEach((item) => {
        item.className = 'more';
      });
    } else if (hit && window.scrollY >= offsetTop + offsetHeight) {
      hit = false;
      [...document.getElementsByClassName('img-text')].forEach((item) => {
        item.className = 'img-restart';
      });
      [...document.getElementsByClassName('more')].forEach(item => {
        item.className = 'more-restart';
      });
    }
  };
  const containerStyle = {
    height: 600,
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    scrollBehavior: 'smooth',
  };
  const imageStyle = {
    position: 'relative',
    float: 'left',
    display: 'flex',
    flexShrink: '0',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    textalign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const h2Style = {
    marginTop: '5px',
    fontSize: '30px',
    fontWeight: 'normal',
  };
  const h1Style = {
    fontSize: '40px',
    marginBottom: '5px',
  };
  const pStyle = {
    marginTop: '30px',
    fontSize: '20px',
    marginBottom: '40px',
  };
  const radioGroupStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    transform: 'translateY(-80px)',
    gap: '10px',
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div id="container" className="image-container" style={containerStyle}>
        {
          images.map((image, index) => {
            return (
              <div key={index} id={'img' + index} style={{...imageStyle,backgroundImage: `url(${require(`../assets/${image}.jpg`).default}`}}>
                <h1 style={h1Style} className="img-text">专业、创新、开放</h1>
                <h2 style={h2Style} className="img-text">xxx有限公司</h2>
                <p style={pStyle} className="img-text">坚持以技术为底...</p>
                <Link to={navList[moreIndex].href} onClick={handleMore}>
                  <button className="more" type="button">了解更多</button>
                </Link>
              </div>
            );
          })
        }
      </div>
      <div style={radioGroupStyle}>
        {buttons.map((button, index) => {
          return (
            <a href={'#img'+index} key={index} aria-label="切换图片"
              className={selectedImageIndex === index ? 'input-btn-checked' : 'input-btn'}
              onClick={(e) => handleClick(index, e)} />
          );
        })}
      </div>
    </>
  );
}
