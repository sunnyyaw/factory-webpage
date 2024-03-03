import React from "react";
import '../sass/App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Subpage from "./Subpage";
export default function App() {
  const [navList,setNavList] = useState([
    {
      text: '首页',
      dropdowns: [],
      href: '/',
    },
    {
      text: '半导体零部件',
      dropdowns: ['控压阀','流量计','光热源','泵'],
      href: '/半导体零部件',
    },
    {
      text: '电子制造设备',
      dropdowns: ['半导体制造','汽车与能源','计算机通讯','家电及终端','通用电子制造'],
      href: '/电子制造设备',
    },
    {
      text: '技术支持',
      dropdowns: ['问题反馈'],
      href: '/技术支持',
    },
    {
      text: '关于我们',
      dropdowns: ['公司简介','合规申明','新闻资讯','2024届校园招聘','联系我们'],
      href: '/关于我们',
    }
  ]);
  return (
    <>
    <BrowserRouter>
      <Navbar navList={navList}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/半导体零部件" element={<Subpage />}></Route>
      </Routes>
      <Footer navList={navList}/>
    </BrowserRouter>
    </>
  );
}