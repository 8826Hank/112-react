/** 
 * @authur Lin-Hank 
 * @mail 001linhank@gmail.com
*/
import Image from "next/image";

export default function CustomCard({ item }) {
    const descriptionStyle = {
        display: '-webkit-box',
        WebkitLineClamp: 9,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: '18em', // 控制高度
        textAlign: 'justify', // 兩端對齊
        border: '2px solid blue', // 藍色邊框
        padding: '10px', // 內邊距
        marginTop: '10px' // 上邊距
    };
    const nameStyle = {
        color: 'red', // 紅色字體
        fontWeight: 'bold', // 粗體
        fontSize: '1.3rem', // 調大字體
        marginTop: '8px' // 上邊距
    };

    return (
        <div className="border text-black decoration-sky-500/30 p-4">
            <img src={item.Picture.PictureUrl1} className="object-fill h-96 w-96"></img>
            <div style={nameStyle}>
                {item.ScenicSpotName}
            </div>
            <div style={descriptionStyle}>
                {item.Description}
            </div>
        </div>
    );
}
