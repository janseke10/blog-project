import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { openDB } from "../../../../openDB";

export default async function getAllPostsByPersonId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDB();
  const allPosts = db.all("SELECT * FROM Post where authorId = ?", [
    req.query.id,
  ]);
  allPosts.then(function (result) {
    res.json(result); // "Some User token"
  });
}
