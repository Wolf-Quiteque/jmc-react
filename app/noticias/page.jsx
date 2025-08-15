import client from "../../tina/__generated__/client";
import NoticiasPageClient from "./NoticiasPageClient";

export default async function NoticiasPage() {
  const result = await client.queries.noticias({
    relativePath: "page.json",
  });
  return <NoticiasPageClient {...result} />;
}
