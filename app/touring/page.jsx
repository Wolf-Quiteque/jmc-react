import client from "../../tina/__generated__/client";
import TouringPageClient from "./TouringPageClient";

export default async function TouringPage() {
  const result = await client.queries.touring({
    relativePath: "page.json",
  });
  return <TouringPageClient {...result} />;
}
