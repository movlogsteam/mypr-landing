"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

type Audience = "creator" | "brand" | "agency";

// ─── Copy per audience ─────────────────────────────────────────
const COPY: Record<
  Audience,
  {
    eyebrow: string;
    headline: { top: string; script: string; bottom?: string };
    sub: string;
    primaryCta: string;
    navAlt: { label: string; href: string }[];
    howSteps: { n: string; title: string; body: string; img: string }[];
    finalHeadline: string;
    finalSub: string;
  }
> = {
  creator: {
    eyebrow: "The creator deal platform for MENA",
    headline: { top: "Turn your", script: "influence", bottom: "into currency." },
    sub: "Apply to PR packages, on-site experiences, and paid UGC briefs from verified brands. Your handles are already worth more than you think.",
    primaryCta: "Get early access",
    navAlt: [
      { label: "For Brands", href: "/brand" },
      { label: "For Agencies", href: "/agency" },
    ],
    howSteps: [
      { n: "01", title: "Verify your handles", body: "Link Instagram & TikTok in under 60 seconds. We match you to deals you actually qualify for.", img: "/onboarding/verify-handles.png" },
      { n: "02", title: "Apply to brand deals", body: "Swipe PR packages, on-site visits, and paid briefs from 200+ UAE & KSA brands.", img: "/onboarding/pr-boxes-many.png" },
      { n: "03", title: "Get paid to post", body: "Upload proof, get approved, get paid. Base payout plus milestone bonuses — straight to your wallet.", img: "/onboarding/coin-stack.png" },
    ],
    finalHeadline: "Your first PR box is waiting.",
    finalSub: "Launching on iOS soon. Join the waitlist and get early access before the public drop.",
  },
  brand: {
    eyebrow: "The easiest UGC engine in the Gulf",
    headline: { top: "Real creators.", script: "Real content.", bottom: "Shipped in days." },
    sub: "Post a brief, set a budget, get authentic content from vetted creators across the UAE & KSA. No agencies, no month-long cycles.",
    primaryCta: "Book a demo",
    navAlt: [
      { label: "For Creators", href: "/" },
      { label: "For Agencies", href: "/agency" },
    ],
    howSteps: [
      { n: "01", title: "Post a brief", body: "Pick PR, on-site, or UGC. Set deliverables, budget, and creator criteria in minutes.", img: "/onboarding/verify-handles.png" },
      { n: "02", title: "Review applicants", body: "Verified creators apply with real audience data. You approve. We handle the rest.", img: "/onboarding/pr-boxes-many.png" },
      { n: "03", title: "Get content & results", body: "Milestone-gated payouts. Audit-ready compliance. Performance data on every deal.", img: "/onboarding/coin-stack.png" },
    ],
    finalHeadline: "Content that actually converts.",
    finalSub: "Get UGC from creators your customers trust. Book a demo and we'll set up your first brief.",
  },
  agency: {
    eyebrow: "For MENA talent managers",
    headline: { top: "Land deals", script: "your roster", bottom: "actually deserves." },
    sub: "Run your entire talent book from one dashboard. Match creators to briefs, track earnings, stay compliant — no more WhatsApp chaos.",
    primaryCta: "Request access",
    navAlt: [
      { label: "For Creators", href: "/" },
      { label: "For Brands", href: "/brand" },
    ],
    howSteps: [
      { n: "01", title: "Invite your roster", body: "Onboard creators in minutes. Their handles, rates, and deliverables — in one place.", img: "/onboarding/verify-handles.png" },
      { n: "02", title: "Match to briefs", body: "See live brand briefs and match your talent with a tap. Full market-rate transparency.", img: "/onboarding/pr-boxes-many.png" },
      { n: "03", title: "Track everything", body: "Earnings, deal stages, compliance — all visible. Your cut is auto-calculated per deal.", img: "/onboarding/coin-stack.png" },
    ],
    finalHeadline: "Your agency, finally organized.",
    finalSub: "Stop losing deals to DMs. Request access and move your roster onto MyPR.",
  },
};

const BRANDS = [
  "alo-yoga", "bateel", "byredo", "caffe-nero", "dr-smash",
  "glossier", "gymshark", "huda-beauty", "ovn-bakery", "rare-beauty",
];

