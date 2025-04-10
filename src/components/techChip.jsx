import { Chip, Link } from "@nextui-org/react";

import {
  ReactLogo,
  ViteLogo,
  TailwindCSSLogo,
  NextUILogo,
  NodeJSLogo,
  GoogleAnalyticsLogo,
  ExpressJSLogo,
  MongoDBLogo,
  JWTLogo,
  BunnyCDNLogo,
  PythonLogo,
  SeleniumLogo,
  FlaskLogo,
  BDNDLogo,
  UE5Logo,
  AsepriteLogo,
  MotionLogo,
  EarsketchLogo,
} from "./icons";

export default function TechChip({ technology }) {
  switch (technology) {
    case "React.js":
      return (
        <Link href="https://react.dev">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-3" }}
            startContent={<ReactLogo />}
            variant="faded"
          >
            React.js
          </Chip>
        </Link>
      );
    case "Vite.js":
      return (
        <Link href="https://vitejs.dev">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<ViteLogo />}
            variant="faded"
          >
            Vite.js
          </Chip>
        </Link>
      );
    case "TailwindCSS":
      return (
        <Link href="https://tailwindcss.com">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<TailwindCSSLogo />}
            variant="faded"
          >
            TailwindCSS
          </Chip>
        </Link>
      );
    case "NextUI":
      return (
        <Link href="https://nextui.org">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<NextUILogo />}
            variant="faded"
          >
            NextUI
          </Chip>
        </Link>
      );
    case "Google Analytics":
      return (
        <Link href="https://analytics.google.com">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<GoogleAnalyticsLogo />}
            variant="faded"
          >
            Google Analytics
          </Chip>
        </Link>
      );
    case "Node.js":
      return (
        <Link href="https://nodejs.org/">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<NodeJSLogo />}
            variant="faded"
          >
            Node.js
          </Chip>
        </Link>
      );
    case "Express.js":
      return (
        <Link href="https://expressjs.com">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<ExpressJSLogo />}
            variant="faded"
          >
            Express.js
          </Chip>
        </Link>
      );
    case "MongoDB":
      return (
        <Link href="https://expressjs.com">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<MongoDBLogo />}
            variant="faded"
          >
            MongoDB
          </Chip>
        </Link>
      );
    case "Bcryptjs":
      return (
        <Link href="https://github.com/dcodeIO/bcrypt.js">
          <Chip classNames={{ base: "border-1 rounded-md" }} variant="faded">
            Bcrypt
          </Chip>
        </Link>
      );
    case "JWT":
      return (
        <Link href="https://jwt.io">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<JWTLogo />}
            variant="faded"
          >
            JWT
          </Chip>
        </Link>
      );
    case "BunnyCDN":
      return (
        <Link href="https://bunny.net">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<BunnyCDNLogo />}
            variant="faded"
          >
            BunnyCDN
          </Chip>
        </Link>
      );
    case "Python":
      return (
        <Link href="https://www.python.org">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<PythonLogo />}
            variant="faded"
          >
            Python
          </Chip>
        </Link>
      );
    case "Selenium":
      return (
        <Link href="https://www.selenium.dev">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<SeleniumLogo />}
            variant="faded"
          >
            Selenium
          </Chip>
        </Link>
      );
    case "Flask":
      return (
        <Link href="https://flask.palletsprojects.com/">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<FlaskLogo />}
            variant="faded"
          >
            Flask
          </Chip>
        </Link>
      );
    case "React Beautiful DnD":
      return (
        <Link href="https://github.com/atlassian/react-beautiful-dnd">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<BDNDLogo />}
            variant="faded"
          >
            React Beautiful DnD
          </Chip>
        </Link>
      );
    case "Unreal Engine 5":
      return (
        <Link href="https://www.unrealengine.com/en-US/unreal-engine-5">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<UE5Logo />}
            variant="faded"
          >
            Unreal Engine 5
          </Chip>
        </Link>
      );
    case "Aseprite":
      return (
        <Link href="https://www.aseprite.org">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<AsepriteLogo />}
            variant="faded"
          >
            Aseprite
          </Chip>
        </Link>
      );
    case "Motion":
      return (
        <Link href="https://motion.dev">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<MotionLogo />}
            variant="faded"
          >
            Motion
          </Chip>
        </Link>
      );
    case "Earsketch":
      return (
        <Link href="https://earsketch.gatech.edu/">
          <Chip
            classNames={{ base: "border-1 rounded-md pl-2" }}
            startContent={<EarsketchLogo />}
            variant="faded"
          >
            Earsketch
          </Chip>
        </Link>
      );
    default:
      return <Chip variant="faded">{technology}</Chip>;
  }
}
