import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/Button";
import { Form } from "@/components/form/Form";
import { FormField } from "@/components/form/FormField";
import { SmartLink } from "@/components/SmartLink";
import { Spacer } from "@/components/Spacer";
import { Title } from "@/components/title";
import { useRouter } from "next/router";
import { useState } from "react";

const ContactPage = () => {
  const router = useRouter();

  const { name: initialName } = router.query;
  const [name, setName] = useState(initialName ?? "");

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
  ];

  return (
    <>
      <article className="wrapper">
        <Spacer></Spacer>
        <BackButton></BackButton>
        <Spacer size="sm"></Spacer>
        <Title>Contribute</Title>

        <Spacer></Spacer>

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

        <div className="prose">
          <details>
            <summary>Thanks to these contributors!</summary>

            <ul>
              {contributors.map((contributor) => {
                const Element = (
                  <>
                    <b className="underline">{contributor.name}</b>{" "}
                    <span className="text-gray">{contributor.description}</span>
                  </>
                );
                if (contributor.href)
                  return (
                    <li key={contributor.name}>
                      <SmartLink href={`/${contributor.href}`}>
                        {Element}
                      </SmartLink>
                    </li>
                  );
                else return <li key={contributor.name}>{Element}</li>;
              })}
            </ul>
          </details>
        </div>
      </article>
    </>
  );
};

export default ContactPage;
