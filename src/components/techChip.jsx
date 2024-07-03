import { Chip, Link } from "@nextui-org/react";

import { ReactLogo, ViteLogo, TailwindCSSLogo, NextUILogo } from "./icons";

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
    default:
      return <Chip variant="faded">{technology}</Chip>;
  }
}
