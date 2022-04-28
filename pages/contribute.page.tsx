import { ArticleHead } from "@/components/ArticleHead";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/Button";
import { Expandable } from "@/components/Expandable";
import { Form } from "@/components/form/Form";
import { FormField } from "@/components/form/FormField";
import { SmartLink } from "@/components/SmartLink";
import { Spacer } from "@/components/Spacer";
import { Title } from "@/components/title";
import { useRouter } from "next/router";
import { useState } from "react";

const ContactPage = () => {
  const router = useRouter();

  const { name: initialName, fixLinks } = router.query;
  const [name, setName] = useState(initialName ?? "");

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
                <SmartLink href="https://discord.gg/XVUT7jRTD3" underline>
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

        <Form
          method="POST"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdQ8vhyic8Z5lxnBw9643UnqPxN2MIfssLYz32OBW_Vhn_X9A/formResponse"
        >
          <FormField
            name="entry.770504043"
            label="Name"
            description="Enter the title of the page you want to contribute to. If you are suggesting a new page, feel free to leave this field blank."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormField>

          <FormField
            name="entry.1613298240"
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

          <FormField
            name="entry.1321358172"
            label="Credit"
            description="If you would like to be credited, leave your Reddit/Discord username or website."
          ></FormField>

          <Button>Submit</Button>
        </Form>
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
    {
      name: "Ahrav Soi",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description:
        "I helped a lot, should definetly be compensated, was good baby",
    },
    {
      name: "Altruistic_Biscuits",
      href: "https://www.reddit.com/user/Altruistic_Biscuits/",
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
