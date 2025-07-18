import { Chip } from "@nextui-org/react";

export default function BlogChip({ blogType }) {
  switch (blogType) {
    case "Portfolio Update":
      return (
        <Chip
          classNames={{ base: "border-1 rounded-md pl-2" }}
          color="primary"
          variant="dot"
        >
          {blogType}
        </Chip>
      );
    case "What I Learned This Week":
      return (
        <Chip
          classNames={{ base: "border-1 rounded-md pl-2" }}
          color="success"
          variant="dot"
        >
          {blogType}
        </Chip>
      );
    default:
      return (
        <Chip
          classNames={{ base: "border-1 rounded-md pl-2" }}
          color="secondary"
          variant="dot"
        >
          {blogType}
        </Chip>
      );
  }
}
