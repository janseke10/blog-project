import { GetStaticPaths } from "next";
import { withStaticConfig } from "../../utils/getStaticProps";
import { getAllPostIds, getPostData } from "../api/posts";

interface Props {
  postData: {
    post_id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    published_at: Date;
    author_id: number;
  };
}

const Post: React.FC<Props> = (props) => {
  return (
    <div>
      {props.postData.title}
      <br />
      {props.postData.content}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
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
  async (context: { params: { post_id: string } }) => {
    const id = context?.params?.post_id! as string;
    const postData = await getPostData(id);
    return {
      props: { postData },
    };
  }
);

export default Post;
