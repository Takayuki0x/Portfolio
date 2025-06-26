import { Card, CardBody, Image } from "@nextui-org/react";

export default function CertificationCard({
  title,
  description,
  imageURL,
  received,
  issuer,
}) {
  return (
    <div className="mt-4">
      <Card radius="md">
        <CardBody>
          <div className="md:flex gap-4">
            <div className="mt-1 basis-1/8 flex-none">
              <Image
                isZoomed
                alt="Certification"
                height={100}
                radius="md"
                src={imageURL}
                width={100}
              />
            </div>
            <div className="mt-2 md:mt-0">
              <h3 className="font-bold text-2xl">{title}</h3>
              <p className="text-sm italic dark:text-slate-300 text-slate-600">
                {issuer} - {received}
              </p>
              <p className="mt-1">{description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
