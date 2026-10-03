import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  BarChart3,
  Database,
  Terminal,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

interface MonthlyData {
  month: string;
  revenue: number;
  orders: number;
  profit: number;
}

const sampleMonthlyData: MonthlyData[] = [
  { month: 'Jan', revenue: 42000, orders: 580, profit: 14200 },
  { month: 'Feb', revenue: 48500, orders: 640, profit: 16800 },
  { month: 'Mar', revenue: 53200, orders: 710, profit: 18900 },
  { month: 'Apr', revenue: 61000, orders: 830, profit: 22400 },
  { month: 'May', revenue: 59000, orders: 790, profit: 21100 },
  { month: 'Jun', revenue: 68400, orders: 920, profit: 25600 },
  { month: 'Jul', revenue: 74200, orders: 980, profit: 27900 },
];

const categoryData = [
  {
    name: 'Technology & Hardware',
    share: 44,
    amount: '$152,400',
    margin: '34%',
  },
  {
    name: 'Office Supplies',
    share: 28,
    amount: '$96,800',
    margin: '29%',
  },
  {
    name: 'Furniture & Ergonomics',
    share: 18,
    amount: '$62,300',
    margin: '22%',
  },
  {
    name: 'Accessories & Peripherals',
    share: 10,
    amount: '$34,600',
    margin: '38%',
  },
];

