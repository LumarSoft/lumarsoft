import { HomeModule } from "@/modules/Home";

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await import(`./../dictionary/${lang}.json`).then(
    (res) => res.default
  );

  return <HomeModule dictionary={dictionary} />;
}
