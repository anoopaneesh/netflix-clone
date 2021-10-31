import { InformationCircleIcon } from "@heroicons/react/solid";
import { GetServerSideProps } from "next";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesContainer from "../components/MoviesContainer";
import Movie from "../types/Movie";
import Head from 'next/head'
import nookies from 'nookies'
import {verifyIdToken} from '../firebaseAdmin'
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { getComedyMovies, getNewReleases, getPopularMovies, getTrendingMovies, searchMovies } from "../tmdb/movies";
interface homeProps{
    popularMovies:Movie[]
    comedyMovies:Movie[]
    trendingMovies:Movie[]
    newReleases:Movie[]
    bannerMovie:Movie
}
const Home = ({bannerMovie,popularMovies,trendingMovies,newReleases,comedyMovies}:homeProps) => {
  const {user} = useAuth()
  const [search,setSearch] = useState("")
  const [loadingSearch,setLoadingSearch] = useState(false)
  const [searchResults,setSearchResults] = useState<Movie[]>([])
  useEffect(()=>{
    const getResults = async () => {
      if(!loadingSearch){
        setLoadingSearch(true)
        let results = await fetch(`/api/search?q=${search}`).then(res => res.json())
        if(results.status === 'success'){
          setSearchResults(results.results.results)
        }
        setLoadingSearch(false)
      }    
    }
    if(search.length){
        getResults()
    }
  },[search])
  return (
    <div>
      <Head>
        <title>Netflix Clone | Creative World Inc.</title>
        </Head>
      <Header user={user} search={search} setSearch={setSearch}/>
      <Banner
        image={`${process.env.NEXT_PUBLIC_TMDB_IMG_BASEURL}/original${bannerMovie.backdrop_path}`}
        className="border-none"
      >
        <div className="absolute bg-black bg-opacity-30 w-full h-full flex flex-col justify-end">
          <div className="flex flex-col items-start justify-end space-y-4 text-white text-left px-8 sm:px-16 py-16">
            <h1 className="text-6xl font-bold">{bannerMovie.title}</h1>
            <p className="max-w-md line-clamp-3">
              {bannerMovie.overview}
            </p>
            <button className="rounded-sm bg-gray-400 text-white px-4 py-2 flex items-center space-x-1">
              <InformationCircleIcon className="h-6" />
              More Info
            </button>
          </div>
          <div className="w-full h-32 bg-gradient-to-t from-black to-transparent -mt-10"></div>
        </div>
      </Banner>
      <main className="bg-black pb-16 px-8 md:px-16 space-y-10">
        {search.length && searchResults.length && <MoviesContainer title="Search Results" movies={searchResults}/>}
        <MoviesContainer title="Popular Movies" movies={popularMovies}/>
        <MoviesContainer title="Trending Now" movies={trendingMovies}/>
        <MoviesContainer title="New Releases" movies={newReleases}/>
        <MoviesContainer title="Comedy Movies" movies={comedyMovies}/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = nookies.get(context).token
  try{
    let user = await verifyIdToken(token)
    let {countryCode} = await fetch('https://extreme-ip-lookup.com/json/').then(res=>res.json())
    const  popularMovies = await getPopularMovies({region:countryCode}).then(res => res.results)
    const  newReleases = await getNewReleases({region:countryCode}).then(res => res.results)
    const  comedyMovies = await getComedyMovies().then(res => res.results)
    const  trendingMovies = await getTrendingMovies().then(res => res.results)
    let bannerMovie=newReleases[Math.round(Math.random() * newReleases.length)]

    while(!bannerMovie.backdrop_path || bannerMovie.original_language !== 'en'){
      bannerMovie = newReleases[Math.round(Math.random() * (newReleases.length-2))]
    }
    return {
      props: {
        popularMovies,
        trendingMovies,
        newReleases,
        comedyMovies,
        bannerMovie
      }
    }
  }catch(err){
    console.log(err)
    return {
      redirect:{
        permanent:false,
        destination:'/'
      }
    }
  }
};
