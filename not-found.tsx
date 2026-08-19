import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-10 pt-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-mist mb-4">
        Missing page
      </p>
      <h1 className="font-display text-4xl font-medium text-ink mb-4">
        No entry here.
      </h1>
      <p className="font-body text-mist mb-8">
        This date isn't in the notebook.
      </p>
      <Link href="/" className="ink-underline font-mono text-sm text-pine">
        ← Back to all entries
      </Link>
    </main>
  );
}
