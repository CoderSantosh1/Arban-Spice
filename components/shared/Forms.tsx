"use client";

import { useState, type FormEvent, type ReactNode } from "react";

import { formContent } from "@/app/types";
import { IconById } from "./IconById";

function Success({ booking, onReset }: { booking: boolean; onReset: () => void }) {
  const { success } = formContent;
  return (
    <div className="animate-[pulseIn_0.6s] py-10 text-center text-white">
      <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold">
        <IconById icon={formContent.success.icon} className="h-10 w-10" />
      </span>
      <h3 className="mt-6 font-serif text-3xl">{booking ? success.bookingTitle : success.messageTitle}</h3>
      <p className="mx-auto mt-3 max-w-sm text-white/75">{booking ? success.bookingText : success.messageText}</p>
      <button type="button" onClick={onReset} className="btn-outline light mt-8">
        {success.resetLabel}
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
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" /> {formContent.submit.sendingLabel}
        </>
      ) : (
        children
      )}
    </button>
  );
}

export function ContactForm() {
  const { state, submit, reset } = useSubmit();
  if (state === "done") return <Success booking={false} onReset={reset} />;
  return (
    <form onSubmit={submit} className="space-y-3.5">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <input required name="name" placeholder={formContent.contact.name} className="field" />
        <input required type="email" name="email" placeholder={formContent.contact.email} className="field" />
      </div>
      <input name="phone" type="tel" placeholder={formContent.contact.phone} className="field" />
      <div className="relative">
        <select required name="subject" defaultValue="" className="field pr-10 invalid:text-white/65">
          <option value="" disabled>{formContent.contact.subject}</option>
          <option>{formContent.contact.subjects[0]}</option>
          <option>{formContent.contact.subjects[1]}</option>
          <option>{formContent.contact.subjects[2]}</option>
          <option>{formContent.contact.subjects[3]}</option>
        </select>
        <IconById icon={formContent.contact.subjectIcon} className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-white/70" />
      </div>
      <textarea required name="message" rows={5} placeholder={formContent.contact.message} className="field resize-y" />
      <SubmitButton sending={state === "sending"}>
        <span className="flex-1 pl-6 text-center">{formContent.submit.contactLabel}</span>
        <IconById icon={formContent.submit.icon} className="h-6 w-6 shrink-0" />
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
    return <Success booking onReset={reset} />;
  const ic = "h-6 w-6";
  const booking = formContent.booking;
  return (
    <form onSubmit={submit} className="space-y-3.5">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field icon={<IconById icon={booking.icons.name} className={ic} />}>
          <input required name="name" placeholder={booking.name} className="field h-[54px] pl-14" />
        </Field>
        <Field icon={<IconById icon={booking.icons.email} className={ic} />}>
          <input required type="email" name="email" placeholder={booking.email} className="field h-[54px] pl-14" />
        </Field>
        <Field icon={<IconById icon={booking.icons.phone} className={ic} />}>
          <input required type="tel" name="phone" placeholder={booking.phone} className="field h-[54px] pl-14" />
        </Field>
        <Field icon={<IconById icon={booking.icons.date} className={ic} />}>
          <input required type="date" name="date" aria-label={booking.date} className="field h-[54px] pl-14 [color-scheme:dark]" />
        </Field>
        <Field icon={<IconById icon={booking.icons.time} className={ic} />}>
          <select required name="time" defaultValue="" className="field h-[54px] pl-14 invalid:text-white/65">
            <option value="" disabled>{booking.time}</option>
            {booking.times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <IconById icon={booking.icons.dropdown} className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-white/70" />
        </Field>
        <Field icon={<IconById icon={booking.icons.guests} className={ic} />}>
          <select required name="guests" defaultValue="" className="field h-[54px] pl-14 invalid:text-white/65">
            <option value="" disabled>{booking.guestCount}</option>
            {Array.from({ length: booking.guestCountOptions }, (_, k) => (
              <option key={k} value={k + 1}>
                {k + 1} {k ? booking.guestPlural : booking.guestSingular}
              </option>
            ))}
          </select>
          <IconById icon={booking.icons.dropdown} className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-white/70" />
        </Field>
      </div>
      <Field icon={<IconById icon={booking.icons.request} className={ic} />}>
        <textarea name="request" rows={3} placeholder={booking.request} className="field resize-y py-4 pl-14" />
      </Field>
      <SubmitButton sending={state === "sending"}>
        {formContent.submit.bookingLabel} <IconById icon="arrowRight" className="h-5 w-5" />
      </SubmitButton>
    </form>
  );
}
