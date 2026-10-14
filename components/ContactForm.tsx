"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

const inputClasses =
  "w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-accent focus:outline-none";
const labelClasses =
  "font-heading text-xs font-semibold tracking-wide text-charcoal/70 uppercase";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 border border-accent/30 bg-accent/5 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-deep" />
        <h3 className="font-heading text-xl font-semibold text-ink">
          Message Sent
        </h3>
        <p className="max-w-md text-sm text-charcoal/70">
          Thank you for contacting Glanium Engineering. We will respond as
          soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-1 font-heading text-sm font-semibold text-accent-deep underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="c-name">
            Name
          </label>
          <input id="c-name" className={inputClasses} {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-700">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="c-phone">
            Phone
          </label>
          <input id="c-phone" className={inputClasses} {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-red-700">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="c-email">
          Email
        </label>
        <input
          id="c-email"
          type="email"
          className={inputClasses}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-700">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="c-message">
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          className={inputClasses}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-700">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message. Please try again or
          contact us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 flex items-center justify-center gap-2 bg-ink px-7 py-4 font-heading text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-accent hover:text-ink disabled:opacity-60"
      >
        {status === "submitting" && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
        Send Message
      </button>
    </form>
  );
}
