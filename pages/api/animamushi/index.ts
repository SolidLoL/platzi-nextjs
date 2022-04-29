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
    const per_page = 10;
    const filters = {};
    //const { data } = await Get(filters, per_page);
    console.log(Api);

    // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers
    /* res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ data })); */
    res.status(200).json({});
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end(
      JSON.stringify({ length: 0, data: [], error: "Something went wrong" })
    );
  }
};

export default allAnimes;