export const LiveAnalyticsSandbox: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<
    'revenue' | 'profit' | 'orders'
  >('revenue');

  const [hoveredBar, setHoveredBar] =
    useState<MonthlyData | null>(null);

  const maxVal = useMemo(() => {
    return Math.max(
      ...sampleMonthlyData.map((item) =>
        activeMetric === 'revenue'
          ? item.revenue
          : activeMetric === 'profit'
          ? item.profit
          : item.orders
      )
    );
  }, [activeMetric]);

  const activeMetricLabel =
    activeMetric === 'revenue'
      ? 'Revenue'
      : activeMetric === 'profit'
      ? 'Profit'
      : 'Orders';

  const formatValue = (value: number) => {
    if (activeMetric === 'orders') {
      return value.toLocaleString();
    }

    return `$${value.toLocaleString()}`;
  };

  return (
    <section
      id="analytics-sandbox"
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.05]
        bg-[#050608]
        py-28
        sm:py-36
        lg:py-44
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-emerald-400/[0.035]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ===================================================
            SECTION INTRO
        ==================================================== */}

        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-400/50" />

            <span className="font-mono-tech text-[8px] uppercase tracking-[0.32em] text-emerald-400/70">
              INTERACTIVE / 004
            </span>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <p className="font-mono-tech text-[9px] uppercase tracking-[0.28em] text-zinc-600">
                LIVE ANALYTICS SANDBOX
              </p>

              <h2
                className="
                  mt-4
                  max-w-5xl
                  font-display
                  text-[15vw]
                  font-bold
                  uppercase
                  leading-[0.78]
                  tracking-[-0.085em]
                  text-white
                  sm:text-[11vw]
                  lg:text-[8.4rem]
                "
              >
                INSIDE
                <br />
                <span className="text-zinc-700">THE DATA.</span>
              </h2>
            </div>

            <div className="lg:col-span-3 lg:pb-2">
              <p className="max-w-sm text-[11px] leading-[1.9] text-zinc-500">
                An interactive demonstration of aggregation,
                KPI calculations and analytical storytelling
                inspired by my Customer Analytics project.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <Database className="h-3 w-3 text-emerald-400/70" />

                <span className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                  SQL / POWER BI / EXCEL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            METRIC SELECTOR
        ==================================================== */}

        <div className="mt-16 border-y border-white/[0.06] py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                ANALYTICAL VIEW
              </span>

              <ChevronRight className="h-3 w-3 text-zinc-800" />

              <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-emerald-400/70">
                {activeMetricLabel}
              </span>
            </div>

            <div className="flex items-center gap-5">
              {(['revenue', 'profit', 'orders'] as const).map(
                (metric) => (
                  <button
                    key={metric}
                    type="button"
                    onClick={() => setActiveMetric(metric)}
                    className={`
                      relative
                      pb-1
                      font-mono-tech
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      transition-colors
                      duration-300
                      ${
                        activeMetric === metric
                          ? 'text-emerald-300'
                          : 'text-zinc-600 hover:text-zinc-300'
                      }
                    `}
                  >
                    {metric}

                    {activeMetric === metric && (
                      <motion.span
                        layoutId="active-analytics-metric"
                        className="
                          absolute
                          bottom-0
                          left-0
                          right-0
                          h-px
                          bg-emerald-400
                        "
                      />
                    )}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* ===================================================
            MAIN DATA STORY
        ==================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* =================================================
              CHART
          ================================================== */}

          <div className="lg:col-span-8">
            <div className="flex items-end justify-between gap-5">
              <div>
                <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                  MONTHLY PERFORMANCE
                </span>

                <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                  {activeMetricLabel} trend
                </h3>
              </div>

              <div className="hidden text-right sm:block">
                <div className="font-mono-tech text-[8px] uppercase tracking-[0.16em] text-zinc-700">
                  CURRENT VIEW
                </div>

                <div className="mt-1 font-mono-tech text-[10px] text-emerald-300">
                  H1 → H2
                </div>
              </div>
            </div>

            {/* chart */}
            <div className="relative mt-8 h-[340px] border-b border-l border-white/[0.07]">
              {/* guide lines */}
              <div className="pointer-events-none absolute inset-x-0 top-[20%] border-t border-white/[0.035]" />
              <div className="pointer-events-none absolute inset-x-0 top-[40%] border-t border-white/[0.035]" />
              <div className="pointer-events-none absolute inset-x-0 top-[60%] border-t border-white/[0.035]" />
              <div className="pointer-events-none absolute inset-x-0 top-[80%] border-t border-white/[0.035]" />

              <div className="absolute inset-0 flex items-end gap-2 px-3 sm:gap-5 sm:px-5">
                {sampleMonthlyData.map((item, index) => {
                  const value =
                    activeMetric === 'revenue'
                      ? item.revenue
                      : activeMetric === 'profit'
                      ? item.profit
                      : item.orders;

                  const height =
                    Math.max(
                      8,
                      Math.round((value / maxVal) * 86)
                    );

                  const isHovered =
                    hoveredBar?.month === item.month;

                  return (
                    <div
                      key={item.month}
                      className="
                        group
                        relative
                        flex
                        h-full
                        flex-1
                        flex-col
                        justify-end
                      "
                      onMouseEnter={() => setHoveredBar(item)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 5,
                        }}
                        className="
                          pointer-events-none
                          absolute
                          left-1/2
                          top-[8%]
                          z-20
                          -translate-x-1/2
                          whitespace-nowrap
                          font-mono-tech
                          text-[8px]
                          text-emerald-300
                        "
                      >
                        {item.month} / {formatValue(value)}
                      </motion.div>

                      {/* bar */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.05,
                          ease: 'easeOut',
                        }}
                        className={`
                          relative
                          w-full
                          overflow-hidden
                          rounded-t-[3px]
                          transition-all
                          duration-300
                          ${
                            isHovered
                              ? 'bg-emerald-300'
                              : 'bg-emerald-400/[0.42] group-hover:bg-emerald-400/[0.7]'
                          }
                        `}
                      >
                        <div
                          className="
                            absolute
                            inset-x-0
                            top-0
                            h-px
                            bg-white/40
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/30
                            to-transparent
                          "
                        />
                      </motion.div>

                      {/* month */}
                      <span
                        className={`
                          mt-3
                          text-center
                          font-mono-tech
                          text-[8px]
                          uppercase
                          tracking-[0.08em]
                          transition-colors
                          ${
                            isHovered
                              ? 'text-white'
                              : 'text-zinc-700 group-hover:text-zinc-400'
                          }
                        `}
                      >
                        {item.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* chart footer */}
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-3 w-3 text-emerald-400/60" />

                <span className="font-mono-tech text-[8px] uppercase tracking-[0.15em] text-zinc-700">
                  HOVER TO INSPECT
                </span>
              </div>

              <div className="font-mono-tech text-[8px] text-zinc-700">
                {hoveredBar
                  ? `${hoveredBar.month} / ${formatValue(
                      activeMetric === 'revenue'
                        ? hoveredBar.revenue
                        : activeMetric === 'profit'
                        ? hoveredBar.profit
                        : hoveredBar.orders
                    )}`
                  : 'Select a data point'}
              </div>
            </div>
          </div>

          {/* =================================================
              DATA SUMMARY
          ================================================== */}

          <div className="lg:col-span-4">
            <div className="border-t border-white/[0.07] pt-5">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                  SNAPSHOT
                </span>

                <span className="font-mono-tech text-[8px] text-emerald-400/60">
                  LIVE
                </span>
              </div>

              <div className="mt-8">
                <div className="font-mono-tech text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                  Total revenue
                </div>

                <div className="mt-2 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  $406.3K
                </div>

                <div className="mt-2 font-mono-tech text-[8px] text-emerald-400/70">
                  +18.2% analytical reference
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-y border-white/[0.06] py-7">
                <div>
                  <div className="font-mono-tech text-[8px] uppercase tracking-[0.16em] text-zinc-700">
                    Net profit
                  </div>

                  <div className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-zinc-200">
                    $116.9K
                  </div>

                  <div className="mt-1 font-mono-tech text-[7px] text-zinc-700">
                    28.7% margin
                  </div>
                </div>

                <div>
                  <div className="font-mono-tech text-[8px] uppercase tracking-[0.16em] text-zinc-700">
                    Orders
                  </div>

                  <div className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-zinc-200">
                    5,450
                  </div>

                  <div className="mt-1 font-mono-tech text-[7px] text-zinc-700">
                    $74.55 AOV
                  </div>
                </div>

                <div>
                  <div className="font-mono-tech text-[8px] uppercase tracking-[0.16em] text-zinc-700">
                    Repeat
                  </div>

                  <div className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-emerald-300">
                    43.8%
                  </div>

                  <div className="mt-1 font-mono-tech text-[7px] text-zinc-700">
                    orders ≥ 2
                  </div>
                </div>

                <div>
                  <div className="font-mono-tech text-[8px] uppercase tracking-[0.16em] text-zinc-700">
                    Classes
                  </div>

                  <div className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-zinc-200">
                    04
                  </div>

                  <div className="mt-1 font-mono-tech text-[7px] text-zinc-700">
                    revenue groups
                  </div>
                </div>
              </div>

              {/* category mix */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                    CATEGORY MIX
                  </span>

                  <span className="font-mono-tech text-[7px] text-zinc-800">
                    SHARE
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {categoryData.map((category) => (
                    <div key={category.name}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="max-w-[180px] truncate text-[9px] text-zinc-500">
                          {category.name}
                        </span>

                        <span className="font-mono-tech text-[8px] text-zinc-600">
                          {category.share}%
                        </span>
                      </div>

                      <div className="mt-2 h-px w-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${category.share}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                          }}
                          className="h-px bg-emerald-400/60"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            SQL LINE
        ==================================================== */}

        <div className="mt-16 border-y border-white/[0.06] py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <Terminal className="h-3.5 w-3.5 shrink-0 text-emerald-400/60" />

              <code className="truncate font-mono-tech text-[8px] text-zinc-600 sm:text-[9px]">
                ROUND(SUM(revenue), 2) AS total_revenue WHERE status =
                'Delivered'
              </code>
            </div>

            <span className="shrink-0 font-mono-tech text-[8px] uppercase tracking-[0.16em] text-emerald-400/60">
              Aggregated
            </span>
          </div>
        </div>

        {/* ===================================================
            CLOSING DATA STATEMENT
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-end"
        >
          <div>
            <span className="font-mono-tech text-[8px] uppercase tracking-[0.25em] text-zinc-700">
              THE POINT
            </span>

            <h3 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl">
              Numbers become useful when they tell a clear story.
            </h3>
          </div>

          <div className="flex sm:justify-end">
            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                border-b
                border-white/[0.12]
                pb-2
                font-mono-tech
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-zinc-500
                transition-colors
                duration-300
                hover:border-emerald-400/40
                hover:text-emerald-300
              "
            >
              Explore the projects

              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
