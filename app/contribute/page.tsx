import { ContributeForm } from "@/app/contribute/contribute-form";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/title";

export default function ContributePage() {
  return (
    <>
      <ContentPageLayout showMobileNav backButton={{ text: "Home", href: "/" }}>
        <Title level={1}>Contribute</Title>
        <Spacer className="h-4" />

        <ContributeForm />
      </ContentPageLayout>
    </>
  );
}
