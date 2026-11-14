"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "cn"

import Logo from "@/app/images/logo.png"
import { signOut, useSession } from "@/lib/auth-client"

const navLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/companies", label: "Company" },
  { href: "/pricing", label: "Pricing" },
]

export function SiteNavbar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

  console.log("session in navbar:", session)

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header
      data-slot="navbar"
      className={cn("sticky top-0 z-50 w-full px-3 pt-3", className)}
    >
      <div className="relative mx-auto max-w-[1320px]">
        <nav className="flex items-center justify-between gap-6 rounded-2xl border border-white/5 bg-[#222222]/70 px-3 py-2 shadow-lg backdrop-blur-md sm:px-4">
          <Link
            href="/"
            className="shrink-0"
            aria-label="HireLoop home"
            onClick={() => setOpen(false)}
          >
            <Image
              src={Logo}
              alt="HireLoop"
              priority
              className="h-9 w-auto rounded-md sm:h-[44px]"
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "text-base transition-colors hover:text-white",
                    pathname === link.href ? "text-white" : "text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <span aria-hidden className="h-6 w-px bg-[#a8a8a8]/50" />

            <div className="flex items-center gap-4">
              {session?.user ?
                <>
                  <span className="text-white">Welcome, {session.user.name}</span>
                  <Button
                    onClick={handleSignOut}
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-[17px] font-semibold text-[#5c53fe] transition-colors hover:bg-white/85"
                  >
                    Sign Out
                  </Button>
                </>
                : <>
                  <Link
                    href="/sign-in"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-[17px] font-semibold text-[#5c53fe] transition-colors hover:bg-white/85"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[#5c53fe] px-6 text-[17px] font-semibold text-white transition-colors hover:bg-[#4b42ee]"
                  >
                    Get Started
                  </Link>
                </>}
            </div>

          </div>

          <Button
            variant="ghost"
            size="icon-lg"
            className="rounded-xl text-white hover:bg-white/10 aria-expanded:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="navbar-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </nav>

        <div
          id="navbar-menu"
          data-state={open ? "open" : "closed"}
          className="absolute inset-x-0 top-full mt-2 flex-col gap-5 rounded-2xl bg-[#222222]/70 p-6 shadow-xl backdrop-blur-md data-[state=closed]:hidden md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-base transition-colors hover:bg-white/10 hover:text-white",
                  pathname === link.href ? "text-white" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <span aria-hidden className="h-px w-full bg-[#a8a8a8]/50" />

          <div className="flex flex-col gap-3">
            <Link
              href="/sign-in"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white text-[17px] font-semibold text-[#5c53fe] transition-colors hover:bg-white/85"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#5c53fe] text-[17px] font-semibold text-white transition-colors hover:bg-[#4b42ee]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
