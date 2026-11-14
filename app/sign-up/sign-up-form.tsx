"use client"

import { AuthForm, type AuthFormData } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client"
import { useRouter } from 'next/navigation'

export function SignUpForm() {
  const router = useRouter();
  const handleSignUp = async (data: AuthFormData) => {
    const { data: signUpResponse, error } = await authClient.signUp.email({
      name: data.name ?? "",
      email: data.email, // required, The email address of the user.
      password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      role: data.role, // additional field, see user.additionalFields in lib/auth.ts
      callbackURL: "/", // An optional URL to redirect to after the user signs in. (optional)
    })

    console.log("signUpResponse:", signUpResponse, error)

    if (!error) {
      router.push("/")
      router.refresh()
      return
    }
  }

  return <AuthForm mode="sign-up" onSubmit={handleSignUp} />
}
