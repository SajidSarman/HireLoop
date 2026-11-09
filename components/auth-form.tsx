"use client"

import Link from "next/link"
import type { FormEvent } from "react"

type Mode = "sign-in" | "sign-up"

const inputClasses =
  "h-12 w-full rounded-xl border border-white/10 bg-[#101010] px-4 text-base text-white outline-none placeholder:text-white/60 transition-shadow focus-visible:ring-2 focus-visible:ring-[#5c53fe]/60"

const labelClasses = "mb-1.5 block text-sm text-white/70"

function submit(mode: Mode, event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const data = Object.fromEntries(new FormData(event.currentTarget))

  // TODO: integrate with lib/auth (e.g. authClient.signIn.email / signUp.email)
  console.log(`[${mode}] form data:`, data)
}

function ModeToggle({ mode }: { mode: Mode }) {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-[#101010] p-1">
      {(
        [
          ["sign-in", "Sign In"],
          ["sign-up", "Sign Up"],
        ] as const
      ).map(([value, label]) => (
        <Link
          key={value}
          href={value === "sign-in" ? "/sign-in" : "/sign-up"}
          aria-current={mode === value ? "page" : undefined}
          className={
            mode === value
              ? "rounded-lg bg-[#5c53fe] py-2 text-center text-sm font-medium text-white"
              : "rounded-lg py-2 text-center text-sm font-medium text-white/70 transition-colors hover:text-white"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  )
}

export function AuthForm({ mode }: { mode: Mode }) {
  const isSignIn = mode === "sign-in"

  return (
    <div className="w-full max-w-[420px] rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl sm:p-8">
      <ModeToggle mode={mode} />

      <h1 className="mt-8 text-center text-2xl font-bold text-white">
        {isSignIn ? "Welcome back" : "Create your account"}
      </h1>
      <p className="mt-2 text-center text-sm text-white/70">
        {isSignIn
          ? "Sign in to pick up where you left off."
          : "Join HireLoop and land your next role — faster."}
      </p>

      <form
        onSubmit={(e) => submit(mode, e)}
        className="mt-8 flex flex-col gap-5"
      >
        {!isSignIn && (
          <div>
            <label htmlFor="auth-name" className={labelClasses}>
              Full name
            </label>
            <input
              id="auth-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              required
              className={inputClasses}
            />
          </div>
        )}

        <div>
          <label htmlFor="auth-email" className={labelClasses}>
            Email
          </label>
          <input
            id="auth-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className={inputClasses}
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="auth-password" className={labelClasses}>
              Password
            </label>
            {isSignIn && (
              <a
                href="#"
                className="text-sm text-[#5c53fe] hover:text-[#7a72ff]"
              >
                Forgot password?
              </a>
            )}
          </div>
          <input
            id="auth-password"
            name="password"
            type="password"
            autoComplete={isSignIn ? "current-password" : "new-password"}
            placeholder={
              isSignIn ? "Enter your password" : "At least 8 characters"
            }
            required
            minLength={8}
            className={inputClasses}
          />
        </div>

        {!isSignIn && (
          <p className="text-sm text-white/60">
            By signing up, you agree to our{" "}
            <a href="#" className="text-white/80 underline underline-offset-4">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-white/80 underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          className="h-12 w-full rounded-xl bg-[#5c53fe] text-base font-semibold text-white transition-colors hover:bg-[#4b42ee] disabled:opacity-50"
        >
          {isSignIn ? "Sign In" : "Create Account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-white/70">
        {isSignIn ? (
          <>
            New to HireLoop?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-[#5c53fe] hover:text-[#7a72ff]"
            >
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-[#5c53fe] hover:text-[#7a72ff]"
            >
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  )
}
