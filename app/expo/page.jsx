import client from "../../tina/__generated__/client";
import ExpoPageClient from "./ExpoPageClient";

export default async function ExpoPage() {
  const result = await client.queries.expo({
    relativePath: "page.json",
  });
  return <ExpoPageClient {...result} />;
}
