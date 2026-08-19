"use client"

import { ArrowRight, Radio } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

export default function CrowdfundingBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-zinc-950 pt-28 text-white sm:pt-32 md:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(16,185,129,0.12),transparent_42%,rgba(255,255,255,0.04))]" />
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 pb-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-start gap-4">
          <Radio className="mt-1 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
          <div>
            <div className="mb-2 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.24em] text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              {t.fundPage.bannerp.mission}
            </div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {t.fundPage.bannerp.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
              {t.fundPage.bannerp.message}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center md:flex-col md:items-end lg:flex-row lg:items-center">
          <div className="font-mono text-sm text-gray-400">
            <span className="mr-2 text-xs uppercase tracking-wider">{t.fundPage.bannerp.period}</span>
            <span className="text-xl font-bold text-white">11/1~12/10</span>
          </div>
          <div className="font-mono text-sm text-gray-400">
            <span className="mr-2 text-xs uppercase tracking-wider">{t.fundPage.bannerp.goalFunds}</span>
            <span className="text-xl font-bold text-white">{t.fundPage.bannerp.goalFundsNumber}</span>
          </div>
          <Link
            href="/Fund&SponsorPage"
            className="group inline-flex h-12 items-center justify-center gap-3 border border-white/20 bg-white px-5 text-sm font-bold tracking-wider text-black transition-colors hover:bg-emerald-400"
          >
            {t.fundPage.support.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}