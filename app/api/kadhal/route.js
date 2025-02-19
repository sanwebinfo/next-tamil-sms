import { NextResponse } from "next/server"

const DUMMY_JSON = [{ id: "Data Not Found", content: "Data Not Found" }]

export const fetchCache = "force-no-store"
export const revalidate = 0
export const dynamic = "force-dynamic"

export async function GET() {
  const API_URL = process.env.KADHAL_URL

  if (!API_URL) {
    return NextResponse.json(
      { error: "API URL not configured" },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(API_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      },
      cache: "no-store",
      next: { revalidate: 0 },
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data, {
      status: 200,
      headers: SECURITY_HEADERS,
    })
  } catch (error) {
    console.error("API Fetch Error:", error.message)
    return NextResponse.json(DUMMY_JSON, {
      status: 500,
      headers: SECURITY_HEADERS,
    })
  }
}

const SECURITY_HEADERS = {
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "X-Content-Type-Options": "nosniff",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
}
