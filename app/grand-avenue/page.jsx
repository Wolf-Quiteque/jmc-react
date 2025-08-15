import client from "../../tina/__generated__/client";
import GrandAvenuePageClient from "./GrandAvenuePageClient";

export default async function GrandAvenuePage() {
  const result = await client.queries.grand_avenue({
    relativePath: "page.json",
  });
  return <GrandAvenuePageClient {...result} />;
}
