/** 
 * @authur Lin-Hank 
 * @mail 001linhank@gmail.com
*/

"use client";
import Link from "next/link";
import Image from "next/image";
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

import CustomCard from "./conponents/Card";

  //import CustomCard from "./conponents/Card"; 或是  import CustomCard from "@/conponents/Card";
  //import CustomCard from "@/app/conponents/Card";
import { useState,useEffect } from "react";
  export default function Component() {

    const [TDX_data,setdata] = useState([])
    const tokenURL = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token' 
    const apiKey = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot'
    useEffect(() =>
                    {
                      const getToken = async() =>
                        {
                          const clientID = process.env.TDX_CLIENT_ID;
                          const clientSecret = process.env.TDX_CLIENT_SECRET;
                          const tokenParams = new URLSearchParams();
                          tokenParams.append('grant_type','client_credentials')
                          tokenParams.append('client_id',clientID)
                          tokenParams.append('client_secret',clientSecret)

                          const tokenResponse = await fetch(tokenURL,{
                          method:'POST',
                          headers:{'containe-type':'application/x-www-form-urlencoded'},
                          body:tokenParams.toString()
                        });
                        };
                    },{})


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
    const travels = [
      {
        "ScenicSpotID": "C1_376470000A_000054",
        "ScenicSpotName": "梅庄花卉生產休憩園區",
        "DescriptionDetail": "梅庄花卉生產休憩園區內保留了大自然風情，淡雅佈置、遼闊視野，彷若置身於傳統農村。 「梅庄花卉生產休憩園區」佔地約20公頃，目前主要是以栽種果樹蜜李、棗子李、西瓜李、宜蘭早李、正水李仔、草莓、甜柿、暖地櫻桃、加寶果（樹葡萄）、香水桃、蟠桃、春蜜桃、鳳梨釋迦、神祕果、熱帶蘋果等水果。花卉有茶花、小紅梅、廣東梅、三色梅、熱帶梅、紫梅（紫色梅花）、富士櫻、大島櫻、吉野櫻、垂枝櫻、八重櫻、霧社櫻、紫櫻花、普賢象櫻等。走在其間的路徑中，晃如置身櫻花大道，而其它少量栽種的植物也有二、三百種，並陸續增加中資料來源：農業易遊網。育苗採果辨花卉    園區內設有育苗場、植物生長區、新品種栽植區、標本園，其特色為富含多元化園藝，如：桃、梅、櫻花、蜜柿、種苗、楓樹等，花卉種量繁多，一年四季皆適合賞花、採果。經由清楚的告示、教學活動或花卉栽植，可讓民眾更進一步認識生態，非常適合教學參觀。景觀特色 ：果樹蜜李、棗子李、西瓜李、宜蘭早李、正水李仔、草莓、甜柿、暖地櫻桃、加寶果（樹葡萄）、香水桃、蟠桃、等水果。花卉有茶花、小紅梅、廣東梅、三色梅、熱帶梅、紫梅（紫色梅花）、富士櫻、大島櫻、吉野櫻等。餐飲特色：當季水果冰棒－每支15元、神祕果冰棒每枝40元。",
        "Description": "梅庄花卉生產休憩園區內保留了大自然風情，淡雅佈置、遼闊視野，彷若置身於傳統農村。",
        "Phone": "886-49-2524899",
        "Address": "彰化縣芬園鄉溪尾村慶光路12-16號",
        "ZipCode": "502",
        "OpenTime": "08:00-18:00",
        "Picture": {
          "PictureUrl1": "https://tourism.chcg.gov.tw/upload/27/2012103109133688784.jpg",
          "PictureDescription1": "梅庄花卉"
        },
        "Position": {
          "PositionLon": 120.64356231689453,
          "PositionLat": 24.0292911529541,
          "GeoHash": "wsmb9q3uy"
        },
        "Class2": "遊憩類",
        "WebsiteUrl": "https://goo.gl/2Imao4",
        "ParkingPosition": {},
        "Keyword": "梅庄花卉生產休憩園區",
        "City": "臺中市",
        "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
        "UpdateTime": "2024-05-31T03:14:56+08:00"
      },
      {
        "ScenicSpotID": "C1_387000000A_000001",
        "ScenicSpotName": "Top City臺中大遠百",
        "DescriptionDetail": "TOP CITY台中大遠百建築外觀以一艘巨型傲人帆船為發想，懷抱著環保的理念，立足台灣，與時尚、科技接軌，帶領台灣航向世界各地，和國際舞台零距離。",
        "Description": "位於台中市最重要交通樞紐上的大遠百為全台最大百貨公司，樓上14層、地下2層的超大百貨，結合美食、百貨、量販、精品、娛樂，配合寬敞空間，讓購物不擁塞，除了國際知名精品進駐外，許多知名美食，如鼎泰豐、GODVA、響食天堂等也進駐於此，而以古早傳統台灣味佈置的台灣美食館，讓消費者彷彿回到6、70年代。此外，整棟建築物以綠能為概念，從基地綠化保水、雨水回收，到屋頂設置太陽能發電系統，以及儲冰式空調，也為城市綠建築大樓創立新的示範。(以上資料由台中大遠百提供)",
        "Phone": "886-4-37022168",
        "Address": "臺中市407西屯區臺灣大道三段251號",
        "ZipCode": "407",
        "OpenTime": "週一至週五 11:00~22:00，週六、日 10:30~22:00，例假日 10:30~22:00",
        "Picture": {
          "PictureUrl1": "https://travel.taichung.gov.tw/content/images/attractions/537/640x480_Filedata635173618561220703.jpg",
          "PictureDescription1": "Top City臺中大遠百"
        },
        "Position": {
          "PositionLon": 120.64459991455078,
          "PositionLat": 24.164470672607422,
          "GeoHash": "wsmc3r48n"
        },
        "Class1": "其他",
        "ParkingPosition": {},
        "City": "臺中市",
        "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
        "UpdateTime": "2024-05-31T03:14:56+08:00"
      },
      {
        "ScenicSpotID": "C1_387000000A_000003",
        "ScenicSpotName": "柳原教會",
        "DescriptionDetail": "柳原教會為臺灣基督長老教會於日治大正4年(1915)，依梅甘霧（Rev.Campbell N. Moody）牧師提供的英國教會圖樣所興建，隔年(1916)10月竣工。戰後，在舊教堂南側增建新聖殿，民國87 年（1998）又大興土木，完成地下停車場、主日學教室、辦公室、牧師館等。 柳原教會舊教堂為簡單的長方形平面，屬於早期基督教教堂的基本型式，稱為「巴西里卡」（Basilica）平面，其造價低廉，採光良好，視線絕佳。民國91年（2002）市府以其為中部最早創立之長老教會建築名作，見證本地區百年教會發展史，亦為臺灣歷史建築保存及再利用之佳例；保存區右側及後側之建築物，分別為1970年代及2000年代所加建，全區見證教會分為三期的百年發展空間歷程，公告登錄為歷史建築。以上文字轉載自臺中市文化資產處。",
        "Description": "柳原教會為大正4年(1915)，依梅甘霧（Rev.Campbell N. Moody）牧師提供的英國教會圖樣所興建，於大正5年(1916)10月竣工。戰後，在舊教堂南側增建新聖殿，民國87 年又大興土木，完成地下停車場、主日學教室、辦公室、牧師館等。柳原教會舊教堂平面圖，為簡單的長方形平面，是為早期基督教教堂的基本造型，稱為「巴西里卡」平面，其造價低廉，採光良好，視線絕佳，是最早簡單的基督教堂最好的範例。 (本文選自 柳原教會 官網)",
        "Phone": "886-4-22222749",
        "Address": "臺中市400中區興中街119號",
        "ZipCode": "400",
        "TravelInfo": "公車站牌臺中公園（三民路）> 台中客運100路，台中客運41路光復國小（三民路）> 巨業168路仁愛醫院（中正路）> 台中客運146路臺灣體大游泳池 > 統聯50路中興堂 >全航58路",
        "OpenTime": "依活動而定",
        "Picture": {
          "PictureUrl1": "https://travel.taichung.gov.tw/content/images/attractions/3686/640x480_Filedata635186389875583359.jpg",
          "PictureDescription1": "柳原教會-古蹟教堂側拍"
        },
        "Position": {
          "PositionLon": 120.68116760253906,
          "PositionLat": 24.146160125732422,
          "GeoHash": "wsmc65tme"
        },
        "ParkingPosition": {},
        "City": "臺中市",
        "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
        "UpdateTime": "2024-05-31T03:14:56+08:00"
      },
      {
        "ScenicSpotID": "C1_387000000A_000009",
        "ScenicSpotName": "白冷圳紀念公園",
        "DescriptionDetail": "白冷圳創建於昭和3年（1928），原專為灌溉台灣總督府大南庄蔗苗養成所蔗苗繁殖場而設，光復後改為農林廳種苗場。日本政府在昭和2年(1927)開始有灌溉設施之想法，並獲得當時議會通過花費日幣145萬餘圓之預算，於昭和3年(1928)12月開工，昭和7年(1932年)5月完工，施工時間為3年6個月，總計工程費為104萬圓，並於9月完成通水試驗，10月14日舉行通水儀式。在儀式中由台灣總督府殖產局長殖田殖局先生，將大南庄蔗苗養成所工事導水路命名為「白冷圳」。導水路長 16.5 公里， 全線圳路設於山腰竣坡處，除明渠外，主要構造物有隧座 22 座、渡槽14庫及３座倒虹吸工，其中一座倒虹吸工長度346 公尺，管徑 1.2公尺跨越山谷，為巨大水利工程。921地震後，因圳路受損，農田水利會興修新水管於旁(漆藍色)，形成新舊並列景況。因係將虹型管倒置，管型與虹吸管原理恰恰相反，而慣稱為倒虹吸管。倒虹吸管係以連通管原理設計而成，漆成綠色的鋼製圓管延著山坡攀附，工程艱難度不可言喻，美麗壯觀的二號倒虹吸管為全遠東最大的倒虹吸管，民國90年獲選為全國百景第26名。",
        "Description": "日本人為了發展台灣的製糖業，致力培育並繁殖蔗苗，選中氣候、土質都很優良的新社河階群台地，設立大南庄蔗苗養成所，不過由於台地缺水，必須尋闢水源，幾經翻山越嶺，跋山涉水，才選定大甲溪上游的白冷高地。為了引大甲溪水，工程人員想到了「虹吸管原理」，而造就了現今的白冷圳。",
        "Phone": "886-4-22289111",
        "Address": "臺中市426新社區中95線道",
        "ZipCode": "426",
        "TravelInfo": "搭乘豐原客運(臺中往中興嶺)的班車，到中興嶺站下車；再轉計程車或預約新社導覽接駁車。",
        "OpenTime": "隨時可參觀",
        "Picture": {
          "PictureUrl1": "https://travel.taichung.gov.tw/content/images/attractions/58326/640x480_attractions-image-fde7zunutkaw-0lke7wrgq.jpg",
          "PictureDescription1": "白冷圳紀念公園"
        },
        "Position": {
          "PositionLon": 120.82948303222656,
          "PositionLat": 24.167959213256836,
          "GeoHash": "wsmcmx9ke"
        },
        "Class3": "自然風景類",
        "ParkingInfo": "收費情形─每人每天200元〈不限景點〉",
        "ParkingPosition": {},
        "Remarks": "採預約方式─前1、2天電話預約04-258-2105818個店家景點可供上下車─天籟園、小路、親水緣、花田民宿、千樺、劦陶宛、新社蓮園、 菇神、新農市、櫻花林、梅林親水岸，百菇莊、...",
        "City": "臺中市",
        "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
        "UpdateTime": "2024-05-31T03:14:56+08:00"
      }
    ]

    return (
      <>
      <div className="bg-teal-50">
        <div className="container , mx-auto ">
          <Navbar fluid className="bg-teal-50" >
            <NavbarBrand as={Link} href="https://flowbite-react.com">
              <img src="https://www.airtmd.com/media/p/131/rhOYfady/0.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="text-blue-400 hover:text-red-500" >
              <NavbarLink href="https://www.yuntech.edu.tw/">
                <span className="px-4 py-2 hover:text-yellow-500 
                hover:border-yellow-500
                hover:border-b-2
                "></span>
                首頁
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
          <img src="/taitong-image/八拱跨海步橋.jpg" alt="由 Mark Kao - https://www.flickr.com/photos/67415843@N05/43923096555/, CC0, https://commons.wikimedia.org/w/index.php?curid=92750450" />
          <img src="/taitong-image/台東-小火車.jpg" alt="由 JianEn Yu - https://www.flickr.com/photos/93179224@N04/14729078814/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=129921752" />
          <img src="/taitong-image/台東-小野柳.jpg" alt="由 Hatsune0831 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=129911668" />
          <img src="taitong-image/花東 伯朗大道.jpg" alt="由 觀光局資訊室 - https://media.taiwan.net.tw/zh-tw/portal/media/details/22553, CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=129650650" />
          <img src="taitong-image/嘉明湖.jpg" alt="由 CHU WayNe - https://www.flickr.com/photos/junes_hours/21186259080/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=129921943" />
        </Carousel>
      </div>

      {/* <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {travels.map( travel=>
            <Card
            className="max-w-sm"
            imgAlt={travel.Picture.PictureDescription1}
            imgSrc={travel.Picture.PictureUrl1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {travel.ScenicSpotName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {travel.DescriptionDetail}
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
              </Card>
          )}
        
          
        </div>
      </div> */}

      <div className="bg-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            travels.map(travel=>
              <CustomCard item={travel}/>
            )}
        </div>
      </div>

      <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
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