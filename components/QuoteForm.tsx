"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  quoteFormSchema,
  type QuoteFormValues,
  clientTypes,
  projectTypes,
  requiredServices,
  projectStages,
} from "@/lib/validations";

const inputClasses =
  "w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-accent focus:outline-none";
const labelClasses =
  "font-heading text-xs font-semibold tracking-wide text-charcoal/70 uppercase";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/quotes", {
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
      <div className="flex flex-col items-center gap-4 border border-accent/30 bg-accent/5 px-6 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-deep" />
        <h3 className="font-heading text-2xl font-semibold text-ink">
          Quote Request Received
        </h3>
        <p className="max-w-md text-sm text-charcoal/70">
          Thank you for reaching out to Glanium Engineering. Our team will
          review your project details and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 font-heading text-sm font-semibold text-accent-deep underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="name">
            Name
          </label>
          <input id="name" className={inputClasses} {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-700">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="phone">
            Phone
          </label>
          <input id="phone" className={inputClasses} {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-red-700">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={inputClasses}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-700">{errors.email.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="clientType">
            Client Type
          </label>
          <select
            id="clientType"
            className={inputClasses}
            defaultValue=""
            {...register("clientType")}
          >
            <option value="" disabled>
              Select client type
            </option>
            {clientTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.clientType && (
            <p className="text-xs text-red-700">{errors.clientType.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="projectType">
            Project Type
          </label>
          <select
            id="projectType"
            className={inputClasses}
            defaultValue=""
            {...register("projectType")}
          >
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="text-xs text-red-700">{errors.projectType.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="requiredService">
            Required Service
          </label>
          <select
            id="requiredService"
            className={inputClasses}
            defaultValue=""
            {...register("requiredService")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {requiredServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.requiredService && (
            <p className="text-xs text-red-700">
              {errors.requiredService.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="projectStage">
            Project Stage
          </label>
          <select
            id="projectStage"
            className={inputClasses}
            defaultValue=""
            {...register("projectStage")}
          >
            <option value="" disabled>
              Select project stage
            </option>
            {projectStages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
          {errors.projectStage && (
            <p className="text-xs text-red-700">{errors.projectStage.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="projectLocation">
          Project Location
        </label>
        <input
          id="projectLocation"
          className={inputClasses}
          placeholder="e.g. Nairobi"
          {...register("projectLocation")}
        />
        {errors.projectLocation && (
          <p className="text-xs text-red-700">
            {errors.projectLocation.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="description">
          Project Description
        </label>
        <textarea
          id="description"
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your project — dimensions, drawings, design ideas, timeline..."
          {...register("description")}
        />
        {errors.description && (
          <p className="text-xs text-red-700">{errors.description.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="attachment">
          Attach Drawings / BOQ / Reference Image (optional)
        </label>
        <input
          id="attachment"
          type="file"
          disabled
          className="w-full cursor-not-allowed border border-dashed border-charcoal/25 bg-cream px-4 py-3 text-sm text-charcoal/40"
        />
        <p className="text-xs text-charcoal/45">
          File uploads are coming soon. In the meantime, describe your
          attachments above or share them with us on WhatsApp.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your request. Please try again or
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
        Request a Quote
      </button>
    </form>
  );
}
