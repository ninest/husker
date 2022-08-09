import { BackButton } from "./button/BackButton";
import { Spacer } from "./util/Spacer";
import { Title } from "./Title";

interface ArticleHeadProps {
  backButtonHref?: string;
  backButtonText?: string;
  title: string;
}

export const ArticleHead = ({
  backButtonHref = "/",
  backButtonText = "Links",
  title,
}: ArticleHeadProps) => {
  return (
    <>
      <div className="">
        <div className="wrapper">
          <Spacer size="lg" />
          <BackButton href={backButtonHref}>{backButtonText}</BackButton>
          <Spacer size="sm" />
          <Title weightClassName="font-black">{title}</Title>
          <Spacer/>
        </div>
      </div>
    </>
  );
};
