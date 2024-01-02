import React from "react";
import Link from "next/link";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2>{post?.title}</h2>
        <p>{post?.publishedAt}</p>
        <p>{post?.excerpt}</p>
      </Link>
    </div>
  );
};

export default PostComponent;

const cardStyle = "mb-8 p-4 borde border-gray-900 rounded-md shadow-sm shadow-purple-950 hover:shadow-md hover:bg-purple-950 hover:text-amber-50 hover:dark:bg-gray-950";
