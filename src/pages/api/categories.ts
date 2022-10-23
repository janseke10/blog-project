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
  console.log("HELLOOOO");

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
