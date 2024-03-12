import React from "react";
import Image from "./Image";
import Section from "./Section";
import CompanyInfo from "./CompanyInfo";

export default function Home({navList,images,setSelectedIndex,setSelectedSubIndex}) {
  const companyDescription = 'xxx有限公司致力于半导体装备及零部件、电子制造设备的研发、制造、销售与服务。为半导体行业客户提供创新技术与产品解决方案，持续支撑行业健康发展。将国内最优秀的电子制造解决方案和生产测试装备推介给行业客户，促进产业能力提升。';
  const navItems = navList.map((navItem) => {
    return navItem.dropdowns.map((dropdown,subIndex) => ({
      name: dropdown,
      depict: navItem.depicts[subIndex],
      href: navItem.href + navItem.subhrefs[subIndex],
      image: navItem.images? navItem.images[subIndex] : '',
    }));
  });
  return (
    <>
      <Image navList={navList} images={images} moreIndex={4} setSelectedIndex={setSelectedIndex}/>
      <Section title="最新资讯" subTitle="LATEST INFORMATION" background={'rgb(240,240,240)'}
       setSelectedSubIndex={setSelectedSubIndex}
       setSelectedIndex={setSelectedIndex}
       index={4} subIndex={2} href={navList[4]?.href + navList[4]?.subhrefs[2]}/>
      <Section title="半导体零部件" subTitle="SEMICONDUCTOR  EQUIPMENT PARTS" items={navItems[1]}
       setSelectedSubIndex={setSelectedSubIndex}
       setSelectedIndex={setSelectedIndex}
       index={1} href={navList[1].href}/>
      <Section title="电子制造设备" subTitle="ELECTRONIC MANUFACTURING EQUIPMENT"  items={navItems[2]}
       background={'rgb(240,240,240)'} setSelectedSubIndex={setSelectedSubIndex}
       setSelectedIndex={setSelectedIndex}
       index={2} href={navList[2].href}/>
      <CompanyInfo title="公司介绍" subTitle="COMPANY INTRODUCTION" description={companyDescription}
       items={[]} setSelectedSubIndex={setSelectedSubIndex}
       setSelectedIndex={setSelectedIndex}
       index={4} href={navList[4].href}/>
    </>
  );
}