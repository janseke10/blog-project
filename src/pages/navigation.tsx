import { GetServerSideProps } from "next";
import { openDB } from "../openDB";

export interface NavigationProps {
  categories: String[];
}

export default function Navigation({ categories }: NavigationProps) {
  return <pre>{JSON.stringify(categories, null, 4)}</pre>;
}

export const getServerSideProps: GetServerSideProps<NavigationProps> = async (
  ctx
) => {
  const db = await openDB();
  const categories = await db.all<String[]>(
    "SELECT category_name FROM category WHERE is_in_header = true"
  );
  return { props: { categories } };
};
