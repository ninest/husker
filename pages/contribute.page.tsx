import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/Button";
import { Form } from "@/components/form/Form";
import { FormField } from "@/components/form/FormField";
import { Spacer } from "@/components/Spacer";
import { Title } from "@/components/title";

const ContactPage = () => {
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
          ></FormField>
          <FormField
            name="entry.1613298240"
            label="Content"
            required
            textarea
            minLength={15}
          ></FormField>

          <FormField name="entry.1321358172" label="Credit" description="If you would like to be credited, leave your Reddit/Discord username or website."></FormField>

          <Button>Submit</Button>
        </Form>
      </article>
    </>
  );
};

export default ContactPage;
