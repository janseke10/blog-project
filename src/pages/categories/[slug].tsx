import { GetStaticPaths } from "next";
import React from "react";
import Card from "../../../components/Card";
import { withStaticConfig } from "../../utils/getStaticProps";
import { getAllCategoryIds, getPostsByCategory } from "../api/categories";

interface Props {
  postData: [
    {
      post_id: number;
      title: string;
      content: string;
      created_at: Date;
      updated_at: Date;
      published_at: Date;
      first_name: string;
      last_name: string;
    }
  ];
}

const Post: React.FC<Props> = (props) => {
  const titles = props.postData.map((obj) => obj.title);
  return (
    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      {props.postData.map((post) => {
        return (
          <Card
            img={"img/sunflowers.JPG"}
            title={post.title}
            author={post.first_name}
          />
        );
      })}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCategoryIds();
  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const id = context?.params?.post_id! as string;
//   const postData = await getPostData(id);

//   return {
//     props: {
//       postData,
//     },
//   };
// };

export const getStaticProps = withStaticConfig(
  async (context: { params: { slug: string } }) => {
    const slug = context?.params?.slug! as string;
    const postData = await getPostsByCategory(slug);
    console.log(postData);
    return {
      props: { postData },
    };
  }
);

export default Post;
