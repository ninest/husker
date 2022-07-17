import {
  traditional,
  suite,
  hotel,
  apartment,
  leased,
  dorms,
} from "@/content/housing";
import { Block } from "@/components/Block";

export const Dorms = () => {
  return [traditional, suite, hotel, apartment, leased].map((dormType) => {
    return (
      <div key={dormType.slug} className="prose">
        <h3>{dormType.name}</h3>
        <section className="grid gap-base grid-cols-2 md:grid-cols-3">
          {dorms
            .filter((dorm) => dorm.type == dormType)
            .map((dorm) => (
              <Block
                key={dorm.slug}
                title={dorm.title}
                href={`/housing/${dorm.slug}`}
              >
                {dorm.pricesPoints.map((p) => p.name).join(", ")}
              </Block>
            ))}
        </section>
      </div>
    );
  });
};
