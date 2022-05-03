import { NextApiRequest, NextApiResponse } from 'next'
import enablePublicAccess from '@cors'
import animamushi, { token } from "@databaseAnimeApi";
import { EpisodeFilters } from '@mattplays/aniapi/dist/API/handlers/Filters';


const EpisodesList = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res);

    const animeId = req.query.id as string
    const t = token();
    const Api = animamushi(t);
    if (!Api) throw new Error("Api Empty Shit ");
    const { Episode } = Api;
    const filters: EpisodeFilters = { 
        anime_id: parseInt(animeId),
        is_dub: true,
        locale:"en"
    }
     const per_page: number = 10;
     const getParams: Object={
        filters,
        per_page
     }
    const { data } = await Episode.Get(getParams);
    console.log(data);
    console.log(getParams)
    
    res.status(200).json(data);
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default EpisodesList