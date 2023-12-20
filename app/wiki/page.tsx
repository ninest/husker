import { WikiBlockLink } from "@/app/wiki/_components/wiki-block-link";
import { WikiSimpleLinksList } from "@/app/wiki/_components/wiki-simple-link";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/typography/title";
import { Button } from "@/components/ui/button";
import { getArticles } from "@/modules/content/article";
import { getWikiCategories } from "@/modules/content/category";
import { Fragment } from "react";
import { LuPlus } from "react-icons/lu";

export default async function WikiPage() {
  const [categories, articles] = await Promise.all([getWikiCategories(), getArticles()]);

  const featuredArticles = articles.filter((article) => article.featured);

  return (
    <div className="my-9 space-x">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Title level={1}>Welcome to Husker Wiki!</Title>
        <Button variant={"default"}>
          <LuPlus className="mr-2" />
          New page
        </Button>
      </div>
      <Spacer className="h-10" />

      <div className="space-y-10">
        <section>
          <Title level={2}>Featured</Title>
          <Spacer className="h-2" />

          <WikiSimpleLinksList type="list" articles={featuredArticles} />
        </section>
        <section>
          <Title level={2}>Categories</Title>
          <Spacer className="h-2" />

          <div className="space-y-8">
            {categories.map((category) => {
              const filteredArticles = articles.filter((article) => article.categoryIds.includes(category.id));
              if (filteredArticles.length === 0) return <Fragment key={category.id} />;

              const firstFiew = filteredArticles.slice(0, 4);
              const rest = filteredArticles.slice(4);
              return (
                <section key={category.id}>
                  <Title level={3}>{category.title}</Title>
                  <Spacer className="h-2" />

                  <WikiSimpleLinksList type="list" articles={firstFiew} showDescription />

                  {rest.length > 0 && (
                    <>
                      <Spacer className="h-2" />
                      <details>
                        <summary className="list-none text-sm">View all</summary>
                        <Spacer className="h-1" />
                        <WikiSimpleLinksList type="list" articles={rest} showDescription />
                      </details>
                    </>
                  )}
                </section>
              );
            })}
          </div>
        </section>

        <section>
          <Title level={2}>All articles</Title>
          <Spacer className="h-2" />
          <WikiSimpleLinksList type="list" articles={articles} showDescription />
        </section>
      </div>
    </div>
  );
}
