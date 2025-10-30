import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev" },
    { name: "description", content: "A customizable portfolio website!" },
  ];
}

export default function Home() {
  return <section>My App</section>;
}
