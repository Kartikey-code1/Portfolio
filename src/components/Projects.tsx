import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Activity,
  ArrowUpRight,
  Bot,
  Check,
  Copy,
  Database,
  Github,
  LineChart,
  Mic,
  ShieldAlert,
  Terminal,
  TrendingUp,
  X,
} from 'lucide-react';

import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

/* -------------------------------------------------------------------------- */
/* PROJECT TYPE                                                               */
/* -------------------------------------------------------------------------- */

const getProjectType = (project: ProjectItem) => {
  const title = project.title?.toLowerCase() ?? '';
  const category = project.category?.toLowerCase() ?? '';

  if (title.includes('customer') || category.includes('business')) {
    return 'BUSINESS INTELLIGENCE';
  }

  if (title.includes('churn')) {
    return 'PREDICTIVE ANALYTICS';
  }

  if (title.includes('stock')) {
    return 'TIME-SERIES / ML';
  }

  if (title.includes('fraud')) {
    return 'ANOMALY DETECTION';
  }

  if (title.includes('voxita') || category.includes('ai')) {
    return 'AI / AUTOMATION';
  }

  return 'DATA ANALYTICS';
};

/* -------------------------------------------------------------------------- */
/* SHARED VISUAL WRAPPER                                                      */
/* -------------------------------------------------------------------------- */

