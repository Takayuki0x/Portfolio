import { Card, CardBody, Image, Link } from "@nextui-org/react";

import TechChip from "./techChip";

export default function ProjectCard({
  description,
  imageURL,
  title,
  launched,
  technologies,
  id,
  projectLink,
  imageWidth = 100,
  imageHeight = 100,
}) {
  return (
    <div className="mt-4">
      <Card radius="md">
        <CardBody>
          <div className="flex">
            <Link className="flex-none" href={projectLink}>
              <Image
                isZoomed
                alt="Certification"
                height={imageHeight}
                radius="md"
                src={imageURL}
                width={imageWidth}
              />
            </Link>
            <div className="ml-4">
              <a href={projectLink}>
                <h3 className="font-bold text-2xl hover:text-gray-300">
                  {title}
                </h3>
              </a>
              <a href={projectLink}>
                <p className="text-sm italic dark:text-slate-300 text-slate-600">
                  {launched}
                </p>
              </a>
              <a href={projectLink}>
                <p className="mt-1">{description}</p>
              </a>
            </div>
          </div>
          <div className="mt-3 flex flex-row flex-wrap gap-1">
            {technologies.map((technology, index) => (
              <TechChip
                key={`${id}-${technology}-${index}`}
                technology={technology}
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
