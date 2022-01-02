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

        <div className="prose">
          <p>
            This page is currently under construction. Please come back later!
          </p>
        </div>
        <Spacer></Spacer>

        <Form>
          <FormField
            name="name"
            label="Name"
            placeholder="Under construction!"
            required
            minLength={10}
          ></FormField>
          <FormField
            name="content"
            label="Content"
            placeholder="Under construction!"
            required
            textarea
            minLength={10}
          ></FormField>

          <Button>Submit</Button>
        </Form>
      </article>
    </>
  );
};

export default ContactPage;
