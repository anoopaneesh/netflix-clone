import {useState,createContext,useContext} from 'react'
import Movie from '../types/Movie'

interface MovieContextProps{
    movie:Movie|null
    setCurrentMovie:(movie:Movie) => void
}

const MovieContext = createContext({} as MovieContextProps)


const MovieProvider = ({children}:any) => {
    const [movie,setMovie] = useState<Movie|null>(null)
    const setCurrentMovie = (movie:Movie) => {
        if(!movie.backdrop_path){
            
        }
        setMovie(movie)
    }
    return <MovieContext.Provider value={{movie,setCurrentMovie}}>
        {children}
    </MovieContext.Provider>
}

export default MovieProvider

export const useMovie = () => useContext(MovieContext)