export type Post = {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO
  tags: string[];
  body: string; // markdown
};

// Replace these with your own entries, or wire this file up to a CMS /
// filesystem of markdown files later — the shape is what matters.
export const posts: Post[] = [
  {
    slug: "starting-a-field-notebook",
    title: "Starting a field notebook",
    dek: "Why I decided to keep dated entries instead of polished posts.",
    date: "2026-08-12",
    tags: ["meta", "process"],
    body: `Most blogs are written backwards: an idea arrives, gets edited until
the mess is gone, and only then gets published. What's lost is the mess
itself — the part where the thinking actually happened.

This is an attempt to publish the notebook instead of the essay. Short,
dated, occasionally wrong. I'll fix things in public rather than waiting
until they're right.

If an entry turns out to matter, I'll come back and expand it. If it
doesn't, it just sits here as a record of what I was paying attention to
on a given day.`,
  },
  {
    slug: "on-slow-tools",
    title: "On slow tools",
    dek: "A short note on why friction is sometimes the feature.",
    date: "2026-08-05",
    tags: ["tools", "craft"],
    body: `Every tool I actually trust took longer to learn than it should have.
That's not a coincidence — the friction is what made me pay attention
long enough to understand what I was doing.

Fast tools optimize for output. Slow tools optimize for judgment. Most
days I want the fast tool. But the work I'm proud of came from the slow
one.`,
  },
  {
    slug: "a-week-of-mornings",
    title: "A week of mornings",
    dek: "Logging the first hour of the day, unedited, for seven days.",
    date: "2026-07-29",
    tags: ["journal"],
    body: `**Monday.** Up before the alarm. Wrote nothing, read for twenty
minutes, felt behind by 8am anyway.

**Tuesday.** Coffee first, notebook second. This is the order that works.

**Wednesday.** Skipped it. Note to self: skipping one day makes the next
one harder, not easier.

**Thursday.** Back to it. No profound insight — just showing up counts
for more than I give it credit for.

**Friday.** Short entry. Long week.`,
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatEntryNumber(date: string): string {
  // e.g. 2026-08-12 -> "12.08"
  const [, m, d] = date.split("-");
  return `${d}.${m}`;
}
