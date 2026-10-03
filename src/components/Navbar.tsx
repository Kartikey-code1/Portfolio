import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Menu,
  X,
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'contact', label: 'CONTACT' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (!element) return;

    const yOffset = -90;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* =========================================================
          DESKTOP NAVBAR
          LEFT: BRAND
          CENTER: NAV LINKS
          RIGHT: SOCIAL + CONNECT
      ========================================================== */}
      <header
        id="main-navbar"
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-500
          ${
            isScrolled
              ? 'py-3'
              : 'py-5'
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1600px]
            items-center
            px-5
            sm:px-8
            lg:px-10
          "
        >

          {/* =====================================================
              BRAND — LEFT
          ====================================================== */}
          <motion.button
            id="nav-brand-btn"
            onClick={() => scrollToSection('hero')}
            whileHover={{ x: 2 }}
            transition={{
              duration: 0.25,
              ease,
            }}
            className="
              group
              flex
              shrink-0
              cursor-pointer
              items-center
              gap-3
              text-left
              focus:outline-none
            "
          >
            {/* KS LOGO */}
            <div
              className={`
                relative
                flex
                shrink-0
                items-center
                justify-center
                border
                transition-all
                duration-500
                ${
                  isScrolled
                    ? 'h-8 w-8 border-white/[0.14] bg-white/[0.04]'
                    : 'h-9 w-9 border-emerald-400/30 bg-emerald-400/[0.05]'
                }
              `}
            >
              <span
                className="
                  font-mono-tech
                  text-[9px]
                  font-bold
                  tracking-[0.08em]
                  text-emerald-400
                "
              >
                KS
              </span>

              <span
                className="
                  absolute
                  -bottom-px
                  -right-px
                  h-1.5
                  w-1.5
                  bg-emerald-400
                "
              />
            </div>

            {/* NAME */}
            <div className="hidden sm:block">
              <div
                className="
                  font-display
                  text-sm
                  font-bold
                  tracking-[-0.02em]
                  text-white
                  transition-colors
                  group-hover:text-emerald-300
                "
              >
                KARTIKEY SINGH
              </div>

              <div className="mt-0.5 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />

                <span
                  className="
                    font-mono-tech
                    text-[7px]
                    uppercase
                    tracking-[0.18em]
                    text-zinc-600
                  "
                >
                  DATA ANALYST
                </span>
              </div>
            </div>
          </motion.button>


          {/* =====================================================
              NAVIGATION — DIRECTLY BESIDE NAME
              NO absolute positioning
              NO left-1/2
              NO translate
          ====================================================== */}
          <nav
            id="desktop-nav"
            aria-label="Main Navigation"
            className={`
              ml-8
              hidden
              shrink-0
              items-center
              md:flex
              ${
                isScrolled
                  ? `
                    gap-0.5
                    border
                    border-white/[0.08]
                    bg-[#080a0f]/90
                    px-1.5
                    py-1.5
                    backdrop-blur-xl
                  `
                  : `
                    gap-1
                    border
                    border-white/[0.06]
                    bg-black/30
                    px-2
                    py-1.5
                    backdrop-blur-md
                  `
              }
            `}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    group
                    relative
                    cursor-pointer
                    px-3
                    py-2
                    font-mono-tech
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    transition-colors
                    duration-300
                    lg:px-3.5
                    ${
                      isActive
                        ? 'text-emerald-400'
                        : 'text-zinc-500 hover:text-white'
                    }
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      transition={{
                        type: 'spring',
                        bounce: 0.15,
                        duration: 0.45,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-3
                        right-3
                        h-px
                        bg-emerald-400
                        shadow-[0_0_8px_rgba(52,211,153,0.6)]
                      "
                    />
                  )}

                  <span className="relative z-10">
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>


          {/* =====================================================
              RIGHT SIDE ACTIONS
          ====================================================== */}
          <div
            className="
              ml-auto
              hidden
              shrink-0
              items-center
              gap-2
              md:flex
            "
          >
            {/* GITHUB */}
            <a
              id="nav-github-link"
              href="https://github.com/Kartikey-code1"
              target="_blank"
              rel="noopener noreferrer"
              title="Kartikey's GitHub"
              className={`
                flex
                items-center
                justify-center
                border
                transition-all
                duration-300
                ${
                  isScrolled
                    ? `
                      h-8
                      w-8
                      border-white/[0.08]
                      bg-white/[0.025]
                      text-zinc-500
                      hover:border-white/20
                      hover:text-white
                    `
                    : `
                      h-9
                      w-9
                      border-white/[0.07]
                      bg-black/10
                      text-zinc-500
                      hover:border-white/20
                      hover:text-white
                    `
                }
              `}
            >
              <Github className="h-3.5 w-3.5" />
            </a>


            {/* LINKEDIN */}
            <a
              id="nav-linkedin-link"
              href="https://www.linkedin.com/in/kartikey-singh-523848329/"
              target="_blank"
              rel="noopener noreferrer"
              title="Kartikey's LinkedIn"
              className={`
                flex
                items-center
                justify-center
                border
                transition-all
                duration-300
                ${
                  isScrolled
                    ? `
                      h-8
                      w-8
                      border-white/[0.08]
                      bg-white/[0.025]
                      text-zinc-500
                      hover:border-emerald-400/30
                      hover:text-emerald-400
                    `
                    : `
                      h-9
                      w-9
                      border-white/[0.07]
                      bg-black/10
                      text-zinc-500
                      hover:border-emerald-400/30
                      hover:text-emerald-400
                    `
                }
              `}
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>


            {/* CONNECT */}
            <button
              id="nav-cta-connect"
              onClick={() => scrollToSection('contact')}
              className={`
                group
                ml-1
                flex
                cursor-pointer
                items-center
                gap-2
                border
                border-emerald-400/30
                bg-emerald-400/[0.08]
                px-3.5
                py-2
                font-mono-tech
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-emerald-400
                transition-all
                duration-300
                hover:border-emerald-400/60
                hover:bg-emerald-400/15
                ${
                  isScrolled
                    ? 'py-1.5'
                    : ''
                }
              `}
            >
              <span>CONNECT</span>

              <ArrowUpRight
                className="
                  h-3
                  w-3
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>
          </div>


          {/* =====================================================
              MOBILE BUTTON
          ====================================================== */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() =>
              setMobileMenuOpen((previous) => !previous)
            }
            className={`
              ml-auto
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              border
              transition-all
              duration-300
              md:hidden
              ${
                mobileMenuOpen
                  ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-400'
                  : 'border-white/[0.1] bg-black/20 text-zinc-400'
              }
            `}
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>

        </div>
      </header>


      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-[#05070b]/95
              backdrop-blur-2xl
              md:hidden
            "
          >
            {/* Ambient glow */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-20%]
                top-[15%]
                h-[350px]
                w-[350px]
                rounded-full
                bg-emerald-400/[0.05]
                blur-[100px]
              "
            />

            <div
              className="
                flex
                h-full
                flex-col
                px-5
                pb-8
                pt-28
                sm:px-8
              "
            >

              {/* Mobile header */}
              <div
                className="
                  mb-8
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.08]
                  pb-4
                "
              >
                <span
                  className="
                    font-mono-tech
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  NAVIGATION
                </span>

                <span
                  className="
                    font-mono-tech
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-emerald-400
                  "
                >
                  KS / 2026
                </span>
              </div>


              {/* Mobile links */}
              <nav className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive =
                    activeSection === link.id;

                  return (
                    <motion.button
                      key={link.id}
                      id={`mobile-nav-${link.id}`}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.045,
                        ease,
                      }}
                      onClick={() =>
                        scrollToSection(link.id)
                      }
                      className="
                        group
                        flex
                        cursor-pointer
                        items-center
                        justify-between
                        border-b
                        border-white/[0.07]
                        py-5
                        text-left
                      "
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`
                            font-mono-tech
                            text-[9px]
                            ${
                              isActive
                                ? 'text-emerald-400'
                                : 'text-zinc-700'
                            }
                          `}
                        >
                          {(index + 1)
                            .toString()
                            .padStart(2, '0')}
                        </span>

                        <span
                          className={`
                            font-display
                            text-2xl
                            font-semibold
                            tracking-[-0.03em]
                            transition-colors
                            ${
                              isActive
                                ? 'text-white'
                                : 'text-zinc-500 group-hover:text-white'
                            }
                          `}
                        >
                          {link.label}
                        </span>
                      </div>

                      <ArrowUpRight
                        className={`
                          h-4
                          w-4
                          transition-all
                          ${
                            isActive
                              ? 'text-emerald-400'
                              : 'text-zinc-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300'
                          }
                        `}
                      />
                    </motion.button>
                  );
                })}
              </nav>


              {/* Mobile bottom */}
              <div
                className="
                  mt-auto
                  border-t
                  border-white/[0.08]
                  pt-6
                "
              >
                <div
                  className="
                    mb-4
                    font-mono-tech
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-zinc-600
                  "
                >
                  FIND ME ONLINE
                </div>

                <div className="flex items-center justify-between gap-3">

                  <div className="flex gap-2">

                    {/* GitHub */}
                    <a
                      href="https://github.com/Kartikey-code1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        text-zinc-400
                        transition-colors
                        hover:border-white/20
                        hover:text-white
                      "
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>


                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/kartikey-singh-523848329/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        text-zinc-400
                        transition-colors
                        hover:border-emerald-400/30
                        hover:text-emerald-400
                      "
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>

                  </div>


                  {/* Mobile connect */}
                  <button
                    onClick={() =>
                      scrollToSection('contact')
                    }
                    className="
                      group
                      flex
                      cursor-pointer
                      items-center
                      gap-2
                      border
                      border-emerald-400/30
                      bg-emerald-400/[0.08]
                      px-4
                      py-2.5
                      font-mono-tech
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-emerald-400
                      transition-all
                      hover:bg-emerald-400/15
                    "
                  >
                    <span>LET'S CONNECT</span>

                    <ArrowUpRight
                      className="
                        h-3
                        w-3
                        transition-transform
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </button>

                </div>


                {/* Availability */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-400
                      shadow-[0_0_8px_rgba(52,211,153,0.7)]
                    "
                  />

                  <span
                    className="
                      font-mono-tech
                      text-[7px]
                      uppercase
                      tracking-[0.18em]
                      text-zinc-600
                    "
                  >
                    AVAILABLE FOR OPPORTUNITIES
                  </span>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};