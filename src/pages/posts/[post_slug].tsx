import { GetStaticPaths } from "next";
import { withStaticConfig } from "../../utils/getStaticProps";
import { getAllPostSlugs, getPostData } from "../api/posts";

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
  postData: {
    post_slug: string;
    title: string;
    content: string;
    updated_at: Date;
    published_at: Date;
    author_id: number;
    header_image: string;
  };
}

const Post: React.FC<Props> = (props) => {
  return (
    <div>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <img
            className="object-fill"
            src="../img/sunflowers.JPG"
            alt="header image"
          />
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            {props.postData.title}
          </h1>
          <p className="text-gray-500 text-xl text-center">
            {props.postData.content}
          </p>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = withStaticConfig(
  async (context: { params: { post_slug: string } }) => {
    const slug = context?.params?.post_slug! as string;
    const postData = await getPostData(slug);
    return {
      props: { postData },
    };
  }
);

export default Post;
