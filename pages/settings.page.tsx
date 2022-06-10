import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { Debug } from "@/components/Debug";
import { FormField } from "@/components/form/FormField";
import { MiniDropdown } from "@/components/form/MiniDropdown";
import { LinkButton } from "@/components/LinkButton";
import { Title } from "@/components/title";
import { IconId } from "@/types/icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const settingsFormSchema = z.object({
  favorites: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
      href: z.string({ required_error: "A URL is required" }),
      description: z.string().optional(),
    })
  ),
});
type SettingsForm = z.infer<typeof settingsFormSchema>;

const SettingsPage = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    control,
    watch,
    getValues,
  } = useForm<SettingsForm>({
    defaultValues: { favorites: [] },
    resolver: zodResolver(settingsFormSchema),
  });

  const { fields, append, insert, remove, move } = useFieldArray({
    control,
    name: "favorites",
  });

  const values = getValues();

  return (
    <>
      <ArticleHead title="Settings" />
      <article className="wrapper">
        <form className="space-y-base">
          <section className="space-y-base">
            <Title level={3}>Favorites</Title>
            {fields.map((field, index) => (
              <div
                key={index}
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
                  className="md:w-3/4"
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

                <p>The link will look like this:</p>

                <div className="md:w-1/2 lg:w-1/3">
                  <LinkButton
                    link={{
                      icon: values.favorites[0].icon as IconId,
                      name: values.favorites[0].name,
                      href: values.favorites[0].href,
                      description: values.favorites[0].description ?? "",
                    }}
                  />
                </div>
              </div>
            ))}

            <div className="flex">
              <Button
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
        </form>

        <Debug data={watch()} />
      </article>
    </>
  );
};

export default SettingsPage;
