import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev" },
    { name: "description", content: "A customizable portfolio website!" },
  ];
}

export default function Home() {
  return <>My App</>;
}
