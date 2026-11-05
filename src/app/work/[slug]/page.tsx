import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Split } from "@/components/motion/Split";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { AppScreen, Phone } from "@/components/three/Phone";
import { caseStudySlugs, getCaseStudy } from "@/data/caseStudies";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) return {};
  const title = `${data.project.name} — Case study · Siddharth Jain`;
  return {
    title,
    description: `${data.project.tagline} ${data.study.challenge}`.slice(0, 160),
    openGraph: { title, description: data.project.tagline, images: data.project.image ? [data.project.image] : undefined },
  };
}

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) notFound();
  const { study, project: p, next } = data;
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

  const meta = [
    { label: "Engagement", value: study.engagement },
    { label: "Role", value: p.role },
    ...(study.period ? [{ label: "Period", value: study.period }] : []),
    { label: "Stack", value: p.tools.join(" · ") },
  ];

  return (
    <>
      <Header />
      <main>
        {/* ───── Intro ───── */}
        <section className="relative overflow-hidden pt-28 md:pt-36">
          <div
            aria-hidden
            className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full blur-[120px]"
            style={{ background: `${p.accent}33` }}
          />
          <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft hover:text-ink"
            >
              <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> All work
            </Link>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft" data-reveal>
              [ Case study — {p.category === "client" ? "Client work" : "Own product"} ]
            </p>
            <Split as="h1" className="display mt-5 text-[clamp(3.2rem,11vw,11rem)]" text={p.name} />
            <p className="mt-6 max-w-3xl text-2xl font-medium leading-snug tracking-tight md:text-4xl" data-reveal>
              {p.tagline}
            </p>

            <dl
              className={`mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 ${meta.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
              data-reveal
            >
              {meta.map((m) => (
                <div key={m.label} className="bg-white p-5 md:p-6">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{m.label}</dt>
                  <dd className="mt-2 text-[15px] font-medium leading-snug text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-2" data-reveal>
              {p.links.web && (
                <a {...ext} href={p.links.web} className="group inline-flex items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-lime hover:text-ink">
                  {hostOf(p.links.web)}
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-45">
                    <FiArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              )}
              {p.links.playStore && (
                <a {...ext} href={p.links.playStore} className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-white">
                  <FaGooglePlay className="h-3 w-3" /> Google Play
                </a>
              )}
              {p.links.appStore && (
                <a {...ext} href={p.links.appStore} className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-white">
                  <FaApple className="h-3.5 w-3.5" /> App Store
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ───── Cover ───── */}
        <section className="mx-auto max-w-[1440px] px-5 pt-14 md:px-10 md:pt-20">
          <div
            data-clip
            className="relative overflow-hidden rounded-[28px] p-5 sm:p-10 md:p-16"
            style={{ background: `linear-gradient(145deg, ${p.accent}26, ${p.accent}66)` }}
          >
            <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
            <div className="relative mx-auto grid max-w-6xl items-end gap-8 md:grid-cols-[1fr_auto]">
              {p.image ? (
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_50px_100px_-40px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    {p.links.web && <span className="ml-3 truncate rounded-md bg-black/5 px-2.5 py-0.5 text-[10px] text-muted">{hostOf(p.links.web)}</span>}
                  </div>
                  <div className="relative aspect-[16/10]">
                    <Image src={p.image} alt={`${p.name} website`} fill priority sizes="(min-width: 1024px) 900px, 100vw" className="object-cover object-top" />
                  </div>
                </div>
              ) : (
                <div className="grid aspect-[16/10] place-items-center">
                  <p className="display text-[clamp(3rem,9vw,8rem)] opacity-25" style={{ color: p.accent }}>{p.name}</p>
                </div>
              )}
              {p.icon && (
                <div className="mx-auto w-[46%] max-w-[230px] md:mx-0 md:w-[230px]" data-parallax="0.1">
                  <Phone>
                    <AppScreen app={p} />
                  </Phone>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ───── Challenge ───── */}
        <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[18rem_1fr]">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">( 01 ) The challenge</h2>
          <p className="text-2xl font-medium leading-snug tracking-tight text-ink md:text-[2.6rem] md:leading-[1.2]" data-reveal>
            {study.challenge}
          </p>
        </section>

        {/* ───── Approach ───── */}
        <section className="bg-ink py-24 text-white md:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 md:px-10 lg:grid-cols-[18rem_1fr]">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">( 02 ) What I did</h2>
            <ol className="border-t border-white/15">
              {study.approach.map((a, i) => (
                <li key={a.title} className="grid gap-3 border-b border-white/15 py-8 md:grid-cols-[5rem_1fr_1.3fr] md:gap-8 md:py-10" data-reveal>
                  <span className="font-display text-lg font-bold text-lime">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">{a.title}</h3>
                  <p className="text-lg leading-relaxed text-white/70">{a.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───── Results ───── */}
        <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[18rem_1fr]">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">( 03 ) Results</h2>
          <div>
            {p.results && (
              <dl className="mb-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2" data-reveal>
                {p.results.map((r) => (
                  <div key={r.label} className="bg-paper-2 p-6 md:p-8">
                    <dt className={`display ${r.value.length > 6 ? "text-[clamp(2rem,3.4vw,3.2rem)]" : "text-[clamp(2.6rem,5vw,4.5rem)]"}`}>{r.value}</dt>
                    <dd className="mt-3 text-muted">{r.label}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-[2.6rem] md:leading-[1.2]" data-reveal>
              {study.outcome}
            </p>
            <Link
              href="/#contact"
              className="group mt-12 inline-flex items-center gap-3 rounded-full bg-lime py-2 pl-7 pr-2 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Have a similar project? Let&apos;s talk
              <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-lime transition-transform group-hover:rotate-45">
                <FiArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </section>

        {/* ───── Next ───── */}
        <Link
          href={`/work/${next.id}`}
          data-cursor="Next"
          className="group relative block overflow-hidden border-t border-line bg-paper-2"
        >
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-16 md:px-10 md:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">[ Next case study ]</p>
              <p className="display mt-4 text-[clamp(2.8rem,9vw,9rem)] transition-transform duration-700 ease-out group-hover:translate-x-4">
                {next.name}
              </p>
              <p className="mt-3 text-lg text-muted">{next.tagline}</p>
            </div>
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-ink text-lime transition-transform duration-500 group-hover:rotate-45 md:h-24 md:w-24">
              <FiArrowUpRight className="h-7 w-7 md:h-9 md:w-9" />
            </span>
          </div>
        </Link>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
