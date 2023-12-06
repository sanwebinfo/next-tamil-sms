"use client"

import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { CopyToClipboard } from "react-copy-to-clipboard"

export default function Index2() {
  const [content, setContent] = useState("Updating kavithai")
  const fetchWord = async () => {
    const response = await fetch("/api/kadhal")
    const data = await response.json()
    setContent(data[0].content)
  }
  const copied = () => {
    toast.success("Copied")
  }
  let Displayscore
  if (content === undefined) {
    Displayscore = (
      <p className="text-gray-800 text-base tracking-tight break-all">
        Kavithai Data Not Found
      </p>
    )
  } else {
    Displayscore = (
      <div>
        <p
          className="text-gray-800 text-base tracking-tight break-all"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    )
  }
  let Displaybutton
  if (content === null) {
    Displaybutton = ""
  } else {
    Displaybutton = (
      <button
        className="bg-green-400 text-black font-medium py-2 px-4 rounded-full mt-4 border shadow-md border-cyan-900"
        type="button"
        onClick={() => fetchWord()}
      >
        ▶
      </button>
    )
  }
  useEffect(() => {
    fetchWord()
  }, [])

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-screen flex-col justify-center items-center flex-nowrap">
          <div className="shadow-xl w-fit flex flex-col flex-nowrap justify-center items-center bg-yellow-200 rounded-lg border border-cyan-900 mb-8 py-12 px-8">
            {Displayscore}
          </div>
          <div className="flex items-center justify-center">
            <Toaster position="top-center" reverseOrder={false} />
            <CopyToClipboard text={content.replace(/<br \/>/g, "\n")}>
              <button
                className="bg-green-400 text-black font-medium py-2 px-4 rounded-full mt-4 border shadow-md border-cyan-900"
                onClick={copied}
              >
                📝
              </button>
            </CopyToClipboard>
            &nbsp;
            {Displaybutton}
          </div>
          <br />
          <div className="flex items-center justify-center">
            <a className="font-semibold text-teal-50" href="/">
              👉 கவிதை Collections 👈
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
