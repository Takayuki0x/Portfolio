import { Image, Card, Divider } from "@nextui-org/react";

import DefaultLayout from "../../layouts/default";
import BlogSwitcher from "../blogSwitcher";

export default function Blog1() {
  return (
    <DefaultLayout>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-center">
          <Image
            alt="Blog 1 Image"
            className="rounded-lg"
            height={200}
            src="/Blogs/1.png"
            width={400}
          />
        </div>
        <br />
        <h1 className="text-5xl font-bold text-center">
          Responsive Design and Blogs
        </h1>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Posted on June 26, 2025
        </p>
        <br />
        <div className="flex mt-4">
          <Card className="inline-block w-auto">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <a
                    className="text-indigo-200 hover:underline"
                    href="#why-responsive-design"
                  >
                    Why Responsive Design?
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200 hover:underline"
                    href="#implementing-the-blog"
                  >
                    Implementing the Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200 hover:underline"
                    href="#technical-highlights"
                  >
                    Technical Highlights
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200 hover:underline"
                    href="#next-steps"
                  >
                    Next Steps
                  </a>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        <br />
        <article className="prose prose-lg prose-indigo max-w-none">
          <p>
            As part of improving my personal portfolio, I recently added a blog
            section along with a full responsive design overhaul. This update
            ensures that the site looks great and works smoothly on all
            devices—from mobile phones to large desktops.
          </p>

          <h2
            className="text-4xl font-extrabold mt-10 mb-4"
            id="why-responsive-design"
          >
            Why Responsive Design?
          </h2>
          <p>
            In today&apos;s web, responsive design isn&apos;t optional. Users
            interact with websites on all kinds of screen sizes. I implemented
            Tailwind CSS utility classes to create layouts that adjust
            dynamically based on viewport size. This ensures consistency in
            design and accessibility across devices.
          </p>

          <h2
            className="text-4xl font-extrabold mt-10 mb-4"
            id="implementing-the-blog"
          >
            Implementing the Blog
          </h2>
          <p>
            I created a blog system in React. Each blog post is a component,
            making it easy to scale the blog with future entries.
          </p>

          <h2
            className="text-4xl font-extrabold mt-10 mb-4"
            id="technical-highlights"
          >
            Technical Highlights
          </h2>
          <ul>
            <li>
              📱 Fully responsive layout using Tailwind&apos;s grid and flex
              utilities
            </li>
            <li>🧩 Component-based blog system with reusable layout</li>
            <li>⚡ Fast and SEO-friendly performance</li>
          </ul>

          <h2 className="text-4xl font-extrabold mt-10 mb-4" id="next-steps">
            Next Steps
          </h2>
          <p>
            I plan to add more tags, search functionality, and post weekly
            updates. This will make it easier to find content and keep the blog
            fresh and engaging.
          </p>

          <p>
            This blog is more than a feature — it&apos;s a new way to document
            and share everything I learn along the way.
          </p>
        </article>
        <br />
        <Divider />
        <p className="my-2 text-lg font-bold">Jump to blog:</p>
        <BlogSwitcher currentBlogNumber={1} />
      </div>
    </DefaultLayout>
  );
}
