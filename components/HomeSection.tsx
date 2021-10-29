import Image from 'next/image'
interface HomeSectionProps{
    title:string
    description:string
    image:string
    index:number
}
const HomeSection = ({title,description,index,image}:HomeSectionProps) => {
    return (
        <section className="w-full bg-black  border-b-8 border-[#222222] "><div className={`max-w-5xl mx-auto text-white flex flex-col space-y-4 text-center px-8 items-center justify-between md:text-left md:space-x-20 ${ index%2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
     <div className="space-y-4 max-w-md">
       
     <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-16">{title}</h2>
<p className="text-xl md:text-2xl">{description}</p>
       </div>
      <div className="relative w-80 h-80 flex-shrink-0">
        <Image src={image} layout="fill" objectFit="contain" />
      </div>
      </div></section>
    )
}

export default HomeSection
