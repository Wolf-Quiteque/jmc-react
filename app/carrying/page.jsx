import client from "../../tina/__generated__/client";
import CarryingPageClient from "./CarryingPageClient";

export default async function CarryingPage() {
  const result = await client.queries.carrying({
    relativePath: "page.json",
  });
  return <CarryingPageClient {...result} />;
}
