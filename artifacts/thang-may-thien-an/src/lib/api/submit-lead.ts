import { supabase } from "@/lib/supabase";

export type LeadType = "survey_booking" | "quick_quote";

export type SubmitLeadPayload = {
  type: LeadType;
  name: string;
  phone: string;
  [key: string]: string | number | undefined;
};

const API_URL = import.meta.env.VITE_LEADS_API_URL as string | undefined;

export async function submitLead(payload: SubmitLeadPayload): Promise<void> {
  if (API_URL) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || `API error ${res.status}`);
    }
    return;
  }

  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      ...payload,
      created_at: new Date().toISOString(),
    });
    if (error) throw error;
    return;
  }

  await new Promise((r) => setTimeout(r, 650));
}
