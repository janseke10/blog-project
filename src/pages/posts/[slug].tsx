import { gql } from "@apollo/client";
import { GetStaticPaths } from "next";
import AboutAuthor from "../../../components/AboutAuthor";
import { client } from "../../../lib/apollo";
import { withStaticConfig } from "../../utils/getStaticProps";

/**
 * Single post page
 *
 * Needed:
 * - title
 * - published_at
 * - ?updated_at
 * - content
 * - images -> header_image
 * - first_name + last_name author
 * - author bio
 */

interface Props {
  post: {
    postBy: {
      author: {
        node: {
          firstName: string;
          lastName: string;
          description: string;
          slug: string;
          avatar: {
            url: string;
          };
        };
      };
      content: string;
      comments: {
        nodes: {
          approved: boolean;
          author: {
            node: {
              name: string;
            };
          };
        };
      };
      date: Date;
      featuredImage: {
        node: {
          altText: string;
          mediaItemUrl: string;
        };
      };
      title: string;
    };
  };
}

const Post: React.FC<Props> = (props) => {
  return (
    <div>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <img
            className="object-fill"
            src={props.post.postBy.featuredImage.node.mediaItemUrl}
            alt="header image"
          />
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            {props.post.postBy.title}
          </h1>
          <a className="flex justify-center">
            {new Date(props.post.postBy.date)
              .toISOString()
              .replace(/T.*/, "")
              .split("-")
              .reverse()
              .join("-")}
          </a>

          <article
            dangerouslySetInnerHTML={{ __html: props.post.postBy.content }}
          />
        </div>
        <AboutAuthor author={props.post.postBy.author.node} />
      </section>
    </div>
  );
};

/**
 * probably should only pregenerate the most popular posts or so! Look into this!!
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const GET_ALL_SLUGS = gql`
    query getALlPostSlugs {
      posts {
        nodes {
          slug
          uri
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_ALL_SLUGS,
  });
  const res = response?.data?.posts.nodes;
  const paths = res.map((path: { slug: String }) => ({
    params: { slug: path.slug },
  }));
  console.log("mapped: ", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = withStaticConfig(
  async (context: { params: { slug: String } }) => {
    console.log("HELLOOOO");
    const GET_POST = gql`
      query getPost($slug: String) {
        postBy(slug: $slug) {
          author {
            node {
              firstName
              lastName
              description
              slug
              avatar {
                url
              }
            }
          }
          content
          title
          comments {
            nodes {
              approved
              author {
                node {
                  name
                }
              }
            }
          }
          date
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
    `;
    const response = await client.query({
      query: GET_POST,
      variables: { slug: context.params.slug },
    });
    console.log("RESPONSE: ", response);
    const post = response?.data;
    console.log("POSTAL: ", post);
    console.log("THE END");
    return {
      props: {
        post,
      },
    };
  }
);

export default Post;
