import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Briefcase,
  Database,
  Terminal,
  Activity,
} from 'lucide-react';

import { experienceData } from '../data/experienceData';

const ease = [0.16, 1, 0.3, 1] as const;

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050608] py-32 text-white sm:py-40 lg:py-52"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[8%] h-[520px] w-[520px] rounded-full bg-emerald-400/[0.035] blur-[150px]" />

        <div className="absolute right-[-18%] top-[38%] h-[620px] w-[620px] rounded-full bg-cyan-400/[0.025] blur-[170px]" />

        <div className="absolute bottom-[5%] left-[30%] h-[450px] w-[450px] rounded-full bg-emerald-400/[0.018] blur-[150px]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        {/* Scan lines */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '100% 5px',
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050608_88%)]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
        >
          {/* top technical bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-emerald-400/20" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.9)]" />
              </span>

              <span className="font-mono-tech text-[9px] font-semibold uppercase tracking-[0.28em] text-emerald-400">
                05 // EXPERIENCE
              </span>
            </div>

            <div className="hidden items-center gap-4 sm:flex">
              <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                CAREER.LOG
              </span>

              <span className="h-3 w-px bg-zinc-800" />

              <span className="font-mono-tech text-[8px] tracking-[0.15em] text-zinc-600">
                2025 — 2026
              </span>
            </div>
          </div>

          {/* giant heading */}
          <div className="relative mt-10 overflow-hidden">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 left-0 select-none font-display text-[18vw] font-black leading-none tracking-[-0.12em] text-white/[0.018]"
            >
              CAREER
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease }}
              className="relative font-display text-[clamp(4rem,13vw,12rem)] font-black uppercase leading-[0.72] tracking-[-0.09em] text-white"
            >
              EXPERIENCE
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="mt-5 flex items-center gap-4 sm:gap-6"
            >
              <span className="h-px w-12 bg-emerald-400 sm:w-24" />

              <span className="font-display text-[clamp(1.2rem,3vw,3rem)] font-medium tracking-[-0.04em] text-zinc-500">
                PRACTICAL EXPERIENCE
              </span>
            </motion.div>
          </div>

          {/* intro data strip */}
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/[0.08] pt-7 lg:grid-cols-12 lg:items-end">

            <p className="max-w-3xl text-sm font-light leading-7 text-zinc-400 sm:text-base lg:col-span-7">
              Hands-on experience applying data analysis, SQL, dashboard
              development and machine learning workflows across practical
              analytical projects.
            </p>

            <div className="grid grid-cols-2 gap-6 border-l border-white/[0.08] pl-6 sm:grid-cols-3 lg:col-span-5">
              <div>
                <div className="font-mono-tech text-[7px] uppercase tracking-[0.2em] text-zinc-700">
                  DOMAIN
                </div>
                <div className="mt-2 font-display text-sm font-semibold text-white">
                  DATA ANALYTICS
                </div>
              </div>

              <div>
                <div className="font-mono-tech text-[7px] uppercase tracking-[0.2em] text-zinc-700">
                  FOCUS
                </div>
                <div className="mt-2 font-display text-sm font-semibold text-white">
                  INSIGHTS
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="font-mono-tech text-[7px] uppercase tracking-[0.2em] text-zinc-700">
                  STATUS
                </div>

                <div className="mt-2 flex items-center gap-2 font-mono-tech text-[8px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" />
                  ACTIVE
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            EXPERIENCE TIMELINE
        ========================================================== */}

        <div className="relative mt-24 sm:mt-32 lg:mt-40">

          {/* Main timeline */}
          <div className="absolute bottom-0 left-[17px] top-0 w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/10 to-transparent sm:left-[31px]" />

          {/* tiny timeline markers */}
          <div className="absolute left-[14px] top-0 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,.8)] sm:left-[28px]" />

          <div className="space-y-0">

            {experienceData.map((exp, index) => (
              <motion.article
                key={index}
                id={`experience-item-${index}`}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease,
                }}
                className="group relative"
              >

                {/* =====================================================
                    TIMELINE NODE
                ====================================================== */}

                <div className="absolute left-[8px] top-10 z-20 flex h-[20px] w-[20px] items-center justify-center rounded-full border border-emerald-400/40 bg-[#050608] shadow-[0_0_25px_rgba(52,211,153,.08)] sm:left-[22px]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.9)] transition-transform duration-500 group-hover:scale-150" />
                </div>

                {/* =====================================================
                    EXPERIENCE GRID
                ====================================================== */}

                <div className="grid grid-cols-1 gap-10 pb-24 pl-14 sm:pl-20 lg:grid-cols-12 lg:gap-12 lg:pb-32">

                  {/* META */}
                  <div className="lg:col-span-3">

                    <div className="relative overflow-hidden border border-white/[0.07] bg-white/[0.015] p-5 transition-all duration-500 group-hover:border-emerald-400/20">

                      {/* corner */}
                      <div className="absolute right-0 top-0 h-8 w-8 border-l border-b border-emerald-400/20" />

                      <div className="flex items-center justify-between">
                        <span className="font-mono-tech text-5xl font-black leading-none tracking-[-0.08em] text-white/[0.08] transition-colors duration-500 group-hover:text-emerald-400/20">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>

                        <Activity className="h-4 w-4 text-emerald-400/50 transition-colors group-hover:text-emerald-400" />
                      </div>

                      <div className="mt-7 flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-emerald-400" />

                        <span className="font-mono-tech text-[8px] uppercase tracking-[0.12em] text-zinc-500">
                          {exp.period}
                        </span>
                      </div>

                      <div className="mt-3 flex items-start gap-2">
                        <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-zinc-700" />

                        <span className="font-mono-tech text-[7px] uppercase leading-4 tracking-[0.08em] text-zinc-600">
                          {exp.company}
                          <br />
                          {exp.location}
                        </span>
                      </div>

                      <div className="mt-6 border-t border-white/[0.06] pt-4">
                        <div className="font-mono-tech text-[7px] uppercase tracking-[0.18em] text-zinc-700">
                          RECORD
                        </div>

                        <div className="mt-2 flex items-center gap-2 font-mono-tech text-[7px] text-emerald-400/60">
                          <Database className="h-3 w-3" />
                          VERIFIED EXPERIENCE
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="lg:col-span-9">

                    {/* role header */}
                    <div className="relative border-b border-white/[0.08] pb-7">

                      <div className="mb-4 flex items-center gap-3">
                        <Briefcase className="h-3.5 w-3.5 text-emerald-400" />

                        <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-emerald-400">
                          {exp.type}
                        </span>

                        <span className="h-px w-8 bg-zinc-800" />

                        <span className="font-mono-tech text-[7px] uppercase tracking-[0.16em] text-zinc-700">
                          EXPERIENCE / {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-6">

                        <h3 className="max-w-4xl font-display text-[clamp(2.3rem,4vw,4.8rem)] font-black leading-[0.84] tracking-[-0.065em] text-white transition-colors duration-500 group-hover:text-emerald-50">
                          {exp.role}
                        </h3>

                        <ArrowUpRight className="mt-1 hidden h-6 w-6 shrink-0 text-zinc-800 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400 sm:block" />
                      </div>
                    </div>

                    {/* description */}
                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px]">

                      <p className="max-w-3xl text-sm font-light leading-7 text-zinc-400 sm:text-[15px]">
                        {exp.description}
                      </p>

                      {/* side signal */}
                      <div className="hidden border-l border-white/[0.07] pl-5 lg:block">
                        <div className="font-mono-tech text-[7px] uppercase tracking-[0.18em] text-zinc-700">
                          WORKFLOW
                        </div>

                        <div className="mt-3 space-y-2">
                          {['DATA', 'ANALYSIS', 'INSIGHT'].map((item, i) => (
                            <div
                              key={item}
                              className="flex items-center gap-2"
                            >
                              <span
                                className={`h-1 w-1 rounded-full ${
                                  i === 2
                                    ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]'
                                    : 'bg-zinc-700'
                                }`}
                              />

                              <span className="font-mono-tech text-[7px] tracking-[0.12em] text-zinc-600">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* responsibilities */}
                    <div className="mt-10">

                      <div className="mb-5 flex items-center gap-3">
                        <Terminal className="h-3 w-3 text-emerald-400/60" />

                        <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                          KEY RESPONSIBILITIES
                        </span>

                        <span className="h-px flex-1 bg-white/[0.06]" />
                      </div>

                      <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                        {exp.deliverables.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.45,
                              delay: itemIndex * 0.04,
                              ease,
                            }}
                            className="group/item flex items-start gap-3"
                          >
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.015] transition-colors group-hover/item:border-emerald-400/30">
                              <CheckCircle2 className="h-3 w-3 text-emerald-400/60 transition-colors group-hover/item:text-emerald-400" />
                            </div>

                            <span className="text-xs font-light leading-6 text-zinc-500 transition-colors group-hover/item:text-zinc-300">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* tools */}
                    <div className="mt-10 border-t border-white/[0.06] pt-6">

                      <div className="mb-4 flex items-center justify-between">
                        <div className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                          TOOLS / TECHNOLOGIES
                        </div>

                        <span className="font-mono-tech text-[7px] tracking-[0.15em] text-zinc-800">
                          STACK
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="inline-flex items-center gap-2 border border-white/[0.07] bg-white/[0.015] px-3 py-2 font-mono-tech text-[7px] uppercase tracking-[0.08em] text-zinc-500 transition-all duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.035] hover:text-emerald-300"
                          >
                            <span className="h-1 w-1 rounded-full bg-emerald-400/50" />
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* =========================================================
                EDUCATION
            ========================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease }}
              className="group relative"
            >
              <div className="absolute left-[8px] top-10 z-20 flex h-[20px] w-[20px] items-center justify-center rounded-full border border-zinc-600 bg-[#050608] sm:left-[22px]">
                <span className="h-2 w-2 rounded-full bg-zinc-600 transition-colors group-hover:bg-emerald-400" />
              </div>

              <div className="grid grid-cols-1 gap-10 pl-14 sm:pl-20 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-3">
                  <div className="border border-white/[0.06] bg-white/[0.012] p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-5xl font-black tracking-[-0.08em] text-white/[0.06]">
                        00
                      </span>

                      <GraduationCap className="h-4 w-4 text-emerald-400/50" />
                    </div>

                    <div className="mt-5 font-mono-tech text-[7px] uppercase tracking-[0.18em] text-zinc-600">
                      FOUNDATION
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="border-t border-white/[0.08] pt-7">

                    <div className="mb-4 flex items-center gap-3">
                      <GraduationCap className="h-4 w-4 text-emerald-400" />

                      <span className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-emerald-400">
                        ACADEMIC BACKGROUND
                      </span>
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                      <h3 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] font-black leading-[0.9] tracking-[-0.055em] text-white">
                        Computer Science
                        <br />
                        <span className="text-zinc-600">
                          & Analytics Foundation
                        </span>
                      </h3>

                      <span className="font-mono-tech text-[7px] uppercase tracking-[0.14em] text-zinc-700">
                        EDUCATION / 00
                      </span>
                    </div>

                    <p className="mt-7 max-w-3xl text-sm font-light leading-7 text-zinc-500 sm:text-[15px]">
                      Rigorous grounding in computer science fundamentals,
                      data structures, relational database management systems,
                      probability, statistics and software development
                      practices.
                    </p>

                    {/* education signal */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {[
                        'COMPUTER SCIENCE',
                        'DATABASES',
                        'STATISTICS',
                        'SOFTWARE DEVELOPMENT',
                      ].map((item) => (
                        <span
                          key={item}
                          className="border border-white/[0.07] px-3 py-2 font-mono-tech text-[7px] tracking-[0.1em] text-zinc-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
          className="relative mt-32 overflow-hidden border-y border-white/[0.08] py-20 sm:mt-44 sm:py-28"
        >
          {/* giant background text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 select-none font-display text-[20vw] font-black uppercase leading-none tracking-[-0.12em] text-white/[0.018]"
          >
            BUILD
          </div>

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />

                <span className="font-mono-tech text-[8px] uppercase tracking-[0.25em] text-emerald-400">
                  THE NEXT STEP
                </span>
              </div>

              <h3 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.76] tracking-[-0.08em] text-white">
                LEARN.
                <br />
                <span className="text-zinc-600">
                  BUILD.
                </span>{' '}
                <span className="text-white">
                  ANALYZE.
                </span>
              </h3>
            </div>

            <div className="lg:col-span-4 lg:text-right">

              <p className="text-sm font-light leading-7 text-zinc-500">
                Every experience adds another layer to the way I approach
                data, problems and analytical thinking.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-500">
                <span>CONTINUE EXPLORING</span>

                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};