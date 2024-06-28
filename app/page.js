/** 
 * @authur Lin-Hank 
 * @mail 001linhank@gmail.com
*/

"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import { 
    Navbar, 
    NavbarBrand, 
    NavbarCollapse, 
    NavbarLink, 
    NavbarToggle, 
    Footer,
    FooterCopyright,
    FooterBrand, 
    FooterDivider, 
    FooterLink, 
    FooterLinkGroup,
    Carousel,
    Card,
    Button,
    DarkThemeToggle,
} from "flowbite-react";
import AutoSizeImage from "./conponents/AutoSizeImage";
import CustomCard from "./conponents/Card";

//import CustomCard from "./conponents/Card"; 或是  import CustomCard from "@/conponents/Card";

  export default function Component() {

    const [travels ,setTravels] = useState([])
    const tokenURL = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token' 
    const apiKey = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot'
                
    const items = [
      {
        cover:"/taitong-image/八拱跨海步橋.jpg",
        name:"八拱跨海步橋",
        description:"是一座橋",
      },
      {
        cover:"/taitong-image/台東-小火車.jpg",
        name:"台東~小火車",
        description:"搭火車享受穿梭山林的樂趣",
      },
      {
        cover:"/taitong-image/台東-小野柳.jpg",
        name:"台東~小野柳",
        description:"快斷頭的女王峰",
      },
      {
        cover:"taitong-image/花東 伯朗大道.jpg",
        name:"台東~伯朗大道",
        description:"只有大道，你在期待甚麼",
      }
    ]


    useEffect(() => {
      async function fetchData()
      {
        const response = await fetch('api/items');
        const data = await response.json();
        console.log(data);
        setTravels(data)
      }
      fetchData();
    },[]);

    return (
      <>
      <div className="bg-teal-50">
        <div className="container , mx-auto ">
          <Navbar fluid className="bg-cyan-200" >
            <NavbarBrand as={Link} href="https://flowbite-react.com">
              <img src="https://upload.wikimedia.org/wikipedia/zh/7/7e/National_Taipei_University_of_Technology_seal.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width="100px" height="200px"/>
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Taiwan Travale</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="text-blue-400 hover:text-red-500" >
              <NavbarLink href="https://www.yuntech.edu.tw/">
                <span className="px-4 py-2 hover:text-yellow-500 
                hover:border-yellow-500
                hover:border-b-2
                ">首頁</span>
                
              </NavbarLink>
              <NavbarLink as={Link} href="#" className = "hover:underline" >
                關於我們
              </NavbarLink>
              <NavbarLink href="#" className = "hover:underline">服務內容</NavbarLink>
              <NavbarLink href="#" className = "hover:underline">旅遊安排</NavbarLink>
              <NavbarLink href="#" className = "hover:underline">聯絡我們</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle></DarkThemeToggle>
          </Navbar>
        </div>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <AutoSizeImage src="/taitong-image/八拱跨海步橋.jpg" alt="由 Mark Kao - https://www.flickr.com/photos/67415843@N05/43923096555/, CC0, https://commons.wikimedia.org/w/index.php?curid=92750450" />
          <AutoSizeImage src="/taitong-image/台東-小火車.jpg" alt="由 JianEn Yu - https://www.flickr.com/photos/93179224@N04/14729078814/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=129921752" />
          <AutoSizeImage src="/taitong-image/台東-小野柳.jpg"  alt="由 Hatsune0831 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=129911668" />
          <AutoSizeImage src="/taitong-image/花東 伯朗大道.jpg" alt="由 觀光局資訊室 - https://media.taiwan.net.tw/zh-tw/portal/media/details/22553, CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=129650650" />
          <AutoSizeImage src="/taitong-image/嘉明湖.jpg" alt="由 CHU WayNe - https://www.flickr.com/photos/junes_hours/21186259080/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=129921943" />
        </Carousel>
      </div>

      
      <div className="bg-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            travels.map((travel,index)=>
              <CustomCard item={travel} key={index}/>
          )}
        </div>
      </div>

      <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/s/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  </>
    );
  }