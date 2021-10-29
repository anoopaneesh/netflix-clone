import Banner from "../components/Banner"
import Header from "../components/Header"
import Image from 'next/image'
import sections from "../data/sections_home"
import faqs from "../data/faqs"
import FAQ from "../components/FAQ"
import HomeSection from "../components/HomeSection"
import { ChevronRightIcon } from "@heroicons/react/solid"
import Footer from "../components/Footer"
const index = () => {
  
  return (
    <div>
      <Header />
      <Banner />
      {/* section_home */}
      {sections.map((section,i) => <HomeSection key={i} index={i} title={section.title} description={section.description} image={section.image}/>)}
      {/* FAQ */}
      <section className="w-full bg-black text-white md:px-16 py-8">
      <h1 className="font-bold text-xl sm:text-3xl lg:text-4xl text-center py-4">Frequently Asked Questions</h1>
      <div className="flex flex-col space-y-2 max-w-2xl mx-auto">
      {faqs.map(faq => <FAQ title={faq.title} description={faq.description} />)}
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

export default index
