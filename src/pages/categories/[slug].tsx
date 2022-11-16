import { gql } from "@apollo/client";
import { GetStaticPaths } from "next";
import React from "react";
import Card from "../../../components/Card";
import { client } from "../../../lib/apollo";
import { withStaticConfig } from "../../utils/getStaticProps";

interface Props {
  posts: [
    {
      slug: string;
      title: string;
      featuredImage: {
        node: {
          mediaItemUrl: string;
        };
      };
      uri: string;
      author: {
        firstName: string;
        lastName: string;
      };
    }
  ];
}

const Post: React.FC<Props> = (props) => {
  console.log("PROPS:", props.posts);
  return (
    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      {props.posts.map((post) => {
        return (
          <Card
            img={post.featuredImage.node.mediaItemUrl}
            title={post.title}
            author={post.author.firstName}
            slug={post.slug}
          />
        );
      })}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const GET_ALL_SLUGS = gql`
    query getAllCategorySlugs {
      categories {
        nodes {
          slug
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_ALL_SLUGS,
  });
  const res = response?.data?.categories.nodes;
  const paths = res.map((path: { slug: String }) => ({
    params: { slug: path.slug },
  }));
  console.log("mapped: ", paths);

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const GET_ALL_SLUGS = gql`
//     query getAllCategorySlugs {
//       categories {
//         nodes {
//           slug
//         }
//       }
//     }
//   `;
//   const response = await client.query({
//     query: GET_ALL_SLUGS,
//   });
//   const paths = response?.data?.categories.nodes;
//   const hello = paths.map((path: { slug: String }) => ({
//     return { params: { slug: path.slug }, fallback: false}
//   }));
//   console.log("paths", paths);
//   return {
//     hello,
//     fallback: false,
//   };
// };

export const getStaticProps = withStaticConfig(
  async (context: { params: { slug: String } }) => {
    const GET_POSTS_BY_CATEGORY = gql`
      query getPostsByCategory($slug: String) {
        posts(where: { categoryName: $slug }) {
          nodes {
            slug
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            author {
              node {
                firstName
                lastName
              }
            }
          }
        }
      }
    `;
    const response = await client.query({
      query: GET_POSTS_BY_CATEGORY,
      variables: { slug: context.params.slug },
    });
    console.log("RESPONSE: ", response);
    const posts = response?.data?.posts.nodes;
    return {
      props: {
        posts,
      },
    };
  }
);

export default Post;
