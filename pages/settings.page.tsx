import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { Debug } from "@/components/Debug";
import { FormField } from "@/components/form/FormField";
import { MiniDropdown } from "@/components/form/MiniDropdown";
import { LinkButton } from "@/components/LinkButton";
import { Title } from "@/components/title";
import { useSettings } from "@/lib/settings";
import { IconId } from "@/types/icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const settingsFormSchema = z.object({
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
  const { settings, setFavorites } = useSettings();

  const { handleSubmit, control, watch, getValues, setValue } =
    useForm<SettingsForm>({
      defaultValues: { favorites: [] },
      resolver: zodResolver(settingsFormSchema),
    });

  // Set initial values, should only happen once and only on the client
  // Cannot use defaultValues because localStorage isn't available on the server
  useEffect(() => {
    setValue("favorites", settings.favorites);
  }, [settings]);

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "favorites",
  });

  const values = getValues();

  const onSubmit = handleSubmit(async (data) => {
    setFavorites(data.favorites);
  });

  return (
    <>
      <ArticleHead title="Settings" />
      <article className="wrapper">
        <form onSubmit={onSubmit} className="space-y-base">
          <section className="space-y-base">
            <Title level={3}>Favorites</Title>
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="p-base rounded-md border space-y-base"
              >
                <FormField
                  control={control}
                  name={`favorites.${index}.name`}
                  label="Name"
                  className="md:w-3/4"
                />
                <MiniDropdown
                  control={control}
                  name={`favorites.${index}.icon`}
                  label={"Icon"}
                  options={[
                    { value: "filealt", icon: "filealt", label: "File" },
                    { value: "pizza", icon: "pizza", label: "Pizza" },
                  ]}
                  className="md:w-1/2"
                />
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

                {field.name && (
                  <>
                    <p>The link will look like this:</p>
                    <div className="md:w-1/2 lg:w-1/3">
                      <LinkButton
                        link={{
                          icon: field.icon as IconId,
                          name: field.name,
                          href: field.href,
                          description: field.description ?? "",
                        }}
                      />
                    </div>
                  </>
                )}

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

          <div className="flex">
            <Button type="submit">Save</Button>
          </div>
        </form>

        <Debug data={watch()} />
      </article>
    </>
  );
};

export default SettingsPage;
