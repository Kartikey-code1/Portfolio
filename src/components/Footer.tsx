import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const footerLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Kartikey-code1',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kartikey-singh-523848329/',
      icon: Linkedin,
    },
    {
      label: 'Email',
      href: 'mailto:kartikeysinghpbh61@gmail.com',
      icon: Mail,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#030405] text-[#f4f4f1]">
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.045] blur-[120px]" />

        <div className="absolute bottom-[-14rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/[0.025] blur-[110px]" />
      </div>

      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-5 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        {/* Top editorial line */}
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-white/[0.08]" />

          <span className="font-mono-tech text-[9px] uppercase tracking-[0.3em] text-zinc-600">
            END OF PAGE
          </span>

          <span className="h-px w-16 bg-emerald-400/30" />
        </div>

        {/* ===================================================
            GIANT BRAND STATEMENT
            =================================================== */}

        <div className="relative">
          <p className="mb-5 font-mono-tech text-[10px] uppercase tracking-[0.28em] text-emerald-400">
            KARTIKEY SINGH / DATA ANALYST
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group block text-left"
            aria-label="Back to top"
          >
            <h2 className="font-display text-[17vw] font-bold leading-[0.72] tracking-[-0.075em] text-white transition-colors duration-500 group-hover:text-zinc-200 sm:text-[15vw] lg:text-[13vw]">
              KARTIKEY
            </h2>

            <div className="mt-3 flex items-end gap-4 sm:mt-5">
              <h2 className="font-display text-[17vw] font-bold leading-[0.72] tracking-[-0.075em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] sm:text-[15vw] lg:text-[13vw]">
                SINGH
              </h2>

              <ArrowUpRight className="mb-[1vw] hidden h-10 w-10 text-emerald-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block lg:h-16 lg:w-16" />
            </div>
          </button>
        </div>

        {/* ===================================================
            IDENTITY / NAV / SOCIAL
            =================================================== */}

        <div className="mt-20 border-t border-white/[0.08] lg:mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Identity */}
            <div className="border-b border-white/[0.08] py-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:pr-10">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.5)]" />

                <span className="font-display text-lg font-semibold tracking-[-0.03em] text-white">
                  Kartikey Singh
                </span>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
                Data Analyst focused on transforming raw data into clear
                insights, dashboards, and analytical stories.
              </p>

              <div className="mt-6 flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="border-b border-white/[0.08] py-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:px-10">
              <p className="mb-6 font-mono-tech text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                NAVIGATE
              </p>

              <nav className="grid grid-cols-2 gap-x-8 gap-y-4">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-zinc-500 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-4" />

                    <span>{link.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Social / availability */}
            <div className="py-8 lg:col-span-4 lg:pl-10">
              <p className="mb-6 font-mono-tech text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                CONNECT
              </p>

              <div className="flex flex-col gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.label === 'Email' ? undefined : '_blank'
                      }
                      rel={
                        social.label === 'Email'
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      className="group flex items-center justify-between border-b border-white/[0.07] pb-3 text-sm text-zinc-500 transition-colors duration-300 hover:border-emerald-400/30 hover:text-white"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4 transition-colors duration-300 group-hover:text-emerald-400" />

                        <span>{social.label}</span>
                      </span>

                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            TOOL STACK
            =================================================== */}

        <div className="border-b border-white/[0.08] py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-zinc-600">
              ANALYTICAL TOOLKIT
            </span>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono-tech text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              <span className="transition-colors hover:text-emerald-400">
                SQL
              </span>

              <span className="text-zinc-800">/</span>

              <span className="transition-colors hover:text-emerald-400">
                Python
              </span>

              <span className="text-zinc-800">/</span>

              <span className="transition-colors hover:text-emerald-400">
                Excel
              </span>

              <span className="text-zinc-800">/</span>

              <span className="transition-colors hover:text-emerald-400">
                Power BI
              </span>

              <span className="text-zinc-800">/</span>

              <span className="transition-colors hover:text-emerald-400">
                Tableau
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            COPYRIGHT
            =================================================== */}

        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono-tech text-[9px] uppercase tracking-[0.16em] text-zinc-600">
            © {currentYear} Kartikey Singh. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-3 self-start font-mono-tech text-[9px] uppercase tracking-[0.2em] text-zinc-600 transition-colors duration-300 hover:text-white sm:self-auto"
          >
            <span>BACK TO TOP</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.1] transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/5">
              <ArrowUpRight className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};