import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "../../openDB";

export default async function getAllCategories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDB();
  const categories = db.all(
    "SELECT category_id, category_name, parent_id, is_in_header FROM category"
  );
  console.log("ALL CATEGORIES", categories);
  categories.then(function (result) {
    res.json(result); // "Some User token"
  });
}

export async function getHeaderCategories() {
  const db = await openDB();
  const categories = await db.all(
    "SELECT category_id, category_name from FROM category WHERE is_in_header = true"
  );
  console.log("CATEGORIES: ", categories);
  return categories.map((category) => ({
    params: {
      category_id: category.category_id.toString(),
      category_name: category.category_name,
    },
  }));
}

export async function getAllCategoryIds() {
  const db = await openDB();
  const categories = await db.all("SELECT slug FROM category");
  return categories.map((category) => ({
    params: { slug: category.slug },
  }));
}

export async function getPostsByCategory(slug: string) {
  const db = await openDB();
  const cat_id = await db.get(
    "SELECT category_id FROM category WHERE slug = ?",
    [slug]
  );

  console.log("cat_id: ", cat_id);
  // const post_ids = await db.all(
  //   "SELECT post_id FROM post_category WHERE category_id = ?",
  //   [cat_id.category_id]
  // );
  // console.log("post_ids: ", post_ids);

  const posts = await db.all(
    "SELECT author.first_name, author.last_name, title, content, created_at, updated_at, published_at FROM post JOIN author ON post.author_id = author.author_id JOIN post_category ON post_category.category_id = category_id WHERE category_id = ?",
    [cat_id.category_id]
  );
  return posts;
}
