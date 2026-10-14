"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  developerFormSchema,
  type DeveloperFormValues,
  projectTypes,
  requiredServices,
} from "@/lib/validations";

const inputClasses =
  "w-full border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none";
const labelClasses =
  "font-heading text-xs font-semibold tracking-wide text-cream/60 uppercase";

export function DeveloperForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DeveloperFormValues>({
    resolver: zodResolver(developerFormSchema),
  });

  const onSubmit = async (values: DeveloperFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/developers", {
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
      <div className="flex flex-col items-center gap-4 border border-accent/30 bg-cream/5 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="font-heading text-xl font-semibold text-cream">
          Requirements Submitted
        </h3>
        <p className="max-w-md text-sm text-cream/70">
          Thank you. Our team will review your project requirements and get
          in touch to discuss the next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-1 font-heading text-sm font-semibold text-accent underline underline-offset-4"
        >
          Submit another project
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="d-name">
            Name
          </label>
          <input id="d-name" className={inputClasses} {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="d-company">
            Company
          </label>
          <input id="d-company" className={inputClasses} {...register("company")} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="d-phone">
            Phone
          </label>
          <input id="d-phone" className={inputClasses} {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="d-email">
            Email
          </label>
          <input
            id="d-email"
            type="email"
            className={inputClasses}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="d-projectType">
            Project Type
          </label>
          <select
            id="d-projectType"
            className={inputClasses}
            defaultValue=""
            {...register("projectType")}
          >
            <option value="" disabled className="text-ink">
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="text-ink">
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="text-xs text-red-400">{errors.projectType.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="d-requiredService">
            Required Service
          </label>
          <select
            id="d-requiredService"
            className={inputClasses}
            defaultValue=""
            {...register("requiredService")}
          >
            <option value="" disabled className="text-ink">
              Select a service
            </option>
            {requiredServices.map((service) => (
              <option key={service} value={service} className="text-ink">
                {service}
              </option>
            ))}
          </select>
          {errors.requiredService && (
            <p className="text-xs text-red-400">
              {errors.requiredService.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="d-projectLocation">
            Project Location
          </label>
          <input
            id="d-projectLocation"
            className={inputClasses}
            {...register("projectLocation")}
          />
          {errors.projectLocation && (
            <p className="text-xs text-red-400">
              {errors.projectLocation.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="d-estimatedScope">
            Estimated Scope
          </label>
          <input
            id="d-estimatedScope"
            placeholder="e.g. 24 window units, 1 sliding gate"
            className={inputClasses}
            {...register("estimatedScope")}
          />
          {errors.estimatedScope && (
            <p className="text-xs text-red-400">
              {errors.estimatedScope.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="d-message">
          Message
        </label>
        <textarea
          id="d-message"
          rows={5}
          className={inputClasses}
          placeholder="Share project specifications, BOQ details or timeline..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="d-attachment">
          Upload Drawings (optional)
        </label>
        <input
          id="d-attachment"
          type="file"
          disabled
          className="w-full cursor-not-allowed border border-dashed border-cream/20 bg-transparent px-4 py-3 text-sm text-cream/40"
        />
        <p className="text-xs text-cream/40">
          File uploads are coming soon. Share drawings and BOQs with us on
          WhatsApp in the meantime.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong submitting your requirements. Please try
          again or contact us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 flex items-center justify-center gap-2 bg-accent px-7 py-4 font-heading text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-cream disabled:opacity-60"
      >
        {status === "submitting" && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
        Submit Project Requirements
      </button>
    </form>
  );
}
