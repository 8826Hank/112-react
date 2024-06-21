import Image from "next/image";

export default function CustomCard({ item }) {
    return (
        <div className="border text-black">
            <img src={item.Picture.PictureUrl1} className="object-fill h-96 w-96"></img>
            <div>{item.ScenicSpotName}</div>
            <div>{item.Description}</div>
        </div>
    );
}
