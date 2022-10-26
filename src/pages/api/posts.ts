import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "../../openDB";

export default async function getAllPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDB();
  const posts = db.all(
    "SELECT author_id, category_id, title, content, created_at, updated_at, published_at FROM post"
  );
  console.log("ALL POSTS", posts);
  posts.then(function (result) {
    res.json(result); // "Some User token"
  });
}

export async function getAllPostSlugs() {
  const db = await openDB();
  const posts = await db.all("SELECT post_slug FROM post");
  return posts.map((post) => ({
    params: { post_slug: post.post_slug },
  }));
}

export async function getPostData(post_slug: string) {
  const db = await openDB();
  const post = await db.get("SELECT * FROM Post where post_slug = ?", [
    post_slug,
  ]);
  return post;
}

/** TODO: add category of posts */
export async function getAllPostData() {
  const db = await openDB();
  const posts = db.all(
    "SELECT author_id, title, content, created_at, updated_at, published_at FROM post"
  );
  return posts;
}