const VisualShell: React.FC<{
  project: ProjectItem;
  index: number;
  children: React.ReactNode;
}> = ({ project, index, children }) => {
  return (
    <div className="relative min-h-[430px] overflow-hidden border border-white/[0.09] bg-[#08090b] sm:min-h-[500px] lg:min-h-[560px]">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.045] blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/[0.025] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#08090b_92%)]" />
      </div>

      {/* header */}
      <div className="relative z-20 flex items-center justify-between border-b border-white/[0.08] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />

          <span className="font-mono-tech text-[7px] uppercase tracking-[0.22em] text-zinc-600">
            KARTIKEY / {getProjectType(project)}
          </span>
        </div>

        <span className="font-mono-tech text-[7px] tracking-[0.16em] text-zinc-700">
          0{index + 1} / 05
        </span>
      </div>

      {/* actual visual */}
      <div className="relative z-10 h-[calc(100%-45px)] p-5 sm:p-7">
        {children}
      </div>

      {/* giant number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-8%] right-[-3%] select-none font-display text-[15rem] font-black leading-none tracking-[-0.12em] text-white/[0.018] sm:text-[19rem]"
      >
        {project.number}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* CUSTOMER ANALYTICS VISUAL                                                  */
/* -------------------------------------------------------------------------- */

const CustomerAnalyticsVisual: React.FC<{
  project: ProjectItem;
}> = ({ project }) => {
  const bars = [34, 48, 42, 62, 56, 73, 64, 84, 72, 94];

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="font-mono-tech text-[8px] uppercase tracking-[0.22em] text-zinc-700">
          BUSINESS INTELLIGENCE
        </div>

        <div className="mt-3 max-w-md font-display text-2xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-3xl">
          CUSTOMER
          <br />
          ANALYTICS
          <br />
          DASHBOARD
        </div>

        <div className="mt-3 font-mono-tech text-[8px] uppercase tracking-[0.15em] text-emerald-400/70">
          SALES / RETENTION / CUSTOMER BEHAVIOUR
        </div>
      </div>

      {/* KPI strip */}
      <div className="mt-8 grid grid-cols-3 gap-2">
        {[
          ['REVENUE', '↑ 24.8%'],
          ['RETENTION', '82.4%'],
          ['CUSTOMERS', '12.8K'],
        ].map(([label, value]) => (
          <div
            key={label}
            className="border border-white/[0.07] bg-white/[0.015] p-3"
          >
            <div className="font-mono-tech text-[6px] uppercase tracking-[0.15em] text-zinc-700">
              {label}
            </div>

            <div className="mt-2 font-mono-tech text-[10px] text-emerald-300">
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* chart */}
      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="font-mono-tech text-[7px] uppercase tracking-[0.18em] text-zinc-700">
              SALES PERFORMANCE
            </div>

            <div className="mt-1 font-mono-tech text-xs text-zinc-300">
              Monthly Revenue
            </div>
          </div>

          <TrendingUp className="h-4 w-4 text-emerald-400/70" />
        </div>

        <div className="relative h-36 border-b border-white/[0.08] sm:h-44">
          <div className="absolute inset-x-0 top-1/4 border-t border-white/[0.035]" />
          <div className="absolute inset-x-0 top-2/4 border-t border-white/[0.035]" />
          <div className="absolute inset-x-0 top-3/4 border-t border-white/[0.035]" />

          <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-1.5">
            {bars.map((value, index) => (
              <motion.div
                key={index}
                initial={{ height: 0, opacity: 0 }}
                whileInView={{
                  height: `${value}%`,
                  opacity: 1,
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease,
                }}
                className="relative flex-1 bg-gradient-to-t from-emerald-500/10 via-emerald-400/35 to-emerald-300/80"
              >
                <div className="absolute left-0 right-0 top-0 h-px bg-emerald-300/80" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex justify-between font-mono-tech text-[6px] uppercase tracking-[0.14em] text-zinc-700">
          <span>JAN</span>
          <span>MAR</span>
          <span>JUN</span>
          <span>SEP</span>
          <span>DEC</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-white/[0.07] pt-4">
        <Database className="h-3.5 w-3.5 text-emerald-400" />

        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-600">
          {project.techStack.slice(0, 5).map((tech, index) => (
            <span key={`${tech}-${index}`}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* CHURN PREDICTOR VISUAL                                                     */
/* -------------------------------------------------------------------------- */

const ChurnVisual: React.FC<{
  project: ProjectItem;
}> = ({ project }) => {
  const customers = [
    ['CUST-1042', 'HIGH RISK', '87%'],
    ['CUST-2381', 'MEDIUM', '61%'],
    ['CUST-4820', 'LOW RISK', '18%'],
    ['CUST-5192', 'HIGH RISK', '79%'],
  ];

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="font-mono-tech text-[8px] uppercase tracking-[0.22em] text-zinc-700">
          PREDICTIVE ANALYTICS
        </div>

        <div className="mt-3 font-display text-2xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-3xl">
          STAY SURE
          <br />
          <span className="text-zinc-400">CHURN</span>
          <br />
          PREDICTOR
        </div>

        <div className="mt-3 font-mono-tech text-[8px] uppercase tracking-[0.15em] text-emerald-400/70">
          CUSTOMER RETENTION INTELLIGENCE
        </div>
      </div>

      <div className="mt-8 grid grid-cols-[150px_1fr] items-center gap-6">
        {/* gauge */}
        <div className="relative mx-auto h-36 w-36">
          <svg
            viewBox="0 0 120 120"
            className="h-full w-full -rotate-90"
          >
            <circle
              cx="60"
              cy="60"
              r="47"
              fill="none"
              stroke="rgba(255,255,255,.06)"
              strokeWidth="8"
            />

            <motion.circle
              cx="60"
              cy="60"
              r="47"
              fill="none"
              stroke="rgba(52,211,153,.8)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="295"
              initial={{ strokeDashoffset: 295 }}
              whileInView={{ strokeDashoffset: 295 * 0.23 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-3xl font-black text-white">
              77%
            </span>

            <span className="font-mono-tech text-[6px] uppercase tracking-[0.15em] text-zinc-600">
              MODEL SCORE
            </span>
          </div>
        </div>

        <div>
          <div className="mb-3 font-mono-tech text-[7px] uppercase tracking-[0.18em] text-zinc-700">
            CUSTOMER RISK
          </div>

          <div className="space-y-2">
            {customers.map(([id, risk, value]) => (
              <div
                key={id}
                className="flex items-center justify-between border-b border-white/[0.05] pb-2"
              >
                <div>
                  <div className="font-mono-tech text-[7px] text-zinc-400">
                    {id}
                  </div>

                  <div className="mt-1 font-mono-tech text-[6px] uppercase tracking-[0.12em] text-zinc-700">
                    {risk}
                  </div>
                </div>

                <span
                  className={`font-mono-tech text-[8px] ${
                    risk === 'HIGH RISK'
                      ? 'text-red-300'
                      : risk === 'MEDIUM'
                        ? 'text-amber-300'
                        : 'text-emerald-300'
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 border-t border-white/[0.07] pt-4">
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-600">
          {project.techStack.slice(0, 5).map((tech, index) => (
            <span key={`${tech}-${index}`}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* STOCK PRICE VISUAL                                                         */
/* -------------------------------------------------------------------------- */

const StockVisual: React.FC<{
  project: ProjectItem;
}> = ({ project }) => {
  const candles = [
    [38, 58, 28, 66],
    [52, 70, 45, 76],
    [64, 48, 42, 72],
    [47, 78, 40, 83],
    [72, 91, 61, 95],
    [82, 64, 58, 88],
    [63, 98, 54, 104],
    [92, 78, 70, 101],
    [79, 112, 73, 118],
    [105, 126, 94, 132],
    [121, 108, 100, 128],
    [110, 138, 103, 145],
  ];

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="font-mono-tech text-[8px] uppercase tracking-[0.22em] text-zinc-700">
          TIME-SERIES / ML
        </div>

        <div className="mt-3 font-display text-2xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-3xl">
          STOCK PRICE
          <br />
          <span className="text-zinc-400">PREDICTION</span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="font-mono-tech text-[8px] uppercase tracking-[0.15em] text-emerald-400">
            LSTM MODEL
          </span>

          <span className="h-1 w-1 rounded-full bg-zinc-700" />

          <span className="font-mono-tech text-[8px] uppercase tracking-[0.15em] text-zinc-700">
            TECHNICAL ANALYTICS
          </span>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <div className="font-mono-tech text-[7px] uppercase tracking-[0.18em] text-zinc-700">
              MARKET SIGNAL
            </div>

            <div className="mt-1 flex items-center gap-2">
              <span className="font-mono-tech text-xl text-white">
                ₹2,481.70
              </span>

              <span className="font-mono-tech text-[8px] text-emerald-300">
                +4.82%
              </span>
            </div>
          </div>

          <LineChart className="h-5 w-5 text-emerald-400/70" />
        </div>

        {/* chart */}
        <div className="relative h-44 overflow-hidden border-y border-white/[0.06]">
          <div className="absolute inset-0 flex flex-col justify-between py-4">
            {[1, 2, 3, 4].map((line) => (
              <div
                key={line}
                className="border-t border-white/[0.035]"
              />
            ))}
          </div>

          <svg
            viewBox="0 0 600 180"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <motion.path
              d="M0 150 C45 140, 60 120, 95 128 S145 115, 170 105 S220 125, 250 92 S300 100, 330 78 S380 88, 405 62 S455 70, 480 48 S530 55, 600 20"
              fill="none"
              stroke="rgba(52,211,153,.8)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
            />
          </svg>

          <div className="absolute inset-x-4 bottom-3 flex items-end justify-between">
            {candles.map((candle, index) => {
              const [open, close, low, high] = candle;
              const bullish = close > open;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.45,
                    ease,
                  }}
                  className="relative h-24 w-2 origin-bottom"
                >
                  <div
                    className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 ${
                      bullish
                        ? 'bg-emerald-400/60'
                        : 'bg-red-400/40'
                    }`}
                  />

                  <div
                    className={`absolute left-1/2 w-2 -translate-x-1/2 ${
                      bullish
                        ? 'bg-emerald-400/80'
                        : 'bg-red-400/60'
                    }`}
                    style={{
                      top: `${100 - Math.min(high, 145) / 1.45}%`,
                      height: `${Math.max(
                        8,
                        Math.abs(close - open) / 1.45
                      )}%`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 flex justify-between font-mono-tech text-[6px] uppercase tracking-[0.14em] text-zinc-700">
          <span>OPEN</span>
          <span>HIGH</span>
          <span>LOW</span>
          <span>CLOSE</span>
          <span>FORECAST</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.07] pt-4 font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-600">
        {project.techStack.slice(0, 5).map((tech, index) => (
          <span key={`${tech}-${index}`}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* FRAUD DETECTION VISUAL                                                     */
/* -------------------------------------------------------------------------- */

const FraudVisual: React.FC<{
  project: ProjectItem;
}> = ({ project }) => {
  const transactions = [
    ['TX-83921', '₹4,820', 'NORMAL', '0.04'],
    ['TX-83922', '₹72,400', 'FLAGGED', '0.91'],
    ['TX-83923', '₹1,240', 'NORMAL', '0.08'],
    ['TX-83924', '₹48,900', 'FLAGGED', '0.87'],
    ['TX-83925', '₹890', 'NORMAL', '0.02'],
  ];

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="font-mono-tech text-[8px] uppercase tracking-[0.22em] text-zinc-700">
          ANOMALY DETECTION
        </div>

        <div className="mt-3 font-display text-2xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-3xl">
          FRAUDLUX
          <br />
          <span className="text-zinc-400">DETECTION</span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <ShieldAlert className="h-3.5 w-3.5 text-emerald-400" />

          <span className="font-mono-tech text-[8px] uppercase tracking-[0.15em] text-emerald-400/70">
            REAL-TIME TRANSACTION MONITORING
          </span>
        </div>
      </div>

      {/* status */}
      <div className="mt-7 grid grid-cols-3 gap-2">
        {[
          ['SCANNED', '18,492'],
          ['FLAGGED', '142'],
          ['RISK', '0.91'],
        ].map(([label, value]) => (
          <div
            key={label}
            className="border border-white/[0.07] bg-white/[0.015] p-3"
          >
            <div className="font-mono-tech text-[6px] uppercase tracking-[0.14em] text-zinc-700">
              {label}
            </div>

            <div className="mt-2 font-mono-tech text-[10px] text-zinc-200">
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* transaction table */}
      <div className="mt-7 overflow-hidden border border-white/[0.07]">
        <div className="grid grid-cols-[1fr_.8fr_.9fr_.5fr] border-b border-white/[0.07] bg-white/[0.015] px-3 py-2 font-mono-tech text-[6px] uppercase tracking-[0.12em] text-zinc-700">
          <span>TRANSACTION</span>
          <span>VALUE</span>
          <span>STATUS</span>
          <span>SCORE</span>
        </div>

        {transactions.map(([id, amount, status, score], index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.06,
              duration: 0.4,
            }}
            className="grid grid-cols-[1fr_.8fr_.9fr_.5fr] border-b border-white/[0.045] px-3 py-2.5 font-mono-tech text-[7px]"
          >
            <span className="text-zinc-500">{id}</span>

            <span className="text-zinc-400">{amount}</span>

            <span
              className={
                status === 'FLAGGED'
                  ? 'text-red-300'
                  : 'text-emerald-300'
              }
            >
              {status}
            </span>

            <span
              className={
                Number(score) > 0.5
                  ? 'text-red-300'
                  : 'text-zinc-600'
              }
            >
              {score}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.07] pt-4 font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-600">
        {project.techStack.slice(0, 5).map((tech, index) => (
          <span key={`${tech}-${index}`}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* VOXITA AI VISUAL                                                           */
/* -------------------------------------------------------------------------- */

const VoxitaVisual: React.FC<{
  project: ProjectItem;
}> = ({ project }) => {
  const waveform = [
    20, 35, 18, 52, 31, 68, 42, 82, 36, 60, 25, 72, 45, 88, 38, 64,
    24, 52, 31, 76, 42, 58, 20, 46, 30, 70, 40, 86, 34, 58,
  ];

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="font-mono-tech text-[8px] uppercase tracking-[0.22em] text-zinc-700">
          AI / AUTOMATION
        </div>

        <div className="mt-3 font-display text-2xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-3xl">
          VOXITA AI
          <br />
          <span className="text-zinc-400">VOICE</span>
          <br />
          ASSISTANT
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Bot className="h-3.5 w-3.5 text-emerald-400" />

          <span className="font-mono-tech text-[8px] uppercase tracking-[0.15em] text-emerald-400/70">
            CONVERSATIONAL AI SYSTEM
          </span>
        </div>
      </div>

      {/* AI interface */}
      <div className="mt-7 border border-white/[0.08] bg-white/[0.012]">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />

            <span className="font-mono-tech text-[7px] uppercase tracking-[0.15em] text-zinc-500">
              VOXITA ONLINE
            </span>
          </div>

          <span className="font-mono-tech text-[6px] text-zinc-700">
            LATENCY 42MS
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.05]">
              <Mic className="h-4 w-4 text-emerald-300" />
            </div>

            <div>
              <div className="font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-700">
                USER INPUT
              </div>

              <div className="mt-1 text-xs text-zinc-300">
                “Analyse my latest data.”
              </div>
            </div>
          </div>

          {/* waveform */}
          <div className="mt-7 flex h-20 items-center justify-center gap-[3px] overflow-hidden">
            {waveform.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 3, opacity: 0.25 }}
                whileInView={{
                  height: `${height}%`,
                  opacity: 0.85,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.025,
                  duration: 0.4,
                  ease,
                }}
                className="w-[3px] rounded-full bg-gradient-to-t from-emerald-500/30 to-emerald-300"
              />
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 border-t border-white/[0.06] pt-4">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
              <Bot className="h-3.5 w-3.5 text-zinc-400" />
            </div>

            <div>
              <div className="font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-700">
                AI RESPONSE
              </div>

              <div className="mt-1 text-[11px] leading-5 text-zinc-400">
                Processing query and generating analytical insight...
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.07] pt-4 font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-600">
        {project.techStack.slice(0, 5).map((tech, index) => (
          <span key={`${tech}-${index}`}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* PROJECT VISUAL ROUTER                                                      */
/* -------------------------------------------------------------------------- */

const ProjectVisual: React.FC<{
  project: ProjectItem;
  index: number;
}> = ({ project, index }) => {
  const title = project.title?.toLowerCase() ?? '';

  let visual: React.ReactNode;

  if (title.includes('customer analytics')) {
    visual = <CustomerAnalyticsVisual project={project} />;
  } else if (title.includes('churn')) {
    visual = <ChurnVisual project={project} />;
  } else if (title.includes('stock')) {
    visual = <StockVisual project={project} />;
  } else if (title.includes('fraud')) {
    visual = <FraudVisual project={project} />;
  } else if (title.includes('voxita')) {
    visual = <VoxitaVisual project={project} />;
  } else {
    visual = <CustomerAnalyticsVisual project={project} />;
  }

  return (
    <VisualShell project={project} index={index}>
      {visual}
    </VisualShell>
  );
};

/* -------------------------------------------------------------------------- */
/* PROJECTS                                                                   */
/* -------------------------------------------------------------------------- */

export const Projects: React.FC = () => {
  const [activeProjectModal, setActiveProjectModal] =
    useState<ProjectItem | null>(null);

  const [activeTab, setActiveTab] = useState<'overview' | 'code'>(
    'overview'
  );

  const [copiedQuery, setCopiedQuery] = useState(false);

  const projectCount = projectsData.length;

  useEffect(() => {
    if (!activeProjectModal) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProjectModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProjectModal]);

  useEffect(() => {
    setActiveTab('overview');
    setCopiedQuery(false);
  }, [activeProjectModal]);

  const handleCopyCode = async (text?: string) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopiedQuery(true);

      window.setTimeout(() => {
        setCopiedQuery(false);
      }, 2000);
    } catch {
      setCopiedQuery(false);
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050608] py-32 sm:py-40 lg:py-52"
    >
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-emerald-400/[0.025] blur-[150px]" />

        <div className="absolute right-[-15%] top-[35%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.02] blur-[170px]" />

        <div className="absolute bottom-0 left-[25%] h-[450px] w-[450px] rounded-full bg-emerald-400/[0.018] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="relative mb-32 sm:mb-40 lg:mb-52"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-emerald-400/70" />

            <span className="font-mono-tech text-[8px] uppercase tracking-[0.3em] text-emerald-400 sm:text-[9px]">
              03 / SELECTED WORK
            </span>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 left-[-2%] select-none font-display text-[18vw] font-black leading-none tracking-[-0.1em] text-white/[0.018]"
            >
              PROJECTS
            </div>

            <h2 className="relative max-w-[1100px] font-display text-[clamp(4.5rem,12vw,11rem)] font-black uppercase leading-[0.73] tracking-[-0.085em] text-white">
              SELECTED
              <br />

              <span className="ml-[6vw] text-zinc-700">
                WORK.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/[0.08] pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-xl text-sm font-light leading-7 text-zinc-500 sm:text-base">
              Analytical projects where raw data becomes structured
              information, visual stories and practical decisions.
            </p>

            <div className="flex items-center gap-5 font-mono-tech text-[8px] uppercase tracking-[0.16em] text-zinc-600">
              <span>
                {String(projectCount).padStart(2, '0')} PROJECTS
              </span>

              <span className="h-3 w-px bg-zinc-800" />

              <span>SQL / PYTHON / BI</span>
            </div>
          </div>
        </motion.div>

        {/* project list */}
        <div className="space-y-40 sm:space-y-52 lg:space-y-64">
          {projectsData.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                id={`project-${project.id}`}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 1,
                  ease,
                }}
                className="group relative"
              >
                {/* huge number */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute top-[-8rem] select-none font-display text-[clamp(10rem,23vw,23rem)] font-black leading-none tracking-[-0.12em] text-white/[0.022] ${
                    reverse ? 'right-[-3vw]' : 'left-[-3vw]'
                  }`}
                >
                  {project.number}
                </div>

                <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
                  {/* text */}
                  <div
                    className={`relative z-10 lg:col-span-5 ${
                      reverse ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="mb-8 flex items-center gap-4">
                      <span className="font-mono-tech text-sm font-semibold tracking-[0.12em] text-emerald-400">
                        {project.number}
                      </span>

                      <span className="h-px w-10 bg-zinc-800" />

                      <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                        {getProjectType(project)}
                      </span>
                    </div>

                    <h3 className="max-w-xl font-display text-[clamp(3.2rem,5.6vw,6.8rem)] font-black uppercase leading-[0.8] tracking-[-0.075em] text-white transition-colors duration-700 group-hover:text-emerald-100">
                      {project.title}
                    </h3>

                    <div className="mt-6 font-mono-tech text-[8px] uppercase tracking-[0.2em] text-emerald-400/70">
                      {project.subtitle}
                    </div>

                    <p className="mt-7 max-w-lg text-sm font-light leading-7 text-zinc-500 sm:text-[15px]">
                      {project.description}
                    </p>

                    {project.metrics &&
                      project.metrics.length > 0 && (
                        <div className="mt-9 max-w-lg border-y border-white/[0.08] py-5">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
                            {project.metrics
                              .slice(0, 4)
                              .map((metric, metricIndex) => (
                                <div
                                  key={`${metric.label}-${metricIndex}`}
                                >
                                  <div className="font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-700">
                                    {metric.label}
                                  </div>

                                  <div className="mt-1.5 font-mono-tech text-[10px] leading-4 text-zinc-300">
                                    {metric.value}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                    <div className="mt-7 flex max-w-xl flex-wrap gap-x-5 gap-y-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={`${tech}-${techIndex}`}
                          className="font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-700 transition-colors duration-300 group-hover:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-wrap items-center gap-6">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 border-b border-emerald-400/50 pb-2 font-mono-tech text-[8px] font-semibold uppercase tracking-[0.15em] text-emerald-300 transition-all hover:border-emerald-300 hover:text-emerald-200"
                      >
                        <Github className="h-3.5 w-3.5" />

                        VIEW REPOSITORY

                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveProjectModal(project)
                        }
                        className="group/inspect inline-flex cursor-pointer items-center gap-2 border-b border-white/[0.12] pb-2 font-mono-tech text-[8px] uppercase tracking-[0.15em] text-zinc-600 transition-all hover:border-white/30 hover:text-white"
                      >
                        INSPECT CASE

                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/inspect:-translate-y-1 group-hover/inspect:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* visual */}
                  <div
                    className={`relative lg:col-span-7 ${
                      reverse ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.6,
                        ease,
                      }}
                      className="relative"
                    >
                      <div
                        className={`absolute -top-4 h-px bg-emerald-400/50 transition-all duration-700 group-hover:w-48 ${
                          reverse
                            ? 'left-0 w-20'
                            : 'right-0 w-20'
                        }`}
                      />

                      <ProjectVisual
                        project={project}
                        index={index}
                      />

                      <div
                        className={`absolute -bottom-6 font-mono-tech text-[7px] uppercase tracking-[0.2em] text-zinc-700 ${
                          reverse ? 'right-1' : 'left-1'
                        }`}
                      >
                        CASE STUDY /{' '}
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* closing CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="relative mt-48 overflow-hidden border-y border-white/[0.08] py-28 sm:mt-60 sm:py-36"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-4%] top-1/2 -translate-y-1/2 select-none font-display text-[19vw] font-black uppercase leading-none tracking-[-0.12em] text-white/[0.018]"
          >
            CODE
          </div>

          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.7)]" />

              <span className="font-mono-tech text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                OPEN SOURCE / GITHUB
              </span>
            </div>

            <h3 className="max-w-5xl font-display text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[0.75] tracking-[-0.085em] text-white">
              SEE THE
              <br />

              <span className="text-zinc-700">
                WORK.
              </span>
            </h3>

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-sm leading-7 text-zinc-500">
                Explore the repositories, implementation details and
                analytical work behind these projects.
              </p>

              <a
                href="https://github.com/Kartikey-code1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 border-b border-emerald-400/50 pb-3 font-mono-tech text-[8px] font-semibold uppercase tracking-[0.16em] text-emerald-300 transition-all hover:border-emerald-300 hover:text-emerald-200"
              >
                <Github className="h-4 w-4" />

                OPEN GITHUB

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* MODAL                                                               */}
      {/* ------------------------------------------------------------------ */}

      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8">
            <motion.button
              type="button"
              aria-label="Close project case study"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectModal(null)}
              className="absolute inset-0 cursor-default bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              transition={{
                duration: 0.45,
                ease,
              }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden border border-white/[0.1] bg-[#08090b] shadow-[0_50px_160px_rgba(0,0,0,.8)]"
            >
              {/* modal header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
                <div>
                  <div className="font-mono-tech text-[7px] uppercase tracking-[0.2em] text-zinc-700">
                    CASE STUDY / {activeProjectModal.number}
                  </div>

                  <div className="mt-1 font-mono-tech text-[8px] uppercase tracking-[0.16em] text-emerald-400/70">
                    {getProjectType(activeProjectModal)}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="cursor-pointer border border-white/[0.08] p-2 text-zinc-600 transition-colors hover:border-white/20 hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* body */}
              <div className="overflow-y-auto">
                <div className="p-5 sm:p-8 md:p-10">
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                    {/* text */}
                    <div>
                      <div className="mb-6 font-mono-tech text-[8px] uppercase tracking-[0.2em] text-emerald-400">
                        ANALYTICAL CASE
                      </div>

                      <h3
                        id="project-modal-title"
                        className="max-w-2xl font-display text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white"
                      >
                        {activeProjectModal.title}
                      </h3>

                      <p className="mt-6 font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                        {activeProjectModal.subtitle}
                      </p>

                      <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400">
                        {activeProjectModal.fullOverview}
                      </p>

                      {activeProjectModal.metrics &&
                        activeProjectModal.metrics.length > 0 && (
                          <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-white/[0.08] py-6 sm:grid-cols-4">
                            {activeProjectModal.metrics
                              .slice(0, 4)
                              .map((metric, index) => (
                                <div
                                  key={`${metric.label}-${index}`}
                                >
                                  <div className="font-mono-tech text-[7px] uppercase tracking-[0.12em] text-zinc-700">
                                    {metric.label}
                                  </div>

                                  <div className="mt-2 font-mono-tech text-[10px] leading-4 text-zinc-200">
                                    {metric.value}
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                    </div>

                    {/* visual */}
                    <ProjectVisual
                      project={activeProjectModal}
                      index={projectsData.findIndex(
                        (item) =>
                          item.id === activeProjectModal.id
                      )}
                    />
                  </div>

                  {/* tabs */}
                  <div className="mt-14 flex gap-7 border-b border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('overview')}
                      className={`cursor-pointer border-b pb-3 font-mono-tech text-[8px] uppercase tracking-[0.14em] transition-colors ${
                        activeTab === 'overview'
                          ? 'border-emerald-400 text-emerald-300'
                          : 'border-transparent text-zinc-600 hover:text-zinc-300'
                      }`}
                    >
                      Overview
                    </button>

                    {activeProjectModal.sqlSnippet && (
                      <button
                        type="button"
                        onClick={() => setActiveTab('code')}
                        className={`cursor-pointer border-b pb-3 font-mono-tech text-[8px] uppercase tracking-[0.14em] transition-colors ${
                          activeTab === 'code'
                            ? 'border-emerald-400 text-emerald-300'
                            : 'border-transparent text-zinc-600 hover:text-zinc-300'
                        }`}
                      >
                        Query / Code
                      </button>
                    )}
                  </div>

                  {/* tab content */}
                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' ? (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="mt-9 space-y-10"
                      >
                        <div>
                          <div className="mb-5 font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                            KEY DELIVERABLES
                          </div>

                          <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                            {activeProjectModal.keyFeatures.map(
                              (feature, index) => (
                                <div
                                  key={`${feature}-${index}`}
                                  className="flex items-start gap-3 border-t border-white/[0.07] pt-4"
                                >
                                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />

                                  <span className="text-xs leading-5 text-zinc-400">
                                    {feature}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {activeProjectModal.dataHighlights &&
                          activeProjectModal.dataHighlights.length > 0 && (
                            <div>
                              <div className="mb-5 font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                                DATA & METHODOLOGY
                              </div>

                              <div className="grid grid-cols-1 gap-x-10 gap-y-5 border-y border-white/[0.07] py-5 sm:grid-cols-2">
                                {activeProjectModal.dataHighlights.map(
                                  (highlight, index) => (
                                    <div
                                      key={`${highlight}-${index}`}
                                      className="flex items-start gap-3"
                                    >
                                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />

                                      <span className="text-xs leading-5 text-zinc-500">
                                        {highlight}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="code"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="mt-9"
                      >
                        <div className="overflow-hidden border border-white/[0.08] bg-[#050608]">
                          <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                            <div className="flex items-center gap-2">
                              <Terminal className="h-3.5 w-3.5 text-emerald-400" />

                              <span className="font-mono-tech text-[7px] uppercase tracking-[0.16em] text-zinc-600">
                                Query / Implementation
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                handleCopyCode(
                                  activeProjectModal.sqlSnippet
                                )
                              }
                              className="inline-flex cursor-pointer items-center gap-1.5 border border-white/[0.08] px-2.5 py-1.5 font-mono-tech text-[7px] uppercase tracking-[0.1em] text-zinc-600 transition-colors hover:border-emerald-400/20 hover:text-emerald-300"
                            >
                              {copiedQuery ? (
                                <>
                                  <Check className="h-3 w-3 text-emerald-400" />
                                  COPIED
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3 w-3" />
                                  COPY
                                </>
                              )}
                            </button>
                          </div>

                          <div className="max-h-[420px] overflow-auto p-5">
                            <pre className="whitespace-pre font-mono-tech text-[9px] leading-6 text-emerald-300/90 sm:text-xs">
                              <code>
                                {activeProjectModal.sqlSnippet}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* footer */}
                  <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {activeProjectModal.techStack.map(
                        (tech, index) => (
                          <span
                            key={`${tech}-${index}`}
                            className="font-mono-tech text-[7px] uppercase tracking-[0.1em] text-zinc-700"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    <div className="flex items-center gap-6">
                      <button
                        type="button"
                        onClick={() => setActiveProjectModal(null)}
                        className="cursor-pointer font-mono-tech text-[8px] uppercase tracking-[0.12em] text-zinc-600 transition-colors hover:text-white"
                      >
                        CLOSE
                      </button>

                      <a
                        href={activeProjectModal.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono-tech text-[8px] font-semibold uppercase tracking-[0.12em] text-emerald-300 transition-colors hover:text-emerald-200"
                      >
                        <Github className="h-3.5 w-3.5" />

                        OPEN REPOSITORY

                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};