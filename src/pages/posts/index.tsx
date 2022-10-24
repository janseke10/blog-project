import React from "react";
import { withStaticConfig } from "../../utils/getStaticProps";
import { getAllPostData } from "../api/posts";

interface Props {
  postData: [
    {
      post_id: number;
      title: string;
      content: string;
      created_at: Date;
      updated_at: Date;
      published_at: Date;
      author_id: number;
    }
  ];
}

const Posts: React.FC<Props> = (props) => {
  const titles = props.postData.map((obj) => obj.title);
  return (
    <div>
      {React.Children.map(titles, (title) => {
        return <span>{title}</span>;
      })}
    </div>
  );
};

export const getStaticProps = withStaticConfig(async () => {
  const postData = await getAllPostData();
  console.log("postDATA: ", postData);
  return {
    props: { postData },
  };
});

export default Posts;
