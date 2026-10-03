import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Terminal,
} from 'lucide-react';
import { characterImages } from '../assets/characterAssets';

const ease = [0.22, 1, 0.36, 1] as const;

const tools = [
  'SQL',
  'Python',
  'Pandas',
  'NumPy',
  'Excel',
  'Power BI',
  'Tableau',
  'EDA',
];

const process = [
  {
    number: '01',
    title: 'UNDERSTAND',
    description:
      'Start with the business question. Define what needs to be measured, why it matters, and what decision the analysis needs to support.',
  },
  {
    number: '02',
    title: 'ANALYZE',
    description:
      'Clean, query and explore the data using SQL, Python and Excel to identify patterns, relationships, anomalies and useful signals.',
  },
  {
    number: '03',
    title: 'DELIVER',
    description:
      'Turn the analysis into dashboards, visualizations and clear insights that are easy for people to understand and act on.',
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-20%] top-[15%] h-[600px] w-[600px] rounded-full bg-emerald-400/[0.035] blur-[160px]" />

        <div className="absolute right-[-15%] top-[55%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.025] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '90px 90px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* =========================================================
            TOP LABEL
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-between border-b border-white/[0.08] py-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

            <span className="font-mono-tech text-[9px] font-semibold uppercase tracking-[0.25em] text-emerald-400 sm:text-[10px]">
              02 // ABOUT
            </span>
          </div>

          <span className="hidden font-mono-tech text-[9px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
            KARTIKEY SINGH / DATA ANALYST
          </span>
        </motion.div>


        {/* =========================================================
            HUGE EDITORIAL TITLE
        ========================================================== */}
        <div className="relative py-20 sm:py-28 lg:py-36">

          <div className="pointer-events-none absolute right-0 top-0 select-none font-display text-[18rem] font-black leading-none tracking-[-0.1em] text-white/[0.018] sm:text-[25rem]">
            02
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease }}
            className="relative z-10 select-none font-display text-[clamp(5rem,16vw,15rem)] font-black leading-[0.72] tracking-[-0.085em]"
          >
            ABOUT
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative z-20 mt-5 flex items-center gap-4 sm:gap-7"
          >
            <span className="h-px w-12 bg-emerald-400 sm:w-24" />

            <span className="font-display text-[clamp(1.6rem,4vw,4rem)] font-medium tracking-[-0.045em] text-zinc-500">
              THE ANALYST
            </span>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="max-w-4xl text-base font-light leading-8 text-zinc-400 sm:text-lg lg:col-span-8"
            >
              I am a Data Analyst focused on turning raw information into
              clear, useful insights. My work combines SQL, Python, Excel,
              Power BI and Tableau to understand data, find meaningful patterns
              and communicate what those patterns actually mean.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="lg:col-span-4 lg:text-right"
            >
              <div className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                BASED IN
              </div>

              <div className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                LUCKNOW, INDIA
              </div>
            </motion.div>

          </div>
        </div>


        {/* =========================================================
            PROFILE / IMAGE
        ========================================================== */}
        <div className="grid grid-cols-1 gap-14 pb-24 lg:grid-cols-12 lg:gap-20 lg:pb-36">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-[600px]">

              <div className="pointer-events-none absolute -left-4 -top-12 select-none font-display text-[10rem] font-black leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[14rem]">
                02
              </div>

              {/* Image atmosphere */}
              <div className="absolute inset-x-12 bottom-0 h-[60%] rounded-full bg-emerald-400/[0.08] blur-[100px]" />

              <div className="relative overflow-hidden">

                <img
                  src={characterImages.analyze}
                  alt="Kartikey Singh — Data Analyst"
                  referrerPolicy="no-referrer"
                  className="relative z-10 mx-auto block max-h-[720px] w-full object-contain object-top transition-transform duration-1000 hover:scale-[1.02]"
                />

                {/* Bottom cinematic fade */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

                {/* Vertical label */}
                <div className="absolute left-2 top-8 z-30 -rotate-90 origin-left font-mono-tech text-[8px] uppercase tracking-[0.28em] text-zinc-600">
                  KARTIKEY / PROFILE
                </div>

                {/* Image metadata */}
                <div className="absolute bottom-5 left-5 right-5 z-30 flex items-end justify-between">

                  <div>
                    <div className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                      ROLE
                    </div>

                    <div className="mt-1 font-display text-sm font-semibold text-white">
                      DATA ANALYST
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                      LOCATION
                    </div>

                    <div className="mt-1 font-mono-tech text-[9px] text-emerald-400">
                      LUCKNOW / IN
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3">
                <span className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                  HUMAN + DATA
                </span>

                <span className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                  2026
                </span>
              </div>

            </div>
          </motion.div>


          {/* STORY */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="flex flex-col justify-center lg:col-span-7"
          >

            <div className="mb-8 flex items-center gap-3">
              <Terminal className="h-4 w-4 text-emerald-400" />

              <span className="font-mono-tech text-[9px] uppercase tracking-[0.22em] text-zinc-500">
                ANALYST_PROFILE.md
              </span>

              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>

            <h3 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.055em]">
              DATA IS
              <span className="text-zinc-600"> EVERYWHERE.</span>
              <br />
              <span className="text-white">CLARITY IS</span>
              <br />
              <span className="text-emerald-400">THE DIFFERENCE.</span>
            </h3>

            <div className="mt-9 max-w-2xl space-y-5 text-sm font-light leading-7 text-zinc-400 sm:text-[15px]">

              <p>
                My approach to analytics starts with understanding the
                question before touching the data. I focus on writing clean
                queries, validating information and exploring datasets
                carefully before drawing conclusions.
              </p>

              <p>
                From SQL analysis and Python-based exploration to Power BI and
                Tableau dashboards, I aim to make analytical work practical,
                visual and easy to understand.
              </p>

            </div>


            {/* TOOLBOX */}
            <div className="mt-10 border-t border-white/[0.08] pt-6">

              <div className="mb-5 font-mono-tech text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                CORE TOOLBOX
              </div>

              <div className="flex max-w-3xl flex-wrap gap-x-6 gap-y-4">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04,
                      ease,
                    }}
                    className="font-mono-tech text-[10px] uppercase tracking-[0.08em] text-zinc-500 transition-colors hover:text-emerald-300"
                  >
                    <span className="mr-2 text-emerald-400/60">+</span>
                    {tool}
                  </motion.span>
                ))}
              </div>

            </div>


            {/* SCROLL */}
            <div className="mt-12 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] transition-colors hover:border-emerald-400/40">
                <ArrowDownRight className="h-4 w-4 text-emerald-400" />
              </div>

              <span className="font-mono-tech text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                HOW I WORK
              </span>

            </div>

          </motion.div>
        </div>


        {/* =========================================================
            PROCESS
        ========================================================== */}
        <div className="border-t border-white/[0.08] py-24 sm:py-32 lg:py-40">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>

              <div className="font-mono-tech text-[9px] uppercase tracking-[0.22em] text-emerald-400">
                03 / PROCESS
              </div>

              <h3 className="mt-3 font-display text-[clamp(2.5rem,6vw,6rem)] font-black leading-[0.85] tracking-[-0.06em]">
                HOW I
                <br />
                WORK
              </h3>

            </div>

            <span className="font-mono-tech text-[9px] uppercase tracking-[0.16em] text-zinc-600">
              QUESTION → DATA → INSIGHT
            </span>
          </motion.div>


          {/* PROCESS ROWS */}
          <div className="border-t border-white/[0.08]">

            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease,
                }}
                className="group border-b border-white/[0.08] py-10 sm:py-14"
              >

                <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-center lg:gap-8">

                  {/* NUMBER */}
                  <div className="lg:col-span-2">

                    <span className="font-mono-tech text-6xl font-black leading-none tracking-[-0.08em] text-white/[0.12] transition-colors duration-500 group-hover:text-emerald-400/70 sm:text-7xl">
                      {item.number}
                    </span>

                  </div>


                  {/* TITLE */}
                  <div className="lg:col-span-4">

                    <h4 className="font-display text-3xl font-bold tracking-[-0.045em] text-zinc-200 transition-colors duration-300 group-hover:text-white sm:text-4xl lg:text-5xl">
                      {item.title}
                    </h4>

                  </div>


                  {/* DESCRIPTION */}
                  <div className="lg:col-span-5">

                    <p className="max-w-xl text-sm font-light leading-7 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400 sm:text-[15px]">
                      {item.description}
                    </p>

                  </div>


                  {/* ARROW */}
                  <div className="hidden justify-end lg:col-span-1 lg:flex">

                    <motion.div
                      whileHover={{ x: 4, y: -4 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] text-zinc-600 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 group-hover:text-emerald-400"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>


        {/* =========================================================
            FINAL STATEMENT
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-32 lg:py-40"
        >

          <div className="pointer-events-none absolute right-[-5%] top-[10%] h-[300px] w-[300px] rounded-full bg-emerald-400/[0.05] blur-[120px]" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-9">

              <div className="font-mono-tech text-[9px] uppercase tracking-[0.22em] text-emerald-400">
                THE PURPOSE
              </div>

              <h3 className="mt-5 font-display text-[clamp(3rem,7vw,8rem)] font-black leading-[0.82] tracking-[-0.075em]">
                MAKE DATA
                <br />
                <span className="text-zinc-600">
                  MAKE SENSE.
                </span>
              </h3>

            </div>

            <div className="lg:col-span-3 lg:text-right">

              <p className="text-sm font-light leading-7 text-zinc-500">
                From raw records to meaningful insights, every analysis should
                make the next decision clearer.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-mono-tech text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                <span>KEEP SCROLLING</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};