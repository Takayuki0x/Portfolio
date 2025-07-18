import { Image, Card, Divider } from "@nextui-org/react";

import DefaultLayout from "../layouts/default";

import BlogSwitcher from "./blogSwitcher";

export default function BlogPage({
  imageSrc,
  title,
  postDate,
  tableOfContents,
  articleContent = "",
  currentBlogNumber = 1,
}) {
  return (
    <DefaultLayout>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-center">
          <Image
            alt="Blog Image"
            className="rounded-lg"
            height={200}
            src={imageSrc}
            width={400}
          />
        </div>
        <br />
        <h1 className="text-5xl font-bold text-center">{title}</h1>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Posted on {postDate}
        </p>
        <br />
        <div className="flex mt-4">
          <Card className="inline-block w-auto">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
              <ul className="list-disc list-inside space-y-1 pl-2">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-indigo-200 hover:underline"
                      href={`#${item.id}`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
        <br />
        <article className="prose prose-lg prose-indigo max-w-none">
          {articleContent}
        </article>
        <br />
        <Divider />
        <p className="my-2 text-lg font-bold">Jump to blog:</p>
        <BlogSwitcher currentBlogNumber={currentBlogNumber} />
      </div>
    </DefaultLayout>
  );
}