const INDUSTRIES = [
  { key: "beauty", label: "Beauty" },
  { key: "fashion", label: "Fashion" },
  { key: "food", label: "Food" },
  { key: "hospitality", label: "Hospitality" },
  { key: "wellness", label: "Wellness" },
  { key: "tech", label: "Tech" },
  { key: "home", label: "Home" },
  { key: "entertainment", label: "Entertainment" },
];

const BRAND_TYPES = [
  { img: "/web/brand-type-pr.png", title: "PR Packages", body: "Free product drops from top brands — no deliverables required beyond an honest post." },
  { img: "/web/brand-type-onsite.png", title: "On-site experiences", body: "Restaurants, spas, pop-ups, and launches. Show up, enjoy, share the story." },
  { img: "/web/brand-type-ugc.png", title: "Paid UGC briefs", body: "Clear deliverables, guaranteed payout. Milestone bonuses for posts that perform." },
];

const LIFECYCLE = [
  { img: "/lifecycle/state-draft.png", label: "Brief" },
  { img: "/lifecycle/state-applied.png", label: "Apply" },
  { img: "/lifecycle/state-approved.png", label: "Approved" },
  { img: "/lifecycle/state-posted.png", label: "Posted" },
  { img: "/lifecycle/state-proof.png", label: "Proof" },
  { img: "/lifecycle/state-review.png", label: "Paid" },
];

// ─── Shared UI ────────────────────────────────────────────────
function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image src="/icons/logo-mypr.png" alt="MyPR" width={140} height={50} priority className="h-9 w-auto" />
    </Link>
  );
}

function AppStoreBadge({ size = 52 }: { size?: number }) {
  return (
    <a
      href="#final-cta"
      aria-label="Download on the App Store (launching soon)"
      className="inline-block transition-transform hover:-translate-y-0.5"
    >
      <Image src="/appstore-badge.svg" alt="Download on the App Store" width={size * 3.35} height={size} style={{ height: size, width: "auto" }} />
    </a>
  );
}

function Nav({ audience }: { audience: Audience }) {
  const copy = COPY[audience];
  return (
    <nav className="max-w-[1180px] mx-auto flex items-center justify-between px-5 sm:px-8 py-5">
      <Logo />
      <div className="flex items-center gap-2 sm:gap-6">
        {copy.navAlt.map((l) => (
          <Link key={l.href} href={l.href} className="hidden sm:inline text-[14px] font-semibold text-[#1A1A1A]/75 hover:text-[#1A1A1A] transition">
            {l.label}
          </Link>
        ))}
        <a
          href="#final-cta"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1A1A] text-[#f8eee2] px-4 sm:px-5 py-2.5 text-[13px] sm:text-[14px] font-extrabold shadow-sm hover:shadow transition"
        >
          {copy.primaryCta}
          <ArrowRight size={14} strokeWidth={3} />
        </a>
      </div>
    </nav>
  );
}

