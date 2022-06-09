import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { Expandable } from "@/components/Expandable";
import { Form } from "@/components/form/Form";
import { FormField } from "@/components/form/FormField";
import { SmartLink } from "@/components/SmartLink";
import { Spacer } from "@/components/Spacer";
import { useRouter } from "next/router";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";

const contributeFormSchema = z.object({
  name: z.string().optional(),
  content: z
    .string()
    .min(15, "The content is too short! Please add a little more!"),
  credit: z.string().optional(),
});

type ContributeForm = z.infer<typeof contributeFormSchema>;

const ContactPage = () => {
  const router = useRouter();

  const { name: initialName, fixLinks } = router.query;

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    control,
  } = useForm<ContributeForm>({
    defaultValues: {
      name: (initialName as string) ?? "",
      content: "",
      credit: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    // TODO: change form
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSc8sKaaGFdwlGBj8-gfvYNtda6voEc-9v4AeH7oUAB2YfQqsw/formResponse?usp=pp_url&entry.1536758950=${data.name}&entry.1410925369=${data.message}&entry.2037984550=${data.contact}`;
    try {
      // CORS bypasser
      await fetch(`https://api.codetabs.com/v1/proxy?quest=${formUrl}`);
      setSubmitted(true);
      reset();
    } catch {
      alert("An error has ocurred :/");
    }
  });

  return (
    <>
      <ArticleHead title="Contribute"></ArticleHead>
      <article className="wrapper">
        <Expandable title="How to contribute?">
          <div className="prose">
            <p>To contribute, you may either:</p>

            <ul>
              <li>Fill out this form</li>
              <li>
                Join the{" "}
                <SmartLink href="https://discord.gg/j7WkFct2rY" underline>
                  Discord server
                </SmartLink>
              </li>
              <li>
                Make a{" "}
                <SmartLink href="https://github.com/ninest/huskinfo" underline>
                  pull request
                </SmartLink>
              </li>
            </ul>
          </div>
        </Expandable>
        <Spacer />
        <ContributorsExpandable></ContributorsExpandable>

        <Spacer size="md" />

        <form onSubmit={onSubmit} className="space-y-base">
          <FormField
            control={control}
            name="name"
            label="Name"
            description="Enter the title of the page you want to contribute to. If you are suggesting a new page, feel free to leave this field blank."
          />
          <FormField
            control={control}
            name="content"
            label="Content"
            description={
              fixLinks ? (
                "Please enter the link or link title that is broken."
              ) : (
                <>
                  Please use Imgur links to submit images.{" "}
                  <SmartLink
                    href="https://imgur.com/upload"
                    className="underline"
                  >
                    Upload images on Imgur
                  </SmartLink>
                  .
                </>
              )
            }
            required
            textarea
            minLength={15}
          ></FormField>

          <fieldset className="flex">
            <Button type="submit" variant="gray" disabled={isSubmitting}>
              {submitted ? "Submitted!" : <>Submit{isSubmitting && "ing"}</>}
            </Button>
          </fieldset>
        </form>
        <Spacer />
      </article>
    </>
  );
};

const ContributorsExpandable = () => {
  const contributors = [
    {
      name: "turtleman99",
      href: "https://github.com/turtleman99",
      description: "Northeastern status page",
    },
    {
      name: "Vocaloiid",
      description: "Various links",
    },
    {
      name: "Kyle Sferrazza",
      href: "https://github.com/kylesferrazza",
      description: "Links",
    },
    // {
    //   name: "Ahrav Soi",
    //   href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   description:
    //     "I helped a lot, should definetly be compensated, was good baby",
    // },
    {
      name: "Altruistic_Biscuits",
      href: "https://www.reddit.com/user/Altruistic_Biscuits/",
      description: "Housing images",
    },
    {
      name: "level 3",
      href: "https://www.reddit.com/user/thecrashmaverick/",
      description: "Housing images",
    },
  ];
  return (
    <Expandable icon="smilebeam" title="Contributors list">
      <div className="prose">
        <p>Thanks to these contributors:</p>
        <ul className="">
          {contributors.map((contributor) => {
            const Element = (
              <>
                <span className="underline">{contributor.name}</span>{" "}
                <span className="text-gray">{contributor.description}</span>
              </>
            );
            if (contributor.href)
              return (
                <li key={contributor.name}>
                  <SmartLink href={contributor.href}>{Element}</SmartLink>
                </li>
              );
            else return <li key={contributor.name}>{Element}</li>;
          })}
        </ul>
        <p>And of course, thank you to all anonymous contributors too!</p>
      </div>
    </Expandable>
  );
};

export default ContactPage;
