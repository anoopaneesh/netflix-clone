import { InformationCircleIcon } from "@heroicons/react/solid";
import { GetServerSideProps } from "next";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesContainer from "../components/MoviesContainer";
import popularMovies from "../dummy_data/PopularMovies";
import Movie from "../types/Movie";
import nookies from 'nookies'
import {verifyIdToken} from '../firebaseAdmin'
import { useAuth } from "../context/AuthProvider";
interface homeProps{
    dummyMovies:Movie[]
    bannerMovie:Movie
}
const Home = ({dummyMovies,bannerMovie}:homeProps) => {
  const {user} = useAuth()
  return (
    <div>
      <Header user={user} />
      <Banner
        image={`${process.env.NEXT_PUBLIC_TMDB_IMG_BASEURL}${bannerMovie.backdrop_path}`}
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
        <MoviesContainer title="Popular Movies" movies={dummyMovies}/>
        <MoviesContainer title="Trending Now" movies={dummyMovies}/>
        <MoviesContainer title="New Releases" movies={dummyMovies}/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let dummyMovies = popularMovies.results
  const token = nookies.get(context).token
  try{
    let user = await verifyIdToken(token)
    return {
      props: {
        dummyMovies,
        bannerMovie:dummyMovies[0]
      }
    }
  }catch(err){
    return {
      redirect:{
        permanent:false,
        destination:'/'
      }
    }
  }
};
