import Image from 'next/image'
import { useMovie } from '../context/MoviesContext'
import Movie from "../types/Movie"
import {useState} from 'react'
interface MoviesContainerProps{
    movies:Movie[]
    title:string
}
const MoviesContainer = ({movies,title}:MoviesContainerProps) => {
    const handleMovieClick = async(movie:Movie) => {
        const data  :any = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=ec7c8684d689fe7183073ae626036142`).then(res=>res.json())
        const res = data.results.find((result:any) => result.type === 'Trailer')
        if(res){
            setPreview(res.key)
        }
    }
    const [preview, setPreview] = useState<string|null>(null)
    return (
        <div className="text-white space-y-4">
            <h1 className="font-bold text-2xl">{title}</h1>
           <div className="space-x-2 flex overflow-y-scroll scrollbar-hide">
           {movies.map(movie => (
                <div key={movie.id} className=" flex-shrink-0 relative group w-36 h-48" onClick={()=>handleMovieClick(movie)}>
                    <Image src={process.env.NEXT_PUBLIC_TMDB_IMG_BASEURL+movie.poster_path} layout="fill" className="transition duration-300 ease-out group-hover:scale-125"/>
                </div>
            ))}
           </div>
           <div className={`w-full h-[315px] ${!preview && 'hidden'}`}>
           <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${preview}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           </div>
        </div>
    )
}


export default MoviesContainer
