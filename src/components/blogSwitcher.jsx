import { Pagination } from "@nextui-org/react";

import { blogsData } from "../config/blog";

export default function BlogSwitcher({ currentBlogNumber }) {
  return (
    <Pagination
      loop
      showControls
      initialPage={currentBlogNumber}
      total={blogsData.length}
      onChange={(page) => {
        window.location.href = `/blog/${page}`;
      }}
    />
  );
}
