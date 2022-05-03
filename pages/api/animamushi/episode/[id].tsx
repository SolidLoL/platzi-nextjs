import { NextApiRequest, NextApiResponse } from 'next'
import enablePublicAccess from '@cors'
import animamushi, { token } from "@databaseAnimeApi";
import { EpisodeFilters } from '@mattplays/aniapi/dist/API/handlers/Filters';

const EpisodeList = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res); 
    const anime_id:number = parseInt(req.query.id as string) as number;
    const t = token();
    const Api = animamushi(t);
    if (!Api) throw new Error("Api Empty Shit ");
    const { Episode } = Api;
    const filters: EpisodeFilters = { 
        anime_id,
        is_dub:true
    }
    const { data } = await Episode?.Get(filters);
    
    res.status(200).json({data});
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default EpisodeList