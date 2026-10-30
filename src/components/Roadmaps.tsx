import config from '../portfolio.config';
import { linkProps, Reveal, Rich, sectionIndex } from '../lib';

/** Free open-source roadmaps, shown as a dark, high-contrast band so they stand out. */
export function Roadmaps() {
  const roadmaps = config.roadmaps;
  if (!roadmaps?.items.length) return null;
  const index = sectionIndex('roadmaps');

  return (
    <section id="roadmaps" className="bg-ink text-paper">
      <div className="section-pad py-24 md:py-32">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span>{index}</span>
          <span className="h-px w-8 bg-paper/20" />
          <span>Free roadmaps</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <h2 className="text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.045em]">
              <Rich text={roadmaps.title} />
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/70">{roadmaps.subtitle}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              {...linkProps('https://github.com/vnigam1985')}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Follow on GitHub
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {roadmaps.items.map((r, i) => (
            <Reveal key={r.href} delay={0.06 * (i % 2)}>
              <a
                {...linkProps(r.href)}
                className="group flex h-full flex-col rounded-3xl border border-paper/15 bg-paper/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] text-paper/50">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex items-center gap-1.5 rounded-full border border-paper/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-paper/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {r.audience}
                  </span>
                </div>
                <h3 className="mt-10 text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold leading-tight tracking-[-0.03em]">
                  {r.title}
                </h3>
                <p className="serif-accent mt-1 text-xl text-paper/60">{r.tagline}</p>
                <p className="mt-4 leading-relaxed text-paper/70">{r.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="rounded-full bg-paper/10 px-3 py-1.5 text-[12px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-accent">
                  Open the free roadmap on GitHub
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
