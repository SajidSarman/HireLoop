import type { Metadata } from "next"

import { AuthForm } from "@/components/auth-form"
import { SiteNavbar } from "@/components/site-navbar"

export const metadata: Metadata = { title: "Sign Up — HireLoop" }

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#010109] text-white">
      <SiteNavbar />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <AuthForm mode="sign-up" />
      </main>
    </div>
  )
}
