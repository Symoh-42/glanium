import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations";

/**
 * Quote request intake. Validates and (for now) logs the submission.
 * Once the Django backend is available, forward the payload to
 * `POST {API_BASE_URL}/api/quotes/` instead of logging it here.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = quoteFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const apiBaseUrl = process.env.API_BASE_URL;
  if (apiBaseUrl) {
    const upstream = await fetch(`${apiBaseUrl}/api/quotes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    if (!upstream.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  console.log("New quote request:", parsed.data);
  return NextResponse.json({ ok: true }, { status: 201 });
}
