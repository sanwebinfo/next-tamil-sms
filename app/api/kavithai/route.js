import { NextResponse } from "next/server"

const dummy_json = [{
    id: "Data Not Found",
    content: "Data Not Found",
  }]

export const fetchCache = 'force-no-store'
export const revalidate = 0
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const str = process.env.KAVITHAI_URL
    const response = await fetch(str, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      },
      next: { revalidate: 0 }
    })

    const kavithai_data = await response.json()

    if (response.status == 200) {
      return NextResponse.json(kavithai_data, {
        status: 200,
        headers: {
          "X-Frame-Options": "DENY",
          "X-XSS-Protection": "1; mode=block",
          "X-Content-Type-Options": "nosniff",
          "Strict-Transport-Security": "max-age=63072000",
        },
      })
    } else {
      return NextResponse.json(dummy_json, {
        status: 404,
        headers: {
          "X-Frame-Options": "DENY",
          "X-XSS-Protection": "1; mode=block",
          "X-Content-Type-Options": "nosniff",
          "Strict-Transport-Security": "max-age=63072000",
        },
      })
    }
  } catch (error) {
    return NextResponse.json(dummy_json, {
      status: 404,
      headers: {
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
        "X-Content-Type-Options": "nosniff",
        "Strict-Transport-Security": "max-age=63072000",
      },
    })
  }
}