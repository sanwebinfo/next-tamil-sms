"use client"

import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { CopyToClipboard } from "react-copy-to-clipboard"

export default function QuotesApp() {
  const [quote, setQuote] = useState("Fetching kavithai...")

  const fetchQuote = async () => {
    try {
      const response = await fetch("/api/kavithai")
      const data = await response.json()
      setQuote(data[0]?.content || "Kavithai not found")
    } catch (error) {
      setQuote("Failed to fetch kavithai")
    }
  }

  const handleCopy = () => {
    toast.success("Copied to clipboard!")
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 px-6 py-12">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Quote Card */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 text-center border border-yellow-300">
        <p
          className="text-base font-medium text-gray-900 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: quote }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <CopyToClipboard text={quote.replace(/<br \/>/g, "\n")}>
          <button
            className="flex items-center gap-2 bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-md hover:bg-blue-600 active:scale-95 transition"
            onClick={handleCopy}
          >
            📋 Copy
          </button>
        </CopyToClipboard>

        <button
          className="flex items-center gap-2 bg-green-500 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-md hover:bg-green-600 active:scale-95 transition"
          onClick={fetchQuote}
        >
          🔄 Next
        </button>
      </div>

      {/* Footer Link */}
      <div className="mt-8">
        <a
          href="/kadhal"
          className="text-red-600 font-medium text-sm hover:underline"
        >
          👉 காதல் கவிதைகள் 👈
        </a>
      </div>
    </div>
  )
}
