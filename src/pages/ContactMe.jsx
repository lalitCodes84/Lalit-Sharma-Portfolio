import ContactMeLeftSection from "../components/ContactMeLeftSection.jsx";
import ContactMeRightSection from "../components/ContactMeRightSection.jsx";
import Heading from "../components/Heading.jsx";

function ContactMe() {
  return (
    <div id="contact-me" className="pt-10">
      <Heading
        text={"Contact Me"}
        level={1}
        className="m-auto font-deceptibotsHalftone text-center text-2xl my-10  underline"
      />
      <div
        id="contact-me"
        className="flex justify-center items-center gap-x-40 p-4"
      >
        <ContactMeLeftSection />
        <ContactMeRightSection />
      </div>
    </div>
  );
}

export default ContactMe;
