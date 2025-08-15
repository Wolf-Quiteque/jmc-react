import client from "../../tina/__generated__/client";
import VigusPageClient from "./VigusPageClient";

export default async function VigusPage() {
  const result = await client.queries.vigus({
    relativePath: "page.json",
  });
  return <VigusPageClient {...result} />;
}
