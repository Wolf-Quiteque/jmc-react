import client from "../../tina/__generated__/client";
import GaleriaPageClient from "./GaleriaPageClient";

export default async function GaleriaPage() {
  const result = await client.queries.galeria({
    relativePath: "page.json",
  });
  return <GaleriaPageClient {...result} />;
}
