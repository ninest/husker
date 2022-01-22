import { BackButton } from "./BackButton";
import { Spacer } from "./Spacer";
import { Title } from "./title";

interface ArticleHeadProps {
  backButtonHref?: string;
  backButtonText?: string;
  title: string;
}

export const ArticleHead = ({
  backButtonHref='/',
  backButtonText='Links',
  title,
}: ArticleHeadProps) => {
  return (
    <>
      <div>
        <Spacer></Spacer>
        <BackButton href={backButtonHref}>{backButtonText}</BackButton>
        <Spacer size="sm"></Spacer>
        <Title>{title}</Title>
        <Spacer></Spacer>
      </div>
    </>
  );
};
