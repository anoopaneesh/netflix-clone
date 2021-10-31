import { NextApiRequest, NextApiResponse } from "next"
import { searchMovies } from "../../tmdb/movies"

const handler = async (req:NextApiRequest,res:NextApiResponse) => {

    if(req.method === 'GET'){
        try{
            let data = await searchMovies(req.query.q as string)
            data.results = data.results.filter((result:any) => result.poster_path)
            res.status(200).json({status:'success',message:`Search results for ${req.query.q}`,results:data})
        }catch(err){
            res.status(200).json({status:'error',message:'Some error occured while fetching results!!'})
        }
    }else{
        res.status(200).json({status:'error',message:'Please use the correct method'})
    }

}

export default handler