import {
  traditional,
  suite,
  hotel,
  apartment,
  leased,
  dorms,
} from "@/content/housing";
import { Block } from "@/components/Block";
import { Title } from "../Title";

export const Dorms = () => {
  return [traditional, suite, hotel, apartment, leased].map((dormType) => {
    return (
      <div key={dormType.slug} className="prose">
        <Title level={3} hash>{dormType.name}</Title>
        <section className="grid gap-base grid-cols-2 lg:grid-cols-3">
          {dorms
            .filter((dorm) => dorm.type == dormType)
            .map((dorm) => (
              <Block
                key={dorm.slug}
                title={dorm.title}
                href={`/house/${dorm.slug}`}
              >
                {dorm.pricesPoints.map((p) => p.name).join(", ")}
              </Block>
            ))}
        </section>
      </div>
    );
  });
};
