import React from "react";
import '../sass/App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Subpage from "./Subpage";
import Tooltip from "./Tooltip";
import QuestionPage from "./QuestionPage";
import CompanyInfoPage from "./CompanyInfoPage";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSubIndex, setSelectedSubIndex] = useState(0);
  const [navList,setNavList] = useState([
    {
      text: '首页',
      dropdowns: [],
      subTitles: [],
      depicts: [''],
      products: [[]],
      subhrefs: ['/'],
      href: '/',
    },
    {
      text: '半导体零部件',
      dropdowns: ['控压阀','流量计','光热源','泵'],
      subTitles: ['PRESSURE CONTROL VALVE','MASS FLOW CONTROLLERS','LIGHT & RADIATION SOURCES','PUMP'],
      depicts: ['高精度、响应快','高精度、低漏率','宽光谱、高亮度','高洁净、高可靠'],
      subhrefs: ['/控压阀','/流量计','/光热源','/泵'],
      products: [
        [
          'SE-B010A-K040DN/K050DN-E2F-CC 控压蝶阀',
          'SE-B010A-P100DN-E2F-CC控压蝶阀',
        ],
        [
          '氙灯：高亮度 , 宽光谱 , 高稳定性',
          'LDLS',
          'UV灯: 高紫外能量, 高稳定性，长寿命',
          'HS-H2000A-S120SH单端卤素灯',
          'HS-H520A-S082SV/ HS-H640A-S095SV单端卤素灯',
        ],
        [
          'DE-L600A磁悬浮液体泵',
          'DE-L2000A磁悬浮液体泵',
        ],
        [],
      ],
      href: '/半导体零部件',
    },
    {
      text: '电子制造设备',
      dropdowns: ['半导体制造','汽车与能源','计算机通讯','家电及终端','通用电子制造'],
      subTitles: ['SEMICONDUCTOR MANUFACTURING','AUTO AND ENERGY',
      'COMPUTER AND TELECOMMUNICATIONS','CONSUMER ELECTRONICS','GENERAL ELECTRONIC MANUFACTURING'],
      products: [[],[],[],[],[]],
      depicts: ['半导体制造概述','','','',''],
      subhrefs: ['/半导体制造','/汽车与能源','/计算机通讯','/家电及终端','/通用电子制造'],
      href: '/电子制造设备',
    },
    {
      text: '技术支持',
      dropdowns: ['问题反馈'],
      subTitles: ['PROBLEM FEEDBACK'],
      products: [[]],
      depicts: [''],
      subhrefs: ['/问题反馈'],
      href: '/技术支持',
    },
    {
      text: '关于我们',
      dropdowns: ['公司简介','合规申明','新闻资讯','2024届校园招聘','联系我们'],
      subTitles: ['COMPANY PROFILE','COMPLIANCE STATEMENT','NEWS INFORMATION','2024 CAMPUS RECRUITMENT',''],
      products: [[],[],[],[],[]],
      depicts: ['','','','',''],
      subhrefs: ['/公司简介','/合规申明','/新闻资讯','/2024届校园招聘','/联系我们'],
      href: '/关于我们',
    }
  ]);
  const companyDescription = 'xxx有限公司致力于半导体装备及零部件、电子制造设备的研发、制造、销售与服务。为半导体行业客户提供创新技术与产品解决方案，持续支撑行业健康发展。将国内最优秀的电子制造解决方案和生产测试装备推介给行业客户，促进产业能力提升。\
  公司核心团队具备20年以上电子设备技术开发经验，并联合了众多国内半导体制造设备和零部件合作伙伴，为国内半导体设备厂、FAB厂、电子电器设备厂、研究机构提供先进的解决方案，相关产品广泛应用于国内顶级制造企业和研究、测试机构。\
坚持“专业、创新、开放”，以技术为底、集众家之力，攻坚克难，为半导体及电子制造产业健康发展贡献一份力量。';
  return (
    <>
    <BrowserRouter>
      <Navbar navList={navList} selectedIndex={selectedIndex}
       setSelectedIndex={setSelectedIndex}
       setSelectedSubIndex={setSelectedSubIndex}/>
      <Routes>
        <Route path="/" element={<Home navList={navList} 
        setSelectedIndex={setSelectedIndex} setSelectedSubIndex={setSelectedSubIndex}/>}></Route>
        <Route path="/*" element={<Subpage navList={navList} 
        selectedIndex={selectedIndex} selectedSubIndex={selectedSubIndex}
        setSelectedSubIndex={setSelectedSubIndex}
        setSelectedIndex={setSelectedIndex}/>}></Route>
        <Route path="/关于我们/公司简介?" element={<CompanyInfoPage navList={navList} 
        selectedIndex={selectedIndex} selectedSubIndex={selectedSubIndex}
        setSelectedSubIndex={setSelectedSubIndex}
        setSelectedIndex={setSelectedIndex} description={companyDescription}/>}></Route>
        <Route path="/技术支持/*" element={<QuestionPage navList={navList} 
        selectedIndex={selectedIndex} selectedSubIndex={selectedSubIndex}
        setSelectedSubIndex={setSelectedSubIndex}
        setSelectedIndex={setSelectedIndex}/>}></Route>
      </Routes>
      <Tooltip />
      <Footer navList={navList}
      setSelectedIndex={setSelectedIndex}
      setSelectedSubIndex={setSelectedSubIndex}/>
    </BrowserRouter>
    </>
  );
}