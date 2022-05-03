//import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import enablePublicAccess from "@cors";
import animamushi, { token } from "@databaseAnimeApi";

const allAnimes = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res);

    /*  const db = new DB();
    const allEntries = await db.getAll();
    const lenght = allEntries.length; */

    const t = token();
    const Api = animamushi(t);
    if (!Api) throw new Error("Api Empty Shit ");
    const { Anime } = Api;
    const per_page = 10;
    const filters = {};
    const { data } = await Anime?.Get(filters, per_page);

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ length: 0, data: [], error: "Something went wrong" });
  }
};

export default allAnimes;
