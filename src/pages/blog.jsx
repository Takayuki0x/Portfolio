import { blogsData } from "../config/blog";
import DefaultLayout from "../layouts/default";
import BlogCard from "../components/blogCard";

export default function BlogsPage() {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-5xl font-bold text-center">Blog</h1>
      </div>
      <div className="mt-10">
        {blogsData.map((blog) => (
          <BlogCard
            key={blog.id}
            description={blog.description}
            id={blog.id}
            imageURL={blog.imageURL}
            publishedDate={blog.published}
            title={blog.title}
            type={blog.type}
          />
        ))}
      </div>
    </DefaultLayout>
  );
}
