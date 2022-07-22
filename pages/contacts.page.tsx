import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/button/Button";
import { ContactDetail } from "@/components/Contact";
import { contacts } from "@/content/contacts";

export const ContactsPage = () => {
  return (
    <>
      <ArticleHead title="Contacts" />

      <div className="wrapper space-y-base">
        {contacts.map((contact) => (
          <ContactDetail key={contact.name} contact={contact}></ContactDetail>
        ))}
      </div>
    </>
  );
};
export default ContactsPage;
