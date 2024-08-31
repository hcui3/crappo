import NewsletterForm from "./NewsletterForm";
import { newsLetter } from "../data";

const Newsletter = () => {
  const { title, subtitle } = newsLetter;
  return (
    <section className="py-10 lg:py-24 bg-newsletter bg-cover">
      <div className="container flex flex-col items-center lg:flex-row justify-between bg-blue p-12 rounded-2xl lg:bg-newsletterBox">
        {/* text */}
        <div className="flex-1 w-full">
          <h3 className="h3">{title}</h3>
          <p className="max-w-[348px] mb-8">{subtitle}</p>
        </div>

        {/* Form */}
        <NewsletterForm />
      </div>
    </section>
  );
};

export default Newsletter;
