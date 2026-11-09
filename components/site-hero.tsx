import Image from "next/image"
import { Building2, Briefcase, MapPin, Search, Star, Users } from "lucide-react"

import Globe from "@/app/images/globe.png"
import HeroDots from "@/app/images/hero-dots.png"

const trendingKeywords = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

const stats = [
  { icon: Briefcase, value: "50K", label: "Active Jobs" },
  { icon: Building2, value: "12K", label: "Companies" },
  { icon: Users, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#010109] text-white">
      <Image
        src={HeroDots}
        alt=""
        aria-hidden
        priority
        className="pointer-events-none absolute top-24 left-1/2 w-[1180px] -translate-x-1/2 opacity-70 select-none md:top-16"
      />
      <div className="relative mx-auto flex max-w-[1320px] flex-col items-center px-4 pt-16 pb-24 md:px-6 md:pt-32 md:pb-36">
        <div className="flex items-center">
          <span
            aria-hidden
            className="h-px w-16 bg-gradient-to-r from-transparent to-white/40 sm:w-24"
          />
          <span className="flex h-fit shrink-0 rounded-full bg-gradient-to-b from-white/35 via-white/15 to-white/10 p-px">
            <span className="flex h-12 items-center gap-3 rounded-full bg-gradient-to-b from-[#474747] to-[#010102] px-6">
              <span aria-hidden className="text-base leading-none">
                💼
              </span>
              <span className="font-mono text-xs tracking-wide uppercase md:text-[15px]">
                <span className="font-bold text-white">50,000+</span>{" "}
                <span className="text-white/80">new jobs this month</span>
              </span>
            </span>
          </span>
          <span
            aria-hidden
            className="h-px w-16 bg-gradient-to-l from-transparent to-white/40 sm:w-24"
          />
        </div>

        <h1 className="mt-6 text-center text-4xl font-bold tracking-tight sm:text-5xl md:mt-8 md:text-[56px] md:leading-[1.15]">
          Find Your Dream Job Today
        </h1>
        <p className="mt-4 max-w-[560px] text-center text-base text-white/70 md:text-xl">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <form
          action="/jobs"
          className="mt-10 flex w-full max-w-[784px] flex-col items-center gap-3 rounded-2xl border border-white/20 bg-[#101010] p-2 sm:h-16 sm:flex-row sm:gap-4 md:mt-12"
        >
          <div className="relative h-11 flex-1 self-stretch">
            <Search
              aria-hidden
              className="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-white/80"
            />
            <label htmlFor="hero-job" className="sr-only">
              Job title, skill or company
            </label>
            <input
              id="hero-job"
              type="text"
              name="q"
              placeholder="Job title, skill or company"
              className="h-full w-full self-stretch rounded-xl bg-transparent pl-10 text-base text-white outline-none placeholder:text-white/80 focus-visible:ring-2 focus-visible:ring-[#5c53fe]/60"
            />
          </div>

          <span aria-hidden className="hidden h-5 w-px bg-white/20 sm:block" />

          <div className="relative h-11 flex-1 self-stretch">
            <MapPin
              aria-hidden
              className="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-white/80"
            />
            <label htmlFor="hero-location" className="sr-only">
              Location or Remote
            </label>
            <input
              id="hero-location"
              type="text"
              name="location"
              placeholder="Location or Remote"
              className="h-full w-full self-stretch rounded-xl bg-transparent pl-10 text-base text-white outline-none placeholder:text-white/80 focus-visible:ring-2 focus-visible:ring-[#5c53fe]/60"
            />
          </div>

          <button
            type="submit"
            className="flex size-12 w-full shrink-0 items-center justify-center gap-2 self-center rounded-xl bg-[#5c53fe] text-base font-medium text-white hover:bg-[#4b42ee] sm:w-12"
          >
            <Search aria-hidden className="size-6" />
            <span className="sm:sr-only">Search</span>
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center md:mt-8">
          <span className="text-base text-white/70">Trending Position</span>
          <div className="flex flex-wrap items-center gap-3">
            {trendingKeywords.map((keyword) => (
              <a
                key={keyword}
                href="/jobs"
                className="rounded-full border border-white/10 bg-[#1a1a1b] px-4 py-1.5 text-sm text-white/90 transition-colors hover:border-white/25 hover:bg-[#242425]"
              >
                {keyword}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 pb-24 md:px-6 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-160px] left-1/2 z-0 w-[150vw] max-w-none -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_90px,black_58%,transparent_97%)] select-none md:w-[1360px]"
        >
          <Image src={Globe} alt="" priority className="-mt-[55%] w-full" />
        </div>

        <h2 className="relative z-10 mx-auto max-w-[600px] text-center text-3xl font-medium text-balance md:px-6 md:text-[40px] md:leading-[1.3]">
          Assisting over{" "}
          <span className="text-[#5c53fe]">15,000 job seekers</span> find their
          dream positions.
        </h2>

        <div className="relative z-10 mx-auto mt-14 grid grid-cols-2 gap-4 lg:flex lg:justify-center lg:gap-6 xl:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-[170px] flex-col rounded-2xl border border-white/25 bg-gradient-to-b from-[#313131] to-[#010102] p-5 md:min-h-[254px] md:w-[312px] md:p-6"
            >
              <stat.icon aria-hidden className="size-6" />
              <p className="mt-auto pt-10 text-4xl font-semibold md:text-[56px]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm md:mt-2 md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
