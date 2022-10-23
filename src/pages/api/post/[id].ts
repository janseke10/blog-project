import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "../../../openDB";

export default async function getPostById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDB();
  const post = db.get("SELECT * FROM Post where id = ?", [req.query.id]);
  post.then(function (result) {
    res.json(result); // "Some User token"
  });
}
