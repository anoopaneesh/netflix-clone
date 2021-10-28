import Banner from "../components/Banner"
import Header from "../components/Header"
import Image from 'next/image'
const index = () => {
  const sections = [{
    title:"Enjoy on your TV.",
    description:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more",
    image:'https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Ftv.png?alt=media&token=b7b7dea0-028b-43d7-be29-0db47611f7bf',
  },{
    title:'Download your shows to watch offline.',
    description:'Save your favourites easily and always have something to watch.',
    image:'https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Fmobile.jpg?alt=media&token=254d2f72-0671-403a-9a1b-52f2551d6d2d',
  },{
    title:'Create profiles for children.',
    description:'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
    image:'https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Fchildren.png?alt=media&token=e25aff5c-f65f-44f5-8e1c-06032c4ef7e5',

  }]
  return (
    <div>
      <Header />
      <Banner />
      {sections.map((section,i) => (<section key={i} className={`w-full bg-black text-white flex flex-col space-y-4 text-center px-8 items-center justify-center md:text-left md:space-x-20 border-b-8 border-[#222222] ${ i%2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
     <div className="space-y-4 max-w-md">
       
     <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-16">{section.title}</h2>
<p className="text-xl md:text-2xl">{section.description}</p>
       </div>
      <div className="relative w-80 h-80 flex-shrink-0">
        <Image src={section.image} layout="fill" objectFit="contain" />
      </div>
      </section>))}
    </div>
  )
}

export default index
