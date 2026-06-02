import { SurveyBookingForm } from "./SurveyBookingForm";
import { QuickQuoteForm } from "./QuickQuoteForm";

export function ContactSection() {
  return (
    <section id="dat-hen" className="py-20 md:py-24 luxury-dark-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <SurveyBookingForm />
          <QuickQuoteForm />
        </div>
      </div>
    </section>
  );
}
