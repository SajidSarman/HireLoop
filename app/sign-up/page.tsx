import type { Metadata } from "next"

import { SignUpForm } from "./sign-up-form"

export const metadata: Metadata = { title: "Sign Up - HireLoop" }

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#010109] text-white">
      
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <SignUpForm />
      </main>
    </div>
  )
}