// Floating mascot sticker around hero
function FloatingSticker({
  src, alt, className, rotate = 0, delay = 0, speed = "slow",
}: {
  src: string; alt: string; className: string; rotate?: number; delay?: number; speed?: "slow" | "med";
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className} ${speed === "slow" ? "animate-float-slow" : "animate-float-med"}`}
      style={{ ["--r" as string]: `${rotate}deg`, animationDelay: `${delay}s`, transform: `rotate(${rotate}deg)` }}
    >
      <Image src={src} alt={alt} width={180} height={180} className="drop-shadow-[0_12px_24px_rgba(26,26,26,0.08)]" />
    </div>
  );
}

// Phone that pulls forward on mount — surrounded by floating MyPR stickers
function HeroPhone() {
  return (
    <div className="relative mx-auto w-full max-w-[760px] flex justify-center pt-6">
      {/* Floating mascot stickers around phone */}
      <div
        className="hidden md:block absolute left-[4%] top-10 w-[128px] animate-float-slow pointer-events-none"
        style={{ ["--r" as string]: "-14deg", transform: "rotate(-14deg)" }}
      >
        <Image src="/onboarding/pr-boxes-5.png" alt="" width={180} height={180} className="drop-shadow-[0_16px_32px_rgba(26,26,26,0.12)]" />
      </div>
      <div
        className="hidden md:block absolute right-[6%] top-4 w-[116px] animate-float-med pointer-events-none"
        style={{ ["--r" as string]: "12deg", transform: "rotate(12deg)", animationDelay: "0.6s" }}
      >
        <Image src="/onboarding/coin-stack.png" alt="" width={160} height={160} className="drop-shadow-[0_16px_32px_rgba(26,26,26,0.12)]" />
      </div>
      <div
        className="hidden lg:block absolute right-[2%] bottom-24 w-[108px] animate-float-slow pointer-events-none"
        style={{ ["--r" as string]: "8deg", transform: "rotate(8deg)", animationDelay: "0.9s" }}
      >
        <Image src="/web/mascot-mailbox.png" alt="" width={160} height={160} className="drop-shadow-[0_16px_32px_rgba(26,26,26,0.12)]" />
      </div>
      <div
        className="hidden lg:block absolute left-[2%] bottom-28 w-[108px] animate-float-med pointer-events-none"
        style={{ ["--r" as string]: "-10deg", transform: "rotate(-10deg)", animationDelay: "0.4s" }}
      >
        <Image src="/onboarding/follower-tier-badge.png" alt="" width={160} height={160} className="drop-shadow-[0_16px_32px_rgba(26,26,26,0.12)]" />
      </div>

      {/* Phone — tilts forward on load */}
      <motion.div
        initial={{ opacity: 1, rotateX: 22, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ transformPerspective: 1400, transformOrigin: "center top" }}
        className="relative w-[260px] sm:w-[300px] lg:w-[340px]"
      >
        <div className="relative rounded-[44px] border-[7px] border-[#1A1A1A] bg-[#1A1A1A] shadow-[0_40px_80px_-20px_rgba(26,26,26,0.45),0_18px_40px_-12px_rgba(26,26,26,0.3)]">
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[96px] h-[22px] bg-[#1A1A1A] rounded-full z-10" />
          <div className="rounded-[38px] overflow-hidden bg-[#f8eee2]">
            <Image
              src="/screenshots/mypr-explore.png"
              alt="MyPR explore screen — PR deals near you"
              width={1179}
              height={2556}
              priority
              className="block w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Hero section
function Hero({ audience }: { audience: Audience }) {
  const copy = COPY[audience];
  return (
    <section className="relative overflow-hidden pb-20 sm:pb-32">
      <Nav audience={audience} />

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 pt-8 sm:pt-16 pb-8">
        {/* Floating stickers — decorative */}
        <FloatingSticker src="/onboarding/pr-boxes-3.png" alt="" className="hidden md:block top-0 -left-6 w-[140px]" rotate={-8} />
        <FloatingSticker src="/onboarding/coin-stack.png" alt="" className="hidden md:block top-10 -right-2 w-[130px]" rotate={12} delay={0.6} speed="med" />
        <FloatingSticker src="/onboarding/follower-tier-badge.png" alt="" className="hidden lg:block top-[280px] -left-8 w-[120px]" rotate={-6} delay={0.3} speed="med" />

        <div className="relative text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-4 py-1.5 text-[12px] font-semibold text-[#1A1A1A]/75 mb-6"
          >
            <Sparkles size={12} strokeWidth={2.5} />
            {copy.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-black tracking-[-0.035em] leading-[0.95] text-[#1A1A1A] text-[52px] sm:text-[76px] lg:text-[96px]"
          >
            <span className="block">{copy.headline.top}</span>
            <span className="block">
              <span className="relative inline-block">
                <span className="relative z-10 italic font-black" style={{ fontFamily: "var(--font-sans)" }}>
                  {copy.headline.script}
                </span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-[8%] h-[22%] bg-[#1A1A1A]/10 -skew-y-2"
                />
              </span>
            </span>
            {copy.headline.bottom && <span className="block">{copy.headline.bottom}</span>}
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 mx-auto max-w-[620px] text-[17px] sm:text-[19px] leading-[1.5] text-[#1A1A1A]/70 font-semibold"
          >
            {copy.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <AppStoreBadge size={58} />
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] text-[#f8eee2] px-7 py-4 text-[15px] font-extrabold hover:-translate-y-0.5 transition"
            >
              {copy.primaryCta}
              <ArrowRight size={16} strokeWidth={3} />
            </a>
          </motion.div>

          <div className="mt-4 text-[12px] font-bold text-[#1A1A1A]/45 uppercase tracking-[0.1em]">
            Launching soon on iOS · UAE first, Gulf next
          </div>
        </div>

        <div className="mt-16 sm:mt-20 relative">
          <HeroPhone />
        </div>
      </div>
    </section>
  );
}

// Brand strip (marquee)
function BrandMarquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section className="border-y border-[#1A1A1A]/10 bg-[#f3e7d6] py-8 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 mb-5">
        <div className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
          Brands onboarding with MyPR
        </div>
      </div>
      <div className="flex animate-marquee gap-14 w-max items-center">
        {row.map((b, i) => (
          <div key={`${b}-${i}`} className="shrink-0 h-10 flex items-center">
            <Image src={`/brands/${b}.png`} alt={b} width={180} height={60} className="h-9 w-auto object-contain opacity-80" />
          </div>
        ))}
      </div>
    </section>
  );
}

// How It Works
function HowItWorks({ audience }: { audience: Audience }) {
  const copy = COPY[audience];
  return (
    <section id="how" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-3xl">
        <div className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#1A1A1A]/55 mb-4">How it works</div>
        <h2 className="text-[40px] sm:text-[56px] font-black leading-[1] tracking-[-0.03em] text-[#1A1A1A]">
          Land your first deal in <span className="italic">three taps.</span>
        </h2>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {copy.howSteps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative rounded-[28px] bg-[#FEFCF8] border border-[#1A1A1A]/8 p-7 pt-8 shadow-[0_2px_0_rgba(26,26,26,0.04)] hover:shadow-[0_10px_30px_-8px_rgba(26,26,26,0.12)] transition"
          >
            <div className="absolute -top-4 left-7 inline-flex items-center justify-center rounded-full bg-[#1A1A1A] text-[#f8eee2] w-11 h-11 text-[13px] font-black">
              {s.n}
            </div>
            <div className="aspect-square w-full rounded-2xl bg-[#f3e7d6] flex items-center justify-center mb-5 overflow-hidden">
              <Image src={s.img} alt={s.title} width={360} height={360} className="w-[78%] h-auto" />
            </div>
            <h3 className="text-[22px] font-black tracking-[-0.02em] text-[#1A1A1A] mb-2">{s.title}</h3>
            <p className="text-[15px] text-[#1A1A1A]/65 leading-[1.55] font-semibold">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// What You Can Land
function WhatYouCanLand() {
  return (
    <section className="bg-[#FEFCF8] border-y border-[#1A1A1A]/8 py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between gap-8 mb-14 flex-wrap">
          <div className="max-w-2xl">
            <div className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#1A1A1A]/55 mb-4">Three ways to earn</div>
            <h2 className="text-[40px] sm:text-[56px] font-black leading-[1] tracking-[-0.03em] text-[#1A1A1A]">
              Deals that meet you <span className="italic">where you are.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[16px] text-[#1A1A1A]/65 font-semibold">
            From free product drops to paid briefs — MyPR ladders you from your first box to five-figure campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BRAND_TYPES.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 1, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[28px] bg-[#f8eee2] p-6 border border-[#1A1A1A]/8 hover:-translate-y-1 hover:shadow-[0_14px_36px_-12px_rgba(26,26,26,0.15)] transition"
            >
              <div className="rounded-2xl overflow-hidden bg-[#ede3d1] aspect-[4/3] flex items-center justify-center mb-5">
                <Image src={t.img} alt={t.title} width={600} height={450} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[22px] font-black text-[#1A1A1A] tracking-[-0.015em] mb-2">{t.title}</h3>
              <p className="text-[15px] text-[#1A1A1A]/65 leading-[1.55] font-semibold">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industries grid
function Industries() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-2xl mb-14">
        <div className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#1A1A1A]/55 mb-4">Every niche</div>
        <h2 className="text-[40px] sm:text-[56px] font-black leading-[1] tracking-[-0.03em] text-[#1A1A1A]">
          Your corner of the <span className="italic">internet</span>, covered.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={ind.key}
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group rounded-3xl bg-[#FEFCF8] border border-[#1A1A1A]/8 p-5 flex flex-col items-center gap-3 hover:-translate-y-1 hover:shadow-[0_10px_30px_-8px_rgba(26,26,26,0.12)] transition"
          >
            <div className="w-[72px] h-[72px] rounded-2xl bg-[#f3e7d6] flex items-center justify-center">
              <Image src={`/industry/industry-${ind.key}.png`} alt={ind.label} width={80} height={80} className="w-12 h-12" />
            </div>
            <span className="text-[14px] font-black text-[#1A1A1A] tracking-[-0.01em]">{ind.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Lifecycle visual
function Lifecycle() {
  return (
    <section className="bg-[#f3e7d6] border-y border-[#1A1A1A]/10 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between gap-8 mb-14 flex-wrap">
          <div className="max-w-2xl">
            <div className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#1A1A1A]/55 mb-4">Every step tracked</div>
            <h2 className="text-[40px] sm:text-[56px] font-black leading-[1] tracking-[-0.03em] text-[#1A1A1A]">
              From brief to <span className="italic">bank account.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[16px] text-[#1A1A1A]/65 font-semibold">
            No guessing what&apos;s happening with your deal. Live status at every stage, for creators, brands and agencies.
          </p>
        </div>

        <div className="relative grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {LIFECYCLE.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative w-[96px] h-[96px] sm:w-[112px] sm:h-[112px] rounded-full bg-[#FEFCF8] border border-[#1A1A1A]/8 shadow-[0_4px_12px_rgba(26,26,26,0.04)] flex items-center justify-center">
                <Image src={l.img} alt={l.label} width={140} height={140} className="w-[68%] h-auto" />
                <span className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-[#1A1A1A] text-[#f8eee2] text-[11px] font-black flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-[14px] font-black tracking-[-0.01em] text-[#1A1A1A]">{l.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA({ audience }: { audience: Audience }) {
  const copy = COPY[audience];
  return (
    <section id="final-cta" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="relative rounded-[32px] bg-[#FEFCF8] border border-[#1A1A1A]/10 px-6 sm:px-12 py-16 sm:py-20 text-center overflow-hidden">
          {/* mascot decorations */}
          <div className="hidden md:block absolute -top-4 -left-6 w-[180px] opacity-90 pointer-events-none">
            <Image src="/illustrations/hero-mascot.png" alt="" width={220} height={220} className="rotate-[-8deg]" />
          </div>
          <div className="hidden md:block absolute -bottom-6 -right-4 w-[160px] opacity-90 pointer-events-none">
            <Image src="/onboarding/pr-boxes-many.png" alt="" width={200} height={200} className="rotate-[10deg]" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] text-[#f8eee2] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] mb-6">
              <CheckCircle2 size={12} strokeWidth={2.8} /> Launching soon
            </div>
            <h2 className="text-[44px] sm:text-[68px] font-black leading-[0.98] tracking-[-0.035em] text-[#1A1A1A] mb-4">
              {copy.finalHeadline}
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#1A1A1A]/70 font-semibold max-w-xl mx-auto mb-9">
              {copy.finalSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppStoreBadge size={64} />
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] text-[#f8eee2] px-8 py-4 text-[15px] font-extrabold hover:-translate-y-0.5 transition"
              >
                Join the waitlist
                <ArrowRight size={16} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A]/10">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/icons/logo-mypr.png" alt="MyPR" width={90} height={32} className="h-7 w-auto opacity-80" />
          <span className="text-[13px] font-bold text-[#1A1A1A]/55">© 2026 MyPR Inc.</span>
        </div>
        <div className="flex items-center gap-6 text-[13px] font-bold text-[#1A1A1A]/55">
          <Link href="/" className="hover:text-[#1A1A1A]">Creators</Link>
          <Link href="/brand" className="hover:text-[#1A1A1A]">Brands</Link>
          <Link href="/agency" className="hover:text-[#1A1A1A]">Agencies</Link>
          <Link href="/terms" className="hover:text-[#1A1A1A]">Terms</Link>
          <Link href="/privacy" className="hover:text-[#1A1A1A]">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function LandingPage({ audience = "creator" }: { audience?: Audience }) {
  return (
    <main className="bg-[#f8eee2] text-[#1A1A1A]">
      <Hero audience={audience} />
      <BrandMarquee />
      <HowItWorks audience={audience} />
      <WhatYouCanLand />
      <Industries />
      <Lifecycle />
      <FinalCTA audience={audience} />
      <Footer />
    </main>
  );
}
