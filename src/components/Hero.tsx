import React from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Braces,
  Database,
  Github,
  Linkedin,
  Terminal,
} from 'lucide-react';
import { SpeakingCharacterStage } from './SpeakingCharacterStage';

interface HeroProps {
  onExploreClick: () => void;
  onConnectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onConnectClick,
}) => {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* =========================================================
          CINEMATIC BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[42%]
            top-[35%]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-emerald-400/[0.045]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            right-[-15%]
            top-[15%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-400/[0.025]
            blur-[160px]
          "
        />

        {/* technical grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-size:100px_100px]
            [background-image:linear-gradient(to_right,rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,1)_1px,transparent_1px)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_45%,transparent_15%,#050505_88%)]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-40
            bg-gradient-to-t
            from-[#050505]
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1700px]
          items-center
          px-5
          pb-20
          pt-28
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            lg:grid-cols-12
            lg:gap-2
          "
        >
          {/* =====================================================
              LEFT — NAME + TECH SYSTEM
          ====================================================== */}

          <div
            className="
              relative
              z-20
              lg:col-span-7
            "
          >
            {/* =================================================
                TECHNICAL HUD BEHIND NAME
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -left-8
                -top-16
                hidden
                h-[470px]
                w-[760px]
                lg:block
              "
            >
              {/* large technical grid */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.055]
                  [background-size:38px_38px]
                  [background-image:linear-gradient(to_right,rgba(52,211,153,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(52,211,153,.7)_1px,transparent_1px)]
                "
                style={{
                  maskImage:
                    'linear-gradient(to bottom, transparent, black 18%, black 72%, transparent)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, transparent, black 18%, black 72%, transparent)',
                }}
              />

              {/* horizontal scanning line */}
              <motion.div
                animate={{
                  y: [30, 400, 30],
                  opacity: [0, 0.35, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  left-0
                  right-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-400
                  to-transparent
                "
              />

              {/* vertical accent */}
              <div
                className="
                  absolute
                  left-[28%]
                  top-0
                  h-full
                  w-px
                  bg-gradient-to-b
                  from-transparent
                  via-emerald-400/[0.12]
                  to-transparent
                "
              />

              {/* corner frame */}
              <div className="absolute left-5 top-12 h-20 w-20 border-l border-t border-emerald-400/20" />

              <div className="absolute bottom-8 right-12 h-16 w-16 border-b border-r border-emerald-400/15" />

              {/* node */}
              <motion.div
                animate={{
                  opacity: [0.25, 1, 0.25],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-[28%]
                  top-[31%]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_15px_rgba(52,211,153,.8)]
                "
              />

              {/* connection lines */}
              <div className="absolute left-[28%] top-[31%] h-px w-32 bg-gradient-to-r from-emerald-400/40 to-transparent" />

              <div className="absolute left-[28%] top-[31%] h-20 w-px bg-gradient-to-b from-emerald-400/25 to-transparent" />

              {/* tiny data labels */}
              <div className="absolute left-[35%] top-[24%] font-mono-tech text-[6px] tracking-[0.3em] text-emerald-400/30">
                DATA_NODE_01
              </div>

              <div className="absolute left-[8%] bottom-[18%] font-mono-tech text-[6px] tracking-[0.28em] text-zinc-700">
                26.8467° N / 80.9462° E
              </div>

              <div className="absolute right-[12%] top-[18%] font-mono-tech text-[6px] tracking-[0.28em] text-zinc-700">
                SYSTEM / ANALYTICS
              </div>
            </div>

            {/* =================================================
                INTRO
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                relative
                mb-6
                flex
                items-center
                gap-3
                sm:mb-8
              "
            >
              <span
                className="
                  font-mono-tech
                  text-[8px]
                  uppercase
                  tracking-[0.35em]
                  text-emerald-400
                "
              >
                HELLO, I'M
              </span>

              <span className="h-px w-12 bg-emerald-400/40" />

              <span
                className="
                  font-mono-tech
                  text-[8px]
                  tracking-[0.25em]
                  text-zinc-700
                "
              >
                
              </span>
            </motion.div>

            {/* =================================================
                SMALL TECH LABEL ABOVE NAME
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="
                relative
                mb-3
                hidden
                items-center
                gap-3
                lg:flex
              "
            >
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                <span className="h-1 w-1 rounded-full bg-emerald-400/40" />
                <span className="h-1 w-1 rounded-full bg-emerald-400/15" />
              </div>

              <span className="font-mono-tech text-[6px] uppercase tracking-[0.4em] text-zinc-700">
                ANALYTICS_INTERFACE // ONLINE
              </span>

              <span className="h-px w-16 bg-white/[0.06]" />
            </motion.div>

            {/* =================================================
                KARTIKEY
            ================================================== */}

            <div className="relative">
              {/* ghost code behind name */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-2
                  top-[-35px]
                  select-none
                  font-mono-tech
                  text-[7px]
                  leading-4
                  tracking-[0.18em]
                  text-emerald-400/[0.09]
                "
              >
                {'<DATA_ANALYST>'}
                <br />
                {'SELECT * FROM insights'}
                <br />
                {'WHERE signal = TRUE;'}
              </div>

              <motion.h1
                initial={{
                  opacity: 0,
                  x: -45,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  relative
                  whitespace-nowrap
                  font-display
                  text-[17vw]
                  font-black
                  leading-[0.68]
                  tracking-[-0.085em]
                  text-white
                  sm:text-[15vw]
                  lg:text-[9.1vw]
                "
              >
                KARTIKEY
              </motion.h1>

              {/* tiny line attached to name */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 70 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="
                  absolute
                  bottom-[-12px]
                  left-[2%]
                  h-px
                  bg-gradient-to-r
                  from-emerald-400
                  to-transparent
                "
              />
            </div>

            {/* =================================================
                SINGH
            ================================================== */}

            <div className="relative">
              <motion.h1
                initial={{
                  opacity: 0,
                  x: -45,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  relative
                  ml-[6vw]
                  mt-2
                  whitespace-nowrap
                  font-display
                  text-[17vw]
                  font-black
                  leading-[0.68]
                  tracking-[-0.085em]
                  text-transparent
                  [-webkit-text-stroke:1px_rgba(255,255,255,0.62)]
                  sm:text-[15vw]
                  lg:ml-[4vw]
                  lg:text-[9.1vw]
                "
              >
                SINGH
              </motion.h1>

              {/* tech index beside SINGH */}
              <div
                className="
                  absolute
                  right-[2%]
                  top-1/2
                  hidden
                  -translate-y-1/2
                  items-center
                  gap-2
                  lg:flex
                "
              >
                <span className="font-mono-tech text-[6px] tracking-[0.25em] text-zinc-700">
                  ID / KS-001
                </span>

                <span className="h-8 w-px bg-emerald-400/25" />

                <Activity className="h-3 w-3 text-emerald-400/50" />
              </div>
            </div>

            {/* =================================================
                FLOATING TECH CHIPS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              {[
                { label: 'SQL', icon: Database },
                { label: 'PYTHON', icon: Braces },
                { label: 'POWER BI', icon: BarChart3 },
                { label: 'EXCEL', icon: Terminal },
              ].map(({ label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex
                    items-center
                    gap-2
                    border
                    border-white/[0.07]
                    bg-white/[0.015]
                    px-3
                    py-2
                    backdrop-blur-sm
                  "
                >
                  <Icon
                    className={`h-3 w-3 ${
                      index === 0
                        ? 'text-emerald-400'
                        : 'text-zinc-600'
                    }`}
                  />

                  <span className="font-mono-tech text-[7px] uppercase tracking-[0.16em] text-zinc-500">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* =================================================
                ROLE + DESCRIPTION
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
              className="
                mt-7
                flex
                flex-col
                gap-5
                sm:mt-9
                sm:flex-row
                sm:items-center
                sm:gap-7
              "
            >
              <div className="shrink-0">
                <div
                  className="
                    font-display
                    text-2xl
                    font-bold
                    uppercase
                    tracking-[-0.04em]
                    text-emerald-400
                    sm:text-3xl
                    lg:text-[2rem]
                  "
                >
                  Data Analyst
                </div>

                <div
                  className="
                    mt-2
                    font-mono-tech
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-zinc-600
                    sm:text-[8px]
                  "
                >
                  SQL / PYTHON / POWER BI / EXCEL / TABLEAU
                </div>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <p
                className="
                  max-w-[280px]
                  text-xs
                  leading-6
                  text-zinc-500
                  sm:text-sm
                "
              >
                Turning raw data into clear insights,
                meaningful dashboards and better decisions.
              </p>
            </motion.div>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
                sm:mt-10
              "
            >
              <button
                type="button"
                onClick={onExploreClick}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-emerald-400
                  px-5
                  py-3
                  font-mono-tech
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-black
                  transition-all
                  hover:bg-emerald-300
                  hover:shadow-[0_15px_50px_-15px_rgba(52,211,153,.75)]
                "
              >
                Explore Work

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </button>

              <button
                type="button"
                onClick={onConnectClick}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/[0.11]
                  bg-white/[0.02]
                  px-5
                  py-3
                  font-mono-tech
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-zinc-300
                  transition-all
                  hover:border-emerald-400/30
                  hover:text-white
                "
              >
                Let's Talk
              </button>

              <div className="ml-1 flex items-center gap-2">
                <a
                  href="https://github.com/Kartikey-code1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    text-zinc-600
                    transition-all
                    hover:border-white/20
                    hover:text-white
                  "
                >
                  <Github className="h-3.5 w-3.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kartikey-singh-523848329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    text-zinc-600
                    transition-all
                    hover:border-white/20
                    hover:text-white
                  "
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — TALKING INTRODUCTION VIDEO
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10
              mt-12
              flex
              w-full
              items-center
              justify-center
              lg:col-span-5
              lg:mt-0
            "
          >
            {/* Large ghost DATA */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                select-none
                whitespace-nowrap
                font-display
                text-[25vw]
                font-black
                leading-none
                tracking-[-0.1em]
                text-white/[0.018]
                lg:text-[14vw]
              "
            >
              DATA
            </div>

            {/* Emerald atmospheric glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-emerald-400/[0.045]
                blur-[100px]
              "
            />

            {/* right side technical labels */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-2%]
                top-[23%]
                hidden
                flex-col
                gap-3
                lg:flex
              "
            >
              <span className="font-mono-tech text-[6px] tracking-[0.35em] text-zinc-700 [writing-mode:vertical-rl]">
                SQL // PYTHON // BI
              </span>

              <span className="h-20 w-px bg-gradient-to-b from-emerald-400/40 to-transparent" />
            </div>

            {/* actual video */}
            <div
              className="
                relative
                z-10
                w-full
                max-w-[500px]
              "
            >
              <SpeakingCharacterStage />
            </div>
          </motion.div>

          {/* Giant background number */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[-9%]
              left-[-1%]
              select-none
              font-display
              text-[25vw]
              font-black
              leading-none
              tracking-[-0.1em]
              text-white/[0.012]
              lg:text-[18vw]
            "
          >
            01
          </div>
        </div>

        {/* =======================================================
            BOTTOM EDITORIAL BAR
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="
            absolute
            bottom-5
            left-5
            right-5
            flex
            items-center
            justify-between
            border-t
            border-white/[0.06]
            pt-4
            sm:left-8
            sm:right-8
            lg:left-12
            lg:right-12
          "
        >
          <button
            type="button"
            onClick={onExploreClick}
            className="
              group
              flex
              items-center
              gap-3
              font-mono-tech
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-zinc-600
              transition-colors
              hover:text-emerald-400
            "
          >
            <ArrowDown
              className="
                h-3
                w-3
                text-emerald-400
                transition-transform
                group-hover:translate-y-1
              "
            />

            SCROLL TO EXPLORE
          </button>

          <div className="hidden items-center gap-3 sm:flex">
            <span
              className="
                font-mono-tech
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-zinc-700
              "
            >
              LUCKNOW / INDIA
            </span>

            <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          RIGHT SIDE INDEX
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          lg:block
        "
      >
        <div className="flex flex-col items-center gap-3">
          <span
            className="
              font-mono-tech
              text-[7px]
              tracking-[0.32em]
              text-zinc-700
              [writing-mode:vertical-rl]
            "
          >
            PERSONAL PORTFOLIO / 001
          </span>

          <div
            className="
              h-20
              w-px
              bg-gradient-to-b
              from-transparent
              via-emerald-400/35
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
};