import { SectionHeader } from "../SectionHeader";
import { ProcessTimeline } from "../ProcessTimeline";
import { fabricationTimeline } from "@/lib/process";

export function FabricationProcessSection() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Workshop"
          title="From Raw Material To Refined Architecture."
          tone="light"
        />
        <div className="mt-14">
          <ProcessTimeline steps={fabricationTimeline} tone="light" />
        </div>
      </div>
    </section>
  );
}
