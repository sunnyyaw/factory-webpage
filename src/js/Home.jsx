import React from "react";
import Image from "./Image";
import Section from "./Section";

export default function Home() {
  const companyDescription = 'xxx有限公司致力于半导体装备及零部件、电子制造设备的研发、制造、销售与服务。为半导体行业客户提供创新技术与产品解决方案，持续支撑行业健康发展。将国内最优秀的电子制造解决方案和生产测试装备推介给行业客户，促进产业能力提升。';
  const semiItems = [
    {
      name: '控压阀',
      depict: '高精度、响应快',
    },
    {
      name: '流量计',
      depict: '高精度、低漏率',
    },
    {
      name: '光热源',
      depict: '宽光谱、高亮度',
    },
    {
      name: '泵',
      depict: '高洁净、高可靠',
    },
  ];
  const elecItems = [
    {
      name: '半导体制造',
      depict: '半导体制造概述',
    }
  ];
  return (
    <>
      <Image />
      <Section title="最新资讯" subTitle="LATEST INFORMATION" background={'rgb(240,240,240)'}/>
      <Section title="半导体零部件" subTitle="SEMICONDUCTOR  EQUIPMENT PARTS" items={semiItems}/>
      <Section title="电子制造设备" subTitle="ELECTRONIC MANUFACTURING EQUIPMENT"  items={elecItems} background={'rgb(240,240,240)'}/>
      <Section title="公司介绍" subTitle="COMPANY INTRODUCTION" description={companyDescription} items={[]}/>
    </>
  );
}