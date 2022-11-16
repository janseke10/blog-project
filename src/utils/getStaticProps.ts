import { gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/apollo";

export async function getStaticProps() {
  const GET_HEADER_CATEGORIES = gql`
    query getAllCategories {
      categories {
        edges {
          node {
            name
            slug
            children {
              nodes {
                slug
                name
              }
            }
            ancestors {
              nodes {
                slug
                name
              }
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_HEADER_CATEGORIES,
  });
  const categories = response?.data?.categories.edges;
  return {
    props: {
      categories,
    },
  };
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
