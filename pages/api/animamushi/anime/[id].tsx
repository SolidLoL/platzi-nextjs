import { NextApiRequest, NextApiResponse } from 'next'
import enablePublicAccess from '@cors'
import animamushi, { token } from "@databaseAnimeApi";


const AnimeDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res);

    const animeId:string = req.query.id as string
    const t = token();
    const Api = animamushi(t);
    if (!Api) throw new Error("Api Empty Shit ");
    const { Anime } = Api;
    const { data } = await Anime?.GetByID(animeId);
    
    res.status(200).json({data});
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default AnimeDetail