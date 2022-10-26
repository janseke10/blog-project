import type { NextPage } from "next";
import Head from "next/head";
import Card from "../../components/Card";
// export { getStaticProps } from "../utils/getStaticProps";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import { withStaticConfig } from "../utils/getStaticProps";
import { Post } from "../../model/Post";

type Props = {
  posts: [Post];
};

if (typeof window !== "undefined") {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");

  burger?.addEventListener("click", () => {
    if (menu?.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu?.classList.add("hidden");
    }
  });
}

export default function Home(props: Props) {
  console.log("props:", props.posts);
  props.posts.map((post) => {
    console.log(post.title);
  });
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VAGAWONG</title>
      </Head>

      <body>
        <div>
          <main className="px-16 py-6 bg-background ">
            <div className="text-4xl text-primary-100 font-semibold justify-center grid grid-flow-row">
              <h1 className="p-6">Welcome to Vagawong</h1>
              <img
                className="object-none w-full"
                src="./img/white-woman.jfif"
                alt="Art"
              />
            </div>

            <div>
              <h4 className="font-bold mt-12 pb-2 border-b border-primary-200">
                Latest Blogposts
              </h4>

              <div className="mt-8 grid lg:grid-cols-3 gap-10">
                {props.posts.map((post) => {
                  return (
                    <Card
                      img={"img/sunflowers.jpg"}
                      title={post.title}
                      author={"Rob Wong Temp"}
                    />
                  );
                })}
              </div>
            </div>
            <h4 className="font-bold mt-12 pb-2 border-b border-primary-200">
              Most Popular
            </h4>
            <div className="mt-8"></div>
            <div className="flex justify-center">
              <div className="bg-primary-200 text-secondary-200 button hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out-300">
                Load more
              </div>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
}

export const getStaticProps = withStaticConfig(async () => {
  const GET_POSTS = gql`
    query getAllPosts {
      posts {
        nodes {
          title
          content
          uri
          date
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts.nodes;
  return {
    props: {
      posts,
    },
  };
});
