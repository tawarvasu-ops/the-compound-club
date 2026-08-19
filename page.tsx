import { getAllPosts } from "@/lib/posts";
import EntryRow from "@/components/EntryRow";

export default function HomePage() {
  const entries = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 md:px-10 pt-16 md:pt-24">
      <header className="mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-mist mb-4">
          Vol. 1 — since 2026
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-medium text-ink leading-tight">
          Fieldnotes
        </h1>
        <p className="font-body text-lg text-mist mt-4 max-w-prose">
          A running notebook on tools, craft, and the work of paying
          attention. Entries are dated, not polished.
        </p>
      </header>

      <ul>
        {entries.map((post) => (
          <EntryRow key={post.slug} post={post} />
        ))}
      </ul>
    </main>
  );
}
