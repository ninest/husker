import { ContributeForm } from "@/app/contribute/contribute-form";
import { PageLayout } from "@/components/page-layout";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/title";

export default function ContributePage() {
  return (
    <>
      <PageLayout showMobileNav desktopBackButton={{ text: "Home", href: "/" }}>
        <Title level={1}>Contribute</Title>
        <Spacer className="h-4" />

        <ContributeForm />
      </PageLayout>
    </>
  );
}
