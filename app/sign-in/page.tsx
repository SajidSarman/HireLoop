import type { Metadata } from "next"

import { SignInForm } from "./sign-in-form"

export const metadata: Metadata = { title: "Sign In - HireLoop" }

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#010109] text-white">

      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <SignInForm />
      </main>
    </div>
  )
}
