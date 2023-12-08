import { PageLayout } from "@/components/page-layout";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/title";

export default function SettingsPage() {
  return (
    <>
      <PageLayout>
        <Title level={1}>Settings</Title>
        <Spacer className="h-4" />
        <Title level={2}>Theme</Title>
      </PageLayout>
    </>
  );
}
