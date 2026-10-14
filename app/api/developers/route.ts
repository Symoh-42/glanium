import { NextResponse } from "next/server";
import { developerFormSchema } from "@/lib/validations";

/**
 * Developer / contractor project requirement submissions. File uploads
 * (drawings, BOQs) are not yet wired up — add multipart handling once the
 * Django backend exposes a storage endpoint.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = developerFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const apiBaseUrl = process.env.API_BASE_URL;
  if (apiBaseUrl) {
    const upstream = await fetch(`${apiBaseUrl}/api/developer-enquiries/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    if (!upstream.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  console.log("New developer/contractor enquiry:", parsed.data);
  return NextResponse.json({ ok: true }, { status: 201 });
}
