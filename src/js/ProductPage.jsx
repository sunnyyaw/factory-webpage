import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../sass/ProductPage.css';

export default function ProductPage({ products,setSelectedIndex,setSelectedSubIndex }) {
  const params = useParams();
  const product = products[params.productId];
  const navName = params.navName;
  const subNavName = params.subNavName;
  const handleHome = () => {
    setSelectedIndex(0);
    setSelectedSubIndex(0);
  };
  return (
    <div className="product-page-container">
      <nav className="product-page-navbar">
        <Link to="/" onClick={handleHome} className="product-page-link">
          <span>首页</span>
        </Link>&nbsp;&nbsp;/&nbsp;&nbsp;
        <Link to={`/${navName}/${subNavName}`} className="product-page-link">
          <span>{subNavName}</span>
        </Link>&nbsp;&nbsp;/&nbsp;&nbsp;
        <span>{product?.name}</span>
      </nav>
      <div className="product-page-image-description">
      <img src={`/${product?.image}`} 
      alt="product-image" className="product-page-image"/>
        <div>
          <h1 className="product-page-name">{product?.name}</h1>
          <p className="product-page-depict">{product?.depict}</p>
        </div>
      </div>
      <span className="product-page-red product-page-span">描述</span>
      <hr className="product-page-divider" />
      <div className="product-page-feature-box">
        <span className="product-page-red product-page-bold ">产品特性:</span>
        <ul className="product-page-list">
          {product?.features?.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
        <span className="product-page-red product-page-bold ">产品规格:</span>
        <table className="product-page-table">
          <thead className="product-page-table-head">
            <tr>
              {product?.specHeads?.map((specHead, index) => 
              <th className="product-page-cell" key={index}>{specHead}</th>)}
            </tr>
          </thead>
          <tbody>
            {
              product?.specs?.map((specTuple, index) => {
                return (
                  <tr key={index}>
                    {specTuple.map((spec, index) => 
                    <td className="product-page-cell" key={index}>{spec}</td>)}
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}