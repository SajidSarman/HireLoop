"use client"

import { AuthForm, type AuthFormData } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client"

export function SignUpForm() {
  const handleSignUp = async (data: AuthFormData) => {
    const { data: signUpResponse, error } = await authClient.signUp.email({
      name: data.name ?? "",
      email: data.email, // required, The email address of the user.
      password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      callbackURL: "/", // An optional URL to redirect to after the user signs in. (optional)
    })

    console.log("signUpResponse:", signUpResponse, error)
  }

  return <AuthForm mode="sign-up" onSubmit={handleSignUp} />
}
