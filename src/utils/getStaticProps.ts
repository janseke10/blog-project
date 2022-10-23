import { openDB } from "../openDB";

export async function getStaticProps() {
  const db = await openDB();
  const categories = await db.all<String[]>(
    "SELECT category_name FROM category WHERE is_in_header = true"
  );
  return { props: { categories } };
}
