import { BackButton } from "@/components/BackButton";
import { Spacer } from "@/components/Spacer";
import { Title } from "@/components/title";

const ContactPage = () => {
  return (
    <>
      <article className="wrapper">
        <Spacer></Spacer>
        <BackButton></BackButton>
        <Spacer size="sm"></Spacer>
        <Title>Contact</Title>
        <Spacer></Spacer>
        <p>
          This page is currently under construction. Please come back later!
        </p>
      </article>
    </>
  );
};

export default ContactPage;
