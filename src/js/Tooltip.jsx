import React from "react";
import { faChevronUp,faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../sass/Tooltip.css';

export default function Tooltip() {
  const containerStyle = {
    position: 'fixed',
    right: 0,
    bottom: '10vh',
    width: 45,
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
  };
  const tipStyle = {
    position: 'relative',
    height: 45,
    borderRadius: '3px',
    cursor: 'pointer',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  };
  const labelStyle = {
    position: 'absolute',
    height: '100%',
    backgroundColor: 'red',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '2px',
    padding: '5px',
    fontSize: '0.8rem',
  };
  const QRcodeStyle = {
    position: 'absolute',
    objectFit: 'contain',
    color: 'black',
    fontSize: '0.8rem',
  };
  return (
    <>
      <div style={containerStyle}>
        <div style={tipStyle} className="tooltip">
          <FontAwesomeIcon icon={faPhone}/>
          <div className="tooltip-label" style={labelStyle}>
            联系电话: 129380394
          </div>
        </div>
        <div style={tipStyle} className="tooltip">
          <FontAwesomeIcon icon={faEnvelope} />
          <div className="tooltip-label" style={labelStyle}>
            E-mail:aweffw@awefwae.com
          </div>
        </div>
        <div style={tipStyle} className="tooltip">
          <FontAwesomeIcon icon={faWeixin} />
          <img src="" alt="wechat QRcode" className="tooltip-qrcode" style={QRcodeStyle}/>
        </div>
        <div style={tipStyle} className="tooltip" onClick={() => window.scrollTo({top: 0,behavior:'smooth'})}>
          <FontAwesomeIcon icon={faChevronUp} />
          <div className="tooltip-label" style={labelStyle}>
            返回顶部
          </div>
        </div>
      </div>
    </>
  );
}