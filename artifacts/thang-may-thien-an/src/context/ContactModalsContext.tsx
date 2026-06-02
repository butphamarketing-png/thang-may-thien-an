import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ContactFormModals } from "@/components/contact/ContactFormModals";

type ContactModalsContextValue = {
  openSurveyModal: () => void;
  openQuoteModal: () => void;
  closeModal: () => void;
};

const ContactModalsContext = createContext<ContactModalsContextValue | null>(null);

export function ContactModalsProvider({ children }: { children: React.ReactNode }) {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const openSurveyModal = useCallback(() => {
    setQuoteOpen(false);
    setSurveyOpen(true);
  }, []);

  const openQuoteModal = useCallback(() => {
    setSurveyOpen(false);
    setQuoteOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setSurveyOpen(false);
    setQuoteOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openSurveyModal, openQuoteModal, closeModal }),
    [openSurveyModal, openQuoteModal, closeModal],
  );

  return (
    <ContactModalsContext.Provider value={value}>
      {children}
      <ContactFormModals
        surveyOpen={surveyOpen}
        quoteOpen={quoteOpen}
        onSurveyOpenChange={setSurveyOpen}
        onQuoteOpenChange={setQuoteOpen}
      />
    </ContactModalsContext.Provider>
  );
}

export function useContactModals() {
  const ctx = useContext(ContactModalsContext);
  if (!ctx) {
    throw new Error("useContactModals must be used within ContactModalsProvider");
  }
  return ctx;
}
