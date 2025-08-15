import client from "../tina/__generated__/client";
import HomePageClient from "./HomePageClient";

export default async function HomePage() {
  const result = await client.queries.home({
    relativePath: "page.json",
  });
  return <HomePageClient {...result} />;
}
