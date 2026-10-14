import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

/**
 * Contact enquiry intake. Once the Django backend is available, forward
 * the payload to `POST {API_BASE_URL}/api/contact/` instead of logging it.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const apiBaseUrl = process.env.API_BASE_URL;
  if (apiBaseUrl) {
    const upstream = await fetch(`${apiBaseUrl}/api/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    if (!upstream.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  console.log("New contact enquiry:", parsed.data);
  return NextResponse.json({ ok: true }, { status: 201 });
}
