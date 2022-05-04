import { NextApiRequest, NextApiResponse } from 'next'
import enablePublicAccess from '@cors'
import animamushi, { token } from "@databaseAnimeApi";
import { EpisodeFilters } from '@mattplays/aniapi/dist/API/handlers/Filters';


const Episode = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res);

    const { slug } = req.query
    const anime_id:number = parseInt(slug[0]);
    const number:number | undefined = parseInt(slug[1]);
    const t = token();
    const Api = animamushi(t);
    const { Episode } = Api;
    const filters: EpisodeFilters = { 
        anime_id,
        number,
        is_dub:true
    }

    const per_page:number| undefined= 10;
    
    const { data } = await Episode.Get(filters,undefined,per_page);
    
    res.status(200).json({data});
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default Episode