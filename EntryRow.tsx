import Link from "next/link";
import { Post, formatEntryNumber } from "@/lib/posts";

export default function EntryRow({ post }: { post: Post }) {
  return (
    <li className="border-b border-line py-8 first:pt-0">
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
        <span className="font-mono text-sm text-mist shrink-0 w-14">
          {formatEntryNumber(post.date)}
        </span>
        <div className="flex-1">
          <Link href={`/posts/${post.slug}`} className="group">
            <h2 className="ink-underline font-display text-2xl md:text-3xl font-medium text-ink">
              {post.title}
            </h2>
          </Link>
          <p className="font-body text-mist mt-2 max-w-prose">{post.dek}</p>
          <div className="flex gap-3 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] uppercase tracking-wide text-pine
                           border border-line rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
