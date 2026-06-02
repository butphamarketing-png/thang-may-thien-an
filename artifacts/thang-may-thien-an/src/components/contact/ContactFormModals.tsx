import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SurveyBookingForm } from "./SurveyBookingForm";
import { QuickQuoteForm } from "./QuickQuoteForm";
import { cn } from "@/lib/utils";

const dialogClass =
  "z-[60] w-[calc(100vw-1rem)] sm:w-full max-w-[min(100vw-1rem,40rem)] max-h-[min(92dvh,880px)] overflow-y-auto p-0 gap-0 border-0 bg-transparent shadow-none translate-y-[-50%] top-[50%]";

export function ContactFormModals({
  surveyOpen,
  quoteOpen,
  onSurveyOpenChange,
  onQuoteOpenChange,
}: {
  surveyOpen: boolean;
  quoteOpen: boolean;
  onSurveyOpenChange: (open: boolean) => void;
  onQuoteOpenChange: (open: boolean) => void;
}) {
  const closeSurvey = () => onSurveyOpenChange(false);
  const closeQuote = () => onQuoteOpenChange(false);

  return (
    <>
      <Dialog open={surveyOpen} onOpenChange={onSurveyOpenChange}>
        <DialogContent
          className={cn(dialogClass, "[&>button]:text-white [&>button]:opacity-90")}
          aria-describedby={undefined}
        >
          <div className="p-1 sm:p-2">
            <SurveyBookingForm onSuccess={closeSurvey} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={quoteOpen} onOpenChange={onQuoteOpenChange}>
        <DialogContent
          className={cn(dialogClass, "[&>button]:text-white [&>button]:opacity-90")}
          aria-describedby={undefined}
        >
          <div className="p-1 sm:p-2">
            <QuickQuoteForm onSuccess={closeQuote} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
