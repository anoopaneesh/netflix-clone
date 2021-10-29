import Image from "next/image";
import {ChevronRightIcon} from '@heroicons/react/solid'
interface BannerProps{
  image:string
  children:any
  className?:string
}
const Banner = ({image,children,className}:BannerProps) => {
  return (
    <div className={`relative w-full h-[720px] border-b-8 border-[#222222] ${className}`}>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
      />
      {children}
    </div>
  );
};

export default Banner;
