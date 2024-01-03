import React from "react";
import Header from "@/app/components/Header";
import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utils/interface";
import { VT323 } from "next/font/google";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

const dateFont = VT323({ weight: "400", subsets: ["latin"] });
interface params {
  params: {
    slug: string;
  };
}
async function getPosts(slug: string) {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
        title,
        slug,
        publishedAt,
        excerpt,
        _id,
        body,
        tags[]-> {
          _id,
          slug,
          name
        }
      }`;
  const pots = await client.fetch(query);
  return pots;
}

const page = async ({ params }: params) => {
  //console.log(params, 'params')
  const post: Post = await getPosts(params?.slug);
  //console.log(post, 'posts')
  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <span className={`${dateFont?.className}} text-purple-500`}>
          {new Date(post?.publishedAt).toDateString()}
        </span>

        <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag?.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm lovercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag?.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="richTextStyles">
        <PortableText value={post?.body} />
        </div>

      </div>
    </div>
  );
};

export default page;

const richTextStyles = `
mt-14 
text-justify
max-w-2xl
mx-auto
prose-headings:my-5
prose-headings:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`