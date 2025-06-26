import { Card, CardBody, Image } from "@nextui-org/react";

import BlogChip from "./blogChip";

export default function BlogCard({
  title,
  publishedDate,
  description,
  imageURL,
  id,
  type = "Blog",
}) {
  return (
    <div>
      <Card radius="md">
        <CardBody>
          <div className="flex">
            <a href={`/blog/${id}`}>
              {imageURL != "N/A" && (
                <Image
                  isZoomed
                  alt="Blog image"
                  className="mt-2"
                  height={100}
                  radius="md"
                  src={imageURL}
                  width={100}
                />
              )}
            </a>
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <a href={`/blog/${id}`}>
                  <h3 className="font-bold text-2xl hover:text-gray-300">
                    {title}
                  </h3>
                </a>
                <BlogChip blogType={type} />
              </div>
              <a href={`/blog/${id}`}>
                <p className="text-sm italic text-slate-300">{publishedDate}</p>
              </a>
              <a href={`/blog/${id}`}>
                <p className="mt-1">{description}</p>
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
