import Heading from "@/components/Heading";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col gap-8 my-5">
      <Heading className="text-center">
        Have a question? Send me a message 👇
      </Heading>
      <div className="flex my-4 w-full h-full justify-center items-center">
        <div className="bg-background rounded-md shadow-md p-8 w-[90%] md:w-2/3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
