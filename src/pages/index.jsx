import { Button } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { Link } from "react-router-dom";

import DefaultLayout from "../layouts/default";
import { GithubIcon } from "../components/icons";
import { LinkedinLogo } from "../components/icons";
import { tabsData, certificationData } from "../config/portfolio";
import CertificationCard from "../components/certificationCard";
import ProjectsDisplay from "../components/projectsDisplay";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-6xl font-bold m-auto text-center">
          ANASS
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
            SOUMMANE
          </span>
        </h1>
        <p className="text-center font-light text-xl m-auto mt-3">
          Web and Game Developer | Digital Marketer
        </p>
        <br />
        <div className="flex flex-row gap-2 place-content-center">
          <Button
            isIconOnly
            aria-label="Take a photo"
            className="hover:scale-110"
            variant="faded"
          >
            <Link to="https://github.com/Takayuki0x">
              <GithubIcon />
            </Link>
          </Button>
          <Button
            isIconOnly
            aria-label="Take a photo"
            className="hover:scale-110"
            variant="faded"
          >
            <Link to="https://www.linkedin.com/in/anass-soummane-b2401b202">
              <LinkedinLogo />
            </Link>
          </Button>
        </div>
        <br />
        <h2 className="text-3xl font-bold">Projects</h2>
        <br />
        <Tabs
          aria-label="Project Categories"
          color="danger"
          items={tabsData}
          variant="bordered"
        >
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <ProjectsDisplay content={item.content} />
            </Tab>
          )}
        </Tabs>
        <br />
        <h2 className="text-3xl font-bold">Certifications</h2>
        {certificationData.map((certification) => (
          <CertificationCard
            key={certification.id}
            description={certification.description}
            imageURL={certification.imageURL}
            issuer={certification.issuer}
            received={certification.received}
            title={certification.title}
          />
        ))}
      </div>
    </DefaultLayout>
  );
}
