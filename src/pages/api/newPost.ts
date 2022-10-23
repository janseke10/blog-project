import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { authenticated } from "../../../authenticate";
import { secret } from "../../../secret";
import { openDB } from "../../openDB";

export default authenticated(async function newPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let author_id;
  verify(req.cookies.auth!, secret, async function (err, decoded) {
    author_id = decoded?.sub;
  });
  const db = await openDB();

  if (req.method === "POST") {
    const statement = await db.prepare(
      "INSERT INTO post (title, content, created_at, published_at, author_id) values (?,?,CURRENT_DATE,CURRENT_DATE,?)"
    );
    await statement.run(req.body.title, req.body.content, author_id);
    statement.finalize();

    const posts = db.all("SELECT * FROM post");
    posts.then(function (result) {
      res.json(result);
    });
  } else {
    res.status(405).json({ message: "we only support POST" });
  }
});
