import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { characterImages } from '../assets/characterAssets';
import { ArrowUpRight, ChevronUp } from 'lucide-react';

interface CharacterCompanionProps {
  activeSection: string;
}

export const CharacterCompanion: React.FC<CharacterCompanionProps> = ({
  activeSection,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBubble, setShowBubble] = useState(true);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.round((window.scrollY / totalHeight) * 100)
        );

        setScrollProgress(progress);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * Section-specific commentary.
   * The wording is kept from the original component.
   */
  const sectionCommentary: Record<
    string,
    {
      quote: string;
      role: string;
      img: string;
    }
  > = {
    hero: {
      quote:
        'Welcome. I turn messy data into clear dashboards and executive insights.',
      role: 'DATA ANALYST',
      img: characterImages.hero,
    },

    about: {
      quote:
        'I follow a structured methodology: Discover → Analyze → Communicate.',
      role: 'METHODOLOGY',
      img: characterImages.analyze,
    },

    skills: {
      quote:
        'Click any skill to inspect actual SQL syntax and analytical implementations.',
      role: 'TECHNICAL STACK',
      img: characterImages.analyze,
    },

    projects: {
      quote:
        'These 5 projects come from my official GitHub. Check out the Customer Analytics repo!',
      role: 'PROJECT SHOWCASE',
      img: characterImages.present,
    },

    experience: {
      quote:
        'Practical internships at Oasis Infobyte and Hex Softwares solving data tasks.',
      role: 'WORK HISTORY',
      img: characterImages.connect,
    },

    contact: {
      quote:
        "Let's turn your raw data into actionable business intelligence.",
      role: 'READY TO CONNECT',
      img: characterImages.connect,
    },
  };

  const currentInfo =
    sectionCommentary[activeSection] || sectionCommentary.hero;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <aside
      aria-label="Character Companion"
      className="pointer-events-none fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
    >
      {/* =========================================================
          CONTEXTUAL MESSAGE
      ========================================================== */}

      <AnimatePresence mode="wait">
        {showBubble && !minimized && scrollProgress > 8 && (
          <motion.div
            key={activeSection}
            initial={{
              opacity: 0,
              y: 12,
              x: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              y: 8,
              x: 8,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-auto mb-3 ml-auto w-[260px] max-w-[calc(100vw-40px)] sm:w-[300px]"
          >
            <div className="relative border border-white/[0.09] bg-[#07090c]/92 p-4 shadow-2xl backdrop-blur-xl">

              {/* Top editorial line */}
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.07] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.8)]" />

                  <span className="font-mono-tech text-[7px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                    {currentInfo.role}
                  </span>
                </div>

                <button
                  onClick={() => setShowBubble(false)}
                  className="cursor-pointer font-mono-tech text-[9px] text-zinc-700 transition-colors hover:text-zinc-300"
                  title="Dismiss note"
                  aria-label="Dismiss note"
                >
                  ×
                </button>
              </div>

              {/* Message */}
              <p className="font-display text-[13px] font-medium leading-5 tracking-[-0.01em] text-zinc-300">
                "{currentInfo.quote}"
              </p>

              {/* Small section indicator */}
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono-tech text-[7px] uppercase tracking-[0.18em] text-zinc-700">
                  KARTIKEY / {activeSection}
                </span>

                <span className="font-mono-tech text-[7px] text-emerald-400/70">
                  {scrollProgress}%
                </span>
              </div>

              {/* Small corner accent */}
              <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-emerald-400/50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          MINIMAL FLOATING COMPANION
      ========================================================== */}

      <motion.div
        layout
        className="pointer-events-auto ml-auto flex w-fit items-center gap-3"
      >
        {/* Avatar */}
        <motion.button
          layout
          onClick={() => {
            setShowBubble(true);
            setMinimized(false);
          }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative h-12 w-12 cursor-pointer overflow-hidden border border-white/[0.15] bg-[#080a0e] shadow-2xl sm:h-14 sm:w-14"
          title="Show Kartikey's contextual note"
          aria-label="Show contextual note"
        >
          {/* Subtle glow */}
          <span className="pointer-events-none absolute -inset-3 bg-emerald-400/[0.07] blur-xl transition-opacity duration-300 group-hover:opacity-100" />

          <img
            src={currentInfo.img}
            alt="Kartikey Singh"
            referrerPolicy="no-referrer"
            className="relative z-10 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
          />

          {/* Cinematic gradient */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Status dot */}
          <span className="absolute bottom-1 right-1 z-30 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
        </motion.button>

        {/* =======================================================
            SECTION / PROGRESS
        ======================================================== */}

        <AnimatePresence>
          {!minimized && (
            <motion.div
              initial={{
                opacity: 0,
                width: 0,
              }}
              animate={{
                opacity: 1,
                width: 'auto',
              }}
              exit={{
                opacity: 0,
                width: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden overflow-hidden sm:block"
            >
              <div className="min-w-[105px]">
                <div className="mb-1 flex items-center justify-between gap-5">
                  <span className="font-mono-tech text-[8px] font-semibold uppercase tracking-[0.15em] text-zinc-300">
                    {activeSection}
                  </span>

                  <span className="font-mono-tech text-[7px] text-zinc-600">
                    {scrollProgress}%
                  </span>
                </div>

                {/* Progress line */}
                <div className="h-px w-full overflow-hidden bg-white/[0.09]">
                  <motion.div
                    className="h-full bg-emerald-400"
                    animate={{
                      width: `${scrollProgress}%`,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: 'easeOut',
                    }}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="font-mono-tech text-[6px] uppercase tracking-[0.18em] text-zinc-700">
                    PORTFOLIO
                  </span>

                  <button
                    onClick={() => setMinimized(true)}
                    className="cursor-pointer font-mono-tech text-[7px] text-zinc-700 transition-colors hover:text-zinc-400"
                    title="Minimize companion"
                    aria-label="Minimize companion"
                  >
                    —
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =======================================================
            SCROLL TOP
        ======================================================== */}

        <AnimatePresence>
          {scrollProgress > 15 && (
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={scrollToTop}
              className="flex h-9 w-9 cursor-pointer items-center justify-center border border-white/[0.1] bg-[#080a0e]/90 text-zinc-500 shadow-xl backdrop-blur-xl transition-colors hover:border-emerald-400/30 hover:text-emerald-400"
              title="Back to top"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* =======================================================
            REOPEN WHEN MINIMIZED
        ======================================================== */}

        {minimized && (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              y: -2,
            }}
            onClick={() => setMinimized(false)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center border border-white/[0.1] bg-[#080a0e]/90 text-zinc-500 shadow-xl backdrop-blur-xl transition-colors hover:border-emerald-400/30 hover:text-emerald-400"
            title="Expand companion"
            aria-label="Expand companion"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.button>
        )}
      </motion.div>
    </aside>
  );
};
