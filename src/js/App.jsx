import React from "react";
import '../sass/App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";

const routerStyle = {
  height: '100%',
}
export default function App() {
  const [navList,setNavList] = useState([
    {
      text: '首页',
      dropdowns: [],
    },
    {
      text: '半导体零部件',
      dropdowns: ['控压阀','流量计','光热源','泵'],
    },
    {
      text: '电子制造设备',
      dropdowns: ['半导体制造','汽车与能源','计算机通讯','家电及终端','通用电子制造'],
    },
    {
      text: '技术支持',
      dropdowns: ['问题反馈'],
    },
    {
      text: '关于我们',
      dropdowns: ['公司简介','合规申明','新闻资讯','2024届校园招聘','联系我们'],
    }
  ]);
  return (
    <>
    <BrowserRouter>
      <Navbar navList={navList}/>
      <Routes>
      </Routes>
      <Footer navList={navList}/>
    </BrowserRouter>
    </>
  );
}