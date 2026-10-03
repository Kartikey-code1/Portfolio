import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Terminal,
} from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { SkillItem } from '../types';

const ease = [0.22, 1, 0.36, 1] as const;

const categories = [
  'All',
  'Core Tools',
  'BI & Analytics',
  'Data Methodologies',
];

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(skillsData[0]);
  const [copiedCode, setCopiedCode] = useState(false);

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter(
          (skill) => skill.category === selectedCategory
        );

  const handleCopyCode = async () => {
    if (!activeSkill.highlightSyntax) return;

    try {
      await navigator.clipboard.writeText(
        activeSkill.highlightSyntax
      );

      setCopiedCode(true);

      setTimeout(() => {
        setCopiedCode(false);
      }, 2000);
    } catch {
      setCopiedCode(false);
    }
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute right-[-15%] top-[8%] h-[600px] w-[600px] rounded-full bg-emerald-400/[0.035] blur-[170px]" />

        <div className="absolute bottom-[-10%] left-[-15%] h-[550px] w-[550px] rounded-full bg-cyan-400/[0.02] blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '90px 90px',
          }}
        />

      </div>


      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* =========================================================
            TOP BAR
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-between border-b border-white/[0.08] py-5"
        >

          <div className="flex items-center gap-3">

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />

            <span className="font-mono-tech text-[9px] font-semibold uppercase tracking-[0.25em] text-emerald-400 sm:text-[10px]">
              04 // SKILLS
            </span>

          </div>

          <span className="hidden font-mono-tech text-[9px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
            TOOLS / METHODS / ANALYTICS
          </span>

        </motion.div>


        {/* =========================================================
            GIANT TITLE
        ========================================================== */}
        <div className="relative py-20 sm:py-28 lg:py-36">

          <div className="pointer-events-none absolute right-0 top-0 select-none font-display text-[18rem] font-black leading-none tracking-[-0.1em] text-white/[0.018] sm:text-[25rem]">
            04
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease }}
            className="relative z-10 select-none font-display text-[clamp(4.5rem,16vw,15rem)] font-black leading-[0.72] tracking-[-0.085em]"
          >
            SKILLS
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease,
            }}
            className="relative z-20 mt-5 flex items-center gap-4 sm:gap-7"
          >

            <span className="h-px w-12 bg-emerald-400 sm:w-24" />

            <span className="font-display text-[clamp(1.5rem,4vw,4rem)] font-medium tracking-[-0.045em] text-zinc-500">
              DATA-FIRST TOOLSET
            </span>

          </motion.div>


          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease,
              }}
              className="max-w-4xl text-base font-light leading-8 text-zinc-400 sm:text-lg lg:col-span-8"
            >
              The tools I use to query, clean, explore, visualize and
              communicate data — turning raw records into useful insights.
            </motion.p>

            <div className="lg:col-span-4 lg:text-right">

              <div className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                PRIMARY STACK
              </div>

              <div className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                SQL · PYTHON · POWER BI
              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            CATEGORY NAV
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="border-y border-white/[0.08] py-5"
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <span className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-zinc-600">
              EXPLORE CAPABILITIES
            </span>

            <div className="flex flex-wrap gap-x-6 gap-y-3">

              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`group relative cursor-pointer pb-1 font-mono-tech text-[9px] uppercase tracking-[0.12em] transition-colors ${
                      active
                        ? 'text-emerald-400'
                        : 'text-zinc-600 hover:text-white'
                    }`}
                  >

                    {category}

                    <span
                      className={`absolute bottom-0 left-0 h-px bg-emerald-400 transition-all duration-300 ${
                        active
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />

                  </button>
                );
              })}

            </div>

          </div>

        </motion.div>


        {/* =========================================================
            MAIN SKILL AREA
        ========================================================== */}
        <div className="grid grid-cols-1 gap-16 py-20 sm:py-28 lg:grid-cols-12 lg:gap-20 lg:py-36">

          {/* =======================================================
              LEFT — BIG SKILL LIST
          ======================================================== */}
          <div className="lg:col-span-7">

            <div className="mb-7 flex items-center justify-between">

              <span className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                TECHNICAL CAPABILITIES
              </span>

              <span className="font-mono-tech text-[9px] text-zinc-700">
                {filteredSkills.length
                  .toString()
                  .padStart(2, '0')}{' '}
                ITEMS
              </span>

            </div>


            <div className="border-t border-white/[0.08]">

              <AnimatePresence mode="popLayout">

                {filteredSkills.map((skill, index) => {

                  const isActive =
                    activeSkill.name === skill.name;

                  return (
                    <motion.button
                      key={skill.name}
                      layout
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -15,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.035,
                        ease,
                      }}
                      onClick={() =>
                        setActiveSkill(skill)
                      }
                      className="group relative block w-full cursor-pointer border-b border-white/[0.08] text-left"
                    >

                      <div className="grid grid-cols-12 items-center gap-3 py-7 sm:py-9">

                        {/* NUMBER */}
                        <div className="col-span-2 sm:col-span-1">

                          <span
                            className={`font-mono-tech text-[10px] transition-colors ${
                              isActive
                                ? 'text-emerald-400'
                                : 'text-zinc-700 group-hover:text-zinc-400'
                            }`}
                          >
                            {(index + 1)
                              .toString()
                              .padStart(2, '0')}
                          </span>

                        </div>


                        {/* SKILL NAME */}
                        <div className="col-span-8 sm:col-span-7">

                          <h3
                            className={`font-display text-2xl font-bold tracking-[-0.045em] transition-all duration-300 sm:text-3xl lg:text-4xl ${
                              isActive
                                ? 'translate-x-1 text-white'
                                : 'text-zinc-400 group-hover:translate-x-1 group-hover:text-white'
                            }`}
                          >
                            {skill.name}
                          </h3>

                          <div className="mt-2 flex items-center gap-2">

                            <span
                              className={`font-mono-tech text-[8px] uppercase tracking-[0.12em] ${
                                isActive
                                  ? 'text-emerald-400'
                                  : 'text-zinc-700'
                              }`}
                            >
                              {skill.category}
                            </span>

                            <span className="text-zinc-800">
                              /
                            </span>

                            <span className="font-mono-tech text-[8px] uppercase tracking-[0.1em] text-zinc-700">
                              {skill.level}
                            </span>

                          </div>

                        </div>


                        {/* ARROW */}
                        <div className="col-span-2 flex justify-end">

                          <motion.div
                            animate={{
                              x: isActive ? 4 : 0,
                              y: isActive ? -4 : 0,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                              isActive
                                ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-400'
                                : 'border-white/[0.08] text-zinc-700 group-hover:border-white/20 group-hover:text-zinc-300'
                            }`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </motion.div>

                        </div>

                      </div>


                      {/* ACTIVE LINE */}
                      <motion.div
                        initial={false}
                        animate={{
                          scaleX: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease,
                        }}
                        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-emerald-400 via-emerald-400/40 to-transparent"
                      />

                    </motion.button>
                  );
                })}

              </AnimatePresence>

            </div>

          </div>


          {/* =======================================================
              RIGHT — SELECTED SKILL
          ======================================================== */}
          <div className="lg:col-span-5">

            <div className="lg:sticky lg:top-24">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeSkill.name}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                >

                  {/* HEADER */}
                  <div className="border-t border-white/[0.08] pt-7">

                    <div className="flex items-start justify-between gap-5">

                      <div>

                        <div className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-emerald-400">
                          SELECTED CAPABILITY
                        </div>

                        <h3 className="mt-4 font-display text-4xl font-bold leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl">
                          {activeSkill.name}
                        </h3>

                        <div className="mt-4 flex items-center gap-2">

                          <span className="font-mono-tech text-[8px] uppercase tracking-[0.1em] text-zinc-600">
                            {activeSkill.category}
                          </span>

                          <span className="text-zinc-800">
                            /
                          </span>

                          <span className="font-mono-tech text-[8px] uppercase tracking-[0.1em] text-emerald-400">
                            {activeSkill.level}
                          </span>

                        </div>

                      </div>


                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.08] sm:flex">
                        <Terminal className="h-4 w-4 text-emerald-400" />
                      </div>

                    </div>

                  </div>


                  {/* DESCRIPTION */}
                  <p className="mt-8 max-w-xl text-sm font-light leading-7 text-zinc-400 sm:text-[15px]">
                    {activeSkill.description}
                  </p>


                  {/* TAGS */}
                  <div className="mt-9">

                    <div className="mb-4 font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                      ASSOCIATED CAPABILITIES
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3 border-y border-white/[0.08] py-5">

                      {activeSkill.tags.map(
                        (tag, index) => (
                          <motion.span
                            key={tag}
                            initial={{
                              opacity: 0,
                              y: 6,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.025,
                              ease,
                            }}
                            className="font-mono-tech text-[9px] uppercase tracking-[0.06em] text-zinc-500 transition-colors hover:text-emerald-300"
                          >
                            <span className="mr-1.5 text-emerald-400/50">
                              +
                            </span>

                            {tag}
                          </motion.span>
                        )
                      )}

                    </div>

                  </div>


                  {/* =================================================
                      CODE
                  ================================================== */}
                  {activeSkill.highlightSyntax && (
                    <div className="mt-9">

                      <div className="mb-3 flex items-center justify-between">

                        <div className="flex items-center gap-2">

                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                          <span className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                            PRACTICAL SYNTAX
                          </span>

                        </div>


                        <button
                          onClick={handleCopyCode}
                          className="flex cursor-pointer items-center gap-1.5 font-mono-tech text-[8px] uppercase tracking-[0.1em] text-zinc-600 transition-colors hover:text-emerald-400"
                        >

                          {copiedCode ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span className="text-emerald-400">
                                COPIED
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>COPY</span>
                            </>
                          )}

                        </button>

                      </div>


                      <div className="relative overflow-hidden border border-white/[0.08] bg-[#020202]">

                        {/* CODE HEADER */}
                        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">

                          <div className="flex gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                          </div>

                          <span className="font-mono-tech text-[7px] uppercase tracking-[0.15em] text-zinc-700">
                            analysis.syntax
                          </span>

                        </div>


                        <pre className="max-h-60 overflow-auto p-5 font-mono-tech text-[10px] leading-6 text-emerald-400/75 sm:text-[11px]">
                          <code>
                            {activeSkill.highlightSyntax}
                          </code>
                        </pre>

                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/70 to-transparent" />

                      </div>

                    </div>
                  )}


                  {/* VERIFICATION */}
                  <div className="mt-8 flex items-start gap-3 border-t border-white/[0.08] pt-5">

                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />

                    <p className="font-mono-tech text-[8px] uppercase leading-5 tracking-[0.08em] text-zinc-600">
                      Practical proficiency demonstrated through
                      analytical projects and implementation.
                    </p>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>


        {/* =========================================================
            BIG SKILL MARQUEE
        ========================================================== */}
        <div className="overflow-hidden border-y border-white/[0.08] py-8">

          <motion.div
            animate={{
              x: ['0%', '-25%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex w-max items-center gap-8 whitespace-nowrap"
          >

            {[...skillsData, ...skillsData].map(
              (skill, index) => (
                <React.Fragment
                  key={`${skill.name}-${index}`}
                >

                  <span className="font-display text-4xl font-black uppercase tracking-[-0.04em] text-white/[0.08] sm:text-6xl lg:text-7xl">
                    {skill.name}
                  </span>

                  <span className="text-emerald-400/40">
                    +
                  </span>

                </React.Fragment>
              )
            )}

          </motion.div>

        </div>


        {/* =========================================================
            FINAL STATEMENT
        ========================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="relative py-28 sm:py-36 lg:py-44"
        >

          <div className="pointer-events-none absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-emerald-400/[0.05] blur-[100px]" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-9">

              <div className="font-mono-tech text-[9px] uppercase tracking-[0.22em] text-emerald-400">
                THE APPROACH
              </div>

              <h3 className="mt-5 font-display text-[clamp(3rem,7vw,8rem)] font-black leading-[0.82] tracking-[-0.075em]">
                KNOW THE
                <br />
                <span className="text-zinc-600">
                  TOOL.
                </span>{' '}
                <span className="text-white">
                  UNDERSTAND
                </span>
                <br />
                <span className="text-emerald-400">
                  THE DATA.
                </span>
              </h3>

            </div>


            <div className="lg:col-span-3 lg:text-right">

              <p className="text-sm font-light leading-7 text-zinc-500">
                The goal isn't to use every tool. It's to use the right
                tool to answer the right question.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-mono-tech text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                <span>DATA → INSIGHT</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};