import Banner from "../components/Banner"
import Header from "../components/Header"
import {useRef} from 'react'
import sections from "../data/sections_home"
import faqs from "../data/faqs"
import FAQ from "../components/FAQ"
import {useRouter} from 'next/router'
import HomeSection from "../components/HomeSection"
import { ChevronRightIcon } from "@heroicons/react/solid"
import Head from 'next/head'
import Footer from "../components/Footer"
const Index = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const handleGetStarted = () => {
    if(inputRef.current?.value){
      router.push({
        pathname:'/signup',
        query:{
          email:inputRef.current.value
        }
      })
    }
  }
  return (
    <div>
      <Head>
        <title>Netflix Clone | Creative World Inc.</title>
        </Head>
      <Header user={null}/>
      <Banner image="https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Fbanner.jpg?alt=media&token=e35f1827-1db2-4062-ab4f-c3bf1d88cc89">
      <div className="absolute bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center space-y-4 text-white text-center px-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-lg lg:max-w-xl">
          Unlimited movies, TV shows and more.
        </h2>
        <p className="text-xl md:text-3xl">Watch anywhere. Cancel anytime.</p>
        <p className="text-lg md:text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <input ref={inputRef} type="text" placeholder="Email address" 
            className="outline-none border-none w-96 px-8 text-black  h-14"
            />
            <div className="bg-red-600 px-4 py-1.5 flex whitespace-nowrap items-center  h-12 rounded-sm md:rounded-none md:h-14 cursor-pointer" onClick={handleGetStarted}><p className="text-xl md:text-2xl pointer-events-none" >Get Started</p>
            <ChevronRightIcon className="h-8" />
            </div>
        </div>
      </div>
      </Banner>
      {/* section_home */}
      {sections.map((section,i) => <HomeSection key={i} index={i} title={section.title} description={section.description} image={section.image}/>)}
      {/* FAQ */}
      <section className="w-full bg-black text-white md:px-16 py-8">
      <h1 className="font-bold text-xl sm:text-3xl lg:text-4xl text-center py-4">Frequently Asked Questions</h1>
      <div className="flex flex-col space-y-2 max-w-2xl mx-auto">
      {faqs.map(faq => <FAQ key={faq.description} title={faq.title} description={faq.description} />)}
      </div>
      </section>
      {/* Signup */}
      <section className="w-full bg-black border-b-8 border-[#222] text-white flex flex-col space-y-2 items-center justify-center py-8">
      <h1 className="text-lg sm:text-xl text-center px-4 sm:px-0">Ready to watch? Enter your email to create or restart your membership.</h1>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <input type="text" placeholder="Email address" 
            className="outline-none border-none w-96 px-8 text-black  h-14"
            />
            <div className="bg-red-600 px-4 py-1.5 flex whitespace-nowrap items-center  h-12 rounded-sm md:rounded-none md:h-14"><p className="text-xl md:text-2xl">Get Started</p>
            <ChevronRightIcon className="h-8" />
            </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Index
