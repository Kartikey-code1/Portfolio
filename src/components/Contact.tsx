import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { characterImages } from '../assets/characterAssets';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const emailAddress = 'kartikeysinghpbh61@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);

    setTimeout(() => {
      setCopiedEmail(false);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setFormSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050608] py-28 sm:py-36 lg:py-44"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[25%] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-emerald-400/[0.055] blur-[150px]" />

        <div className="absolute bottom-[-10%] left-[-10%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.025] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* =======================================================
            TOP LABEL
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-emerald-400" />

          <span className="font-mono-tech text-[8px] uppercase tracking-[0.22em] text-emerald-400">
            06 / CONTACT
          </span>

          <span className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-700">
            LET'S BUILD SOMETHING
          </span>
        </motion.div>

        {/* =======================================================
            GIANT EDITORIAL HEADING
        ======================================================== */}

        <div className="relative mb-24 sm:mb-28 lg:mb-32">

          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[1200px] font-display text-[16vw] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white sm:text-[12vw] lg:text-[10.5vw]"
          >
            LET'S
            <br />
            <span className="text-zinc-700">TALK.</span>
          </motion.h2>

          {/* Background word */}
          <div className="pointer-events-none absolute -bottom-7 right-0 hidden select-none font-display text-[10vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.018] lg:block">
            CONNECT
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base"
          >
            Have a dataset, dashboard, analytics problem, or an opportunity
            where data can create clarity? Send me a message and let's start
            the conversation.
          </motion.p>
        </div>

        {/* =======================================================
            MAIN CONTACT COMPOSITION
        ======================================================== */}

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end lg:gap-20">

          {/* =====================================================
              CHARACTER / PORTRAIT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:col-span-5"
          >
            {/* Vertical editorial label */}
            <div className="absolute -left-1 top-0 hidden -translate-x-full pr-6 lg:block">
              <div className="font-mono-tech text-[7px] uppercase tracking-[0.25em] text-zinc-700 [writing-mode:vertical-rl]">
                KARTIKEY SINGH / DATA ANALYST
              </div>
            </div>

            {/* Portrait */}
            <div className="relative mx-auto max-w-[470px]">

              {/* Glow behind character */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.06] blur-[90px]" />

              <div className="relative overflow-hidden">

                <motion.img
                  src={characterImages.connect}
                  alt="Kartikey Singh"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-10 aspect-[3/4] w-full object-cover object-top grayscale-[15%]"
                />

                {/* Cinematic gradient */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#050608] via-transparent to-transparent" />

                {/* Edge highlight */}
                <div className="pointer-events-none absolute inset-0 z-20 border border-white/[0.08]" />

                {/* Portrait caption */}
                <div className="absolute bottom-5 left-5 right-5 z-30 flex items-end justify-between">
                  <div>
                    <div className="font-display text-lg font-bold tracking-[-0.03em] text-white">
                      KARTIKEY SINGH
                    </div>

                    <div className="mt-1 font-mono-tech text-[8px] uppercase tracking-[0.18em] text-emerald-400">
                      DATA ANALYST
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono-tech text-[7px] uppercase tracking-[0.15em] text-zinc-400">
                    <MapPin className="h-3 w-3 text-emerald-400" />
                    INDIA
                  </div>
                </div>
              </div>

              {/* Small portrait metadata */}
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                  BASED IN LUCKNOW
                </span>

                <span className="flex items-center gap-2 font-mono-tech text-[8px] uppercase tracking-[0.15em] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              CONTACT DETAILS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >

            {/* Intro */}
            <div className="mb-10 max-w-xl">
              <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                DIRECT CONTACT
              </span>

              <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl">
                Let's turn your
                <span className="text-emerald-400"> data </span>
                into something useful.
              </h3>
            </div>

            {/* ===================================================
                EMAIL ROW
            ==================================================== */}

            <div className="border-y border-white/[0.08] py-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <a
                  id="contact-email-link"
                  href={`mailto:${emailAddress}`}
                  className="group min-w-0"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-emerald-400" />

                    <span className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                      EMAIL
                    </span>
                  </div>

                  <div className="truncate font-mono-tech text-sm font-medium text-zinc-200 transition-colors group-hover:text-emerald-400 sm:text-base">
                    {emailAddress}
                  </div>
                </a>

                <div className="flex items-center gap-2">

                  <button
                    id="copy-email-btn"
                    onClick={copyEmail}
                    className="group flex cursor-pointer items-center gap-2 border border-white/[0.08] px-3 py-2 font-mono-tech text-[8px] uppercase tracking-[0.12em] text-zinc-500 transition-all hover:border-emerald-400/30 hover:text-emerald-400"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        COPIED
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        COPY
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="group flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/[0.08] px-3 py-2 font-mono-tech text-[8px] uppercase tracking-[0.12em] text-emerald-400 transition-all hover:bg-emerald-400/15"
                  >
                    EMAIL ME
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* ===================================================
                SOCIAL LINKS
            ==================================================== */}

            <div className="grid grid-cols-2 border-b border-white/[0.08]">

              <a
                id="contact-linkedin-link"
                href="https://www.linkedin.com/in/kartikey-singh-523848329/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-r border-white/[0.08] py-5 pr-5 transition-colors hover:bg-white/[0.015]"
              >
                <div>
                  <div className="mb-2 font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                    PROFESSIONAL
                  </div>

                  <div className="flex items-center gap-2 font-display text-sm font-semibold text-zinc-300 transition-colors group-hover:text-white">
                    <Linkedin className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400" />
                    LINKEDIN
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 text-zinc-700 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400" />
              </a>

              <a
                id="contact-github-link"
                href="https://github.com/Kartikey-code1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 pl-5 transition-colors hover:bg-white/[0.015]"
              >
                <div>
                  <div className="mb-2 font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                    CODE
                  </div>

                  <div className="flex items-center gap-2 font-display text-sm font-semibold text-zinc-300 transition-colors group-hover:text-white">
                    <Github className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400" />
                    GITHUB
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 text-zinc-700 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400" />
              </a>
            </div>

            {/* ===================================================
                MESSAGE FORM
            ==================================================== */}

            <div className="mt-12">

              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                  SEND A MESSAGE
                </span>

                <span className="font-mono-tech text-[7px] uppercase tracking-[0.16em] text-zinc-700">
                  I'LL GET BACK TO YOU
                </span>
              </div>

              <AnimatePresence mode="wait">

                {formSent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="border border-emerald-400/20 bg-emerald-400/[0.035] p-8"
                  >
                    <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
                      <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center border border-emerald-400/30 bg-emerald-400/[0.08] sm:mb-0 sm:mr-5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      </div>

                      <div>
                        <h4 className="font-display text-xl font-bold tracking-[-0.03em] text-white">
                          Message staged successfully.
                        </h4>

                        <p className="mt-2 max-w-lg text-xs leading-6 text-zinc-500">
                          Thanks for reaching out. You can also contact me
                          directly through email or LinkedIn.
                        </p>

                        <button
                          onClick={() => {
                            setFormSent(false);
                            setFormData({
                              name: '',
                              email: '',
                              message: '',
                            });
                          }}
                          className="mt-4 cursor-pointer font-mono-tech text-[8px] uppercase tracking-[0.15em] text-emerald-400 underline underline-offset-4"
                        >
                          SEND ANOTHER MESSAGE
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-7"
                  >

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-2 block font-mono-tech text-[8px] uppercase tracking-[0.17em] text-zinc-600"
                        >
                          YOUR NAME
                        </label>

                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          placeholder="Alex Parker"
                          className="w-full border-b border-white/[0.12] bg-transparent px-0 py-3 font-mono-tech text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-emerald-400"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-2 block font-mono-tech text-[8px] uppercase tracking-[0.17em] text-zinc-600"
                        >
                          YOUR EMAIL
                        </label>

                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          placeholder="alex@company.com"
                          className="w-full border-b border-white/[0.12] bg-transparent px-0 py-3 font-mono-tech text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-emerald-400"
                        />
                      </div>

                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block font-mono-tech text-[8px] uppercase tracking-[0.17em] text-zinc-600"
                      >
                        MESSAGE
                      </label>

                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        placeholder="Tell me about the project, role, or analytics problem..."
                        className="w-full resize-none border-b border-white/[0.12] bg-transparent px-0 py-3 font-mono-tech text-sm leading-6 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-emerald-400"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

                      <div className="flex items-center gap-2 font-mono-tech text-[7px] uppercase tracking-[0.15em] text-zinc-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        DIRECT CONNECTION
                      </div>

                      <button
                        id="contact-submit-btn"
                        type="submit"
                        className="group flex w-full cursor-pointer items-center justify-center gap-3 border border-emerald-400/40 bg-emerald-400/[0.08] px-6 py-3.5 font-mono-tech text-[8px] font-semibold uppercase tracking-[0.15em] text-emerald-400 transition-all hover:border-emerald-400/70 hover:bg-emerald-400/15 sm:w-auto"
                      >
                        SEND MESSAGE

                        <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>

                    </div>
                  </motion.form>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            FINAL GIANT CTA
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-white/[0.07] pt-10 sm:mt-40"
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="mb-4 font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                KARTIKEY SINGH
              </div>

              <div className="font-display text-[12vw] font-black uppercase leading-[0.75] tracking-[-0.075em] text-white sm:text-[9vw] lg:text-[7vw]">
                DATA
                <br />
                <span className="text-zinc-700">WITH</span>
                <br />
                <span className="text-emerald-400">PURPOSE.</span>
              </div>
            </div>

            <div className="max-w-xs pb-2 sm:text-right">
              <p className="text-xs leading-6 text-zinc-600">
                SQL · PYTHON · POWER BI · TABLEAU · EXCEL
              </p>

              <p className="mt-3 font-mono-tech text-[7px] uppercase tracking-[0.16em] text-zinc-700">
                END OF PORTFOLIO / 2026
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};