import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Play,
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
  const playIntro = () => {
    window.dispatchEvent(new Event('kartikey-play-intro'));
  };

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
            left-[50%]
            top-[38%]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-emerald-400/[0.045]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            right-[-15%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/[0.025]
            blur-[150px]
          "
        />

        {/* Technical grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-size:100px_100px]
            [background-image:linear-gradient(to_right,rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,1)_1px,transparent_1px)]
          "
        />

        {/* Cinematic vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_45%,transparent_20%,#050505_88%)]
          "
        />

        {/* Bottom fade */}
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
              LEFT — NAME + CONTENT
          ====================================================== */}

          <div
            className="
              relative
              z-20
              lg:col-span-7
            "
          >
            {/* INTRO LABEL */}

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
                KARTIKEY SINGH
              </span>
            </motion.div>

            {/* =================================================
                KARTIKEY
            ================================================== */}

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

            {/* =================================================
                SINGH
            ================================================== */}

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

            {/* =================================================
                ROLE + PLAY INTRO + DESCRIPTION
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
                delay: 0.35,
              }}
              className="
                mt-9
                flex
                flex-col
                gap-5
                sm:mt-12
                sm:flex-row
                sm:items-center
                sm:gap-7
              "
            >
              {/* ROLE */}

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

                {/* PLAY INTRO — TECH STYLE */}

                <motion.button
                  type="button"
                  onClick={playIntro}
                  whileHover="hover"
                  whileTap={{ scale: 0.97 }}
                  initial="initial"
                  variants={{
                    initial: {
                      opacity: 1,
                    },
                    hover: {
                      opacity: 1,
                    },
                  }}
                  className="
                    group
                    relative
                    mt-4
                    flex
                    h-9
                    items-center
                    overflow-hidden
                    border
                    border-emerald-400/25
                    bg-emerald-400/[0.025]
                    px-3
                    transition-all
                    duration-300
                    hover:border-emerald-400/60
                    hover:bg-emerald-400/[0.07]
                    hover:shadow-[0_0_30px_-10px_rgba(52,211,153,.6)]
                  "
                >
                  {/* Left play block */}

                  <span
                    className="
                      relative
                      flex
                      h-full
                      w-8
                      items-center
                      justify-center
                      border-r
                      border-emerald-400/20
                      text-emerald-400
                    "
                  >
                    <Play
                      className="
                        h-3
                        w-3
                        fill-current
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    {/* tiny scanning line */}
                    <motion.span
                      variants={{
                        initial: {
                          opacity: 0,
                          y: 10,
                        },
                        hover: {
                          opacity: 1,
                          y: 0,
                        },
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-full
                        bg-emerald-400
                      "
                    />
                  </span>

                  {/* Text */}

                  <span
                    className="
                      px-3
                      font-mono-tech
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-zinc-300
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    PLAY INTRO
                  </span>

                  {/* Status dot */}

                  <span
                    className="
                      ml-1
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-400/60
                      shadow-[0_0_8px_rgba(52,211,153,.45)]
                      transition-all
                      group-hover:bg-emerald-300
                      group-hover:shadow-[0_0_12px_rgba(52,211,153,.8)]
                    "
                  />

                  {/* Hover scan */}

                  <motion.span
                    variants={{
                      initial: {
                        left: '-100%',
                      },
                      hover: {
                        left: '100%',
                      },
                    }}
                    transition={{
                      duration: 0.7,
                      ease: 'easeInOut',
                    }}
                    className="
                      pointer-events-none
                      absolute
                      top-0
                      h-px
                      w-16
                      bg-gradient-to-r
                      from-transparent
                      via-emerald-400
                      to-transparent
                    "
                  />
                </motion.button>
              </div>

              {/* Divider */}

              <div className="hidden h-16 w-px bg-white/10 sm:block" />

              {/* Description */}

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
                delay: 0.48,
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
              {/* Explore */}

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

              {/* Let's Talk */}

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

              {/* Socials */}

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

            {/* Actual video */}

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