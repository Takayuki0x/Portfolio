import { blogsData } from "../config/blog";
import DefaultLayout from "../layouts/default";
import BlogCard from "../components/blogCard";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-5xl font-bold text-center">Personal Blog</h1>
      </div>
      <div className="grid grid-cols-3 mt-10 gap-2">
        {blogsData.map((blog) => (
          <BlogCard
            key={blog.id}
            description={blog.description}
            id={blog.id}
            imageURL={blog.imageURL}
            publishedDate={blog.published}
            title={blog.title}
          />
        ))}
      </div>
    </DefaultLayout>
  );
}
