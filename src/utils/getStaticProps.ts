import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "../openDB";

export async function getStaticProps() {
  const db = await openDB();
  const categories = await db.all<String[]>(
    "SELECT category_name, slug FROM category WHERE is_in_header = true"
  );
  return { props: { categories } };
}

export function withStaticConfig(serverFunction: Function) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await serverFunction(req, res);
    console.log("result: ", result);
    const config = await getStaticProps();
    console.log("config: ", config);
    return {
      ...result,
      props: {
        ...config.props,
        ...result.props,
      },
    };
  };
}
