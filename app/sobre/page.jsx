import client from "../../tina/__generated__/client";
import SobrePageClient from "./SobrePageClient";

export default async function SobrePage() {
  const result = await client.queries.sobre({
    relativePath: "page.json",
  });
  return <SobrePageClient {...result} />;
}
