import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { Debug } from "@/components/Debug";
import { FormField } from "@/components/form/FormField";
import { FormSelect, FormSelectProps } from "@/components/form/FormSelect";
import { Spacer } from "@/components/Spacer";
import { Title } from "@/components/Title";
import { showToast } from "@/components/Toast";
import { useSettings } from "@/lib/settings";
import { IconId, iconMap } from "@/types/icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const settingsFormSchema = z.object({
  favoritesEnabled: z.boolean().default(false),
  favorites: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
      href: z
        .string({ required_error: "A URL is required" })
        .url("Please enter a URL starting with https://"),
      description: z.string().optional(),
    })
  ),
});
type SettingsForm = z.infer<typeof settingsFormSchema>;

const SettingsPage = () => {
  const { settings, setSettings } = useSettings();

  const { handleSubmit, control, watch, setValue } = useForm<SettingsForm>({
    defaultValues: { favoritesEnabled: false, favorites: [] },
    resolver: zodResolver(settingsFormSchema),
  });

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "favorites",
  });

  // Set initial values, should only happen once and only on the client
  // Cannot use defaultValues because localStorage isn't available on the server
  useEffect(() => {
    setValue("favorites", settings.favorites);
    console.log(settings.favorites);
    setValue("favoritesEnabled", settings.favoritesEnabled);
  }, [settings]);

  const onSubmit = handleSubmit(async (data) => {
    setSettings({
      ...settings,
      favorites: data.favorites,
      favoritesEnabled: data.favoritesEnabled,
    });
    showToast({ text: "Settings saved" });
  });

  const availableIcons: FormSelectProps["options"] = Object.keys(iconMap).map(
    (iconKey) => ({
      value: iconKey as IconId,
      icon: iconKey as IconId,
      label: iconKey,
    })
  );

  const { favoritesEnabled } = watch();

  return (
    <>
      <ArticleHead title="Settings" />
      <article className="wrapper">
        <form onSubmit={onSubmit} className="space-y-base">
          <section className="space-y-base">
            <Title level={2}>Favorites</Title>

            <FormSelect
              control={control}
              name={`favoritesEnabled`}
              label="Enabled"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
              className="w-1/3"
            />

            {!favoritesEnabled && (
              <p className="text-gray">
                Favorites are <b>not</b> enabled, so they will <b>not</b> be
                displayed on the links page.
              </p>
            )}

            <Spacer size="0.5" />
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="p-base rounded-md border space-y-base"
              >
                <div className="flex flex-col md:flex-row md:items-center space-y-base md:space-x-base md:space-y-0">
                  <FormSelect
                    control={control}
                    name={`favorites.${index}.icon`}
                    label={"Icon"}
                    options={availableIcons}
                    className="w-full"
                    wrapperClassName="w-full md:w-32 flex-none"
                    dropdownClassName="md:w-[150%]"
                  />
                  <FormField
                    control={control}
                    name={`favorites.${index}.name`}
                    label="Name"
                    wrapperClassName="flex-1"
                  />
                </div>
                <FormField
                  control={control}
                  name={`favorites.${index}.href`}
                  label="URL"
                />
                <FormField
                  control={control}
                  name={`favorites.${index}.description`}
                  label="Description"
                />

                <div className="flex justify-end items-center space-x-base">
                  <Button
                    size="sm"
                    icon="trash"
                    onClick={() => remove(index)}
                  />
                  {index !== 0 && (
                    <Button
                      size="sm"
                      icon="caretup"
                      onClick={() => swap(index, index - 1)}
                    />
                  )}
                  {index !== fields.length - 1 && (
                    <Button
                      size="sm"
                      icon="caretdown"
                      onClick={() => swap(index, index + 1)}
                    />
                  )}
                </div>
              </div>
            ))}

            <div className="flex">
              <Button
                size="sm"
                icon="plus"
                onClick={() =>
                  append({
                    name: "",
                    icon: "filealt",
                    href: "",
                    description: "",
                  })
                }
              >
                Add favorite
              </Button>
            </div>
          </section>

          <Spacer size="xs" />

          <div className="flex">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>

        <Debug data={watch()} />
      </article>
    </>
  );
};

export default SettingsPage;
