import { HomeModule } from "@/src/modules/Home/index";

export default async function Page({ params: { lang } }) {
  const dictionary = await import(`./../dictionary/${lang}.json`).then(
    (res) => res.default
  );

  return <HomeModule dictionary={dictionary} />;
}
