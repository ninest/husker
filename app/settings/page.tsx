"use client";

import { ThemeToggle } from "@/app/settings/theme-toggle";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/typography/title";
import { Switch } from "@/components/ui/switch";
import { useFavorites } from "@/modules/favorites/use-favorites";

export default function SettingsPage() {
  const { favoritesEnabled, toggleFavoritesEnabled } = useFavorites();
  return (
    <>
      <ContentPageLayout title="Husker" showMobileNav backButton={{ text: "Home", href: "/" }}>
        <Title level={1}>Settings</Title>
        <Spacer className="h-4" />

        <div className="space-y-6">
          <section>
            <Title level={2}>Colors</Title>
            <Spacer className="h-3" />
            <ThemeToggle />
          </section>

          <section>
            <Title level={2}>Favorites</Title>
            <Spacer className="h-3" />

            <label htmlFor="favorites-enabled" className="flex items-center justify-between border p-3 rounded-md">
              <div>
                <div className="font-bold">Enabled</div>
                <div className="text-muted-foreground">
                  {favoritesEnabled ? "Favorites are enabled!" : "Favorites are currently disabled."}
                </div>
              </div>
              <div>
                <Switch
                  id="favorites-enabled"
                  checked={favoritesEnabled}
                  onCheckedChange={() => toggleFavoritesEnabled()}
                />
              </div>
            </label>
          </section>
        </div>
      </ContentPageLayout>
    </>
  );
}
