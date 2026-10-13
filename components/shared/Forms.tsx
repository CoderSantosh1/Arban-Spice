"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Calendar, Chat, Check, ChevronDown, Clock, Mail, PhoneLine, User, Users } from "./Icons";

function Success({ title, text, onReset }: { title: string; text: string; onReset: () => void }) {
  return (
    <div className="animate-[pulseIn_0.6s] py-10 text-center text-white">
      <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold">
        <Check className="h-10 w-10" />
      </span>
      <h3 className="mt-6 font-serif text-3xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-sm text-white/75">{text}</p>
      <button type="button" onClick={onReset} className="btn-outline light mt-8">
        Send another
      </button>
    </div>
  );
}

function useSubmit() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    // No backend yet: simulate the request so the UI flow can be reviewed.
    setTimeout(() => setState("done"), 1200);
  };
  return { state, submit, reset: () => setState("idle") };
}

function SubmitButton({ sending, children }: { sending: boolean; children: ReactNode }) {
  return (
    <button type="submit" disabled={sending} className="btn-gold w-full disabled:opacity-80">
      {sending ? (
        <>
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Sending…
        </>
      ) : (
        children
      )}
    </button>
  );
}

export function ContactForm() {
  const { state, submit, reset } = useSubmit();
  if (state === "done") return <Success title="Message sent!" text="Thank you for reaching out. Our team will get back to you shortly." onReset={reset} />;
  return (
    <form onSubmit={submit} className="space-y-3.5">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <input required name="name" placeholder="Your Name" className="field" />
        <input required type="email" name="email" placeholder="Your Email" className="field" />
      </div>
      <input name="phone" type="tel" placeholder="Phone Number" className="field" />
      <div className="relative">
        <select required name="subject" defaultValue="" className="field pr-10 invalid:text-white/65">
          <option value="" disabled>Subject</option>
          <option>Reservation</option>
          <option>Private Event</option>
          <option>Feedback</option>
          <option>Other</option>
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-white/70" />
      </div>
      <textarea required name="message" rows={5} placeholder="Your Message" className="field resize-y" />
      <SubmitButton sending={state === "sending"}>
        Send message <ArrowRight className="h-5 w-5" />
      </SubmitButton>
    </form>
  );
}

function Field({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <label className="relative block">
      <span className="pointer-events-none absolute top-[27px] left-4 -translate-y-1/2 text-gold-2">{icon}</span>
      {children}
    </label>
  );
}

export function BookingForm() {
  const { state, submit, reset } = useSubmit();
  if (state === "done")
    return <Success title="Table requested!" text="Thank you! We’ve received your reservation and will confirm your booking shortly." onReset={reset} />;
  const ic = "h-6 w-6";
  const times = ["12:00 PM", "1:00 PM", "2:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];
  return (
    <form onSubmit={submit} className="space-y-3.5">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field icon={<User className={ic} />}>
          <input required name="name" placeholder="Your Name*" className="field h-[54px] pl-14" />
        </Field>
        <Field icon={<Mail className={ic} />}>
          <input required type="email" name="email" placeholder="Your Email*" className="field h-[54px] pl-14" />
        </Field>
        <Field icon={<PhoneLine className={ic} />}>
          <input required type="tel" name="phone" placeholder="Phone Number*" className="field h-[54px] pl-14" />
        </Field>
        <Field icon={<Calendar className={ic} />}>
          <input required type="date" name="date" aria-label="Date" className="field h-[54px] pl-14 [color-scheme:dark]" />
        </Field>
        <Field icon={<Clock className={ic} />}>
          <select required name="time" defaultValue="" className="field h-[54px] pl-14 invalid:text-white/65">
            <option value="" disabled>Time*</option>
            {times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-white/70" />
        </Field>
        <Field icon={<Users className={ic} />}>
          <select required name="guests" defaultValue="" className="field h-[54px] pl-14 invalid:text-white/65">
            <option value="" disabled>Number of Guests*</option>
            {Array.from({ length: 10 }, (_, k) => (
              <option key={k} value={k + 1}>
                {k + 1} {k ? "Guests" : "Guest"}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-white/70" />
        </Field>
      </div>
      <Field icon={<Chat className={ic} />}>
        <textarea name="request" rows={3} placeholder="Special Request (Optional)" className="field resize-y py-4 pl-14" />
      </Field>
      <SubmitButton sending={state === "sending"}>
        Book a table <ArrowRight className="h-5 w-5" />
      </SubmitButton>
    </form>
  );
}
