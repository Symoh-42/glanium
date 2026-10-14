import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-cream px-6 py-32 text-center">
      <span className="font-heading text-xs font-semibold tracking-[0.25em] text-accent-deep uppercase">
        404
      </span>
      <h1 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
        Page Not Found
      </h1>
      <p className="max-w-md text-charcoal/65">
        The page you are looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="bg-ink px-6 py-3 font-heading text-sm font-semibold text-cream hover:bg-accent hover:text-ink"
      >
        Back to Home
      </Link>
    </section>
  );
}
