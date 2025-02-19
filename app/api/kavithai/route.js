import { NextResponse } from "next/server"

const DUMMY_RESPONSE = [{ id: "Data Not Found", content: "Data Not Found" }]

export const fetchCache = "force-no-store"
export const revalidate = 0
export const dynamic = "force-dynamic"

const HEADERS = {
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "X-Content-Type-Options": "nosniff",
  "Strict-Transport-Security": "max-age=63072000",
}

export async function GET() {
  try {
    const API_URL = process.env.KAVITHAI_URL
    if (!API_URL) {
      throw new Error("API URL is not defined in environment variables")
    }

    const response = await fetch(API_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    })

    if (!response.ok) throw new Error(`API responded with ${response.status}`)

    const data = await response.json()
    return NextResponse.json(data, { status: 200, headers: HEADERS })
  } catch (error) {
    console.error("Error fetching kavithai:", error.message)
    return NextResponse.json(DUMMY_RESPONSE, { status: 500, headers: HEADERS })
  }
}
