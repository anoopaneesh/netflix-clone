interface GetPopularMoviesProps{
    region:string
}
export const getPopularMovies = async ({region}:GetPopularMoviesProps) => {
    try{
    let data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=1&region=${region}`).then(res=>res.json())
    return data    
    }catch(err){
        throw new Error("Error fetching popular movies")
    }
}



export const getTrendingMovies = async () => {
    try{
    let data = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_API_KEY}`).then(res=>res.json())
    return data    
    }catch(err){
        throw new Error("Error fetching trending movies")
    }
}

export const getNewReleases = async ({region}:GetPopularMoviesProps) => {
    try{
    let data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&page=1&region=${region}`).then(res=>res.json())
    return data    
    }catch(err){
        throw new Error("Error fetching new releases movies")
    }
}
export const getComedyMovies = async () => {
    try{
    let data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=35`).then(res=>res.json())
    return data    
    }catch(err){
        throw new Error("Error fetching comedy movies")
    }
}
